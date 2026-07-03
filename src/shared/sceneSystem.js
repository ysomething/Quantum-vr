import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { applyOutputColorSpace, applyTextureColorSpace, setSafePixelRatio } from './threeCompat.js';
import { THREE_D_MODE_CONFIG, VISUAL_CONFIG } from './visualConfig.js';
import { canUseWebGL, isCoarsePointer, prefersReducedMotion } from '../utils/device.js';
import { getRuntimeConfig } from './runtimeConfig.js';

function vectorFromConfig(value, fallback) {
  if (value?.isVector3) return value.clone();
  if (!value) return fallback.clone();
  return new THREE.Vector3(value.x ?? fallback.x, value.y ?? fallback.y, value.z ?? fallback.z);
}

function createBackgroundTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 256);
  gradient.addColorStop(0, '#081a34');
  gradient.addColorStop(0.5, '#040d1d');
  gradient.addColorStop(1, '#01040b');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 32, 256);
  return applyTextureColorSpace(new THREE.CanvasTexture(canvas));
}

function createCompositePass(bloomComposer) {
  const pass = new ShaderPass(
    new THREE.ShaderMaterial({
      uniforms: {
        baseTexture: { value: null },
        bloomTexture: { value: bloomComposer.renderTarget2.texture },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D baseTexture;
        uniform sampler2D bloomTexture;
        varying vec2 vUv;
        void main() {
          vec4 base = texture2D(baseTexture, vUv);
          vec3 bloom = texture2D(bloomTexture, vUv).rgb;
          gl_FragColor = vec4(base.rgb + bloom, base.a);
        }
      `,
    }),
    'baseTexture',
  );
  pass.needsSwap = true;
  return pass;
}

export function createSceneSystem(canvas, options = {}) {
  if (!canUseWebGL()) {
    throw new Error('当前浏览器不支持 WebGL，请更换浏览器或使用电脑观看。');
  }

  const config = options.modeConfig || THREE_D_MODE_CONFIG;
  const runtime = options.runtimeConfig || getRuntimeConfig();
  const sceneConfig = config.scene || VISUAL_CONFIG.scene;
  const gridConfig = config.grid || THREE_D_MODE_CONFIG.grid;
  const lightConfig = config.lights || THREE_D_MODE_CONFIG.lights;
  const bypassPostprocessing = new URLSearchParams(window.location.search).has('direct');
  const isMobile = runtime.isMobile || isCoarsePointer() || window.innerWidth < 820;
  const reducedMotion = prefersReducedMotion();
  const maxPixelRatio = options.maxPixelRatio || runtime.pixelRatioMax || Math.min(window.devicePixelRatio || 1, 2);
  const mobileBloomComposerScale = runtime.bloomComposerScale ?? 1;
  const mobileBloomStrength = (sceneConfig.mobileBloomStrength ?? sceneConfig.bloomStrength) * (runtime.bloomMultiplier ?? 1);
  const desktopBloomStrength = sceneConfig.bloomStrength * (runtime.bloomMultiplier ?? 1);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: options.antialias ?? runtime.antialias ?? !isMobile,
    alpha: true,
    powerPreference: 'high-performance',
  });
  setSafePixelRatio(renderer, maxPixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = isMobile ? sceneConfig.mobileExposure : sceneConfig.exposure;
  applyOutputColorSpace(renderer);

  const scene = new THREE.Scene();
  scene.background = createBackgroundTexture();
  scene.fog = new THREE.FogExp2(0x030916, 0.025);
  const bloomBackground = new THREE.Color(0x000000);

  const cameraPositionConfig = isMobile ? sceneConfig.mobileCameraPosition || sceneConfig.cameraPosition : sceneConfig.cameraPosition;
  const targetConfig = isMobile ? sceneConfig.mobileOrbitTarget || sceneConfig.orbitTarget : sceneConfig.orbitTarget;
  const defaultCameraPosition = vectorFromConfig(cameraPositionConfig, new THREE.Vector3(8.4, 5.4, 10.8));
  const defaultTarget = vectorFromConfig(targetConfig, new THREE.Vector3(0, 0.25, 0));
  const camera = new THREE.PerspectiveCamera(
    options.fov || (isMobile ? sceneConfig.mobileCameraFov : sceneConfig.cameraFov),
    window.innerWidth / window.innerHeight,
    0.02,
    150,
  );
  camera.position.copy(vectorFromConfig(options.cameraPosition, defaultCameraPosition));

  const controls = new OrbitControls(camera, canvas);
  controls.target.copy(vectorFromConfig(options.target, defaultTarget));
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.enablePan = options.enablePan ?? true;
  controls.panSpeed = 0.65;
  controls.rotateSpeed = isMobile ? 0.62 : 0.72;
  controls.zoomSpeed = 0.78;
  controls.minDistance = options.minDistance ?? sceneConfig.minDistance ?? 2.3;
  controls.maxDistance = options.maxDistance ?? sceneConfig.maxDistance ?? 28;
  controls.maxPolarAngle = options.maxPolarAngle ?? sceneConfig.maxPolarAngle ?? Math.PI * 0.88;
  controls.touches.ONE = THREE.TOUCH.ROTATE;
  controls.touches.TWO = THREE.TOUCH.DOLLY_PAN;
  controls.update();

  const ambient = new THREE.AmbientLight(0x9fcfff, lightConfig.ambient ?? 0.32);
  const hemisphere = new THREE.HemisphereLight(0xbfe9ff, 0x111827, lightConfig.hemisphere ?? 1.65);
  const key = new THREE.DirectionalLight(0xffffff, lightConfig.key ?? 2.15);
  key.position.set(6, 9, 5);
  const rim = new THREE.DirectionalLight(0x566dff, lightConfig.rim ?? 0.95);
  rim.position.set(5, 2, -7);
  scene.add(ambient, hemisphere, key, rim);

  const grid = new THREE.GridHelper(28, 28, 0x1ba7c0, 0x11334c);
  grid.position.y = -2.3;
  grid.material.transparent = true;
  grid.material.opacity = isMobile ? gridConfig.mobileOpacity : gridConfig.opacity;
  grid.material.depthWrite = false;
  scene.add(grid);

  const floorGlow = new THREE.Mesh(
    new THREE.CircleGeometry(12, 72),
    new THREE.MeshBasicMaterial({
      color: 0x0b3753,
      transparent: true,
      opacity: isMobile ? gridConfig.mobileFloorGlowOpacity : gridConfig.floorGlowOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  floorGlow.rotation.x = -Math.PI / 2;
  floorGlow.position.y = grid.position.y - 0.015;
  scene.add(floorGlow);

  const renderPass = new RenderPass(scene, camera);
  const bloomRenderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    isMobile ? mobileBloomStrength : desktopBloomStrength,
    isMobile ? sceneConfig.mobileBloomRadius : sceneConfig.bloomRadius,
    isMobile ? sceneConfig.mobileBloomThreshold : sceneConfig.bloomThreshold,
  );

  const bloomComposer = new EffectComposer(renderer);
  bloomComposer.renderToScreen = false;
  bloomComposer.setPixelRatio(Math.min(renderer.getPixelRatio(), isMobile ? mobileBloomComposerScale : 1));
  bloomComposer.addPass(bloomRenderPass);
  bloomComposer.addPass(bloomPass);

  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(renderer.getPixelRatio());
  composer.addPass(renderPass);
  composer.addPass(createCompositePass(bloomComposer));

  let performanceMode = runtime.defaultPerformanceMode || 'quality';
  const bloomExcludedObjects = [];

  function setBloomExcludedObjectsHidden(hidden) {
    if (hidden) {
      scene.traverse((object) => {
        if (!object.userData?.bloomExcluded || !object.visible) return;
        bloomExcludedObjects.push(object);
        object.visible = false;
      });
      return;
    }

    while (bloomExcludedObjects.length) {
      const object = bloomExcludedObjects.pop();
      object.visible = true;
    }
  }

  function applyQuality(mode) {
    performanceMode = mode || 'quality';
    setSafePixelRatio(renderer, maxPixelRatio);
    composer.setPixelRatio(renderer.getPixelRatio());
    bloomComposer.setPixelRatio(Math.min(renderer.getPixelRatio(), isMobile ? mobileBloomComposerScale : 1));
    bloomPass.strength = isMobile ? mobileBloomStrength : desktopBloomStrength;
    bloomPass.radius = isMobile ? sceneConfig.mobileBloomRadius : sceneConfig.bloomRadius;
    bloomPass.threshold = isMobile ? sceneConfig.mobileBloomThreshold : sceneConfig.bloomThreshold;
    renderer.toneMappingExposure = isMobile ? sceneConfig.mobileExposure : sceneConfig.exposure;
  }

  function setGridFloor(y) {
    grid.position.y = y;
    floorGlow.position.y = y - 0.015;
  }

  function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    composer.setSize(width, height);
    bloomComposer.setSize(width, height);
  }

  function renderWithCamera(renderCamera = camera) {
    if (bypassPostprocessing) {
      renderer.render(scene, renderCamera);
      return;
    }

    renderPass.camera = renderCamera;
    bloomRenderPass.camera = renderCamera;
    const background = scene.background;
    const previousLayerMask = renderCamera.layers.mask;

    try {
      scene.background = bloomBackground;
      renderCamera.layers.set(1);
      setBloomExcludedObjectsHidden(true);
      bloomComposer.render();
    } finally {
      setBloomExcludedObjectsHidden(false);
      renderCamera.layers.mask = previousLayerMask;
      scene.background = background;
    }

    composer.render();
  }

  function render() {
    renderWithCamera(camera);
  }

  function dispose() {
    window.removeEventListener('resize', resize);
    window.removeEventListener('orientationchange', resize);
    renderer.setAnimationLoop(null);
    controls.dispose();
    composer.dispose();
    bloomComposer.dispose();
    renderer.dispose();
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('orientationchange', resize, { passive: true });
  applyQuality(performanceMode);

  return {
    scene,
    camera,
    controls,
    renderer,
    composer,
    bloomComposer,
    bloomPass,
    grid,
    isMobile,
    runtime,
    reducedMotion,
    render,
    renderWithCamera,
    resize,
    dispose,
    setGridFloor,
    setPerformanceMode: applyQuality,
    get performanceMode() {
      return performanceMode;
    },
  };
}
