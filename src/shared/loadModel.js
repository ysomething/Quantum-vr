import * as THREE from 'three';
import { createGLTFLoader } from './dracoSetup.js';
import { MODEL_ASSETS, MODEL_NORMALIZATION } from './modelConfig.js';

const tempBox = new THREE.Box3();
const tempVector = new THREE.Vector3();

function findFirst(root, names) {
  for (const name of names) {
    const exact = root.getObjectByName(name);
    if (exact) return exact;
  }

  const lowered = names.map((name) => name.toLowerCase());
  let match = null;
  root.traverse((object) => {
    if (match || !object.name) return;
    const name = object.name.toLowerCase();
    if (lowered.some((candidate) => name.includes(candidate))) match = object;
  });
  return match;
}

function colorForName(name, role = getLightSourceRole(name)) {
  if (role === 'laserEmitterShell') return new THREE.Color(0xd2dbe4);
  if (role === 'laserEmitterAperture') return new THREE.Color(0x788bff);
  if (role === 'laserBeam') return new THREE.Color(0x7f8cff);
  if (role === 'bbo') return new THREE.Color(0x5beaff);
  if (/path_b|photon_b|purple|orange/i.test(name)) return new THREE.Color(0xb46dff);
  if (/counter|screen/i.test(name)) return new THREE.Color(0x64f3ff);
  if (/405|laser/i.test(name)) return new THREE.Color(0x6f86ff);
  return new THREE.Color(0x35e8ff);
}

function getLightSourceRole(name = '') {
  const lower = String(name).toLowerCase();
  if (!lower) return null;
  if (/laser_aperture|laser_output|laser_lens/.test(lower)) return 'laserEmitterAperture';
  if (/laser_body_405nm|laser_mount|laser_head|laser_source|pump_source|laser.*emitter|pump.*emitter|emitter.*laser/.test(lower)) {
    return 'laserEmitterShell';
  }
  if (/bbo_inner|bbo_crystal|bbo_spark|crystal/.test(lower)) return 'bbo';
  if (/405|pump|laser_beam|beam|laser_path/.test(lower)) return 'laserBeam';
  if (/photon_path|photon_[ab]|entangled_photon|path_a|path_b/.test(lower)) return 'photonPath';
  if (/glowing_window|counter_screen|apd_flash/.test(lower)) return 'detector';
  return null;
}

function shouldBloomForRole(role) {
  return role !== 'laserEmitterShell';
}

function roleIntensityMultiplier(role, visual) {
  switch (role) {
    case 'bbo':
      return visual.bboIntensity ?? 0.46;
    case 'laserBeam':
      return visual.laserBeamIntensity ?? 0.58;
    case 'laserEmitterShell':
      return visual.laserEmitterIntensity ?? 0.18;
    case 'laserEmitterAperture':
      return Math.max(visual.laserEmitterIntensity ?? 0.18, 0.38);
    case 'photonPath':
      return visual.photonPathIntensity ?? 0.82;
    case 'detector':
      return visual.detectorGlowIntensity ?? 0.86;
    default:
      return 0.78;
  }
}

function roleOpacityMultiplier(role, visual) {
  switch (role) {
    case 'bbo':
      return visual.bboGlowOpacity ?? 0.44;
    case 'laserBeam':
      return visual.laserBeamGlowOpacity ?? 0.42;
    case 'laserEmitterShell':
      return visual.laserEmitterGlowOpacity ?? 0.08;
    case 'laserEmitterAperture':
      return Math.max(visual.laserEmitterGlowOpacity ?? 0.08, 0.28);
    default:
      return 1;
  }
}

const MODEL_VISUAL_CONTROL_KEYS = [
  'opticalTableColor',
  'opticalTableRoughness',
  'opticalTableMetalness',
  'opticalTableEmissiveIntensity',
  'opticalTableToneMapped',
  'laserBeamIntensity',
  'laserBeamGlowOpacity',
  'laserEmitterIntensity',
  'laserEmitterGlowOpacity',
  'laserEmitterColor',
  'bboIntensity',
  'bboGlowOpacity',
  'photonPathIntensity',
  'detectorGlowIntensity',
  'bboInternalLightMaxIntensity',
];

function hasOwn(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
}

function hasModelVisualOverrides(config = {}) {
  return MODEL_VISUAL_CONTROL_KEYS.some((key) => hasOwn(config, key));
}

function materialsFor(object) {
  if (!object.material) return [];
  return (Array.isArray(object.material) ? object.material : [object.material]).filter(Boolean);
}

function colorFromConfig(value, fallback = 0xd9dee6) {
  if (value?.isColor) return value.clone();
  return new THREE.Color(value ?? fallback);
}

function forceNoReflectionMaterial(material, {
  color,
  roughness = 1,
  metalness = 0,
  emissiveIntensity = 0,
} = {}) {
  if (!material) return null;

  if (material.color) material.color.copy(color);
  if ('roughness' in material) material.roughness = roughness;
  if ('metalness' in material) material.metalness = metalness;
  if ('envMapIntensity' in material) material.envMapIntensity = 0;
  if ('clearcoat' in material) material.clearcoat = 0;
  if ('clearcoatRoughness' in material) material.clearcoatRoughness = 1;
  if ('sheen' in material) material.sheen = 0;
  if ('specularIntensity' in material) material.specularIntensity = 0;
  if ('reflectivity' in material) material.reflectivity = 0;
  if ('toneMapped' in material) material.toneMapped = false;
  if (material.emissive) material.emissive.set(0x000000);
  if ('emissiveIntensity' in material) material.emissiveIntensity = emissiveIntensity;

  material.userData = {
    ...(material.userData || {}),
    bloomExcluded: true,
    noReflection: true,
  };
  material.needsUpdate = true;

  return material;
}

function createMatteOpticalTableMaterial(mesh, config = {}) {
  const color = colorFromConfig(config.opticalTableColor);
  const roughness = config.opticalTableRoughness ?? 1;
  const metalness = config.opticalTableMetalness ?? 0;
  const emissiveIntensity = config.opticalTableEmissiveIntensity ?? 0;
  const toneMapped = config.opticalTableToneMapped ?? false;

  if (!mesh.userData.matteOpticalTableMaterial) {
    const sourceMaterial = materialsFor(mesh)[0];
    mesh.userData.matteOpticalTableMaterial = new THREE.MeshBasicMaterial({
      name: 'runtime_flat_matte_optical_table_no_glare',
      color,
      transparent: false,
      depthWrite: true,
      side: sourceMaterial?.side ?? THREE.FrontSide,
      toneMapped,
    });
  }

  const material = forceNoReflectionMaterial(mesh.userData.matteOpticalTableMaterial, {
    color,
    roughness,
    metalness,
    emissiveIntensity,
  });
  if ('toneMapped' in material) material.toneMapped = toneMapped;
  return material;
}

function createModelVisualControls(root) {
  const opticalTableMeshes = [];
  const bboLights = [];

  root.traverse((object) => {
    const name = object.name || '';

    if (object.isMesh && /^perforated_metal_optical_table$/i.test(name)) {
      object.userData.bloomExcluded = true;
      opticalTableMeshes.push(object);
    }

    if ((object.isLight || typeof object.intensity === 'number') && /BBO_internal_light/i.test(name)) {
      bboLights.push({
        light: object,
        baseIntensity: object.intensity ?? 0,
      });
    }
  });

  function applyOpticalTableConfig(config) {
    const shouldApplyTableConfig = (
      hasOwn(config, 'opticalTableColor')
      || hasOwn(config, 'opticalTableRoughness')
      || hasOwn(config, 'opticalTableMetalness')
      || hasOwn(config, 'opticalTableEmissiveIntensity')
      || hasOwn(config, 'opticalTableToneMapped')
    );
    if (!shouldApplyTableConfig) return;

    for (const mesh of opticalTableMeshes) {
      mesh.userData.bloomExcluded = true;
      mesh.layers.disable(1);
      mesh.material = createMatteOpticalTableMaterial(mesh, config);
    }
  }

  function applyBboLightConfig(config) {
    if (!hasOwn(config, 'bboInternalLightMaxIntensity')) return;
    const maxIntensity = Number(config.bboInternalLightMaxIntensity);
    if (!Number.isFinite(maxIntensity) || maxIntensity <= 0) return;

    for (const entry of bboLights) {
      entry.light.intensity = Math.min(entry.baseIntensity, maxIntensity);
    }
  }

  return {
    opticalTableCount: opticalTableMeshes.length,
    bboLightCount: bboLights.length,
    applyVisualConfig(config = {}) {
      if (!hasModelVisualOverrides(config)) return;
      applyOpticalTableConfig(config);
      applyBboLightConfig(config);
    },
  };
}

function enhanceRuntimeGlow(root) {
  const entries = [];

  root.traverse((object) => {
    if (!object.isMesh) return;

    const role = getLightSourceRole(object.name || '');
    if (!role) return;

    if (shouldBloomForRole(role)) {
      object.layers.enable(1);
    } else {
      object.layers.disable(1);
      object.userData.bloomExcluded = true;
    }

    const sourceMaterials = Array.isArray(object.material) ? object.material : [object.material];
    const materials = sourceMaterials.filter(Boolean).map((source) => {
      const material = source.clone();
      const targetColor = colorForName(object.name, role);
      const baseColor = material.color?.clone() || null;
      const baseOpacity = material.opacity ?? 1;
      let baseIntensity = null;

      if (role === 'laserEmitterShell') {
        if (material.color) material.color.set(0xd2dbe4);
        if (material.emissive) material.emissive.set(0x000000);
        if ('emissiveIntensity' in material) material.emissiveIntensity = 0;
        if ('roughness' in material) material.roughness = Math.max(material.roughness ?? 0, 0.86);
        if ('metalness' in material) material.metalness = 0;
        if ('envMapIntensity' in material) material.envMapIntensity = 0;
      }

      if (material.emissive) {
        if (role !== 'laserEmitterShell') {
          if (material.emissive.getHex() === 0) material.emissive.copy(targetColor);
          material.emissive.lerp(targetColor, 0.5);
          baseIntensity = THREE.MathUtils.clamp(material.emissiveIntensity ?? 1, 0.48, 1.18);
          material.emissiveIntensity = baseIntensity * roleIntensityMultiplier(role, {});
        }
      } else if (material.color) {
        material.color.lerp(targetColor, role === 'laserBeam' || role === 'bbo' ? 0.44 : 0.18);
      }

      entries.push({
        material,
        baseIntensity,
        baseColor,
        baseOpacity,
        role,
        targetColor,
      });
      material.needsUpdate = true;
      return material;
    });

    if (materials.length > 0) object.material = Array.isArray(object.material) ? materials : materials[0];
  });

  let pulse = 0;
  let visual = {
    emissiveBase: 1,
    emissiveMax: 1.5,
    emissivePulse: 0.42,
    laserBeamIntensity: 0.58,
    laserBeamGlowOpacity: 0.42,
    laserEmitterIntensity: 0.18,
    laserEmitterGlowOpacity: 0.08,
    laserEmitterColor: 0xd2dbe4,
    bboIntensity: 0.46,
    bboGlowOpacity: 0.44,
    photonPathIntensity: 0.82,
    detectorGlowIntensity: 0.86,
  };

  function update(delta) {
    pulse = Math.max(0, pulse - delta * 0.78);
    for (const entry of entries) {
      const multiplier = roleIntensityMultiplier(entry.role, visual);
      const opacityMultiplier = roleOpacityMultiplier(entry.role, visual);

      if (entry.role === 'laserEmitterShell') {
        if (entry.material.color) entry.material.color.copy(colorFromConfig(visual.laserEmitterColor, 0xd2dbe4));
        if (entry.material.emissive) entry.material.emissive.set(0x000000);
        if ('emissiveIntensity' in entry.material) entry.material.emissiveIntensity = 0;
        if ('roughness' in entry.material) entry.material.roughness = 0.9;
        if ('metalness' in entry.material) entry.material.metalness = 0;
        if ('envMapIntensity' in entry.material) entry.material.envMapIntensity = 0;
        continue;
      }

      if (entry.baseIntensity !== null && entry.material.emissive) {
        const pulseFactor = (visual.emissiveBase ?? 1) + pulse * (visual.emissivePulse ?? 0.42);
        const target = entry.baseIntensity * pulseFactor * multiplier;
        const maxIntensity = (visual.emissiveMax ?? 1.5) * Math.max(multiplier, 0.12);
        entry.material.emissiveIntensity = Math.min(maxIntensity, target);
      }

      if (entry.baseColor && entry.material.color) {
        const tint = entry.targetColor || colorForName('', entry.role);
        const tintAmount = entry.role === 'laserBeam' || entry.role === 'bbo' ? 0.5 : 0.24;
        const colorBoost = 0.78 + multiplier * 0.3 + pulse * 0.06;
        entry.material.color.copy(entry.baseColor).lerp(tint, tintAmount).multiplyScalar(colorBoost);
      }

      if (entry.material.transparent && 'opacity' in entry.material) {
        entry.material.opacity = Math.min(entry.baseOpacity, entry.baseOpacity * opacityMultiplier);
      }
    }
  }

  return {
    count: entries.length,
    trigger(amount = 1) {
      pulse = Math.max(pulse, amount);
    },
    update,
    applyVisualConfig(nextVisual = {}) {
      visual = { ...visual, ...nextVisual };
      update(0);
    },
  };
}

function createAnchors(root, bounds) {
  return {
    center: bounds.getCenter(new THREE.Vector3()),
    laser: findFirst(root, ['laser_body_405nm', '405nm_laser', 'laser']),
    bbo: findFirst(root, ['BBO_crystal', 'BBO_inner_purple_cyan_core', 'bbo']),
    polarizer: findFirst(root, ['polarizer_A', 'polarizer_B', 'polarizer']),
    polarizerA: findFirst(root, ['polarizer_A']),
    polarizerB: findFirst(root, ['polarizer_B']),
    apd: findFirst(root, ['APD-A_glowing_window', 'APD-A', 'apd']),
    apdA: findFirst(root, ['APD-A_glowing_window', 'APD-A']),
    apdB: findFirst(root, ['APD-B_glowing_window', 'APD-B']),
    counter: findFirst(root, ['counter_screen', 'coincidence_counter_module', 'counter']),
    pathA: findFirst(root, ['entangled_photon_path_A_core_web_group', 'entangled_photon_path_A']),
    pathB: findFirst(root, ['entangled_photon_path_B_orange_core_web_group', 'entangled_photon_path_B']),
    photonA: findFirst(root, ['photon_A_0', 'photon_A']),
    photonB: findFirst(root, ['photon_B_0', 'photon_B']),
  };
}

function normalizeScene(gltfScene) {
  gltfScene.updateMatrixWorld(true);
  const initialBounds = tempBox.setFromObject(gltfScene);
  const initialSize = initialBounds.getSize(tempVector);
  const scale = MODEL_NORMALIZATION.targetSize / Math.max(initialSize.x, initialSize.y, initialSize.z, 0.001);
  gltfScene.scale.setScalar(scale);
  gltfScene.updateMatrixWorld(true);

  const scaledBounds = tempBox.setFromObject(gltfScene);
  const center = scaledBounds.getCenter(tempVector);
  gltfScene.position.sub(center);
  gltfScene.updateMatrixWorld(true);
}

function prepareModel(gltf) {
  const root = new THREE.Group();
  root.name = 'quantum_lab_model_root';
  root.add(gltf.scene);

  normalizeScene(gltf.scene);

  const bounds = new THREE.Box3().setFromObject(root);
  const size = bounds.getSize(new THREE.Vector3());
  const anchors = createAnchors(root, bounds);
  const modelVisualControls = createModelVisualControls(root);
  const runtimeGlow = enhanceRuntimeGlow(root);

  const mixer = new THREE.AnimationMixer(gltf.scene);
  let animationDuration = 0;
  for (const clip of gltf.animations || []) {
    clip.optimize();
    animationDuration = Math.max(animationDuration, clip.duration);
    const action = mixer.clipAction(clip);
    action.setLoop(THREE.LoopRepeat, Infinity);
    action.clampWhenFinished = false;
    action.play();
  }

  return {
    root,
    gltf,
    mixer,
    anchors,
    bounds,
    size,
    animationDuration,
    animationCount: gltf.animations?.length || 0,
    cameraCount: gltf.cameras?.length || 0,
    glowMaterialCount: runtimeGlow.count,
    animationTime: 0,
    update(delta) {
      mixer.update(delta);
      this.animationTime = mixer.time || (this.animationTime + delta);
      runtimeGlow.update(delta);
    },
    updateGlow: runtimeGlow.update,
    triggerGlow: runtimeGlow.trigger,
    applyVisualConfig(config = {}) {
      runtimeGlow.applyVisualConfig(config);
      modelVisualControls.applyVisualConfig(config);
    },
    applyModelConfig(config = {}) {
      if (typeof config.scale === 'number') root.scale.setScalar(config.scale);
      if (config.position) root.position.set(config.position.x || 0, config.position.y || 0, config.position.z || 0);
      if (config.rotation) root.rotation.set(config.rotation.x || 0, config.rotation.y || 0, config.rotation.z || 0);
      root.updateMatrixWorld(true);
    },
    setVisible(value) {
      root.visible = value;
    },
  };
}

function loadWithProgress(loader, url, onProgress, range) {
  return loader.loadAsync(url, (event) => {
    const ratio = event.total ? event.loaded / event.total : 0.5;
    const progress = range[0] + (range[1] - range[0]) * ratio;
    onProgress?.(progress, event.loaded, event.total || null);
  });
}

export async function loadQuantumModel({ onProgress, onSourceChange, assets = MODEL_ASSETS } = {}) {
  const { loader, dracoLoader } = createGLTFLoader();
  let gltf;
  let source = 'draco';
  const modelUrl = assets.modelUrl || MODEL_ASSETS.modelUrl;
  const fallbackUrl = assets.fallbackUrl || assets.modelFallbackUrl || MODEL_ASSETS.fallbackUrl;

  try {
    gltf = await loadWithProgress(loader, modelUrl, onProgress, [0, 0.94]);
  } catch (error) {
    if (!fallbackUrl || fallbackUrl === modelUrl) throw error;
    console.warn('Compressed GLB failed, falling back to uncompressed model.', error);
    source = 'uncompressed';
    onSourceChange?.(source);
    gltf = await loadWithProgress(loader, fallbackUrl, onProgress, [0.08, 0.94]);
  } finally {
    dracoLoader.dispose();
  }

  onProgress?.(0.98, null, null);
  const prepared = prepareModel(gltf);
  onProgress?.(1, null, null);

  return {
    ...prepared,
    source,
    modelUrl: source === 'draco' ? modelUrl : fallbackUrl,
  };
}

export const modelAssetInfo = MODEL_ASSETS;
