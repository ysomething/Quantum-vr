from __future__ import annotations

import json
import math
from datetime import datetime, timezone
from pathlib import Path

import numpy as np
import pandas as pd


ROOT = Path(__file__).resolve().parents[1]
WORKBOOK_NAME = "量子纠缠网页计数_CHSH拟合数据包.xlsx"
OUTPUT_DIR = ROOT / "public" / "data"
MODEL_PATH = OUTPUT_DIR / "chsh_fit_model.json"
REPORT_PATH = OUTPUT_DIR / "chsh_fit_report.json"

CHSH_TERMS = ["E00", "E01", "E10", "E11"]
CHSH_ANGLES = {
    "a": 0,
    "aPrime": 45,
    "b": 22.5,
    "bPrime": 67.5,
}

SEARCH_PATHS = [
    ROOT / "data" / WORKBOOK_NAME,
    ROOT / "public" / "data" / WORKBOOK_NAME,
    ROOT / WORKBOOK_NAME,
    ROOT.parent / WORKBOOK_NAME,
    Path.home() / "Downloads" / WORKBOOK_NAME,
    Path.cwd() / WORKBOOK_NAME,
]


def find_workbook() -> Path:
    for path in SEARCH_PATHS:
        if path.exists():
            return path
    searched = "\n".join(str(path) for path in SEARCH_PATHS)
    raise FileNotFoundError(
        "找不到 Excel 数据包。请放到：\n"
        f"{ROOT / 'data' / WORKBOOK_NAME}\n\n已查找：\n{searched}"
    )


def finite_number(value: object, default: float = 0.0) -> float:
    try:
        number = float(value)
        return number if math.isfinite(number) else default
    except (TypeError, ValueError):
        return default


def compute_e(row: pd.Series) -> float:
    total = sum(finite_number(row[key]) for key in ["nPP", "nPM", "nMP", "nMM"])
    if total <= 0:
        return 0.0
    return (
        finite_number(row["nPP"])
        + finite_number(row["nMM"])
        - finite_number(row["nPM"])
        - finite_number(row["nMP"])
    ) / total


def fit_harmonic(rows: pd.DataFrame, angle_mode: str) -> dict[str, float]:
    if angle_mode == "sum":
        x = np.deg2rad(rows["a"].to_numpy(float) + rows["b"].to_numpy(float))
    else:
        x = np.deg2rad(rows["a"].to_numpy(float) - rows["b"].to_numpy(float))
    y = rows["E_obs"].to_numpy(float)
    design = np.column_stack([np.cos(2 * x), np.sin(2 * x), np.ones_like(x)])
    beta_cos, beta_sin, offset = np.linalg.lstsq(design, y, rcond=None)[0]
    pred = design @ np.array([beta_cos, beta_sin, offset])
    rmse = float(np.sqrt(np.mean((pred - y) ** 2)))
    visibility = float(np.sqrt(beta_cos**2 + beta_sin**2))
    phase_deg = float(math.degrees(math.atan2(-beta_sin, beta_cos)))
    sign = -1 if beta_cos < 0 else 1
    return {
        "angleMode": angle_mode,
        "betaCos": float(beta_cos),
        "betaSin": float(beta_sin),
        "offset": float(offset),
        "visibility": visibility,
        "phaseDeg": phase_deg,
        "sign": sign,
        "rmseE": rmse,
    }


def fit_line(x_values: list[float], y_values: list[float]) -> tuple[float, float]:
    x = np.asarray(x_values, dtype=float)
    y = np.asarray(y_values, dtype=float)
    design = np.column_stack([np.ones_like(x), x])
    intercept, slope = np.linalg.lstsq(design, y, rcond=None)[0]
    return float(max(0.0, intercept)), float(max(0.0, slope))


def detector_gains(default_rows: pd.DataFrame, accidental: float) -> dict[str, float]:
    samples = {"pp": [], "pm": [], "mp": [], "mm": []}
    for _, row in default_rows.iterrows():
        e_value = finite_number(row["E_obs"])
        signal_total = max(1.0, finite_number(row["N_total"]) - accidental)
        background_each = accidental / 4
        expected = {
            "pp": signal_total * (1 + e_value) / 4 + background_each,
            "mm": signal_total * (1 + e_value) / 4 + background_each,
            "pm": signal_total * (1 - e_value) / 4 + background_each,
            "mp": signal_total * (1 - e_value) / 4 + background_each,
        }
        observed = {
            "pp": finite_number(row["nPP"]),
            "pm": finite_number(row["nPM"]),
            "mp": finite_number(row["nMP"]),
            "mm": finite_number(row["nMM"]),
        }
        for key in samples:
            if expected[key] > 0:
                samples[key].append(observed[key] / expected[key])
    raw = {key: float(np.mean(values)) if values else 1.0 for key, values in samples.items()}
    center = float(np.mean(list(raw.values()))) or 1.0
    return {key: float(value / center) for key, value in raw.items()}


def scenario_s(rows: pd.DataFrame) -> float:
    values = {str(row["term"]): finite_number(row["E_obs"]) for _, row in rows.iterrows()}
    return abs(values["E00"] - values["E01"] - values["E10"] - values["E11"])


def main() -> None:
    workbook_path = find_workbook()
    xls = pd.ExcelFile(workbook_path)
    if len(xls.sheet_names) < 7:
        raise ValueError("Excel 数据包缺少必要工作表。")

    raw_sheet = xls.sheet_names[2]
    chsh_sheet = xls.sheet_names[3]
    fit_sheet = xls.sheet_names[4]
    web_sheet = xls.sheet_names[5]
    curve_sheet = xls.sheet_names[6]

    raw_df = pd.read_excel(workbook_path, sheet_name=raw_sheet)
    chsh_df = pd.read_excel(workbook_path, sheet_name=chsh_sheet)
    fit_df = pd.read_excel(workbook_path, sheet_name=fit_sheet)
    web_raw = pd.read_excel(workbook_path, sheet_name=web_sheet)
    curve_df = pd.read_excel(workbook_path, sheet_name=curve_sheet)

    web_rows = web_raw.iloc[:, :16].copy()
    web_rows.columns = [
        "scenario_id",
        "label",
        "term",
        "a",
        "b",
        "E_model",
        "N_total",
        "nPP",
        "nPM",
        "nMP",
        "nMM",
        "singlesA",
        "singlesB",
        "accidental",
        "note",
        "source",
    ]
    web_rows = web_rows[web_rows["term"].isin(CHSH_TERMS)].copy()
    numeric_cols = ["a", "b", "E_model", "N_total", "nPP", "nPM", "nMP", "nMM", "singlesA", "singlesB", "accidental"]
    for col in numeric_cols:
        web_rows[col] = pd.to_numeric(web_rows[col], errors="coerce")
    web_rows["E_obs"] = web_rows.apply(compute_e, axis=1)

    fit_rows = fit_df.iloc[:, :9].copy()
    fit_rows.columns = ["scenario_id", "label", "source_type", "S", "sigmaS", "visibility", "totalPerSetting", "note", "source"]
    for col in ["S", "sigmaS", "visibility", "totalPerSetting"]:
        fit_rows[col] = pd.to_numeric(fit_rows[col], errors="coerce")

    default_rows = web_rows[web_rows["scenario_id"] == "web_default"].copy()
    if len(default_rows) != 4:
        raise ValueError("05网页数据 中 web_default 必须包含 E00/E01/E10/E11 四行。")

    sum_fit = fit_harmonic(default_rows, "sum")
    diff_fit = fit_harmonic(default_rows, "difference")
    harmonic = sum_fit if sum_fit["rmseE"] <= diff_fit["rmseE"] else diff_fit

    default_fit = fit_rows[fit_rows["scenario_id"] == "web_default"].iloc[0]
    baseline_visibility = finite_number(default_fit["visibility"], harmonic["visibility"])
    accidental = float(default_rows["accidental"].mean())
    total_default = float(default_rows["N_total"].mean())
    c0 = max(1.0, total_default - accidental)
    gains = detector_gains(default_rows, accidental)

    measured_scenarios = web_rows[web_rows["scenario_id"].isin(["web_default", "low_count_alignment", "high_rate_background"])]
    x_for_singles = [max(1.0, finite_number(row["N_total"]) - finite_number(row["accidental"])) for _, row in measured_scenarios.iterrows()]
    dark_a, eta_a = fit_line(x_for_singles, [finite_number(row["singlesA"]) for _, row in measured_scenarios.iterrows()])
    dark_b, eta_b = fit_line(x_for_singles, [finite_number(row["singlesB"]) for _, row in measured_scenarios.iterrows()])

    scenario_summary = {}
    for scenario_id, rows in web_rows.groupby("scenario_id", sort=False):
        fit_match = fit_rows[fit_rows["scenario_id"] == scenario_id]
        scenario_summary[scenario_id] = {
            "S_from_counts": float(scenario_s(rows)),
            "S_from_fit_sheet": finite_number(fit_match.iloc[0]["S"]) if not fit_match.empty else None,
            "visibility": finite_number(fit_match.iloc[0]["visibility"]) if not fit_match.empty else None,
            "totalPerSetting": finite_number(rows["N_total"].mean()),
            "meanSinglesA": finite_number(rows["singlesA"].mean()),
            "meanSinglesB": finite_number(rows["singlesB"].mean()),
        }

    predicted_default = []
    for _, row in default_rows.iterrows():
        angle = finite_number(row["a"]) + finite_number(row["b"]) if harmonic["angleMode"] == "sum" else finite_number(row["a"]) - finite_number(row["b"])
        angle_rad = math.radians(angle)
        unit = (
            harmonic["betaCos"] / max(harmonic["visibility"], 1e-9) * math.cos(2 * angle_rad)
            + harmonic["betaSin"] / max(harmonic["visibility"], 1e-9) * math.sin(2 * angle_rad)
        )
        predicted_default.append(harmonic["offset"] + baseline_visibility * unit)
    rmse_e = float(np.sqrt(np.mean((np.asarray(predicted_default) - default_rows["E_obs"].to_numpy(float)) ** 2)))

    count_errors = []
    for _, row in web_rows.iterrows():
        e_value = finite_number(row["E_obs"])
        total = finite_number(row["N_total"])
        background_each = finite_number(row["accidental"]) / 4
        signal_total = max(1.0, total - finite_number(row["accidental"]))
        expected_counts = [
            signal_total * (1 + e_value) / 4 + background_each,
            signal_total * (1 - e_value) / 4 + background_each,
            signal_total * (1 - e_value) / 4 + background_each,
            signal_total * (1 + e_value) / 4 + background_each,
        ]
        observed_counts = [finite_number(row[key]) for key in ["nPP", "nPM", "nMP", "nMM"]]
        count_errors.extend(np.asarray(expected_counts) - np.asarray(observed_counts))
    rmse_counts = float(np.sqrt(np.mean(np.square(count_errors))))

    model = {
        "model_version": "chsh_fit_v1",
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "source": "student_experiment_excel_plus_reference",
        "source_workbook": str(workbook_path.relative_to(ROOT)) if workbook_path.is_relative_to(ROOT) else str(workbook_path),
        "sheets_used": {
            "raw_counts": raw_sheet,
            "chsh_calculation": chsh_sheet,
            "fit_parameters": fit_sheet,
            "web_recommended_data": web_sheet,
            "angle_curve": curve_sheet,
        },
        "angles": CHSH_ANGLES,
        "fit": {
            "angleMode": harmonic["angleMode"],
            "visibility": baseline_visibility,
            "phaseDeg": harmonic["phaseDeg"],
            "offset": harmonic["offset"],
            "betaCosUnit": harmonic["betaCos"] / max(harmonic["visibility"], 1e-9),
            "betaSinUnit": harmonic["betaSin"] / max(harmonic["visibility"], 1e-9),
            "C0": c0,
            "accidental": accidental,
            "detectorGains": gains,
            "singles": {
                "darkA": dark_a,
                "darkB": dark_b,
                "etaA": eta_a,
                "etaB": eta_b,
            },
            "baselineInputs": {
                "pumpPower": 72,
                "alignment": 92,
                "filterBandwidth": 3,
                "coincidenceWindow": 5,
                "compensationStrength": 100,
                "noiseLevel": 2,
            },
            "response": {
                "pumpExponent": 1.05,
                "alignmentExponent": 1.8,
                "filterTransmissionSlope": 0.065,
                "filterPuritySlope": 0.026,
                "windowTauNs": 2.2,
                "windowAccidentalSlope": 0.085,
                "compensationOffVisibility": 0.52,
                "compensationMinTransmission": 0.58,
                "noiseVisibilityLoss": 0.0046,
                "noiseAccidentalScale": 0.035,
                "noiseSinglesScale": 9.0,
            },
        },
        "uncertainty": {
            "visibilityStd": float(np.nanstd(fit_rows["visibility"].dropna().to_numpy(float), ddof=1) if len(fit_rows["visibility"].dropna()) > 1 else 0.03),
            "SStd": finite_number(default_fit["sigmaS"], 0.04),
            "rmseE": rmse_e,
            "rmseCounts": rmse_counts,
        },
        "preset_inputs": {
            "measured_default": {
                "label": "实验实测初始态",
                "pumpPower": 72,
                "alignment": 92,
                "compensationEnabled": True,
                "compensationStrength": 100,
                "filterBandwidth": 3,
                "coincidenceWindow": 5,
                "noiseLevel": 2,
                "thetaA": 0,
                "thetaB": 22.5,
            },
            "compensation_off": {
                "label": "关闭补偿",
                "pumpPower": 72,
                "alignment": 88,
                "compensationEnabled": False,
                "compensationStrength": 30,
                "filterBandwidth": 3,
                "coincidenceWindow": 5,
                "noiseLevel": 8,
                "thetaA": 0,
                "thetaB": 22.5,
            },
            "more_background": {
                "label": "增大噪声",
                "pumpPower": 92,
                "alignment": 84,
                "compensationEnabled": True,
                "compensationStrength": 86,
                "filterBandwidth": 7,
                "coincidenceWindow": 10,
                "noiseLevel": 24,
                "thetaA": 0,
                "thetaB": 22.5,
            },
            "chsh_angles": {
                "label": "CHSH 角度",
                "pumpPower": 75,
                "alignment": 94,
                "compensationEnabled": True,
                "compensationStrength": 100,
                "filterBandwidth": 3,
                "coincidenceWindow": 5,
                "noiseLevel": 2,
                "thetaA": 0,
                "thetaB": 22.5,
            },
            "high_visibility_teaching": {
                "label": "高可见度教学态",
                "pumpPower": 82,
                "alignment": 97,
                "compensationEnabled": True,
                "compensationStrength": 100,
                "filterBandwidth": 2,
                "coincidenceWindow": 4,
                "noiseLevel": 0,
                "thetaA": 0,
                "thetaB": 22.5,
            },
        },
        "training_summary": {
            "S_from_excel": finite_number(default_fit["S"]),
            "S_from_default_counts": float(scenario_summary["web_default"]["S_from_counts"]),
            "S_from_fitted_model_default": float(abs(predicted_default[0] - predicted_default[1] - predicted_default[2] - predicted_default[3])),
            "rmse_E": rmse_e,
            "rmse_counts": rmse_counts,
            "scenario_summary": scenario_summary,
            "raw_rows": int(len(raw_df)),
            "chsh_rows": int(len(chsh_df)),
            "angle_curve_rows": int(len(curve_df)),
        },
    }

    report = {
        "report_version": "chsh_fit_report_v1",
        "generated_at": model["generated_at"],
        "workbook": model["source_workbook"],
        "sheets_used": model["sheets_used"],
        "fitted_parameters": [
            "visibility",
            "phaseDeg",
            "offset",
            "C0",
            "accidental",
            "detectorGains.pp/pm/mp/mm",
            "singles.darkA/darkB",
            "singles.etaA/etaB",
            "response pump/alignment/filter/window/noise coefficients",
        ],
        "training_data_S": {
            key: value["S_from_fit_sheet"] for key, value in scenario_summary.items()
        },
        "fitted_default_S": model["training_summary"]["S_from_fitted_model_default"],
        "rmse": {
            "E": model["training_summary"]["rmse_E"],
            "counts": model["training_summary"]["rmse_counts"],
        },
        "reference_scope": (
            "用户实测数据用于网页默认与低计数/高背景范围；文献和商用演示数据只用于教学参考，"
            "不作为本实验实测默认值。"
        ),
        "applicability": (
            "模型适用于课程演示中的近似连续调参：泵浦、对准、补偿、滤光片带宽、符合窗口、背景噪声"
            "在网页滑块范围内变化。它不是正式实验误差分析，也不替代原始计数表。"
        ),
        "notes": [
            "关联函数采用可解释谐波模型 E(thetaA, thetaB)=offset+V*(u*cos(2x)+v*sin(2x))。",
            "x 的 sum/difference 约定由最小 RMSE 自动选择。",
            "CHSH S 在网页端由四组角度的 E 值实时组合，不再使用固定场景卡片。",
        ],
    }

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    MODEL_PATH.write_text(json.dumps(model, ensure_ascii=False, indent=2), encoding="utf-8")
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {MODEL_PATH}")
    print(f"Wrote {REPORT_PATH}")
    print(json.dumps(model["training_summary"], ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
