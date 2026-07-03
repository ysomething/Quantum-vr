import * as THREE from 'three';
import { THREE_D_MODE_CONFIG } from './visualConfig.js';
import { getRuntimeConfig } from './runtimeConfig.js';

const tempPosition = new THREE.Vector3();

function getAnchorPosition(anchor, fallback = new THREE.Vector3()) {
  if (!anchor) return fallback.clone();
  return anchor.getWorldPosition(tempPosition).clone();
}

function scaledCount(baseCount, ratio, minCount) {
  return Math.max(minCount, Math.round(baseCount * ratio));
}

function makeParticleField(scene, isMobile, config, runtime) {
  const particleRatio = runtime?.particleRatio ?? 1;
  const count = scaledCount(320, particleRatio, 160);
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const bases = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const palette = [
    new THREE.Color(0x5be9ff),
    new THREE.Color(0x8e72ff),
    new THREE.Color(0xd8f8ff),
  ];

  for (let i = 0; i < count; i += 1) {
    const offset = i * 3;
    const x = THREE.MathUtils.randFloatSpread(20);
    const y = THREE.MathUtils.randFloat(-2.2, 6.5);
    const z = THREE.MathUtils.randFloatSpread(16);
    positions.set([x, y, z], offset);
    bases.set([x, y, z], offset);
    const color = palette[i % palette.length].clone().multiplyScalar(THREE.MathUtils.randFloat(0.35, 0.82));
    colors.set([color.r, color.g, color.b], offset);
    phases[i] = Math.random() * Math.PI * 2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 0.056,
    sizeAttenuation: true,
    transparent: true,
    opacity: config.particleOpacity,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  points.layers.enable(1);
  scene.add(points);

  return { count, positions, bases, phases, geometry, material, points };
}

function createTrail(scene, curve, color, count, name, opacity) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setDrawRange(0, count);
  const material = new THREE.PointsMaterial({
    size: 0.12,
    transparent: true,
    opacity,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.name = name;
  points.frustumCulled = false;
  points.layers.enable(1);
  scene.add(points);

  return { curve, color, count, positions, colors, geometry, material, points, lastHead: 0 };
}

function makeTrailCurve(start, middle, end) {
  const p1 = start.clone().lerp(middle, 0.48).add(new THREE.Vector3(0, 0.09, 0));
  const p2 = middle.clone();
  const p3 = middle.clone().lerp(end, 0.54).add(new THREE.Vector3(0, 0.05, 0));
  return new THREE.CatmullRomCurve3([start, p1, p2, p3, end], false, 'centripetal');
}

function createBeam(scene, curve, color, radius, name, opacity) {
  const geometry = new THREE.TubeGeometry(curve, 72, radius, 9, false);
  const material = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = name;
  mesh.layers.enable(1);
  scene.add(mesh);
  return { mesh, material, baseOpacity: opacity, originalBaseOpacity: opacity };
}

function makePulsePool(scene, center, camera, config, runtime, isMobile) {
  const group = new THREE.Group();
  group.position.copy(center);
  scene.add(group);

  const pulsePool = [];
  const pulseCount = 4;
  const pulseRadiusScale = config.bboPulseRadiusScale ?? 1;
  const auraRadiusScale = config.bboAuraRadiusScale ?? 1;
  const bboGlowOpacity = config.bboGlowOpacity ?? config.bboAuraOpacity;
  for (let i = 0; i < pulseCount; i += 1) {
    const material = new THREE.MeshBasicMaterial({
      color: i % 2 ? 0x7c6dff : 0x42e9ff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.31 * pulseRadiusScale, 0.39 * pulseRadiusScale, 80),
      material,
    );
    ring.layers.enable(1);
    ring.visible = false;
    group.add(ring);
    pulsePool.push({ ring, material, active: false, startedAt: 0, strength: 1 });
  }

  const aura = new THREE.Mesh(
    new THREE.SphereGeometry(0.38 * auraRadiusScale, 28, 18),
    new THREE.MeshBasicMaterial({
      color: 0x5beaff,
      transparent: true,
      opacity: bboGlowOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  aura.layers.enable(1);
  group.add(aura);

  const pulseLight = new THREE.PointLight(0x52eaff, 0, 5.2, 2);
  pulseLight.layers.enable(1);
  group.add(pulseLight);

  return { group, pulsePool, aura, pulseLight, camera, cursor: 0, lightEnergy: 0 };
}

function makeDetectorFlash(scene, anchor, color) {
  const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.13, 16, 10),
    new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  mesh.position.copy(getAnchorPosition(anchor));
  mesh.visible = false;
  mesh.layers.enable(1);
  scene.add(mesh);
  return { mesh, anchor, energy: 0 };
}

export function createQuantumEffects({
  scene,
  camera,
  anchors,
  isMobile,
  reducedMotion,
  visualConfig = THREE_D_MODE_CONFIG.effects,
  runtimeConfig,
}) {
  const runtime = runtimeConfig || getRuntimeConfig();
  const particles = makeParticleField(scene, isMobile, visualConfig, runtime);
  const bboPosition = getAnchorPosition(anchors.bbo, anchors.center);
  const polarizerAPosition = getAnchorPosition(anchors.polarizerA, new THREE.Vector3(1.3, 0.4, -1));
  const polarizerBPosition = getAnchorPosition(anchors.polarizerB, new THREE.Vector3(1.3, 0.4, 1));
  const apdAPosition = getAnchorPosition(anchors.apdA, new THREE.Vector3(4, 0.4, -1.3));
  const apdBPosition = getAnchorPosition(anchors.apdB, new THREE.Vector3(4, 0.4, 1.3));
  const laserPosition = getAnchorPosition(anchors.laser, new THREE.Vector3(-4, 0.4, 0));

  const trailRatio = runtime?.trailRatio ?? 1;
  const trailCount = scaledCount(40, trailRatio, 24);
  const curveA = makeTrailCurve(bboPosition, polarizerAPosition, apdAPosition);
  const curveB = makeTrailCurve(bboPosition, polarizerBPosition, apdBPosition);
  const trailA = createTrail(scene, curveA, new THREE.Color(0x3af2ff), trailCount, 'runtime_photon_trail_A', visualConfig.trailOpacity);
  const trailB = createTrail(scene, curveB, new THREE.Color(0xc16cff), trailCount, 'runtime_photon_trail_B', visualConfig.trailOpacity);
  const pumpBeamOpacity = visualConfig.laserBeamGlowOpacity ?? visualConfig.pumpBeamOpacity;
  const pumpBeamRadiusScale = visualConfig.laserBeamRadiusScale ?? 1;

  const beams = [
    createBeam(
      scene,
      new THREE.CatmullRomCurve3([laserPosition, laserPosition.clone().lerp(bboPosition, 0.58), bboPosition], false, 'centripetal'),
      0x7f8cff,
      0.024 * pumpBeamRadiusScale,
      'runtime_405nm_pump_beam',
      pumpBeamOpacity,
    ),
    createBeam(scene, curveA, 0x38f2ff, 0.022, 'runtime_entangled_beam_A', visualConfig.entangledBeamAOpacity),
    createBeam(scene, curveB, 0xc16cff, 0.022, 'runtime_entangled_beam_B', visualConfig.entangledBeamBOpacity),
  ];

  const pulseSystem = makePulsePool(scene, bboPosition, camera, visualConfig, runtime, isMobile);
  const flashA = makeDetectorFlash(scene, anchors.apdA, 0x46efff);
  const flashB = makeDetectorFlash(scene, anchors.apdB, 0xd177ff);
  let lastAmbientPulse = -99;
  let lastAnimationTime = 0;
  let climaxEnergy = 0;
  let performanceMode = runtime.defaultPerformanceMode || 'quality';
  let qualityOpacityScale = 1;

  function triggerBboPulse(strength = 1, elapsed = 0) {
    const pulse = pulseSystem.pulsePool[pulseSystem.cursor % pulseSystem.pulsePool.length];
    pulseSystem.cursor += 1;
    const pulseMaxOpacity = visualConfig.bboPulseOpacity ?? visualConfig.pulseMaxOpacity;
    pulse.active = true;
    pulse.startedAt = elapsed;
    pulse.strength = strength;
    pulse.ring.visible = true;
    pulse.ring.scale.setScalar(0.52);
    pulse.material.opacity = Math.min(pulseMaxOpacity * qualityOpacityScale, 0.18 * strength * qualityOpacityScale);
    pulseSystem.lightEnergy = Math.max(pulseSystem.lightEnergy, strength);
  }

  function triggerDetectorFlash(flash, amount = 1) {
    flash.energy = Math.max(flash.energy, amount);
    flash.mesh.visible = true;
  }

  function updateTrail(trail, animationTime, delta, flash) {
    const startsAt = 4.35;
    const endsAt = 15.6;
    const active = animationTime >= startsAt && animationTime <= endsAt;
    trail.points.visible = active || climaxEnergy > 0.05;
    if (!trail.points.visible) {
      trail.lastHead = 0;
      return;
    }

    const period = 2.85;
    const head = active ? ((animationTime - startsAt) % period) / period : 0.96;
    const brightness = 1 + climaxEnergy * 1.65;
    const visibleCount = trail.count;
    trail.geometry.setDrawRange(0, visibleCount);

    for (let i = 0; i < trail.count; i += 1) {
      const trailU = head - i * 0.019;
      const offset = i * 3;
      if (trailU < 0 || i >= visibleCount) {
        const start = trail.curve.getPointAt(0);
        trail.positions.set([start.x, start.y, start.z], offset);
        trail.colors.set([0, 0, 0], offset);
        continue;
      }
      const point = trail.curve.getPointAt(Math.min(trailU, 1));
      const fade = Math.max(0, 1 - i / visibleCount) * brightness;
      trail.positions.set([point.x, point.y, point.z], offset);
      trail.colors.set([trail.color.r * fade, trail.color.g * fade, trail.color.b * fade], offset);
    }

    trail.geometry.attributes.position.needsUpdate = true;
    trail.geometry.attributes.color.needsUpdate = true;
    trail.material.size = 0.13 * (1 + climaxEnergy * 0.46);

    if (head >= 0.94 && trail.lastHead < 0.94) triggerDetectorFlash(flash, 1 + climaxEnergy);
    trail.lastHead = head;
    flash.energy = Math.max(0, flash.energy - delta * 3.4);
    flash.mesh.material.opacity = Math.min(0.82, flash.energy * 0.62);
    flash.mesh.scale.setScalar(0.8 + flash.energy * 1.8);
    flash.mesh.visible = flash.energy > 0.01;
    if (flash.anchor) flash.mesh.position.copy(getAnchorPosition(flash.anchor));
  }

  function updateParticles(elapsed, delta) {
    const speed = reducedMotion ? 0.12 : 1 + climaxEnergy * 3.2;
    const visibleCount = particles.count;
    particles.geometry.setDrawRange(0, visibleCount);
    for (let i = 0; i < visibleCount; i += 1) {
      const offset = i * 3;
      const phase = particles.phases[i];
      particles.positions[offset] = particles.bases[offset] + Math.sin(elapsed * 0.11 * speed + phase) * 0.22;
      particles.positions[offset + 1] = particles.bases[offset + 1] + Math.sin(elapsed * 0.16 * speed + phase) * 0.16;
      particles.positions[offset + 2] = particles.bases[offset + 2] + Math.cos(elapsed * 0.09 * speed + phase) * 0.2;
    }
    particles.geometry.attributes.position.needsUpdate = true;
    const baseOpacity = visualConfig.particleOpacity;
    particles.material.opacity = baseOpacity + Math.min(0.28, climaxEnergy * 0.28);
    particles.points.rotation.y += delta * 0.006 * speed;
  }

  function updateBeams(elapsed) {
    const pulse = 0.5 + Math.sin(elapsed * 3.1) * 0.5;
    beams.forEach((beam, index) => {
      const climaxBoost = 1 + climaxEnergy * (index === 0 ? 1.15 : 1.75);
      const intensity = index === 0 ? (visualConfig.laserBeamIntensity ?? 1) : 1;
      const opacityLimit = index === 0 ? (visualConfig.laserBeamMaxOpacity ?? 0.32) : 0.58;
      beam.material.opacity = Math.min(
        opacityLimit,
        beam.baseOpacity * intensity * qualityOpacityScale * (0.72 + pulse * 0.38) * climaxBoost,
      );
    });
  }

  function updatePulses(elapsed, delta) {
    const bboGlowOpacity = visualConfig.bboGlowOpacity ?? visualConfig.bboAuraOpacity;
    const pulseMaxOpacity = visualConfig.bboPulseOpacity ?? visualConfig.pulseMaxOpacity;
    const pulseRadiusScale = visualConfig.bboPulseRadiusScale ?? 1;
    pulseSystem.group.position.copy(getAnchorPosition(anchors.bbo, bboPosition));
    pulseSystem.aura.scale.setScalar(1.08 + Math.sin(elapsed * 2.1) * 0.14 + climaxEnergy * 0.26);
    pulseSystem.aura.material.opacity = Math.min(0.12, (
      bboGlowOpacity * 0.62
      + Math.sin(elapsed * 2.1) * 0.026
      + climaxEnergy * 0.07
    ) * qualityOpacityScale);

    for (const pulse of pulseSystem.pulsePool) {
      if (!pulse.active) continue;
      const age = (elapsed - pulse.startedAt) / (1.35 + pulse.strength * 0.12);
      if (age >= 1) {
        pulse.active = false;
        pulse.ring.visible = false;
        pulse.material.opacity = 0;
        continue;
      }
      const eased = 1 - (1 - age) ** 3;
      pulse.ring.quaternion.copy(camera.quaternion);
      pulse.ring.scale.setScalar(0.56 + eased * (2 + pulse.strength * 0.42) * pulseRadiusScale);
      pulse.material.opacity = Math.min(
        pulseMaxOpacity * qualityOpacityScale,
        (1 - age) ** 1.65 * 0.2 * pulse.strength * qualityOpacityScale,
      );
    }

    pulseSystem.lightEnergy = Math.max(0, pulseSystem.lightEnergy - delta * 2.2);
    pulseSystem.pulseLight.intensity = pulseSystem.lightEnergy * (visualConfig.bboPulseLightIntensity ?? 1.1) * qualityOpacityScale;
  }

  function update(delta, elapsed, animationTime) {
    if (elapsed - lastAmbientPulse > 2.65) {
      triggerBboPulse(0.68, elapsed);
      lastAmbientPulse = elapsed;
    }

    if ((lastAnimationTime < 4.35 && animationTime >= 4.35) || animationTime < lastAnimationTime - 1) {
      triggerBboPulse(1.55, elapsed);
    }
    lastAnimationTime = animationTime;

    climaxEnergy = Math.max(0, climaxEnergy - delta * 0.38);
    updatePulses(elapsed, delta);
    updateBeams(elapsed);
    updateTrail(trailA, animationTime, delta, flashA);
    updateTrail(trailB, animationTime, delta, flashB);
    updateParticles(elapsed, delta);
  }

  function triggerClimax(elapsed = 0) {
    climaxEnergy = 1.38;
    triggerBboPulse(2.2, elapsed);
    triggerDetectorFlash(flashA, 2.1);
    triggerDetectorFlash(flashB, 2.1);
  }

  function setPerformanceMode(mode) {
    performanceMode = mode || 'quality';
    qualityOpacityScale = 1;
    particles.material.size = 0.056;
    particles.material.opacity = visualConfig.particleOpacity;
    trailA.material.opacity = visualConfig.trailOpacity * qualityOpacityScale;
    trailB.material.opacity = visualConfig.trailOpacity * qualityOpacityScale;
    beams.forEach((beam) => {
      beam.baseOpacity = beam.originalBaseOpacity;
    });
  }

  setPerformanceMode(performanceMode);

  return {
    update,
    triggerBboPulse,
    triggerClimax,
    setPerformanceMode,
    get performanceMode() {
      return performanceMode;
    },
    stats: {
      backgroundParticles: particles.count,
      trailParticles: trailA.count + trailB.count,
    },
  };
}
