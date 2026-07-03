export function isCoarsePointer() {
  return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 820;
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function getUserAgent() {
  return navigator.userAgent || navigator.vendor || '';
}

export function isIOS() {
  const ua = getUserAgent();
  return /iPad|iPhone|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

export function isAndroid() {
  return /Android/i.test(getUserAgent());
}

export function isWeChat() {
  return /MicroMessenger/i.test(getUserAgent());
}

export function isMobile() {
  const ua = getUserAgent();
  return /Android|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(ua) || isCoarsePointer();
}

export function getDeviceMemory() {
  return Number(navigator.deviceMemory || 0);
}

export function getHardwareConcurrency() {
  return Number(navigator.hardwareConcurrency || 0);
}

export function isSecureLikeContext() {
  return window.isSecureContext || ['localhost', '127.0.0.1'].includes(window.location.hostname);
}

export function canUseCamera() {
  return Boolean(navigator.mediaDevices?.getUserMedia);
}

export function canUseWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext
      && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')),
    );
  } catch {
    return false;
  }
}
