import * as THREE from 'three';
import { AR_CONFIG, mergeARConfig } from './arConfig.js';

const tempWorld = new THREE.Vector3();
const tempLocal = new THREE.Vector3();

function getLocalPosition(anchor, root, fallback = new THREE.Vector3()) {
  if (!anchor) return fallback.clone();
  anchor.updateWorldMatrix(true, false);
  root.updateWorldMatrix(true, false);
  anchor.getWorldPosition(tempWorld);
  tempLocal.copy(tempWorld);
  root.worldToLocal(tempLocal);
  return tempLocal.clone();
}

function lowFactor(kind, lowBrightnessMode) {
  if (!lowBrightnessMode) return 1;
  const factors = { bloom: 0.5, ring: 0.42, particle: 0.5, text: 0.7, trail: 0.55, beam: 0.68, bbo: 0.45 };
  return factors[kind] ?? 1;
}

function colorFromVisual(value, fallback) {
  if (value?.isColor) return value.clone();
  return new THREE.Color(value ?? fallback);
}

function getOpticalPathColors(visual = AR_CONFIG.visual) {
  return {
    pump: colorFromVisual(visual.laserBeamColor, 0x7a6cff),
    pumpGlow: colorFromVisual(visual.laserBeamGlowColor, 0x6d7cff),
    photonA: colorFromVisual(visual.photonPathAColor, 0x5fe8ff),
    photonB: colorFromVisual(visual.photonPathBColor, 0xcf8cff),
    bbo: colorFromVisual(visual.bboColor, 0xb8f3ff),
  };
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function createCanvasTextTexture(lines) {
  const width = 1024;
  const height = 384;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, 'rgba(75, 240, 255, 0.78)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.88)');
  gradient.addColorStop(1, 'rgba(196, 111, 255, 0.76)');
  ctx.fillStyle = 'rgba(3, 7, 18, 0.34)';
  ctx.strokeStyle = 'rgba(98, 234, 255, 0.26)';
  ctx.lineWidth = 4;
  roundRect(ctx, 24, 24, width - 48, height - 48, 42);
  ctx.fill();
  ctx.stroke();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(76, 232, 255, 0.48)';
  ctx.shadowBlur = 12;
  ctx.fillStyle = gradient;
  ctx.font = '900 108px "Microsoft YaHei", "PingFang SC", sans-serif';
  ctx.fillText(lines[0], width / 2, height * 0.42);
  ctx.shadowBlur = 5;
  ctx.font = '700 42px "Microsoft YaHei", "PingFang SC", sans-serif';
  ctx.fillText(lines[1], width / 2, height * 0.68);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function createTargetPortal(anchorGroup, visual) {
  const group = new THREE.Group();
  group.name = 'ar_quantum_target_portal';
  group.position.z = 0.012;
  anchorGroup.add(group);

  const rings = [];
  const portalScale = visual.portalScale ?? 0.62;
  for (let i = 0; i < 4; i += 1) {
    const material = new THREE.MeshBasicMaterial({
      color: i % 2 ? 0x9a63ff : 0x42e9ff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const inner = (0.18 + i * 0.07) * portalScale;
    const outer = (0.195 + i * 0.07) * portalScale;
    const ring = new THREE.Mesh(new THREE.RingGeometry(inner, outer, 96), material);
    group.add(ring);
    rings.push({ mesh: ring, material, phase: i * 0.58 });
  }

  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(0.42 * portalScale, 96),
    new THREE.MeshBasicMaterial({
      color: 0x42eaff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  group.add(disc);

  return {
    group,
    rings,
    disc,
    energy: 0,
    trigger() {
      this.energy = 0.72;
    },
    update(delta, elapsed, visible, currentVisual, lowBrightnessMode) {
      this.energy = Math.max(0, this.energy - delta * 0.48);
      group.visible = visible || this.energy > 0.02;
      const ringMax = lowBrightnessMode ? Math.min(0.05, currentVisual.ringOpacity * lowFactor('ring', true)) : currentVisual.ringOpacity;
      const base = visible ? ringMax * 0.58 : ringMax * 0.16;
      const bloom = currentVisual.bloomStrength * lowFactor('bloom', lowBrightnessMode);
      rings.forEach((ring, index) => {
        const wave = 0.5 + Math.sin(elapsed * (1.3 + index * 0.2) + ring.phase) * 0.5;
        ring.mesh.rotation.z += delta * (0.35 + index * 0.12);
        ring.mesh.scale.setScalar(1 + this.energy * (0.52 + index * 0.12) + wave * 0.035);
        ring.material.opacity = Math.min(ringMax, base * (0.66 + wave * 0.28) + this.energy * ringMax * bloom);
      });
      disc.scale.setScalar(1 + this.energy * 0.7);
      disc.material.opacity = Math.min(
        currentVisual.targetFlashOpacity * lowFactor('ring', lowBrightnessMode),
        (visible ? 0.018 : 0.008) + this.energy * 0.045,
      );
    },
  };
}

function makeTrailCurve(start, middle, end) {
  const p1 = start.clone().lerp(middle, 0.48).add(new THREE.Vector3(0, 0.09, 0));
  const p2 = middle.clone();
  const p3 = middle.clone().lerp(end, 0.54).add(new THREE.Vector3(0, 0.05, 0));
  return new THREE.CatmullRomCurve3([start, p1, p2, p3, end], false, 'centripetal');
}

function createBeam(root, curve, color, radius, name, opacity) {
  const geometry = new THREE.TubeGeometry(curve, 72, radius, 9, false);
  const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  root.add(mesh);
  return { mesh, material, baseOpacity: opacity };
}

function createTrail(root, curve, color, count, name, visual) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 0.095,
    transparent: true,
    opacity: visual.trailOpacity,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.name = name;
  points.frustumCulled = false;
  root.add(points);
  return { curve, color, count, positions, colors, geometry, material, points };
}

function createParticleField(root, isMobile, visual) {
  const count = isMobile ? 110 : 190;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const bases = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const palette = [new THREE.Color(0x4aeaff), new THREE.Color(0x9c70ff), new THREE.Color(0xe9fbff)];
  for (let i = 0; i < count; i += 1) {
    const offset = i * 3;
    const x = THREE.MathUtils.randFloatSpread(8.8);
    const y = THREE.MathUtils.randFloat(0.05, 3.8);
    const z = THREE.MathUtils.randFloatSpread(4.8);
    positions.set([x, y, z], offset);
    bases.set([x, y, z], offset);
    const color = palette[i % palette.length].clone().multiplyScalar(THREE.MathUtils.randFloat(0.28, 0.66));
    colors.set([color.r, color.g, color.b], offset);
    phases[i] = Math.random() * Math.PI * 2;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: isMobile ? 0.056 : 0.07,
    transparent: true,
    opacity: visual.particleOpacity,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  root.add(points);
  return { count, positions, bases, phases, geometry, material, points };
}

function createBboPulse(root, bboPosition, visual) {
  const colors = getOpticalPathColors(visual);
  const group = new THREE.Group();
  group.name = 'ar_bbo_pulse_system';
  group.position.copy(bboPosition);
  root.add(group);
  const rings = [];
  for (let i = 0; i < 4; i += 1) {
    const material = new THREE.MeshBasicMaterial({
      color: i % 2 ? colors.photonB : colors.photonA,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.22, 80), material);
    ring.visible = false;
    group.add(ring);
    rings.push({ ring, material, active: false, startedAt: 0, strength: 1 });
  }
  const aura = new THREE.Mesh(
    new THREE.SphereGeometry(0.26, 28, 18),
    new THREE.MeshBasicMaterial({ color: colors.bbo, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  group.add(aura);
  return { group, rings, aura, cursor: 0 };
}

function createTextPanel(anchorGroup, visual) {
  const texture = createCanvasTextTexture(['S > 2', '突破经典上限 S ≤ 2']);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    depthTest: false,
    blending: THREE.NormalBlending,
  });
  const sprite = new THREE.Sprite(material);
  sprite.name = 'ar_spatial_s_greater_than_2_panel';
  sprite.position.set(visual.textPosition.x, visual.textPosition.y, visual.textPosition.z);
  sprite.scale.set(0.82 * visual.textScale, 0.31 * visual.textScale, 1);
  sprite.visible = false;
  anchorGroup.add(sprite);
  return { sprite, material, energy: 0 };
}

export function createQuantumAREffects({ anchorGroup, modelRoot, camera, anchors, isMobile, arConfig = AR_CONFIG, lowBrightnessMode = false }) {
  let runtimeConfig = mergeARConfig(AR_CONFIG, arConfig);
  let visual = runtimeConfig.visual;
  let lowBrightness = lowBrightnessMode;

  const bboPosition = getLocalPosition(anchors.bbo, modelRoot, new THREE.Vector3(0, 2.2, 0));
  const laserPosition = getLocalPosition(anchors.laser, modelRoot, new THREE.Vector3(-4, 1.2, 0));
  const polarizerAPosition = getLocalPosition(anchors.polarizerA, modelRoot, new THREE.Vector3(1.2, 1.2, -1));
  const polarizerBPosition = getLocalPosition(anchors.polarizerB, modelRoot, new THREE.Vector3(1.2, 1.2, 1));
  const apdAPosition = getLocalPosition(anchors.apdA, modelRoot, new THREE.Vector3(4, 1.2, -1.4));
  const apdBPosition = getLocalPosition(anchors.apdB, modelRoot, new THREE.Vector3(4, 1.2, 1.4));

  const portal = createTargetPortal(anchorGroup, visual);
  const particles = createParticleField(modelRoot, isMobile, visual);
  let opticalColors = getOpticalPathColors(visual);
  const pulse = createBboPulse(modelRoot, bboPosition, visual);
  const textPanel = createTextPanel(anchorGroup, visual);
  const curveA = makeTrailCurve(bboPosition, polarizerAPosition, apdAPosition);
  const curveB = makeTrailCurve(bboPosition, polarizerBPosition, apdBPosition);
  const trailCount = isMobile ? 20 : 34;
  const trailA = createTrail(modelRoot, curveA, opticalColors.photonA.clone(), trailCount, 'ar_photon_trail_A', visual);
  const trailB = createTrail(modelRoot, curveB, opticalColors.photonB.clone(), trailCount, 'ar_photon_trail_B', visual);
  const beams = [
    createBeam(modelRoot, new THREE.CatmullRomCurve3([laserPosition, laserPosition.clone().lerp(bboPosition, 0.58), bboPosition], false, 'centripetal'), opticalColors.pump, 0.018, 'ar_405nm_pump_beam', visual.beamOpacity * 0.9),
    createBeam(modelRoot, curveA, opticalColors.photonA, 0.017, 'ar_entangled_beam_A', visual.beamOpacity),
    createBeam(modelRoot, curveB, opticalColors.photonB, 0.017, 'ar_entangled_beam_B', visual.beamOpacity * 0.95),
  ];

  let climaxEnergy = 0;
  let visible = false;
  let performanceMode = 'normal';
  let lastPulse = -99;
  let lastClimax = -99;

  function effectiveBloom() {
    return visual.bloomStrength * lowFactor('bloom', lowBrightness);
  }

  function effectiveOpacity(kind, value) {
    return value * lowFactor(kind, lowBrightness);
  }

  function applyTextTransform(elapsed = 0) {
    const float = Math.sin(elapsed * 1.6) * 0.018;
    const scalePulse = 1 + textPanel.energy * 0.045;
    textPanel.sprite.position.set(visual.textPosition.x, visual.textPosition.y, visual.textPosition.z + float);
    textPanel.sprite.scale.set(0.82 * visual.textScale * scalePulse, 0.31 * visual.textScale * scalePulse, 1);
  }

  function refreshBeamBaseOpacity() {
    beams[0].baseOpacity = Math.min(0.24, Math.max(visual.beamOpacity * 0.9, visual.laserCoreOpacity ?? 0));
    beams[1].baseOpacity = Math.min(0.26, Math.max(visual.beamOpacity, visual.photonCoreOpacity ?? 0));
    beams[2].baseOpacity = Math.min(0.26, Math.max(visual.beamOpacity * 0.95, (visual.photonCoreOpacity ?? 0) * 0.96));
  }

  function refreshOpticalColors() {
    opticalColors = getOpticalPathColors(visual);
    beams[0].material.color.copy(opticalColors.pump);
    beams[1].material.color.copy(opticalColors.photonA);
    beams[2].material.color.copy(opticalColors.photonB);
    trailA.color.copy(opticalColors.photonA);
    trailB.color.copy(opticalColors.photonB);
    pulse.aura.material.color.copy(opticalColors.bbo);
    pulse.rings.forEach((item, index) => {
      item.material.color.copy(index % 2 ? opticalColors.photonB : opticalColors.photonA);
    });
  }

  function triggerBboPulse(strength = 1, elapsed = 0) {
    const item = pulse.rings[pulse.cursor % pulse.rings.length];
    pulse.cursor += 1;
    item.active = true;
    item.startedAt = elapsed;
    item.strength = strength;
    item.ring.visible = true;
    item.ring.scale.setScalar(0.42);
    item.material.opacity = Math.min(effectiveOpacity('bbo', visual.bboPulseOpacity) * 1.2, visual.bboPulseOpacity * strength);
  }

  function updateTrail(trail, elapsed) {
    trail.points.visible = visible;
    const targetOpacity = Math.min(
      0.3,
      Math.max(effectiveOpacity('trail', visual.trailOpacity), (visual.photonCoreOpacity ?? 0) * 0.72 * lowFactor('trail', lowBrightness)),
    );
    trail.material.opacity = visible ? targetOpacity : 0;
    if (!visible) return;
    const period = 2.65;
    const head = (elapsed % period) / period;
    const visibleCount = performanceMode === 'low' ? Math.ceil(trail.count * 0.54) : trail.count;
    const intensity = (0.64 + effectiveBloom() * 0.38 + climaxEnergy * 0.35) * lowFactor('trail', lowBrightness);
    for (let i = 0; i < trail.count; i += 1) {
      const trailU = head - i * 0.034;
      const offset = i * 3;
      if (trailU < 0 || i >= visibleCount) {
        const start = trail.curve.getPointAt(0);
        trail.positions.set([start.x, start.y, start.z], offset);
        trail.colors.set([0, 0, 0], offset);
        continue;
      }
      const point = trail.curve.getPointAt(Math.min(trailU, 1));
      const fade = Math.max(0, 1 - i / visibleCount) * intensity;
      trail.positions.set([point.x, point.y, point.z], offset);
      trail.colors.set([trail.color.r * fade, trail.color.g * fade, trail.color.b * fade], offset);
    }
    trail.geometry.setDrawRange(0, visibleCount);
    trail.geometry.attributes.position.needsUpdate = true;
    trail.geometry.attributes.color.needsUpdate = true;
    trail.material.size = (isMobile ? 0.075 : 0.092) * (1 + climaxEnergy * 0.16);
  }

  function updateParticles(delta, elapsed) {
    const visibleCount = performanceMode === 'low' ? Math.floor(particles.count * 0.48) : particles.count;
    particles.geometry.setDrawRange(0, visible ? visibleCount : 0);
    for (let i = 0; i < visibleCount; i += 1) {
      const offset = i * 3;
      const phase = particles.phases[i];
      particles.positions[offset] = particles.bases[offset] + Math.sin(elapsed * 0.7 + phase) * 0.18;
      particles.positions[offset + 1] = particles.bases[offset + 1] + Math.sin(elapsed * 1.05 + phase) * 0.14;
      particles.positions[offset + 2] = particles.bases[offset + 2] + Math.cos(elapsed * 0.62 + phase) * 0.18;
    }
    particles.geometry.attributes.position.needsUpdate = true;
    const performanceFactor = performanceMode === 'low' ? 0.62 : 1;
    const opacity = effectiveOpacity('particle', visual.particleOpacity) * performanceFactor * (1 + climaxEnergy * 0.16);
    particles.material.opacity = visible ? Math.min(0.36, opacity) : 0;
    particles.points.rotation.y += delta * 0.015;
  }

  function updatePulse(delta, elapsed) {
    pulse.aura.scale.setScalar(0.92 + Math.sin(elapsed * 2.4) * 0.08 + climaxEnergy * 0.16);
    pulse.aura.material.opacity = visible
      ? Math.min(0.18, effectiveOpacity('bbo', visual.bboAuraOpacity) + Math.sin(elapsed * 2.1) * 0.012 + climaxEnergy * 0.045)
      : 0;
    for (const item of pulse.rings) {
      if (!item.active) continue;
      const age = (elapsed - item.startedAt) / (1.05 + item.strength * 0.1);
      if (age >= 1) {
        item.active = false;
        item.ring.visible = false;
        item.material.opacity = 0;
        continue;
      }
      const eased = 1 - (1 - age) ** 3;
      item.ring.quaternion.copy(camera.quaternion);
      item.ring.scale.setScalar(0.46 + eased * (1.15 + item.strength * 0.28));
      item.material.opacity = Math.min(
        visual.bboPulseOpacity * 1.45,
        (1 - age) ** 1.7 * effectiveOpacity('bbo', visual.bboPulseOpacity) * item.strength,
      );
    }
  }

  function updateBeams(elapsed) {
    const wave = 0.5 + Math.sin(elapsed * 3.4) * 0.5;
    beams.forEach((beam, index) => {
      beam.mesh.visible = visible;
      const climaxBoost = 1 + climaxEnergy * (index === 0 ? 0.28 : 0.52);
      beam.material.opacity = Math.min(
        beam.baseOpacity * 1.45,
        effectiveOpacity('beam', beam.baseOpacity) * (0.72 + wave * 0.28) * climaxBoost,
      );
    });
  }

  function updateText(delta, elapsed) {
    textPanel.energy = Math.max(0, textPanel.energy - delta * 0.34);
    textPanel.sprite.visible = visible || textPanel.energy > 0.03;
    const maxTextOpacity = effectiveOpacity('text', visual.textOpacity);
    textPanel.material.opacity = visible
      ? Math.min(maxTextOpacity, maxTextOpacity * (0.5 + textPanel.energy * 0.42))
      : textPanel.energy * maxTextOpacity * 0.28;
    applyTextTransform(elapsed);
  }

  function triggerClimax(elapsed = 0) {
    if (!visible) return;
    climaxEnergy = 0.75;
    lastClimax = elapsed;
    textPanel.energy = 1;
    triggerBboPulse(1.25, elapsed);
  }

  refreshBeamBaseOpacity();
  refreshOpticalColors();

  return {
    update(delta, elapsed) {
      climaxEnergy = Math.max(0, climaxEnergy - delta * 0.42);
      if (visible && elapsed - lastPulse > 2.7) {
        triggerBboPulse(0.68, elapsed);
        lastPulse = elapsed;
      }
      if (visible && elapsed - lastClimax > 9.6) triggerClimax(elapsed);
      portal.update(delta, elapsed, visible, visual, lowBrightness);
      updatePulse(delta, elapsed);
      updateBeams(elapsed);
      updateTrail(trailA, elapsed);
      updateTrail(trailB, elapsed + 0.22);
      updateParticles(delta, elapsed);
      updateText(delta, elapsed);
    },
    triggerClimax,
    triggerFound(elapsed = 0) {
      visible = true;
      portal.trigger();
      triggerBboPulse(1.05, elapsed);
      window.setTimeout(() => {
        if (visible) triggerClimax(elapsed + 1.2);
      }, 1200);
    },
    setTargetVisible(value) {
      visible = value;
      if (!value) beams.forEach((beam) => { beam.mesh.visible = false; });
    },
    setPerformanceMode(mode) {
      performanceMode = mode;
      particles.material.size = mode === 'low' ? (isMobile ? 0.046 : 0.056) : (isMobile ? 0.056 : 0.07);
    },
    setLowBrightnessMode(enabled) {
      lowBrightness = enabled;
    },
    applyVisualConfig(nextVisualConfig = AR_CONFIG.visual) {
      runtimeConfig = mergeARConfig(AR_CONFIG, { ...runtimeConfig, visual: nextVisualConfig });
      visual = runtimeConfig.visual;
      refreshBeamBaseOpacity();
      refreshOpticalColors();
      applyTextTransform();
    },
    stats: {
      backgroundParticles: particles.count,
      trailParticles: trailA.count + trailB.count,
    },
  };
}
