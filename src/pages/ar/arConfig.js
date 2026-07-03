import {
  AR_CALIBRATION_STORAGE_KEY,
  applyCalibrationToARConfig,
  clearStoredCalibrationConfig,
  formatCalibrationJson,
  loadStoredCalibrationConfig,
  runtimeToCalibrationConfig,
  saveStoredCalibrationConfig,
} from '../../config/arCalibrationConfig.js';

export const AR_CONFIG = {
  assets: {
    imageTargetSrc: `${import.meta.env.BASE_URL}targets/target.mind`,
    targetPreviewSrc: `${import.meta.env.BASE_URL}targets/target-source.png`,
    modelUrl: `${import.meta.env.BASE_URL}models/scene12_13_ar.glb`,
    modelFallbackUrl: `${import.meta.env.BASE_URL}models/scene12_13_ar.glb`,
    targetAspect: 1,
  },
  model: {
    scale: 0.058,
    position: { x: 0, y: -0.04, z: 0.14 },
    rotation: { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
  },
  visual: {
    bloomStrength: 0.24,
    bloomRadius: 0.2,
    bloomThreshold: 0.9,
    exposure: 0.7,
    emissiveBase: 0.48,
    emissiveMax: 0.68,
    emissivePulse: 0.08,
    laserBeamIntensity: 0.32,
    laserBeamGlowOpacity: 0.1,
    laserEmitterIntensity: 0.03,
    laserEmitterGlowOpacity: 0.025,
    laserEmitterApertureIntensity: 0.14,
    laserEmitterApertureGlowOpacity: 0.07,
    laserEmitterColor: 0xd9dee6,
    bboIntensity: 0.28,
    bboGlowOpacity: 0.08,
    photonPathIntensity: 0.36,
    photonTrailOpacity: 0.12,
    detectorGlowIntensity: 0.52,
    decorativeGlowIntensity: 0.28,
    decorativeGlowOpacity: 0.05,
    bboInternalLightMaxIntensity: 480,
    opticalTableColor: 0xd9dee6,
    opticalTableRoughness: 1,
    opticalTableMetalness: 0,
    opticalTableEmissiveIntensity: 0,
    opticalTableToneMapped: false,
    ringOpacity: 0.05,
    particleOpacity: 0.14,
    textOpacity: 0.68,
    trailOpacity: 0.12,
    beamOpacity: 0.09,
    bboPulseOpacity: 0.04,
    bboAuraOpacity: 0.022,
    targetFlashOpacity: 0.035,
    portalScale: 0.62,
    textScale: 0.6,
    textPosition: { x: 0.22, y: -0.28, z: 0.38 },
  },
  labels: {
    showLabels: true,
    labelScale: 1,
    labelOffset: { x: 0, y: 0, z: 0 },
  },
  calibration: {
    storageKey: AR_CALIBRATION_STORAGE_KEY,
    legacyStorageKey: 'quantum-showcase-ar-config-v5',
    lowBrightnessKey: 'quantum-showcase-ar-low-brightness-v1',
  },
};

const clampRanges = {
  'model.scale': [0.05, 2],
  'model.position.x': [-2, 2],
  'model.position.y': [-2, 2],
  'model.position.z': [-2, 2],
  'model.rotation.x': [-Math.PI * 2, Math.PI * 2],
  'model.rotation.y': [-Math.PI * 2, Math.PI * 2],
  'model.rotation.z': [-Math.PI * 2, Math.PI * 2],
  'visual.bloomStrength': [0.1, 0.8],
  'visual.bloomRadius': [0.05, 0.45],
  'visual.bloomThreshold': [0.55, 0.96],
  'visual.exposure': [0.45, 1],
  'visual.ringOpacity': [0, 0.24],
  'visual.particleOpacity': [0.04, 0.36],
  'visual.textOpacity': [0.28, 0.86],
  'visual.trailOpacity': [0.08, 0.42],
  'visual.beamOpacity': [0.06, 0.36],
  'visual.bboPulseOpacity': [0.02, 0.24],
  'visual.bboAuraOpacity': [0, 0.18],
  'visual.targetFlashOpacity': [0, 0.18],
  'visual.laserBeamIntensity': [0, 2],
  'visual.laserBeamGlowOpacity': [0, 1],
  'visual.laserEmitterIntensity': [0, 2],
  'visual.laserEmitterGlowOpacity': [0, 1],
  'visual.laserEmitterApertureIntensity': [0, 2],
  'visual.laserEmitterApertureGlowOpacity': [0, 1],
  'visual.bboIntensity': [0, 2],
  'visual.bboGlowOpacity': [0, 1],
  'visual.photonPathIntensity': [0, 2],
  'visual.photonPathGlowOpacity': [0, 1],
  'visual.photonTrailOpacity': [0, 1],
  'visual.detectorGlowIntensity': [0, 2],
};

function canUseStorage() {
  return typeof window !== 'undefined' && Boolean(window.localStorage);
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function setByPath(target, path, value) {
  const segments = path.split('.');
  let cursor = target;
  for (let i = 0; i < segments.length - 1; i += 1) {
    cursor = cursor?.[segments[i]];
    if (!isPlainObject(cursor)) return;
  }
  cursor[segments[segments.length - 1]] = value;
}

function getByPath(source, path) {
  return path.split('.').reduce((cursor, segment) => cursor?.[segment], source);
}

function clampValue(path, value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return null;
  const range = clampRanges[path];
  if (!range) return numeric;
  return Math.min(range[1], Math.max(range[0], numeric));
}

function mergeLabels(baseLabels = AR_CONFIG.labels, overrideLabels = {}) {
  return {
    ...baseLabels,
    ...overrideLabels,
    labelOffset: {
      ...(baseLabels?.labelOffset || {}),
      ...(overrideLabels?.labelOffset || {}),
    },
  };
}

export function mergeARConfig(baseConfig = AR_CONFIG, override = {}) {
  const merged = clone(baseConfig);

  for (const path of Object.keys(clampRanges)) {
    const nextValue = getByPath(override, path);
    if (nextValue === undefined) continue;
    const clamped = clampValue(path, nextValue);
    if (clamped !== null) setByPath(merged, path, clamped);
  }

  if (isPlainObject(override.visual?.textPosition)) {
    for (const axis of ['x', 'y', 'z']) {
      const value = clampValue(`model.position.${axis}`, override.visual.textPosition[axis]);
      if (value !== null) merged.visual.textPosition[axis] = value;
    }
  }

  if (isPlainObject(override.labels)) {
    merged.labels = mergeLabels(merged.labels, override.labels);
  }

  if (isPlainObject(override.calibration)) {
    merged.calibration = {
      ...(merged.calibration || {}),
      ...override.calibration,
    };
  }

  return merged;
}

export function cloneARConfig(config = AR_CONFIG) {
  return mergeARConfig(AR_CONFIG, config);
}

export function loadSavedARConfig() {
  if (!canUseStorage()) return null;
  try {
    const calibration = loadStoredCalibrationConfig();
    if (calibration) return applyCalibrationToARConfig(AR_CONFIG, calibration);

    const legacyRaw = window.localStorage.getItem(AR_CONFIG.calibration.legacyStorageKey);
    return legacyRaw ? JSON.parse(legacyRaw) : null;
  } catch (error) {
    console.warn('Failed to read AR calibration config.', error);
    return null;
  }
}

export function createRuntimeARConfig() {
  return mergeARConfig(AR_CONFIG, loadSavedARConfig() || {});
}

export function saveARConfig(config) {
  if (!canUseStorage()) return false;
  const clean = mergeARConfig(AR_CONFIG, config);
  const calibration = runtimeToCalibrationConfig(clean);
  saveStoredCalibrationConfig(calibration);
  window.localStorage.setItem(AR_CONFIG.calibration.legacyStorageKey, JSON.stringify({
    model: clean.model,
    visual: clean.visual,
    labels: clean.labels,
  }));
  return true;
}

export function resetSavedARConfig() {
  if (!canUseStorage()) return;
  clearStoredCalibrationConfig();
  window.localStorage.removeItem(AR_CONFIG.calibration.legacyStorageKey);
}

export function loadLowBrightnessMode() {
  if (!canUseStorage()) return false;
  return window.localStorage.getItem(AR_CONFIG.calibration.lowBrightnessKey) === '1';
}

export function saveLowBrightnessMode(enabled) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(AR_CONFIG.calibration.lowBrightnessKey, enabled ? '1' : '0');
}

export function formatConfigForSource(config) {
  const clean = mergeARConfig(AR_CONFIG, config);
  return `${formatCalibrationJson(runtimeToCalibrationConfig(clean))}\n`;
}
