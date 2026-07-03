import { AR_CONFIG } from './config.js';

export function createPerformanceMonitor({ renderer, effects, ui }) {
  let elapsedWindow = 0;
  let frames = 0;
  let lowMode = false;

  function setLowMode() {
    if (lowMode) return;
    lowMode = true;
    effects?.setPerformanceMode('low');
    renderer?.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.1));
    ui?.showToast('已自动降低粒子和光晕强度，保证微信端稳定运行。', 2600);
  }

  return {
    update(delta) {
      elapsedWindow += delta;
      frames += 1;
      if (elapsedWindow < 3) return;

      const fps = frames / elapsedWindow;
      if (fps < AR_CONFIG.lowFpsThreshold) setLowMode();
      elapsedWindow = 0;
      frames = 0;
    },
    get mode() {
      return lowMode ? 'low' : 'normal';
    },
  };
}
