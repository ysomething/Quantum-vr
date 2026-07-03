import * as THREE from 'three';

const HALF_PI_QUATERNION = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
const zAxis = new THREE.Vector3(0, 0, 1);

function getScreenAngle() {
  const angle = window.screen?.orientation?.angle;
  if (typeof angle === 'number') return angle;
  return typeof window.orientation === 'number' ? window.orientation : 0;
}

export async function requestDeviceOrientationPermission() {
  if (!('DeviceOrientationEvent' in window)) return false;

  if (typeof window.DeviceOrientationEvent.requestPermission === 'function') {
    const result = await window.DeviceOrientationEvent.requestPermission();
    return result === 'granted';
  }

  return true;
}

export function fullscreenElement() {
  return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.msFullscreenElement
    || null;
}

export async function requestFullscreen(element = document.documentElement) {
  const target = element || document.documentElement;
  if (fullscreenElement()) return true;
  const request = target.requestFullscreen
    || target.webkitRequestFullscreen
    || target.msRequestFullscreen;
  if (!request) return false;
  await request.call(target);
  return true;
}

export async function exitFullscreen() {
  if (!fullscreenElement()) return true;
  const exit = document.exitFullscreen
    || document.webkitExitFullscreen
    || document.msExitFullscreen;
  if (!exit) return false;
  await exit.call(document);
  return true;
}

export function createGyroControls(camera) {
  const euler = new THREE.Euler();
  const sensorQuaternion = new THREE.Quaternion();
  const screenQuaternion = new THREE.Quaternion();
  let active = false;
  let orientationData = null;
  let correction = null;

  function handleOrientation(event) {
    if (event.alpha === null && event.beta === null && event.gamma === null) return;
    orientationData = event;
  }

  function applyQuaternion(data) {
    const alpha = THREE.MathUtils.degToRad(data.alpha || 0);
    const beta = THREE.MathUtils.degToRad(data.beta || 0);
    const gamma = THREE.MathUtils.degToRad(data.gamma || 0);
    const orient = THREE.MathUtils.degToRad(getScreenAngle());

    euler.set(beta, alpha, -gamma, 'YXZ');
    sensorQuaternion.setFromEuler(euler);
    sensorQuaternion.multiply(HALF_PI_QUATERNION);
    screenQuaternion.setFromAxisAngle(zAxis, -orient);
    sensorQuaternion.multiply(screenQuaternion);

    if (!correction) {
      correction = camera.quaternion.clone().multiply(sensorQuaternion.clone().invert());
    }

    camera.quaternion.copy(correction).multiply(sensorQuaternion);
  }

  async function enable() {
    let granted = false;
    try {
      granted = await requestDeviceOrientationPermission();
    } catch (error) {
      console.info('Device orientation permission denied or unavailable.', error);
    }

    if (!granted) return false;
    active = true;
    orientationData = null;
    correction = null;
    window.addEventListener('deviceorientation', handleOrientation, true);
    return true;
  }

  function disable() {
    active = false;
    orientationData = null;
    correction = null;
    window.removeEventListener('deviceorientation', handleOrientation, true);
  }

  function recalibrate() {
    correction = null;
  }

  function update() {
    if (!active || !orientationData) return false;
    applyQuaternion(orientationData);
    return true;
  }

  return {
    enable,
    disable,
    recalibrate,
    update,
    get active() {
      return active;
    },
    get hasReading() {
      return Boolean(orientationData);
    },
  };
}
