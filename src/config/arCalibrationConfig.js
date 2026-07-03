export const AR_CALIBRATION_STORAGE_KEY = 'quantum_ar_calibration_config';

export const DEFAULT_AR_CALIBRATION = {
  scale: 0.058,
  position: { x: 0, y: -0.04, z: 0.14 },
  rotation: { x: 90, y: 0, z: 90 },
  visual: {
    laserIntensity: 0.32,
    bboIntensity: 0.28,
    photonIntensity: 0.36,
    glowOpacity: 0.1,
  },
  labels: {
    showLabels: true,
    labelScale: 1,
    labelOffset: { x: 0, y: 0, z: 0 },
  },
};

const RANGES = {
  scale: [0.05, 2],
  'position.x': [-2, 2],
  'position.y': [-2, 2],
  'position.z': [-2, 2],
  'rotation.x': [-180, 180],
  'rotation.y': [-180, 180],
  'rotation.z': [-180, 180],
  'visual.laserIntensity': [0, 2],
  'visual.bboIntensity': [0, 2],
  'visual.photonIntensity': [0, 2],
  'visual.glowOpacity': [0, 1],
  'labels.labelScale': [0.3, 2],
  'labels.labelOffset.x': [-1, 1],
  'labels.labelOffset.y': [-1, 1],
  'labels.labelOffset.z': [-1, 1],
};

export function degToRad(value) {
  return (Number(value) || 0) * Math.PI / 180;
}

export function radToDeg(value) {
  return (Number(value) || 0) * 180 / Math.PI;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function isPlainObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function clamp(path, value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return getByPath(DEFAULT_AR_CALIBRATION, path) ?? 0;
  const range = RANGES[path];
  if (!range) return number;
  return Math.min(range[1], Math.max(range[0], number));
}

function round(value, digits = 4) {
  const factor = 10 ** digits;
  return Math.round((Number(value) || 0) * factor) / factor;
}

function getByPath(source, path) {
  return path.split('.').reduce((cursor, segment) => cursor?.[segment], source);
}

function setByPath(target, path, value) {
  const segments = path.split('.');
  let cursor = target;
  for (let i = 0; i < segments.length - 1; i += 1) {
    const segment = segments[i];
    if (!isPlainObject(cursor[segment])) cursor[segment] = {};
    cursor = cursor[segment];
  }
  cursor[segments[segments.length - 1]] = value;
}

export function normalizeCalibrationConfig(input = {}) {
  const merged = clone(DEFAULT_AR_CALIBRATION);
  const source = isPlainObject(input) ? input : {};

  for (const path of Object.keys(RANGES)) {
    const nextValue = getByPath(source, path);
    if (nextValue === undefined) continue;
    setByPath(merged, path, clamp(path, nextValue));
  }

  if (typeof source.labels?.showLabels === 'boolean') {
    merged.labels.showLabels = source.labels.showLabels;
  }

  return merged;
}

function calibrationVisualFromRuntime(visual = {}) {
  const laserIntensity = visual.laserIntensity ?? visual.laserBeamIntensity;
  const bboIntensity = visual.bboIntensity;
  const photonIntensity = visual.photonIntensity ?? visual.photonPathIntensity;
  const glowOpacity = visual.glowOpacity ?? visual.laserBeamGlowOpacity ?? visual.bboGlowOpacity ?? visual.photonTrailOpacity;

  return {
    laserIntensity: laserIntensity ?? DEFAULT_AR_CALIBRATION.visual.laserIntensity,
    bboIntensity: bboIntensity ?? DEFAULT_AR_CALIBRATION.visual.bboIntensity,
    photonIntensity: photonIntensity ?? DEFAULT_AR_CALIBRATION.visual.photonIntensity,
    glowOpacity: glowOpacity ?? DEFAULT_AR_CALIBRATION.visual.glowOpacity,
  };
}

export function runtimeToCalibrationConfig(runtimeConfig = {}) {
  const model = runtimeConfig.model || {};
  const labels = runtimeConfig.labels || runtimeConfig.calibration?.labels || {};

  return normalizeCalibrationConfig({
    scale: model.scale ?? DEFAULT_AR_CALIBRATION.scale,
    position: {
      x: model.position?.x ?? DEFAULT_AR_CALIBRATION.position.x,
      y: model.position?.y ?? DEFAULT_AR_CALIBRATION.position.y,
      z: model.position?.z ?? DEFAULT_AR_CALIBRATION.position.z,
    },
    rotation: {
      x: model.rotation?.x === undefined ? DEFAULT_AR_CALIBRATION.rotation.x : radToDeg(model.rotation.x),
      y: model.rotation?.y === undefined ? DEFAULT_AR_CALIBRATION.rotation.y : radToDeg(model.rotation.y),
      z: model.rotation?.z === undefined ? DEFAULT_AR_CALIBRATION.rotation.z : radToDeg(model.rotation.z),
    },
    visual: calibrationVisualFromRuntime(runtimeConfig.visual),
    labels: {
      showLabels: labels.showLabels ?? DEFAULT_AR_CALIBRATION.labels.showLabels,
      labelScale: labels.labelScale ?? DEFAULT_AR_CALIBRATION.labels.labelScale,
      labelOffset: {
        x: labels.labelOffset?.x ?? DEFAULT_AR_CALIBRATION.labels.labelOffset.x,
        y: labels.labelOffset?.y ?? DEFAULT_AR_CALIBRATION.labels.labelOffset.y,
        z: labels.labelOffset?.z ?? DEFAULT_AR_CALIBRATION.labels.labelOffset.z,
      },
    },
  });
}

function mapCalibrationVisual(baseVisual = {}, calibrationVisual = DEFAULT_AR_CALIBRATION.visual) {
  const laserIntensity = calibrationVisual.laserIntensity;
  const bboIntensity = calibrationVisual.bboIntensity;
  const photonIntensity = calibrationVisual.photonIntensity;
  const glowOpacity = calibrationVisual.glowOpacity;

  return {
    ...baseVisual,
    laserIntensity,
    bboIntensity,
    photonIntensity,
    glowOpacity,
    laserBeamIntensity: laserIntensity,
    laserBeamGlowOpacity: glowOpacity,
    laserEmitterIntensity: Math.min(baseVisual.laserEmitterIntensity ?? 0.03, laserIntensity * 0.12),
    laserEmitterGlowOpacity: glowOpacity * 0.24,
    laserEmitterApertureIntensity: Math.max(0.02, laserIntensity * 0.44),
    laserEmitterApertureGlowOpacity: glowOpacity * 0.64,
    bboIntensity,
    bboGlowOpacity: glowOpacity * 0.8,
    photonPathIntensity: photonIntensity,
    photonPathGlowOpacity: glowOpacity * 1.1,
    photonTrailOpacity: glowOpacity * 1.2,
    beamOpacity: Math.min(0.36, Math.max(0.02, glowOpacity * 0.9)),
    trailOpacity: Math.min(0.42, Math.max(0.04, glowOpacity * 1.2)),
    ringOpacity: Math.min(0.24, Math.max(0, glowOpacity * 0.55)),
    bboPulseOpacity: Math.min(0.24, Math.max(0, glowOpacity * 0.4)),
    bboAuraOpacity: Math.min(0.18, Math.max(0, glowOpacity * 0.22)),
    targetFlashOpacity: Math.min(0.18, Math.max(0, glowOpacity * 0.36)),
  };
}

export function applyCalibrationToARConfig(baseConfig = {}, calibrationInput = DEFAULT_AR_CALIBRATION) {
  const calibration = normalizeCalibrationConfig(calibrationInput);
  const nextConfig = clone(baseConfig);

  nextConfig.model = {
    ...(nextConfig.model || {}),
    scale: calibration.scale,
    position: {
      x: calibration.position.x,
      y: calibration.position.y,
      z: calibration.position.z,
    },
    rotation: {
      x: degToRad(calibration.rotation.x),
      y: degToRad(calibration.rotation.y),
      z: degToRad(calibration.rotation.z),
    },
  };

  nextConfig.visual = mapCalibrationVisual(nextConfig.visual || {}, calibration.visual);
  nextConfig.labels = clone(calibration.labels);
  nextConfig.calibration = {
    ...(nextConfig.calibration || {}),
    values: clone(calibration),
  };

  return nextConfig;
}

export function formatCalibrationJson(calibrationInput = DEFAULT_AR_CALIBRATION) {
  const calibration = normalizeCalibrationConfig(calibrationInput);
  const printable = {
    scale: round(calibration.scale, 4),
    position: {
      x: round(calibration.position.x, 4),
      y: round(calibration.position.y, 4),
      z: round(calibration.position.z, 4),
    },
    rotation: {
      x: round(calibration.rotation.x, 2),
      y: round(calibration.rotation.y, 2),
      z: round(calibration.rotation.z, 2),
    },
    visual: {
      laserIntensity: round(calibration.visual.laserIntensity, 4),
      bboIntensity: round(calibration.visual.bboIntensity, 4),
      photonIntensity: round(calibration.visual.photonIntensity, 4),
      glowOpacity: round(calibration.visual.glowOpacity, 4),
    },
    labels: {
      showLabels: Boolean(calibration.labels.showLabels),
      labelScale: round(calibration.labels.labelScale, 4),
      labelOffset: {
        x: round(calibration.labels.labelOffset.x, 4),
        y: round(calibration.labels.labelOffset.y, 4),
        z: round(calibration.labels.labelOffset.z, 4),
      },
    },
  };

  return JSON.stringify(printable, null, 2);
}

export function canUseCalibrationStorage() {
  return typeof window !== 'undefined' && Boolean(window.localStorage);
}

export function loadStoredCalibrationConfig() {
  if (!canUseCalibrationStorage()) return null;
  try {
    const raw = window.localStorage.getItem(AR_CALIBRATION_STORAGE_KEY);
    return raw ? normalizeCalibrationConfig(JSON.parse(raw)) : null;
  } catch (error) {
    console.warn('Failed to read realtime AR calibration config.', error);
    return null;
  }
}

export function saveStoredCalibrationConfig(calibrationInput) {
  if (!canUseCalibrationStorage()) return false;
  const calibration = normalizeCalibrationConfig(calibrationInput);
  window.localStorage.setItem(AR_CALIBRATION_STORAGE_KEY, formatCalibrationJson(calibration));
  return true;
}

export function clearStoredCalibrationConfig() {
  if (!canUseCalibrationStorage()) return;
  window.localStorage.removeItem(AR_CALIBRATION_STORAGE_KEY);
}
