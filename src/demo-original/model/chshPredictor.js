const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const deg = (value) => (value * Math.PI) / 180;
const safeBaseUrl = () => import.meta.env?.BASE_URL ?? "/";

export const FIT_MODEL_PATH = "data/chsh_fit_model.json";

export const DEFAULT_CHSH_FIT_MODEL = {
  model_version: "chsh_fit_v1",
  source: "student_experiment_excel_plus_reference",
  angles: { a: 0, aPrime: 45, b: 22.5, bPrime: 67.5 },
  fit: {
    angleMode: "sum",
    visibility: 0.8585001969954783,
    phaseDeg: 180,
    offset: 0,
    betaCosUnit: -1,
    betaSinUnit: 0,
    C0: 652.1,
    accidental: 7.9,
    detectorGains: {
      pp: 1.00569338283468,
      pm: 0.9943066171653199,
      mp: 0.9943066171653199,
      mm: 1.00569338283468,
    },
    singles: {
      darkA: 0.594988140188941,
      darkB: 0,
      etaA: 8.093075459454642,
      etaB: 8.705131972506853,
    },
    baselineInputs: {
      pumpPower: 72,
      alignment: 92,
      filterBandwidth: 3,
      coincidenceWindow: 5,
      compensationStrength: 100,
      noiseLevel: 2,
    },
    response: {
      pumpExponent: 1.05,
      alignmentExponent: 1.8,
      filterTransmissionSlope: 0.065,
      filterPuritySlope: 0.026,
      windowTauNs: 2.2,
      windowAccidentalSlope: 0.085,
      compensationOffVisibility: 0.52,
      compensationMinTransmission: 0.58,
      noiseVisibilityLoss: 0.0046,
      noiseAccidentalScale: 0.035,
      noiseSinglesScale: 9,
    },
  },
  uncertainty: {
    visibilityStd: 0.1026687012878801,
    SStd: 0.013518631351179849,
    rmseE: 0.000990704884883592,
    rmseCounts: 1.4871137219235344,
  },
  preset_inputs: {
    measured_default: {
      label: "实验实测初始态",
      pumpPower: 72,
      alignment: 92,
      compensationEnabled: true,
      compensationStrength: 100,
      filterBandwidth: 3,
      coincidenceWindow: 5,
      noiseLevel: 2,
      thetaA: 0,
      thetaB: 22.5,
    },
    compensation_off: {
      label: "关闭补偿",
      pumpPower: 72,
      alignment: 88,
      compensationEnabled: false,
      compensationStrength: 30,
      filterBandwidth: 3,
      coincidenceWindow: 5,
      noiseLevel: 8,
      thetaA: 0,
      thetaB: 22.5,
    },
    more_background: {
      label: "增大噪声",
      pumpPower: 92,
      alignment: 84,
      compensationEnabled: true,
      compensationStrength: 86,
      filterBandwidth: 7,
      coincidenceWindow: 10,
      noiseLevel: 24,
      thetaA: 0,
      thetaB: 22.5,
    },
    chsh_angles: {
      label: "CHSH 角度",
      pumpPower: 75,
      alignment: 94,
      compensationEnabled: true,
      compensationStrength: 100,
      filterBandwidth: 3,
      coincidenceWindow: 5,
      noiseLevel: 2,
      thetaA: 0,
      thetaB: 22.5,
    },
    high_visibility_teaching: {
      label: "高可见度教学态",
      pumpPower: 82,
      alignment: 97,
      compensationEnabled: true,
      compensationStrength: 100,
      filterBandwidth: 2,
      coincidenceWindow: 4,
      noiseLevel: 0,
      thetaA: 0,
      thetaB: 22.5,
    },
  },
};

export const PRESET_ORDER = [
  "measured_default",
  "compensation_off",
  "more_background",
  "chsh_angles",
  "high_visibility_teaching",
];

export function fitModelUrl(baseUrl = safeBaseUrl()) {
  return `${baseUrl}${FIT_MODEL_PATH}`;
}

export async function loadFitModel({ baseUrl = safeBaseUrl(), signal } = {}) {
  try {
    const response = await fetch(fitModelUrl(baseUrl), { cache: "no-cache", signal });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const model = await response.json();
    return { model, fromNetwork: true, source: fitModelUrl(baseUrl), error: null };
  } catch (error) {
    return {
      model: DEFAULT_CHSH_FIT_MODEL,
      fromNetwork: false,
      source: "embedded-default",
      error,
    };
  }
}

function hashNumber(value) {
  const text = String(value);
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 4294967295;
}

function smoothNoise(seed) {
  let total = 0;
  for (let i = 0; i < 6; i += 1) total += hashNumber(`${seed}:${i}`);
  return total - 3;
}

function displayCount(mean, seed, enabled) {
  if (!enabled) return Math.max(0, Math.round(mean));
  const sigma = Math.sqrt(Math.max(1, mean)) * 0.22;
  return Math.max(0, Math.round(mean + smoothNoise(seed) * sigma));
}

function fitCorrelation(thetaA, thetaB, visibility, fit) {
  const angle = fit.angleMode === "difference" ? thetaA - thetaB : thetaA + thetaB;
  const x = deg(angle);
  const unit = fit.betaCosUnit * Math.cos(2 * x) + fit.betaSinUnit * Math.sin(2 * x);
  return clamp((fit.offset ?? 0) + visibility * unit, -0.98, 0.98);
}

function currentVisibility(params, model) {
  const fit = model.fit;
  const base = fit.baselineInputs;
  const response = fit.response;
  const alignmentRatio = clamp((params.alignment ?? base.alignment) / base.alignment, 0.25, 1.35);
  const alignmentPurity = clamp(Math.pow(alignmentRatio, 0.72), 0.45, 1.12);
  const filterDelta = (params.filterBandwidth ?? base.filterBandwidth) - base.filterBandwidth;
  const filterPurity = clamp(1 - Math.max(0, filterDelta) * response.filterPuritySlope + Math.max(0, -filterDelta) * 0.014, 0.58, 1.08);
  const windowDelta = Math.max(0, (params.coincidenceWindow ?? base.coincidenceWindow) - base.coincidenceWindow);
  const windowPurity = 1 / (1 + windowDelta * response.windowAccidentalSlope * 0.34);
  const strength = clamp(params.compensationStrength ?? base.compensationStrength, 0, 100) / 100;
  const compensationPurity = params.compensationEnabled
    ? clamp(0.68 + 0.32 * strength, 0.68, 1.04)
    : clamp(response.compensationOffVisibility * (0.55 + 0.45 * strength), 0.22, 0.72);
  const noiseExcess = Math.max(0, (params.noiseLevel ?? base.noiseLevel) - base.noiseLevel);
  const noisePurity = 1 / (1 + noiseExcess * response.noiseVisibilityLoss * 1.85);
  return clamp(fit.visibility * alignmentPurity * filterPurity * windowPurity * compensationPurity * noisePurity, 0.04, 0.985);
}

function countScale(params, model) {
  const fit = model.fit;
  const base = fit.baselineInputs;
  const response = fit.response;
  const pump = clamp(params.pumpPower ?? base.pumpPower, 1, 120);
  const alignment = clamp(params.alignment ?? base.alignment, 1, 120);
  const filter = clamp(params.filterBandwidth ?? base.filterBandwidth, 0.5, 16);
  const windowNs = clamp(params.coincidenceWindow ?? base.coincidenceWindow, 0.2, 24);
  const strength = clamp(params.compensationStrength ?? base.compensationStrength, 0, 100) / 100;
  const pumpFactor = Math.pow(pump / base.pumpPower, response.pumpExponent);
  const alignmentFactor = Math.pow(alignment / base.alignment, response.alignmentExponent);
  const filterFactor = clamp(1 + (filter - base.filterBandwidth) * response.filterTransmissionSlope, 0.45, 1.75);
  const windowEfficiency = 1 - Math.exp(-Math.pow(windowNs / response.windowTauNs, 2));
  const baseWindowEfficiency = 1 - Math.exp(-Math.pow(base.coincidenceWindow / response.windowTauNs, 2));
  const windowFactor = clamp(windowEfficiency / baseWindowEfficiency, 0.18, 1.08);
  const compensationTransmission = params.compensationEnabled
    ? clamp(0.72 + 0.28 * strength, 0.72, 1.05)
    : clamp(response.compensationMinTransmission * (0.55 + 0.45 * strength), 0.22, 0.66);
  return pumpFactor * alignmentFactor * filterFactor * windowFactor * compensationTransmission;
}

function meanCounts(total, eValue, accidental, gains) {
  const signalTotal = Math.max(0, total - accidental);
  const backgroundEach = accidental / 4;
  const raw = {
    pp: signalTotal * (1 + eValue) / 4 + backgroundEach,
    mm: signalTotal * (1 + eValue) / 4 + backgroundEach,
    pm: signalTotal * (1 - eValue) / 4 + backgroundEach,
    mp: signalTotal * (1 - eValue) / 4 + backgroundEach,
  };
  const gained = {
    pp: raw.pp * (gains.pp ?? 1),
    mm: raw.mm * (gains.mm ?? 1),
    pm: raw.pm * (gains.pm ?? 1),
    mp: raw.mp * (gains.mp ?? 1),
  };
  const gainedTotal = gained.pp + gained.mm + gained.pm + gained.mp || 1;
  const normalize = total / gainedTotal;
  return {
    pp: gained.pp * normalize,
    mm: gained.mm * normalize,
    pm: gained.pm * normalize,
    mp: gained.mp * normalize,
  };
}

export function calculateE(counts) {
  const pp = Number(counts.pp ?? counts.Npp ?? 0);
  const pm = Number(counts.pm ?? counts.Npm ?? 0);
  const mp = Number(counts.mp ?? counts.Nmp ?? 0);
  const mm = Number(counts.mm ?? counts.Nmm ?? 0);
  const total = pp + pm + mp + mm;
  if (!Number.isFinite(total) || total <= 0) return 0;
  return clamp((pp + mm - pm - mp) / total, -0.98, 0.98);
}

export function calculateS(Eab, EabPrime, EaPrimeb, EaPrimebPrime) {
  const values = [Eab, EabPrime, EaPrimeb, EaPrimebPrime].map(Number);
  if (values.some((value) => !Number.isFinite(value))) return 0;
  return Math.abs(values[0] - values[1] - values[2] - values[3]);
}

export function predictCounts(params, model = DEFAULT_CHSH_FIT_MODEL) {
  const fit = model.fit ?? DEFAULT_CHSH_FIT_MODEL.fit;
  const base = fit.baselineInputs;
  const response = fit.response;
  const visibility = currentVisibility(params, model);
  const scale = countScale(params, model);
  const pumpFactor = Math.pow(clamp(params.pumpPower ?? base.pumpPower, 1, 120) / base.pumpPower, response.pumpExponent);
  const windowFactor = clamp((params.coincidenceWindow ?? base.coincidenceWindow) / base.coincidenceWindow, 0.1, 5);
  const noiseExcess = Math.max(0, (params.noiseLevel ?? base.noiseLevel) - base.noiseLevel);
  const accidental = fit.accidental * Math.pow(pumpFactor, 1.65) * windowFactor * (1 + noiseExcess * response.noiseAccidentalScale);
  const coincidenceMean = Math.max(1, fit.C0 * scale + accidental);
  const eCurrent = fitCorrelation(params.thetaA ?? model.angles.a, params.thetaB ?? model.angles.b, visibility, fit);
  const angles = {
    a: params.thetaAForS ?? model.angles.a,
    aPrime: params.thetaAPrime ?? model.angles.aPrime,
    b: params.thetaBForS ?? model.angles.b,
    bPrime: params.thetaBPrime ?? model.angles.bPrime,
  };
  const Eab = fitCorrelation(angles.a, angles.b, visibility, fit);
  const EabPrime = fitCorrelation(angles.a, angles.bPrime, visibility, fit);
  const EaPrimeb = fitCorrelation(angles.aPrime, angles.b, visibility, fit);
  const EaPrimebPrime = fitCorrelation(angles.aPrime, angles.bPrime, visibility, fit);
  const S = calculateS(Eab, EabPrime, EaPrimeb, EaPrimebPrime);
  const sStd = (model.uncertainty?.SStd ?? 0.04) * (1 + noiseExcess / 80 + Math.max(0, 70 - (params.alignment ?? base.alignment)) / 180);
  const mean = meanCounts(coincidenceMean, eCurrent, accidental, fit.detectorGains ?? {});
  const fluctuationSeed = params.fluctuationSeed ?? 0;
  const fluctuationEnabled = Boolean(params.fluctuationEnabled);
  const counts = {
    pp: displayCount(mean.pp, `${fluctuationSeed}:pp:${params.thetaA}:${params.thetaB}`, fluctuationEnabled),
    mm: displayCount(mean.mm, `${fluctuationSeed}:mm:${params.thetaA}:${params.thetaB}`, fluctuationEnabled),
    pm: displayCount(mean.pm, `${fluctuationSeed}:pm:${params.thetaA}:${params.thetaB}`, fluctuationEnabled),
    mp: displayCount(mean.mp, `${fluctuationSeed}:mp:${params.thetaA}:${params.thetaB}`, fluctuationEnabled),
  };
  const signalTotal = Math.max(0, coincidenceMean - accidental);
  const singlesMeanA = fit.singles.darkA + fit.singles.etaA * signalTotal + (params.noiseLevel ?? base.noiseLevel) * response.noiseSinglesScale;
  const singlesMeanB = fit.singles.darkB + fit.singles.etaB * signalTotal + (params.noiseLevel ?? base.noiseLevel) * response.noiseSinglesScale * 1.06;
  const singlesA = displayCount(singlesMeanA, `${fluctuationSeed}:a:${params.pumpPower}:${params.alignment}`, fluctuationEnabled);
  const singlesB = displayCount(singlesMeanB, `${fluctuationSeed}:b:${params.pumpPower}:${params.alignment}`, fluctuationEnabled);
  const displayCoincidence = counts.pp + counts.mm + counts.pm + counts.mp;
  return {
    singlesA,
    singlesB,
    coincidenceCurrent: displayCoincidence,
    coincidenceMean,
    ECurrent: eCurrent,
    chsh: {
      Eab,
      EabPrime,
      EaPrimeb,
      EaPrimebPrime,
      S,
      SStd: sStd,
      violated: S > 2,
    },
    counts,
    meanCounts: mean,
    visibility,
    accidental,
    note: "本页面中的计数与 S 值由实测数据校准的 CHSH 近似模型实时生成，用于辅助理解实验参数变化对贝尔不等式检验结果的影响。",
  };
}

export function predictCHSH(params, model = DEFAULT_CHSH_FIT_MODEL) {
  return predictCounts(params, model).chsh;
}
