import * as THREE from 'three';

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

function createCanvasTextTexture(lines, options = {}) {
  const width = options.width || 1024;
  const height = options.height || 384;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, 'rgba(75, 240, 255, 0.92)');
  gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.96)');
  gradient.addColorStop(1, 'rgba(196, 111, 255, 0.9)');
  ctx.fillStyle = 'rgba(3, 7, 18, 0.4)';
  ctx.strokeStyle = 'rgba(98, 234, 255, 0.42)';
  ctx.lineWidth = 5;
  roundRect(ctx, 24, 24, width - 48, height - 48, 42);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(76, 232, 255, 0.85)';
  ctx.shadowBlur = 28;
  ctx.fillStyle = gradient;
  ctx.font = '900 120px "Microsoft YaHei", "PingFang SC", sans-serif';
  ctx.fillText(lines[0], width / 2, height * 0.42);
  ctx.shadowBlur = 14;
  ctx.font = '700 46px "Microsoft YaHei", "PingFang SC", sans-serif';
  ctx.fillText(lines[1], width / 2, height * 0.68);

  const texture = new THREE.CanvasTexture(canvas);
  if ('colorSpace' in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  } else if ('encoding' in texture && THREE.sRGBEncoding) {
    texture.encoding = THREE.sRGBEncoding;
  }
  texture.needsUpdate = true;
  return texture;
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

function createTargetPortal(anchorGroup) {
  const group = new THREE.Group();
  group.name = 'ar_quantum_target_portal';
  group.position.z = 0.012;
  anchorGroup.add(group);

  const rings = [];
  for (let i = 0; i < 4; i += 1) {
    const material = new THREE.MeshBasicMaterial({
      color: i % 2 ? 0x9a63ff : 0x42e9ff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.18 + i * 0.07, 0.195 + i * 0.07, 96), material);
    ring.name = `target_energy_ring_${i + 1}`;
    group.add(ring);
    rings.push({ mesh: ring, material, phase: i * 0.58 });
  }

  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(0.42, 96),
    new THREE.MeshBasicMaterial({
      color: 0x42eaff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  disc.name = 'target_energy_disc';
  group.add(disc);

  return {
    group,
    rings,
    disc,
    energy: 0,
    trigger() {
      this.energy = 1;
    },
    update(delta, elapsed, visible) {
      this.energy = Math.max(0, this.energy - delta * 0.38);
      group.visible = visible || this.energy > 0.02;
      const base = visible ? 0.34 : 0.08;
      rings.forEach((ring, index) => {
        const wave = 0.5 + Math.sin(elapsed * (1.3 + index * 0.2) + ring.phase) * 0.5;
        ring.mesh.rotation.z += delta * (0.45 + index * 0.18);
        ring.mesh.scale.setScalar(1 + this.energy * (1.2 + index * 0.28) + wave * 0.08);
        ring.material.opacity = Math.min(0.7, base * (0.58 + wave * 0.42) + this.energy * 0.36);
      });
      disc.scale.setScalar(1 + this.energy * 1.8);
      disc.material.opacity = Math.min(0.28, (visible ? 0.08 : 0.02) + this.energy * 0.2);
    },
  };
}

function makeTrailCurve(start, middle, end) {
  const p1 = start.clone().lerp(middle, 0.48).add(new THREE.Vector3(0, 0.09, 0));
  const p2 = middle.clone();
  const p3 = middle.clone().lerp(end, 0.54).add(new THREE.Vector3(0, 0.05, 0));
  return new THREE.CatmullRomCurve3([start, p1, p2, p3, end], false, 'centripetal');
}

function createBeam(root, curve, color, radius, name, opacity = 0.34) {
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
  root.add(mesh);
  return { mesh, material, baseOpacity: opacity };
}

function createTrail(root, curve, color, count, name) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 0.14,
    transparent: true,
    opacity: 0.96,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.name = name;
  points.frustumCulled = false;
  root.add(points);
  return { curve, color, count, positions, colors, geometry, material, points, lastHead: 0 };
}

function createParticleField(root, isMobile) {
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
    const color = palette[i % palette.length].clone().multiplyScalar(THREE.MathUtils.randFloat(0.38, 0.88));
    colors.set([color.r, color.g, color.b], offset);
    phases[i] = Math.random() * Math.PI * 2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: isMobile ? 0.07 : 0.086,
    transparent: true,
    opacity: 0.68,
    vertexColors: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  root.add(points);
  return { count, positions, bases, phases, geometry, material, points };
}

function createBboPulse(root, bboPosition) {
  const group = new THREE.Group();
  group.name = 'ar_bbo_pulse_system';
  group.position.copy(bboPosition);
  root.add(group);

  const rings = [];
  for (let i = 0; i < 4; i += 1) {
    const material = new THREE.MeshBasicMaterial({
      color: i % 2 ? 0xa86dff : 0x45eeff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.22, 0.3, 80), material);
    ring.visible = false;
    group.add(ring);
    rings.push({ ring, material, active: false, startedAt: 0, strength: 1 });
  }

  const aura = new THREE.Mesh(
    new THREE.SphereGeometry(0.34, 28, 18),
    new THREE.MeshBasicMaterial({
      color: 0x5beaff,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }),
  );
  group.add(aura);

  return { group, rings, aura, cursor: 0 };
}

function createTextPanel(anchorGroup) {
  const texture = createCanvasTextTexture(['S > 2', '贝尔不等式被违反']);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const sprite = new THREE.Sprite(material);
  sprite.name = 'ar_spatial_s_greater_than_2_panel';
  sprite.position.set(0, -0.48, 0.48);
  sprite.scale.set(0.82, 0.31, 1);
  sprite.visible = false;
  anchorGroup.add(sprite);
  return { sprite, material, energy: 0 };
}

export function createQuantumAREffects({ anchorGroup, modelRoot, camera, anchors, isMobile }) {
  const bboPosition = getLocalPosition(anchors.bbo, modelRoot, new THREE.Vector3(0, 2.2, 0));
  const laserPosition = getLocalPosition(anchors.laser, modelRoot, new THREE.Vector3(-4, 1.2, 0));
  const polarizerAPosition = getLocalPosition(anchors.polarizerA, modelRoot, new THREE.Vector3(1.2, 1.2, -1));
  const polarizerBPosition = getLocalPosition(anchors.polarizerB, modelRoot, new THREE.Vector3(1.2, 1.2, 1));
  const apdAPosition = getLocalPosition(anchors.apdA, modelRoot, new THREE.Vector3(4, 1.2, -1.4));
  const apdBPosition = getLocalPosition(anchors.apdB, modelRoot, new THREE.Vector3(4, 1.2, 1.4));

  const portal = createTargetPortal(anchorGroup);
  const particles = createParticleField(modelRoot, isMobile);
  const pulse = createBboPulse(modelRoot, bboPosition);
  const textPanel = createTextPanel(anchorGroup);

  const curveA = makeTrailCurve(bboPosition, polarizerAPosition, apdAPosition);
  const curveB = makeTrailCurve(bboPosition, polarizerBPosition, apdBPosition);
  const trailCount = isMobile ? 20 : 34;
  const trailA = createTrail(modelRoot, curveA, new THREE.Color(0x3ff2ff), trailCount, 'ar_photon_trail_A');
  const trailB = createTrail(modelRoot, curveB, new THREE.Color(0xc071ff), trailCount, 'ar_photon_trail_B');
  const beams = [
    createBeam(
      modelRoot,
      new THREE.CatmullRomCurve3([laserPosition, laserPosition.clone().lerp(bboPosition, 0.58), bboPosition], false, 'centripetal'),
      0x9ff7ff,
      0.024,
      'ar_405nm_pump_beam',
      0.38,
    ),
    createBeam(modelRoot, curveA, 0x38f2ff, 0.021, 'ar_entangled_beam_A', 0.34),
    createBeam(modelRoot, curveB, 0xc16cff, 0.021, 'ar_entangled_beam_B', 0.33),
  ];

  let climaxEnergy = 0;
  let visible = false;
  let performanceMode = 'normal';
  let lastPulse = -99;
  let lastClimax = -99;

  function triggerBboPulse(strength = 1, elapsed = 0) {
    const item = pulse.rings[pulse.cursor % pulse.rings.length];
    pulse.cursor += 1;
    item.active = true;
    item.startedAt = elapsed;
    item.strength = strength;
    item.ring.visible = true;
    item.ring.scale.setScalar(0.48);
    item.material.opacity = 0.4 * strength;
  }

  function updateTrail(trail, elapsed) {
    trail.points.visible = visible;
    if (!visible) return;
    const period = 2.65;
    const head = (elapsed % period) / period;
    const visibleCount = performanceMode === 'low' ? Math.ceil(trail.count * 0.54) : trail.count;

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
      const fade = Math.max(0, 1 - i / visibleCount) * (1.25 + climaxEnergy * 1.6);
      trail.positions.set([point.x, point.y, point.z], offset);
      trail.colors.set([trail.color.r * fade, trail.color.g * fade, trail.color.b * fade], offset);
    }

    trail.geometry.setDrawRange(0, visibleCount);
    trail.geometry.attributes.position.needsUpdate = true;
    trail.geometry.attributes.color.needsUpdate = true;
    trail.material.size = 0.14 * (1 + climaxEnergy * 0.42);
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
    particles.material.opacity = visible ? (performanceMode === 'low' ? 0.42 : 0.68) + climaxEnergy * 0.18 : 0;
    particles.points.rotation.y += delta * 0.015;
  }

  function updatePulse(delta, elapsed) {
    pulse.aura.scale.setScalar(1.05 + Math.sin(elapsed * 2.4) * 0.18 + climaxEnergy * 0.34);
    pulse.aura.material.opacity = visible ? 0.15 + Math.sin(elapsed * 2.1) * 0.035 + climaxEnergy * 0.18 : 0;

    for (const item of pulse.rings) {
      if (!item.active) continue;
      const age = (elapsed - item.startedAt) / (1.2 + item.strength * 0.12);
      if (age >= 1) {
        item.active = false;
        item.ring.visible = false;
        item.material.opacity = 0;
        continue;
      }
      const eased = 1 - (1 - age) ** 3;
      item.ring.quaternion.copy(camera.quaternion);
      item.ring.scale.setScalar(0.56 + eased * (2.1 + item.strength * 0.55));
      item.material.opacity = (1 - age) ** 1.6 * 0.48 * item.strength;
    }
  }

  function updateBeams(elapsed) {
    const wave = 0.5 + Math.sin(elapsed * 3.4) * 0.5;
    beams.forEach((beam, index) => {
      beam.mesh.visible = visible;
      beam.material.opacity = beam.baseOpacity * (0.68 + wave * 0.42) * (1 + climaxEnergy * (index === 0 ? 0.8 : 1.45));
    });
  }

  function updateText(delta, elapsed) {
    textPanel.energy = Math.max(0, textPanel.energy - delta * 0.32);
    textPanel.sprite.visible = visible || textPanel.energy > 0.03;
    textPanel.material.opacity = visible ? Math.min(0.95, 0.28 + textPanel.energy * 0.72) : textPanel.energy * 0.5;
    textPanel.sprite.position.z = 0.46 + Math.sin(elapsed * 1.6) * 0.025;
    textPanel.sprite.scale.setScalar(1 + textPanel.energy * 0.08);
    textPanel.sprite.scale.x *= 0.82;
    textPanel.sprite.scale.y *= 0.31;
  }

  function update(delta, elapsed) {
    climaxEnergy = Math.max(0, climaxEnergy - delta * 0.36);
    if (visible && elapsed - lastPulse > 2.4) {
      triggerBboPulse(0.82, elapsed);
      lastPulse = elapsed;
    }
    if (visible && elapsed - lastClimax > 9.2) {
      triggerClimax(elapsed);
    }

    portal.update(delta, elapsed, visible);
    updatePulse(delta, elapsed);
    updateBeams(elapsed);
    updateTrail(trailA, elapsed);
    updateTrail(trailB, elapsed + 0.22);
    updateParticles(delta, elapsed);
    updateText(delta, elapsed);
  }

  function triggerClimax(elapsed = 0) {
    climaxEnergy = 1.4;
    lastClimax = elapsed;
    textPanel.energy = 1;
    triggerBboPulse(2.3, elapsed);
  }

  return {
    update,
    triggerClimax,
    triggerFound(elapsed = 0) {
      visible = true;
      portal.trigger();
      triggerBboPulse(2.1, elapsed);
      setTimeout(() => triggerClimax(elapsed + 1.2), 1200);
    },
    setTargetVisible(value) {
      visible = value;
      if (!value) {
        beams.forEach((beam) => {
          beam.mesh.visible = false;
        });
      }
    },
    setPerformanceMode(mode) {
      performanceMode = mode;
      particles.material.size = mode === 'low' ? (isMobile ? 0.052 : 0.066) : (isMobile ? 0.07 : 0.086);
    },
    stats: {
      backgroundParticles: particles.count,
      trailParticles: trailA.count + trailB.count,
    },
  };
}
