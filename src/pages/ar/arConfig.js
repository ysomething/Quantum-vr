export const AR_CONFIG = {
  assets: {
    imageTargetSrc: `${import.meta.env.BASE_URL}targets/target.mind`,
    targetPreviewSrc: `${import.meta.env.BASE_URL}targets/target-source.png`,
    targetAspect: 820 / 1200,
  },
  model: {
    scale: 0.092,
    position: { x: 0, y: -0.05, z: 0.04 },
    rotation: { x: Math.PI / 2, y: 0, z: 0 },
  },
  visual: {
    bloomStrength: 0.4,
    bloomRadius: 0.22,
    bloomThreshold: 0.82,
    exposure: 0.7,
    emissiveBase: 0.82,
    emissiveMax: 1.35,
    emissivePulse: 0.24,
    ringOpacity: 0.12,
    particleOpacity: 0.22,
    textOpacity: 0.68,
    trailOpacity: 0.28,
    beamOpacity: 0.2,
    bboPulseOpacity: 0.12,
    bboAuraOpacity: 0.08,
    targetFlashOpacity: 0.08,
    portalScale: 0.62,
    textScale: 0.6,
    textPosition: { x: 0.22, y: -0.28, z: 0.38 },
  },
  calibration: {
    storageKey: 'quantum-showcase-ar-config-v1',
    lowBrightnessKey: 'quantum-showcase-ar-low-brightness-v1',
  },
};

const clampRanges = {
  'model.scale': [0.025, 0.28],
  'model.position.x': [-0.6, 0.6],
  'model.position.y': [-0.6, 0.6],
  'model.position.z': [-0.2, 0.7],
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

  return merged;
}

export function cloneARConfig(config = AR_CONFIG) {
  return mergeARConfig(AR_CONFIG, config);
}

export function loadSavedARConfig() {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(AR_CONFIG.calibration.storageKey);
    return raw ? JSON.parse(raw) : null;
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
  window.localStorage.setItem(AR_CONFIG.calibration.storageKey, JSON.stringify({
    model: clean.model,
    visual: clean.visual,
  }));
  return true;
}

export function resetSavedARConfig() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(AR_CONFIG.calibration.storageKey);
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
  return `export const AR_CONFIG = ${JSON.stringify(clean, null, 2)}\n`;
}
