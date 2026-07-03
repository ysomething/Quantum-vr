import * as THREE from 'three';
import { exitFullscreen, fullscreenElement, requestFullscreen } from './gyroControls.js';

function anchorWorld(anchor, fallback = new THREE.Vector3()) {
  if (!anchor) return fallback.clone();
  return anchor.getWorldPosition(new THREE.Vector3());
}

function midpoint(a, b) {
  return a.clone().add(b).multiplyScalar(0.5);
}

function computePhonePose(anchors, bounds) {
  const center = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3());
  const maxSize = Math.max(size.x, size.y, size.z, 1);

  const laser = anchorWorld(anchors.laser, center.clone().add(new THREE.Vector3(-maxSize * 0.32, 0, 0)));
  const bbo = anchorWorld(anchors.bbo, center.clone().add(new THREE.Vector3(-maxSize * 0.1, 0.3, 0)));
  const counter = anchorWorld(anchors.counter, center.clone().add(new THREE.Vector3(maxSize * 0.32, 0.2, 0)));
  const apdA = anchorWorld(anchors.apdA, center.clone().add(new THREE.Vector3(maxSize * 0.35, 0.2, -maxSize * 0.18)));
  const apdB = anchorWorld(anchors.apdB, center.clone().add(new THREE.Vector3(maxSize * 0.35, 0.2, maxSize * 0.18)));

  const lightPathCenter = bbo.clone().lerp(counter, 0.34);
  lightPathCenter.y = center.y + size.y * 0.08;
  const portraitDistance = THREE.MathUtils.clamp(maxSize * 0.72, 6.6, 9.2);
  const landscapeDistance = THREE.MathUtils.clamp(maxSize * 0.52, 4.8, 7.1);
  const isPortrait = window.innerHeight >= window.innerWidth;
  const position = lightPathCenter.clone().add(new THREE.Vector3(
    isPortrait ? maxSize * 0.28 : maxSize * 0.36,
    isPortrait ? maxSize * 0.28 : maxSize * 0.24,
    isPortrait ? portraitDistance : landscapeDistance,
  ));

  const target = laser.clone().lerp(midpoint(apdA, apdB).lerp(counter, 0.28), 0.58);
  target.y = lightPathCenter.y;

  return {
    position,
    target,
    minDistance: THREE.MathUtils.clamp(maxSize * 0.16, 1.45, 2.2),
    maxDistance: THREE.MathUtils.clamp(maxSize * 1.18, 10.5, 16),
    maxSize,
  };
}

export function createPhoneImmersiveMode({
  app,
  camera,
  orbitControls,
  anchors,
  bounds,
  gyroControls,
  showToast,
  onModeChange,
  onEnterTransition,
}) {
  let mode = 'tour';
  let motionActive = false;
  let resizeTimer = null;

  function applyViewMode(nextMode) {
    mode = nextMode;
    document.body.dataset.viewMode = nextMode;
    onModeChange?.(nextMode);
  }

  function setCameraToPhonePose({ keepTarget = false } = {}) {
    const pose = computePhonePose(anchors, bounds);
    camera.fov = window.innerHeight >= window.innerWidth ? 48 : 50;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    camera.position.copy(pose.position);

    if (!keepTarget) orbitControls.target.copy(pose.target);
    orbitControls.minDistance = pose.minDistance;
    orbitControls.maxDistance = pose.maxDistance;
    orbitControls.enablePan = false;
    orbitControls.enableZoom = true;
    orbitControls.enableRotate = true;
    orbitControls.enableDamping = true;
    orbitControls.rotateSpeed = window.matchMedia('(pointer: coarse)').matches ? 0.52 : 0.66;
    orbitControls.zoomSpeed = 0.62;
    orbitControls.update();
  }

  async function enterScanMode({ fullscreen = false, transition = true } = {}) {
    gyroControls.disable();
    motionActive = false;
    orbitControls.enabled = true;
    setCameraToPhonePose();
    applyViewMode('scan');

    if (transition) {
      onEnterTransition?.('进入扫码体验模式', '单屏沉浸导览已就绪');
    }

    if (fullscreen) {
      try {
        await requestFullscreen(app);
      } catch (error) {
        console.info('Fullscreen is unavailable; continuing in page immersive mode.', error);
      }
    }

    showToast?.('扫码体验模式：单指拖动旋转，双指缩放观察光路');
  }

  async function enableMotion() {
    if (mode === 'tour') {
      await enterScanMode({ transition: false });
    }

    try {
      await requestFullscreen(app);
    } catch (error) {
      console.info('Fullscreen is unavailable; motion mode can still run.', error);
    }

    const granted = await gyroControls.enable();
    if (!granted) {
      motionActive = false;
      orbitControls.enabled = true;
      applyViewMode('scan');
      showToast?.('体感权限不可用，已自动回到手指拖动模式');
      return false;
    }

    motionActive = true;
    orbitControls.enabled = false;
    applyViewMode('motion');
    onEnterTransition?.('体感观察已开启', '缓慢转动手机观察量子实验室');
    showToast?.('体感已开启：缓慢转动手机观察实验光路');
    return true;
  }

  function disableMotion() {
    gyroControls.disable();
    motionActive = false;
    orbitControls.enabled = true;
    applyViewMode(mode === 'motion' ? 'scan' : mode);
    showToast?.('已关闭体感，继续用手指拖动观察');
  }

  async function exitToFree({ exitScreen = false } = {}) {
    gyroControls.disable();
    motionActive = false;
    orbitControls.enabled = true;
    orbitControls.enablePan = true;
    applyViewMode('free');

    if (exitScreen && fullscreenElement()) {
      try {
        await exitFullscreen();
      } catch (error) {
        console.info('Could not exit fullscreen.', error);
      }
    }

    showToast?.('已切换为自由查看');
  }

  function setTourMode() {
    gyroControls.disable();
    motionActive = false;
    orbitControls.enabled = true;
    orbitControls.enablePan = true;
    applyViewMode('tour');
  }

  function update() {
    if (motionActive && gyroControls.active) {
      gyroControls.update();
    }
  }

  function handleResize() {
    if (mode === 'scan' || mode === 'motion') {
      setCameraToPhonePose({ keepTarget: mode === 'motion' });
    }
  }

  function handleOrientationChange() {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(handleResize, 180);
  }

  window.addEventListener('resize', handleResize, { passive: true });
  window.addEventListener('orientationchange', handleOrientationChange, { passive: true });

  return {
    enterScanMode,
    enableMotion,
    disableMotion,
    exitToFree,
    setTourMode,
    update,
    dispose() {
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      gyroControls.disable();
      document.body.dataset.viewMode = '';
    },
    get mode() {
      return mode;
    },
    get motionActive() {
      return motionActive;
    },
  };
}
