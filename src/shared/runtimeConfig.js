import {
  getDeviceMemory,
  getHardwareConcurrency,
  isAndroid,
  isIOS,
  isMobile,
  isWeChat,
} from '../utils/device.js';

const QUALITY_BASE = {
  level: 'QUALITY',
  label: '高质量画面',
  isMobile: false,
  isWeChat: false,
  pixelRatioMax: 2,
  bloomMultiplier: 1,
  bloomComposerScale: 1,
  particleRatio: 1,
  trailRatio: 1,
  antialias: true,
  defaultPerformanceMode: 'quality',
  preferLowBrightnessAR: false,
};

const MOBILE = {
  ...QUALITY_BASE,
  level: 'MOBILE_QUALITY',
  label: '手机高质量画面',
  isMobile: true,
  antialias: true,
  preferLowBrightnessAR: true,
};

export function getRuntimeConfig() {
  const mobile = isMobile();
  const base = mobile ? MOBILE : QUALITY_BASE;

  return {
    ...base,
    isMobile: mobile,
    isWeChat: isWeChat(),
    isIOS: isIOS(),
    isAndroid: isAndroid(),
    deviceMemory: getDeviceMemory(),
    hardwareConcurrency: getHardwareConcurrency(),
    devicePixelRatio: window.devicePixelRatio || 1,
    pixelRatioMax: Math.min(window.devicePixelRatio || 1, base.pixelRatioMax),
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  };
}

export function describeRuntime(runtime = getRuntimeConfig()) {
  if (runtime.isMobile) return runtime.isWeChat ? '微信手机：高质量扫码体验' : '手机：高质量展示';
  return '电脑：高质量展示';
}
