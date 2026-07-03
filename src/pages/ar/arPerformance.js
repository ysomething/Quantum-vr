export function createARPerformanceMonitor() {
  let frames = 0;
  let sampleTime = 0;
  let fps = null;

  return {
    update(delta) {
      frames += 1;
      sampleTime += delta;
      if (sampleTime < 0.75) return;

      fps = Math.round(frames / sampleTime);
      frames = 0;
      sampleTime = 0;
    },
    get mode() {
      return 'normal';
    },
    get fps() {
      return fps;
    },
  };
}
