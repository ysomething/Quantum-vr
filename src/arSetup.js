import * as THREE from 'three';
import { MindARThree } from './vendor/mind-ar/mindar-image-three.prod.js';
import { AR_CONFIG } from './config.js';

function setRendererDefaults(renderer, container) {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, AR_CONFIG.maxPixelRatio);
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight);
  if ('outputColorSpace' in renderer && THREE.SRGBColorSpace) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  } else if ('outputEncoding' in renderer && THREE.sRGBEncoding) {
    renderer.outputEncoding = THREE.sRGBEncoding;
  }
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = false;
}

function addARLighting(scene) {
  scene.add(new THREE.HemisphereLight(0xdff8ff, 0x10172f, 2.4));

  const key = new THREE.DirectionalLight(0x9fefff, 2.2);
  key.position.set(1.6, 3.2, 2.4);
  scene.add(key);

  const violet = new THREE.PointLight(0x8c6dff, 2.2, 5.5, 2);
  violet.position.set(-1.4, 0.8, 1.7);
  scene.add(violet);

  const cyan = new THREE.PointLight(0x45eaff, 1.8, 4.2, 2);
  cyan.position.set(1.2, -0.9, 1.5);
  scene.add(cyan);
}

export function createARSession({ container, imageTargetSrc, onFrame } = {}) {
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
  setRendererDefaults(renderer, container);
  addARLighting(scene);

  const anchor = mindarThree.addAnchor(0);
  const content = new THREE.Group();
  content.name = 'quantum_wechat_webar_anchor_content';
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
    setRendererDefaults(renderer, container);
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
      if (running) {
        await mindarThree.stop();
      }
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
