import * as THREE from 'three';

function worldPosition(anchor, fallback = new THREE.Vector3()) {
  if (!anchor) return fallback.clone();
  return anchor.getWorldPosition(new THREE.Vector3());
}

function midpoint(a, b) {
  return a.clone().add(b).multiplyScalar(0.5);
}

function smoothstep(value) {
  const t = THREE.MathUtils.clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function cameraFovForFit() {
  return window.innerWidth < 820 ? 54 : 48;
}

function buildFrames(anchors, bounds, { firstPerson = false } = {}) {
  const center = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3());
  const maxSize = Math.max(size.x, size.y, size.z, 1);
  const radius = Math.max(size.length() * 0.5, 0.1);
  const verticalFov = THREE.MathUtils.degToRad(cameraFovForFit());
  const horizontalFov = 2 * Math.atan(Math.tan(verticalFov * 0.5) * (window.innerWidth / window.innerHeight));
  const radialDistance = radius / Math.sin(verticalFov * 0.5);
  const widthDistance = (size.x * 0.5) / Math.tan(horizontalFov * 0.5);
  const fitDistance = Math.max(radialDistance, widthDistance * 1.15);

  const laser = worldPosition(anchors.laser, center.clone().add(new THREE.Vector3(-3.5, 0.3, 0)));
  const bbo = worldPosition(anchors.bbo, center.clone().add(new THREE.Vector3(-1, 0.4, 0)));
  const polarizerA = worldPosition(anchors.polarizerA, center.clone().add(new THREE.Vector3(1, 0.3, -1)));
  const polarizerB = worldPosition(anchors.polarizerB, center.clone().add(new THREE.Vector3(1, 0.3, 1)));
  const apdA = worldPosition(anchors.apdA, center.clone().add(new THREE.Vector3(3.6, 0.4, -1.2)));
  const apdB = worldPosition(anchors.apdB, center.clone().add(new THREE.Vector3(3.6, 0.4, 1.2)));
  const counter = worldPosition(anchors.counter, center.clone().add(new THREE.Vector3(3.5, 0.2, 0)));
  const splitTarget = midpoint(polarizerA, polarizerB).lerp(bbo, 0.3);
  const detectorTarget = midpoint(apdA, apdB).lerp(midpoint(polarizerA, polarizerB), 0.34);
  const eyeY = bounds.min.y + THREE.MathUtils.clamp(size.y * 0.32, 1.25, 1.72);

  const overviewPosition = firstPerson
    ? bbo.clone().lerp(counter, 0.18).add(new THREE.Vector3(maxSize * 0.18, eyeY - bbo.y, maxSize * 0.34))
    : center.clone().add(new THREE.Vector3(0, fitDistance * 0.18, fitDistance * 1.08));

  return [
    {
      at: 0,
      label: '实验室远景：完整量子纠缠光路',
      position: overviewPosition,
      target: center.clone().add(new THREE.Vector3(0, 0.2, 0)),
    },
    {
      at: 3.2,
      label: '镜头推进到 405nm 泵浦激光',
      position: laser.clone().add(new THREE.Vector3(-1.2, 1.05, 2.4)),
      target: laser.clone().lerp(bbo, 0.34),
    },
    {
      at: 6.4,
      label: '泵浦光进入 BBO 晶体',
      position: bbo.clone().add(new THREE.Vector3(-1.0, 0.95, 1.8)),
      target: bbo,
    },
    {
      at: 10,
      label: '纠缠光子对分成左右两路',
      position: splitTarget.clone().add(new THREE.Vector3(0.32, 1.7, 2.8)),
      target: splitTarget,
    },
    {
      at: 13.6,
      label: '左路光子抵达 APD 探测器',
      position: apdA.clone().add(new THREE.Vector3(0.95, 1.05, 1.75)),
      target: apdA,
    },
    {
      at: 17.2,
      label: '右路光子同步进入探测',
      position: apdB.clone().add(new THREE.Vector3(0.95, 1.05, 1.75)),
      target: apdB,
    },
    {
      at: 21.2,
      label: '符合计数器统计关联事件',
      position: detectorTarget.clone().add(new THREE.Vector3(1.35, 1.1, 2.2)),
      target: counter,
    },
    {
      at: 25.4,
      label: 'S = 2.52，突破经典上限 S ≤ 2',
      position: counter.clone().add(new THREE.Vector3(1.35, 1.05, 1.85)),
      target: counter.clone().add(new THREE.Vector3(0, 0.08, 0)),
    },
  ];
}

export function createGuidedTour({
  camera,
  controls,
  anchors,
  bounds,
  onUpdate,
  onPause,
  onClimax,
  modeLabel = '自动导览',
  firstPerson = false,
}) {
  let frames = buildFrames(anchors, bounds, { firstPerson });
  let active = false;
  let startAt = 0;
  let lastStep = -1;
  let climaxTriggered = false;
  const duration = frames[frames.length - 1].at;

  function setInitialPose() {
    camera.fov = firstPerson ? 58 : cameraFovForFit();
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.copy(frames[0].position);
    controls.target.copy(frames[0].target);
    controls.update();
  }

  function restart(elapsed = 0) {
    frames = buildFrames(anchors, bounds, { firstPerson });
    active = true;
    startAt = elapsed;
    lastStep = -1;
    climaxTriggered = false;
    controls.enabled = true;
    setInitialPose();
    onUpdate?.({ mode: modeLabel, label: frames[0].label, index: 0, count: frames.length, progress: 0 });
  }

  function pause(reason = '用户已接管视角') {
    if (!active) return;
    active = false;
    onPause?.(reason);
  }

  function free() {
    active = false;
    onPause?.('自由查看');
  }

  function update(elapsed) {
    if (!active) return;
    const localTime = Math.max(0, elapsed - startAt);
    const progress = THREE.MathUtils.clamp(localTime / duration, 0, 1);
    let index = frames.length - 1;

    for (let i = 0; i < frames.length - 1; i += 1) {
      if (localTime < frames[i + 1].at) {
        index = i;
        break;
      }
    }

    const from = frames[index];
    const to = frames[Math.min(index + 1, frames.length - 1)];
    const span = Math.max(0.001, to.at - from.at);
    const interpolation = from === to ? 1 : smoothstep((localTime - from.at) / span);
    camera.position.lerpVectors(from.position, to.position, interpolation);
    controls.target.lerpVectors(from.target, to.target, interpolation);
    controls.update();

    if (index !== lastStep) lastStep = index;
    onUpdate?.({ mode: modeLabel, label: from.label, index, count: frames.length, progress });

    if (!climaxTriggered && localTime >= 21.2) {
      climaxTriggered = true;
      onClimax?.();
    }

    if (localTime >= duration) {
      active = false;
      onUpdate?.({
        mode: '导览完成',
        label: '现在可以拖动、缩放并点击热点，自由观察实验装置。',
        index: frames.length - 1,
        count: frames.length,
        progress: 1,
      });
    }
  }

  const manualHandler = () => pause('用户已接管视角');
  controls.addEventListener('start', manualHandler);

  return {
    update,
    restart,
    pause,
    free,
    setInitialPose,
    dispose() {
      controls.removeEventListener('start', manualHandler);
    },
    get active() {
      return active;
    },
    get duration() {
      return duration;
    },
  };
}

export function createClimaxController({ element, valueElement, onTick, onImpact }) {
  const values = ['1.82', '1.96', '2.03', '2.31', '2.52'];
  let timers = [];

  function clearTimers() {
    for (const timer of timers) window.clearTimeout(timer);
    timers = [];
  }

  function reset() {
    clearTimers();
    element.classList.remove('is-active', 'is-counting', 'is-settled');
    element.setAttribute('aria-hidden', 'true');
    valueElement.textContent = 'S = 1.82';
  }

  function play() {
    reset();
    element.classList.add('is-active', 'is-counting');
    element.setAttribute('aria-hidden', 'false');
    values.forEach((value, index) => {
      timers.push(window.setTimeout(() => {
        valueElement.textContent = `S = ${value}`;
        onTick?.(Number(value), index);
        if (index === values.length - 1) {
          element.classList.remove('is-counting');
          timers.push(window.setTimeout(() => {
            element.classList.add('is-settled');
            onImpact?.();
          }, 240));
        }
      }, index * 340));
    });
  }

  return { play, reset, dispose: clearTimers };
}
