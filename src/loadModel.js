import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { AR_CONFIG } from './config.js';

function findFirst(root, names) {
  for (const name of names) {
    const exact = root.getObjectByName(name);
    if (exact) return exact;
  }

  const lowerNames = names.map((name) => name.toLowerCase());
  let match = null;
  root.traverse((object) => {
    if (match || !object.name) return;
    const lower = object.name.toLowerCase();
    if (lowerNames.some((name) => lower.includes(name))) match = object;
  });
  return match;
}

function colorForName(name) {
  if (/path_b|photon_b|purple|orange/i.test(name)) return new THREE.Color(0xc171ff);
  if (/405|laser/i.test(name)) return new THREE.Color(0x7ca7ff);
  if (/counter|screen/i.test(name)) return new THREE.Color(0x61efff);
  if (/bbo/i.test(name)) return new THREE.Color(0x58f0ff);
  return new THREE.Color(0x35e8ff);
}

function enhanceRuntimeGlow(root) {
  const glowPattern = /405|laser|bbo_inner|bbo_crystal|photon_path|photon_[ab]|glowing_window|counter_screen|apd_flash/i;
  const entries = [];

  root.traverse((object) => {
    if (!object.isMesh || !glowPattern.test(object.name)) return;
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    const cloned = materials.map((source) => {
      const material = source.clone();
      const targetColor = colorForName(object.name);
      if (material.emissive) {
        if (material.emissive.getHex() === 0) material.emissive.copy(targetColor);
        const baseIntensity = THREE.MathUtils.clamp(material.emissiveIntensity ?? 1.2, 1.85, 3.15);
        material.emissiveIntensity = baseIntensity;
        entries.push({ material, baseIntensity, baseColor: null });
      } else if (material.color) {
        const baseColor = material.color.clone();
        material.color.lerp(targetColor, 0.32).multiplyScalar(1.22);
        entries.push({ material, baseIntensity: null, baseColor });
      }
      material.needsUpdate = true;
      return material;
    });
    object.material = Array.isArray(object.material) ? cloned : cloned[0];
  });

  let pulse = 0;
  return {
    get count() {
      return entries.length;
    },
    trigger(amount = 1) {
      pulse = Math.max(pulse, amount);
    },
    update(delta) {
      pulse = Math.max(0, pulse - delta * 0.7);
      for (const entry of entries) {
        if (entry.baseIntensity !== null) {
          entry.material.emissiveIntensity = entry.baseIntensity * (1 + pulse * AR_CONFIG.bloomStrength * 0.72);
        } else if (entry.baseColor) {
          entry.material.color.copy(entry.baseColor).multiplyScalar(1.12 + pulse * 0.22);
        }
      }
    },
  };
}

function createAnchors(root, bounds) {
  return {
    center: bounds.getCenter(new THREE.Vector3()),
    laser: findFirst(root, ['laser_body_405nm', '405nm_laser']),
    bbo: findFirst(root, ['BBO_crystal', 'BBO_inner_purple_cyan_core']),
    polarizer: findFirst(root, ['polarizer_A', 'polarizer_B']),
    polarizerA: findFirst(root, ['polarizer_A']),
    polarizerB: findFirst(root, ['polarizer_B']),
    apd: findFirst(root, ['APD-A_glowing_window', 'APD-A']),
    apdA: findFirst(root, ['APD-A_glowing_window', 'APD-A']),
    apdB: findFirst(root, ['APD-B_glowing_window', 'APD-B']),
    counter: findFirst(root, ['counter_screen', 'coincidence_counter_module']),
    pathA: findFirst(root, ['entangled_photon_path_A_core_web_group', 'entangled_photon_path_A']),
    pathB: findFirst(root, ['entangled_photon_path_B_orange_core_web_group', 'entangled_photon_path_B']),
    photonA: findFirst(root, ['photon_A_0', 'photon_A']),
    photonB: findFirst(root, ['photon_B_0', 'photon_B']),
  };
}

function normalizeModel(gltfScene) {
  gltfScene.updateMatrixWorld(true);
  const initialBounds = new THREE.Box3().setFromObject(gltfScene);
  const initialSize = initialBounds.getSize(new THREE.Vector3());
  const normalizeScale = 10 / Math.max(initialSize.x, initialSize.y, initialSize.z, 0.001);
  gltfScene.scale.setScalar(normalizeScale);
  gltfScene.updateMatrixWorld(true);

  const scaledBounds = new THREE.Box3().setFromObject(gltfScene);
  const center = scaledBounds.getCenter(new THREE.Vector3());
  gltfScene.position.x -= center.x;
  gltfScene.position.z -= center.z;
  gltfScene.position.y -= scaledBounds.min.y;
  gltfScene.updateMatrixWorld(true);
}

function prepareARModel(gltf) {
  const root = new THREE.Group();
  root.name = 'scene12_13_wechat_ar_root';
  root.position.copy(AR_CONFIG.modelPosition).add(new THREE.Vector3(0, AR_CONFIG.arYOffset, AR_CONFIG.arZOffset));
  root.rotation.copy(AR_CONFIG.modelRotation);
  root.scale.setScalar(AR_CONFIG.modelScale);

  normalizeModel(gltf.scene);
  root.add(gltf.scene);
  root.updateMatrixWorld(true);

  const bounds = new THREE.Box3().setFromObject(gltf.scene);
  const size = bounds.getSize(new THREE.Vector3());
  const anchors = createAnchors(root, bounds);
  const runtimeGlow = enhanceRuntimeGlow(root);

  const mixer = new THREE.AnimationMixer(gltf.scene);
  const actions = [];
  let animationDuration = 0;
  for (const clip of gltf.animations) {
    clip.optimize();
    animationDuration = Math.max(animationDuration, clip.duration);
    const action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.clampWhenFinished = false;
    action.play();
    actions.push(action);
  }

  function setVisible(value) {
    root.visible = value;
    mixer.timeScale = value ? 1 : 0;
  }

  return {
    root,
    mixer,
    actions,
    anchors,
    bounds,
    size,
    animationDuration,
    animationCount: gltf.animations.length,
    cameraCount: gltf.cameras.length,
    glowMaterialCount: runtimeGlow.count,
    update(delta) {
      mixer.update(delta);
      runtimeGlow.update(delta);
    },
    triggerGlow: runtimeGlow.trigger,
    setVisible,
  };
}

function createLoader() {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(AR_CONFIG.dracoUrl);
  dracoLoader.setDecoderConfig({ type: 'wasm' });
  dracoLoader.preload();

  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  return { loader, dracoLoader };
}

async function loadWithProgress(loader, url, onProgress, range) {
  return loader.loadAsync(url, (event) => {
    const ratio = event.total ? event.loaded / event.total : 0.5;
    const progress = range[0] + (range[1] - range[0]) * ratio;
    onProgress?.(progress, event.loaded, event.total || null);
  });
}

export async function loadQuantumModel({ onProgress, onSourceChange } = {}) {
  const { loader, dracoLoader } = createLoader();
  let gltf;
  let source = 'draco';

  try {
    gltf = await loadWithProgress(loader, AR_CONFIG.modelUrl, onProgress, [0.04, 0.88]);
  } catch (compressedError) {
    console.warn('Draco GLB load failed, using uncompressed fallback.', compressedError);
    source = 'uncompressed';
    onSourceChange?.(source);
    gltf = await loadWithProgress(loader, AR_CONFIG.fallbackModelUrl, onProgress, [0.12, 0.88]);
  } finally {
    dracoLoader.dispose();
  }

  onProgress?.(0.96, null, null);
  const prepared = prepareARModel(gltf);
  onProgress?.(1, null, null);

  return {
    ...prepared,
    source,
    gltf,
    modelUrl: source === 'draco' ? AR_CONFIG.modelUrl : AR_CONFIG.fallbackModelUrl,
  };
}
