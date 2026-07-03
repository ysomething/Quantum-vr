export function createPerformanceGovernor({
  sceneSystem,
  effects,
  dot,
  label,
  runtimeConfig,
} = {}) {
  let frames = 0;
  let sampleTime = 0;
  let fps = null;
  let mode = runtimeConfig?.defaultPerformanceMode || 'quality';

  function applyQualityMode() {
    mode = 'quality';
    dot?.classList.remove('is-low');
    label && (label.textContent = runtimeConfig?.label || '高质量画面');
    sceneSystem?.setPerformanceMode?.('quality');
    effects?.setPerformanceMode?.('quality');
  }

  function update(delta) {
    frames += 1;
    sampleTime += delta;
    if (sampleTime < 0.5) return;

    fps = Math.round(frames / sampleTime);
    frames = 0;
    sampleTime = 0;
  }

  applyQualityMode(mode);

  return {
    update,
    applyQualityMode,
    get fps() {
      return fps;
    },
    get mode() {
      return mode;
    },
  };
}
