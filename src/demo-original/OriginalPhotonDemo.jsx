import React, { useEffect, useMemo, useState } from "react";
import { DEFAULT_CHSH_FIT_MODEL, PRESET_ORDER, loadFitModel, predictCounts } from "./model/chshPredictor.js";

const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
const deg = (x) => (x * Math.PI) / 180;
const fmt = (x, n = 2) => Number(x).toFixed(n);

const STEPS = [
  {
    key: "pump",
    title: "1. 紫色泵浦光进入主 BBO",
    desc: "405 nm 左右的紫色泵浦光被透镜聚焦到主 BBO 晶体中心，提高非线性作用概率。真实实验中严禁直视泵浦光。",
  },
  {
    key: "spdc",
    title: "2. SPDC 产生一对下转换光子",
    desc: "一个高能泵浦光子以很小概率劈裂成两个低能光子，近似满足能量守恒与动量守恒：ωp = ωs + ωi，kp = ks + ki。",
  },
  {
    key: "cones",
    title: "3. 两个光锥交线处取出纠缠光子对",
    desc: "II 型 SPDC 中 o 光和 e 光分别落在两个相交光锥面上，实验选择交线方向的两路光子作为纠缠对。",
  },
  {
    key: "comp",
    title: "4. 半波片 + 辅 BBO 补偿走离",
    desc: "主 BBO 的双折射会造成横向空间走离和纵向时间走离。45° 半波片交换偏振，辅 BBO 把可区分路径信息擦除，恢复相干性。",
  },
  {
    key: "analyze",
    title: "5. 偏振片选择测量基",
    desc: "转动两路偏振片角度 θ₁、θ₂，只改变两光子之间的符合计数振荡；单路计数通常不随角度剧烈变化。",
  },
  {
    key: "coincidence",
    title: "6. 单光子探测 + 符合计数",
    desc: "两路 APD 把光子转为电脉冲。符合计数器只在时间窗口 τ 内同时到达的脉冲记为一对。窗口太小会漏计，太大则偶然符合增多。",
  },
];

function Pill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-sm transition border ${
        active
          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
          : "bg-white text-slate-700 border-slate-200 hover:border-slate-400"
      }`}
    >
      {children}
    </button>
  );
}

function Slider({ label, min, max, step = 1, value, onChange, suffix = "" }) {
  return (
    <label className="block rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-sm tabular-nums text-slate-800">
          {value}{suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-slate-900"
      />
    </label>
  );
}

function ComponentLabel({ x, y, children, active }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x="-42"
        y="-18"
        width="84"
        height="36"
        rx="12"
        className={active ? "fill-amber-100 stroke-amber-500" : "fill-white stroke-slate-300"}
        strokeWidth="1.5"
      />
      <text textAnchor="middle" dominantBaseline="middle" className="fill-slate-700 text-[13px] font-semibold">
        {children}
      </text>
    </g>
  );
}

function PhotonLabSvg({ step, pumpPower, alignment, compensated, theta1, theta2, filterBw, visibility }) {
  const active = (k) => step === k;
  const opacity = clamp(0.2 + pumpPower / 120, 0.25, 1);
  const alignShift = (100 - alignment) * 0.28;
  const compOpacity = compensated ? 1 : 0.35;

  return (
    <div className="original-photon-visual overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
      <svg viewBox="0 0 1050 520" className="original-photon-svg h-[520px] w-full">
        <defs>
          <linearGradient id="pumpGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#e879f9" />
          </linearGradient>
          <linearGradient id="pairGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#a7f3d0" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path id="pumpPath" d="M90 260 L270 260" />
          <path id="upperPath" d={`M300 260 C390 ${150 + alignShift}, 450 120, 530 122 L900 122`} />
          <path id="lowerPath" d={`M300 260 C390 ${370 - alignShift}, 450 400, 530 398 L900 398`} />
        </defs>

        <rect width="1050" height="520" fill="#020617" />
        <g opacity="0.45">
          {Array.from({ length: 22 }).map((_, i) => (
            <circle key={i} cx={(i * 97) % 1050} cy={(i * 71) % 520} r="1.1" fill="#94a3b8" />
          ))}
        </g>

        <text x="34" y="42" className="fill-white text-[24px] font-bold">双光子纠缠实验光路动画</text>
        <text x="34" y="72" className="fill-slate-300 text-[14px]">从泵浦光 → BBO → 光锥交线 → 补偿 → 偏振分析 → 符合计数</text>

        {/* Table rails */}
        <line x1="40" y1="470" x2="1010" y2="470" stroke="#334155" strokeWidth="2" strokeDasharray="6 10" />

        {/* Pump source */}
        <g transform="translate(54, 220)">
          <rect width="72" height="80" rx="16" fill="#111827" stroke="#64748b" strokeWidth="2" />
          <circle cx="55" cy="40" r="13" fill="#a78bfa" filter="url(#glow)" opacity={opacity} />
          <text x="36" y="104" textAnchor="middle" className="fill-slate-200 text-[13px] font-semibold">405 nm 激光</text>
        </g>

        {/* Lens */}
        <g transform="translate(180, 260)">
          <path d="M0 -54 Q26 0 0 54 Q-26 0 0 -54" fill="#dbeafe" opacity="0.82" stroke="#93c5fd" strokeWidth="2" />
          <text y="78" textAnchor="middle" className="fill-slate-200 text-[13px]">聚焦透镜</text>
        </g>

        {/* Pump beam */}
        <path d="M90 260 L270 260" stroke="url(#pumpGrad)" strokeWidth={4 + pumpPower / 35} opacity={opacity} filter="url(#glow)" />
        {Array.from({ length: 4 }).map((_, i) => (
          <circle key={`p-${i}`} r="5" fill="#c084fc" filter="url(#glow)">
            <animateMotion dur={`${1.8 - pumpPower / 170}s`} repeatCount="indefinite" begin={`${i * 0.38}s`}>
              <mpath href="#pumpPath" />
            </animateMotion>
          </circle>
        ))}

        {/* Main BBO */}
        <g transform="translate(285, 220)">
          <polygon points="0,0 58,20 58,100 0,80" fill="#fbbf24" stroke="#fde68a" strokeWidth="2" />
          <line x1="8" y1="14" x2="48" y2="88" stroke="#7c2d12" strokeWidth="3" />
          <text x="30" y="124" textAnchor="middle" className="fill-slate-200 text-[13px] font-semibold">主 BBO</text>
        </g>
        {active("pump") && <circle cx="315" cy="260" r="48" fill="none" stroke="#fbbf24" strokeWidth="3" strokeDasharray="7 7" />}

        {/* SPDC cones */}
        <g opacity={active("spdc") || active("cones") ? 0.75 : 0.38}>
          <path d={`M314 260 C410 135, 520 94, 635 116`} fill="none" stroke="#38bdf8" strokeWidth="44" strokeOpacity="0.12" />
          <path d={`M314 260 C410 385, 520 426, 635 404`} fill="none" stroke="#38bdf8" strokeWidth="44" strokeOpacity="0.12" />
          <ellipse cx="492" cy="139" rx="72" ry="26" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="8 8" opacity="0.75" />
          <ellipse cx="492" cy="381" rx="72" ry="26" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="8 8" opacity="0.75" />
          <text x="470" y="91" className="fill-cyan-200 text-[13px]">o/e 光锥交线方向</text>
        </g>

        {/* Entangled beam paths */}
        <path d={`M300 260 C390 ${150 + alignShift}, 450 120, 530 122 L900 122`} stroke="url(#pairGrad)" strokeWidth="4" strokeDasharray={alignment < 65 ? "7 9" : ""} opacity={0.45 + alignment / 180} filter="url(#glow)" fill="none" />
        <path d={`M300 260 C390 ${370 - alignShift}, 450 400, 530 398 L900 398`} stroke="url(#pairGrad)" strokeWidth="4" strokeDasharray={alignment < 65 ? "7 9" : ""} opacity={0.45 + alignment / 180} filter="url(#glow)" fill="none" />
        {Array.from({ length: 5 }).map((_, i) => (
          <React.Fragment key={`pair-${i}`}>
            <circle r="4.8" fill="#67e8f9" filter="url(#glow)" opacity={opacity}>
              <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.38}s`}>
                <mpath href="#upperPath" />
              </animateMotion>
            </circle>
            <circle r="4.8" fill="#86efac" filter="url(#glow)" opacity={opacity}>
              <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${i * 0.38}s`}>
                <mpath href="#lowerPath" />
              </animateMotion>
            </circle>
          </React.Fragment>
        ))}

        {/* Mirrors */}
        <g transform="translate(536,122) rotate(-38)">
          <rect x="-9" y="-34" width="18" height="68" rx="3" fill="#cbd5e1" stroke="#f8fafc" />
        </g>
        <g transform="translate(536,398) rotate(38)">
          <rect x="-9" y="-34" width="18" height="68" rx="3" fill="#cbd5e1" stroke="#f8fafc" />
        </g>
        <text x="530" y="92" textAnchor="middle" className="fill-slate-200 text-[13px]">反射镜</text>
        <text x="530" y="432" textAnchor="middle" className="fill-slate-200 text-[13px]">反射镜</text>

        {/* Upper channel components */}
        <ComponentLabel x={625} y={122} active={active("comp")}>HWP 45°</ComponentLabel>
        <ComponentLabel x={720} y={122} active={active("comp")}>辅 BBO</ComponentLabel>
        <g opacity={compOpacity}>{compensated ? null : <text x="668" y="84" className="fill-rose-300 text-[13px] font-semibold">未补偿：纠缠度降低</text>}</g>
        <g transform="translate(815,122)">
          <rect x="-27" y="-27" width="54" height="54" rx="14" fill={active("analyze") ? "#fef3c7" : "#ffffff"} stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="0" y1="-23" x2="0" y2="23" stroke="#92400e" strokeWidth="3" transform={`rotate(${theta1})`} />
          <text y="48" textAnchor="middle" className="fill-slate-200 text-[13px] font-semibold">P₁={theta1}°</text>
        </g>
        <ComponentLabel x={890} y={122} active={active("coincidence")}>F + 光纤</ComponentLabel>

        {/* Lower channel components */}
        <ComponentLabel x={625} y={398} active={active("comp")}>HWP 45°</ComponentLabel>
        <ComponentLabel x={720} y={398} active={active("comp")}>辅 BBO</ComponentLabel>
        <g transform="translate(815,398)">
          <rect x="-27" y="-27" width="54" height="54" rx="14" fill={active("analyze") ? "#fef3c7" : "#ffffff"} stroke="#f59e0b" strokeWidth="1.5" />
          <line x1="0" y1="-23" x2="0" y2="23" stroke="#92400e" strokeWidth="3" transform={`rotate(${theta2})`} />
          <text y="48" textAnchor="middle" className="fill-slate-200 text-[13px] font-semibold">P₂={theta2}°</text>
        </g>
        <ComponentLabel x={890} y={398} active={active("coincidence")}>F + 光纤</ComponentLabel>

        {/* Detectors and coincidence */}
        <g transform="translate(958,100)">
          <rect width="58" height="46" rx="12" fill="#0f172a" stroke="#67e8f9" strokeWidth="2" />
          <circle cx="18" cy="23" r="6" fill="#67e8f9" filter="url(#glow)" />
          <text x="29" y="68" textAnchor="middle" className="fill-slate-200 text-[13px]">APD1</text>
        </g>
        <g transform="translate(958,376)">
          <rect width="58" height="46" rx="12" fill="#0f172a" stroke="#86efac" strokeWidth="2" />
          <circle cx="18" cy="23" r="6" fill="#86efac" filter="url(#glow)" />
          <text x="29" y="68" textAnchor="middle" className="fill-slate-200 text-[13px]">APD2</text>
        </g>
        <path d="M988 146 C1030 190, 1030 330, 988 376" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5 8" fill="none" opacity="0.8" />
        <g transform="translate(865,232)">
          <rect width="145" height="70" rx="18" fill={active("coincidence") ? "#ecfeff" : "#f8fafc"} stroke="#67e8f9" strokeWidth="2" />
          <text x="72" y="28" textAnchor="middle" className="fill-slate-800 text-[15px] font-bold">符合计数器</text>
          <text x="72" y="52" textAnchor="middle" className="fill-slate-600 text-[12px]">τ 窗口判断同一对</text>
        </g>

        <g transform="translate(40,410)">
          <rect width="280" height="46" rx="16" fill="#0f172a" stroke="#334155" />
          <text x="18" y="29" className="fill-slate-200 text-[14px]">滤光片带宽：{filterBw} nm · 可见化演示非真实比例</text>
        </g>

        <g transform="translate(370,410)">
          <rect width="285" height="46" rx="16" fill="#0f172a" stroke="#334155" />
          <text x="18" y="29" className="fill-slate-200 text-[14px]">当前可见度 V≈{fmt(visibility, 2)} · {visibility > 0.71 ? "可破坏 CHSH 上界" : "难以破坏 CHSH 上界"}</text>
        </g>
      </svg>
    </div>
  );
}

function MiniChart({ theta1, theta2, visibility }) {
  const points = useMemo(() => {
    const arr = [];
    for (let t = 0; t <= 180; t += 4) {
      const y = 0.5 * (1 - visibility * Math.cos(2 * deg(theta1 + t)));
      arr.push([t, y]);
    }
    return arr;
  }, [theta1, visibility]);
  const path = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${20 + (x / 180) * 280} ${150 - y * 110}`)
    .join(" ");
  const currentY = 0.5 * (1 - visibility * Math.cos(2 * deg(theta1 + theta2)));
  const cx = 20 + (theta2 / 180) * 280;
  const cy = 150 - currentY * 110;
  return (
    <svg viewBox="0 0 330 180" className="h-44 w-full rounded-2xl bg-white">
      <line x1="20" y1="150" x2="305" y2="150" stroke="#cbd5e1" />
      <line x1="20" y1="38" x2="20" y2="150" stroke="#cbd5e1" />
      <text x="20" y="170" className="fill-slate-500 text-[11px]">0°</text>
      <text x="287" y="170" className="fill-slate-500 text-[11px]">180°</text>
      <text x="34" y="28" className="fill-slate-700 text-[12px] font-semibold">转动 P₂ 时的符合计数振荡</text>
      <path d={path} fill="none" stroke="#0f172a" strokeWidth="3" />
      <circle cx={cx} cy={cy} r="6" fill="#f97316" />
      <line x1={cx} y1="150" x2={cx} y2={cy} stroke="#f97316" strokeDasharray="4 4" />
    </svg>
  );
}

export default function OriginalPhotonDemo() {
  const [step, setStep] = useState("pump");
  const [fitModel, setFitModel] = useState(DEFAULT_CHSH_FIT_MODEL);
  const [modelStatus, setModelStatus] = useState("使用内置拟合模型");
  const [pumpPower, setPumpPower] = useState(72);
  const [alignment, setAlignment] = useState(92);
  const [compensated, setCompensated] = useState(true);
  const [compensationStrength, setCompensationStrength] = useState(100);
  const [theta1, setTheta1] = useState(0);
  const [theta2, setTheta2] = useState(22.5);
  const [filterBw, setFilterBw] = useState(3);
  const [windowNs, setWindowNs] = useState(5);
  const [noiseLevel, setNoiseLevel] = useState(2);
  const [showFluctuation, setShowFluctuation] = useState(true);
  const [fluctuationTick, setFluctuationTick] = useState(0);
  const thetaAPrime = (theta1 + 45) % 180;
  const thetaBPrime = (theta2 + 45) % 180;

  useEffect(() => {
    let cancelled = false;
    loadFitModel()
      .then(({ model, fromNetwork }) => {
        if (cancelled) return;
        setFitModel(model);
        setModelStatus(fromNetwork ? "已加载 Excel 拟合模型" : "使用内置拟合模型");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!showFluctuation) return undefined;
    const id = window.setInterval(() => setFluctuationTick((value) => value + 1), 1200);
    return () => window.clearInterval(id);
  }, [showFluctuation]);

  const prediction = useMemo(() => predictCounts({
    pumpPower,
    thetaA: theta1,
    thetaB: theta2,
    thetaAForS: theta1,
    thetaAPrime,
    thetaBForS: theta2,
    thetaBPrime,
    compensationEnabled: compensated,
    compensationStrength,
    filterBandwidth: filterBw,
    coincidenceWindow: windowNs,
    noiseLevel,
    alignment,
    fluctuationEnabled: showFluctuation,
    fluctuationSeed: fluctuationTick,
  }, fitModel), [
    alignment,
    compensated,
    compensationStrength,
    filterBw,
    fitModel,
    fluctuationTick,
    noiseLevel,
    pumpPower,
    showFluctuation,
    theta1,
    theta2,
    thetaAPrime,
    thetaBPrime,
    windowNs,
  ]);

  const current = STEPS.find((s) => s.key === step) ?? STEPS[0];

  const applyPreset = (id) => {
    const preset = fitModel.preset_inputs?.[id] ?? DEFAULT_CHSH_FIT_MODEL.preset_inputs[id];
    if (!preset) return;
    setPumpPower(preset.pumpPower);
    setAlignment(preset.alignment);
    setCompensated(preset.compensationEnabled);
    setCompensationStrength(preset.compensationStrength);
    setFilterBw(preset.filterBandwidth);
    setWindowNs(preset.coincidenceWindow);
    setNoiseLevel(preset.noiseLevel);
    setTheta1(preset.thetaA);
    setTheta2(preset.thetaB);
    setStep(id === "compensation_off" ? "comp" : id === "more_background" ? "coincidence" : "analyze");
  };

  return (
    <div className="original-photon-demo min-h-screen bg-slate-100 p-6 text-slate-900">
      <style>{`
        input[type="range"] { cursor: pointer; }
      `}</style>
      <div className="original-photon-inner mx-auto max-w-7xl space-y-6">
        <header className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 ring-1 ring-indigo-100">
              量子纠缠微视频 · 可交互仪器演示稿
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">双光子纠缠实验如何运作？</h1>
            <p className="mt-2 text-sm font-medium text-slate-500">量子纠缠微视频交互演示</p>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
              这个网页把真实仪器拆成六个动画环节：紫色泵浦光、BBO 中的自发参量下转换、光锥交线取光、走离补偿、偏振分析、单光子符合测量。本页计数由真实实验数据拟合模型生成，滑块改变的是模型输入参数，因此 S 和符合计数会连续变化。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            {PRESET_ORDER.map((id, index) => {
              const preset = fitModel.preset_inputs?.[id] ?? DEFAULT_CHSH_FIT_MODEL.preset_inputs[id];
              return (
                <button
                  key={id}
                  onClick={() => applyPreset(id)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                    index === PRESET_ORDER.length - 1
                      ? "col-span-2 bg-amber-50 text-amber-800 hover:bg-amber-100"
                      : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span className="block">{preset.label}</span>
                  <span className="mt-1 block text-xs font-medium text-slate-500">快速设置滑块参数</span>
                </button>
              );
            })}
          </div>
        </header>

        <section className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="mb-4 flex flex-wrap gap-2">
            {STEPS.map((s) => (
              <Pill key={s.key} active={step === s.key} onClick={() => setStep(s.key)}>
                {s.title.split(". ")[0]}
              </Pill>
            ))}
          </div>
          <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
            <PhotonLabSvg
              step={step}
              pumpPower={pumpPower}
              alignment={alignment}
              compensated={compensated}
              theta1={theta1}
              theta2={theta2}
              filterBw={filterBw}
              visibility={prediction.visibility}
            />
            <aside className="space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-lg font-bold text-slate-900">{current.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{current.desc}</p>
                <p className="mt-3 text-xs font-semibold text-indigo-700">{modelStatus}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-900 p-4 text-white">
                  <div className="text-xs text-slate-300">单路计数 APD1</div>
                  <div className="mt-1 text-2xl font-bold tabular-nums">{prediction.singlesA}</div>
                  <div className="text-xs text-slate-400">counts/s</div>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4 text-white">
                  <div className="text-xs text-slate-300">单路计数 APD2</div>
                  <div className="mt-1 text-2xl font-bold tabular-nums">{prediction.singlesB}</div>
                  <div className="text-xs text-slate-400">counts/s</div>
                </div>
                <div className="rounded-2xl bg-cyan-50 p-4 text-cyan-900 ring-1 ring-cyan-100">
                  <div className="text-xs text-cyan-700">符合计数</div>
                  <div className="mt-1 text-2xl font-bold tabular-nums">{prediction.coincidenceCurrent}</div>
                  <div className="text-xs text-cyan-700">当前 θ₁/θ₂</div>
                </div>
                <div className="rounded-2xl bg-violet-400/10 p-4 text-slate-900 ring-1 ring-violet-400/25">
                  <div className="text-xs text-slate-600">E(θ₁, θ₂)</div>
                  <div className="mt-1 text-2xl font-bold tabular-nums">{fmt(prediction.ECurrent, 3)}</div>
                  <div className="text-xs text-slate-600">实时关联函数</div>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4 text-amber-900 ring-1 ring-amber-100">
                  <div className="text-xs text-amber-700">CHSH |S|</div>
                  <div className="mt-1 text-2xl font-bold tabular-nums">{fmt(prediction.chsh.S, 2)}</div>
                  <div className="text-xs text-amber-700">{prediction.chsh.violated ? "违反经典上界 2" : "未明显违反"} · σ={fmt(prediction.chsh.SStd, 3)}</div>
                  <div className="mt-1 text-[11px] text-amber-700">a′/b′ 由当前角度 +45° 派生</div>
                </div>
                <div className="rounded-2xl bg-emerald-400/10 p-4 text-slate-900 ring-1 ring-emerald-400/25">
                  <div className="text-xs text-slate-600">可见度 / 偶然符合</div>
                  <div className="mt-1 text-2xl font-bold tabular-nums">{fmt(prediction.visibility, 2)}</div>
                  <div className="text-xs text-slate-600">acc≈{fmt(prediction.accidental, 1)}</div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">拟合模型实时预测</div>
                    <h3 className="mt-1 text-base font-bold text-slate-900">四类符合计数与 CHSH 四项 E</h3>
                  </div>
                  <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tabular-nums text-slate-700">
                    V={fmt(prediction.visibility, 3)}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">
                    <div className="text-[11px] text-slate-500">N++</div>
                    <div className="font-bold tabular-nums text-slate-900">{prediction.counts.pp}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">
                    <div className="text-[11px] text-slate-500">N+-</div>
                    <div className="font-bold tabular-nums text-slate-900">{prediction.counts.pm}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">
                    <div className="text-[11px] text-slate-500">N-+</div>
                    <div className="font-bold tabular-nums text-slate-900">{prediction.counts.mp}</div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">
                    <div className="text-[11px] text-slate-500">N--</div>
                    <div className="font-bold tabular-nums text-slate-900">{prediction.counts.mm}</div>
                  </div>
                </div>
                <p className="mt-3 rounded-2xl bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-500 ring-1 ring-slate-100">
                  CHSH 角度：a={fmt(theta1, 1)}°，a′={fmt(thetaAPrime, 1)}°，b={fmt(theta2, 1)}°，b′={fmt(thetaBPrime, 1)}°
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">E(a,b) = {fmt(prediction.chsh.Eab, 3)}</div>
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">E(a,b′) = {fmt(prediction.chsh.EabPrime, 3)}</div>
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">E(a′,b) = {fmt(prediction.chsh.EaPrimeb, 3)}</div>
                  <div className="rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-100">E(a′,b′) = {fmt(prediction.chsh.EaPrimebPrime, 3)}</div>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">{prediction.note}</p>
              </div>
              <MiniChart theta1={theta1} theta2={theta2} visibility={prediction.visibility} />
            </aside>
          </div>
        </section>

        <section className="grid gap-4">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Slider label="泵浦光功率" min={5} max={100} value={pumpPower} onChange={setPumpPower} suffix="%" />
              <Slider label="光路对准程度" min={20} max={100} value={alignment} onChange={setAlignment} suffix="%" />
              <Slider label="滤光片带宽" min={1} max={12} value={filterBw} onChange={setFilterBw} suffix=" nm" />
              <Slider label="符合时间窗口 τ" min={0.5} max={20} step={0.5} value={windowNs} onChange={setWindowNs} suffix=" ns" />
              <Slider label="偏振片 P₁ 角度 θ₁" min={0} max={180} step={0.5} value={theta1} onChange={setTheta1} suffix="°" />
              <Slider label="偏振片 P₂ 角度 θ₂" min={0} max={180} step={0.5} value={theta2} onChange={setTheta2} suffix="°" />
              <Slider label="补偿强度" min={0} max={100} value={compensationStrength} onChange={setCompensationStrength} suffix="%" />
              <Slider label="背景噪声" min={0} max={40} value={noiseLevel} onChange={setNoiseLevel} suffix="%" />
            </div>
            <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <span>
                <span className="block text-sm font-semibold text-slate-800">半波片 + 辅 BBO 走离补偿</span>
                <span className="text-sm text-slate-500">关闭后，两路光子携带可区分路径信息，可见度明显下降。</span>
              </span>
              <input type="checkbox" checked={compensated} onChange={(e) => setCompensated(e.target.checked)} className="h-6 w-6 accent-slate-900" />
            </label>
            <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <span>
                <span className="block text-sm font-semibold text-slate-800">显示统计涨落</span>
                <span className="text-sm text-slate-500">开启后，APD 与符合计数会围绕拟合模型均值轻微跳动，S 值保持平滑估计。</span>
              </span>
              <input type="checkbox" checked={showFluctuation} onChange={(e) => setShowFluctuation(e.target.checked)} className="h-6 w-6 accent-slate-900" />
            </label>
          </div>
        </section>

        <footer className="border-t border-slate-200 px-2 pb-2 pt-5 text-center text-xs leading-6 text-slate-500 sm:text-sm">
          <p className="font-medium text-slate-600">量子纠缠微视频交互演示</p>
          <p>双光子量子纠缠实验交互演示网站</p>
          <p>仅用于课程展示、物理实验微视频制作与非商业教学交流。</p>
        </footer>
      </div>
    </div>
  );
}
