import * as THREE from 'three';
import { MindARThree } from '../../vendor/mind-ar/mindar-image-three.prod.js';
import { AR_CONFIG } from './arConfig.js';
import { applyOutputColorSpace, setSafePixelRatio } from '../../shared/threeCompat.js';
import { getRuntimeConfig } from '../../shared/runtimeConfig.js';

function applyRendererVisuals(renderer, visualConfig = AR_CONFIG.visual) {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = visualConfig.exposure ?? AR_CONFIG.visual.exposure;
}

function setRendererDefaults(renderer, container, visualConfig = AR_CONFIG.visual) {
  const runtime = getRuntimeConfig();
  const maxPixelRatio = Math.min(runtime.pixelRatioMax || 2, 1.5);
  setSafePixelRatio(renderer, maxPixelRatio);
  renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);
  applyOutputColorSpace(renderer);
  applyRendererVisuals(renderer, visualConfig);
  renderer.shadowMap.enabled = false;
}

function addARLighting(scene) {
  scene.add(new THREE.HemisphereLight(0xdff8ff, 0x10172f, 1.45));
  const key = new THREE.DirectionalLight(0x9fefff, 1.35);
  key.position.set(1.6, 3.2, 2.4);
  const violet = new THREE.PointLight(0x8c6dff, 0.85, 5.5, 2);
  violet.position.set(-1.4, 0.8, 1.7);
  const cyan = new THREE.PointLight(0x45eaff, 0.75, 4.2, 2);
  cyan.position.set(1.2, -0.9, 1.5);
  scene.add(key, violet, cyan);
}

export function createARSession({ container, imageTargetSrc, onFrame, visualConfig = AR_CONFIG.visual } = {}) {
  let currentVisualConfig = visualConfig;
  const mindarThree = new MindARThree({
    container,
    imageTargetSrc,
    maxTrack: 1,
    uiLoading: 'no',
    uiScanning: 'no',
    filterMinCF: 0.0001,
    filterBeta: 1000,
    warmupTolerance: 5,
    missTolerance: 8,
  });

  const { renderer, scene, camera } = mindarThree;
  setRendererDefaults(renderer, container, currentVisualConfig);
  addARLighting(scene);

  const anchor = mindarThree.addAnchor(0);
  const content = new THREE.Group();
  content.name = 'quantum_ar_anchor_content';
  content.visible = false;
  anchor.group.add(content);

  const clock = new THREE.Clock();
  let running = false;
  let frameCallback = onFrame || null;

  function renderFrame(time, xrFrame) {
    const delta = Math.min(clock.getDelta(), 0.05);
    frameCallback?.({ delta, elapsed: clock.elapsedTime, time, xrFrame });
    renderer.render(scene, camera);
  }

  function resize() {
    setRendererDefaults(renderer, container, currentVisualConfig);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('orientationchange', resize);

  return {
    mindarThree,
    renderer,
    scene,
    camera,
    anchor,
    content,
    applyVisualConfig(nextVisualConfig = AR_CONFIG.visual) {
      currentVisualConfig = nextVisualConfig;
      applyRendererVisuals(renderer, currentVisualConfig);
    },
    setFrameCallback(callback) {
      frameCallback = callback;
    },
    async start() {
      if (running) return;
      clock.start();
      await mindarThree.start();
      renderer.setAnimationLoop(renderFrame);
      running = true;
      resize();
    },
    async stop() {
      renderer.setAnimationLoop(null);
      if (running) await mindarThree.stop();
      running = false;
    },
    dispose() {
      window.removeEventListener('resize', resize);
      window.removeEventListener('orientationchange', resize);
      renderer.setAnimationLoop(null);
      renderer.dispose();
    },
  };
}
