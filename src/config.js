import * as THREE from 'three';

export const AR_CONFIG = {
  imageTargetSrc: `${import.meta.env.BASE_URL}targets/target.mind`,
  modelUrl: `${import.meta.env.BASE_URL}models/scene12_13_vr.glb`,
  fallbackModelUrl: `${import.meta.env.BASE_URL}models/scene12_13_vr_uncompressed.glb`,
  dracoUrl: `${import.meta.env.BASE_URL}draco/`,

  // 这些参数是后续现场调试最常改的地方。
  modelScale: 0.108,
  modelPosition: new THREE.Vector3(0, -0.05, 0.055),
  modelRotation: new THREE.Euler(Math.PI / 2, 0, 0, 'XYZ'),
  bloomStrength: 1.15,
  arYOffset: -0.02,
  arZOffset: 0.055,

  maxPixelRatio: 1.5,
  lowFpsThreshold: 24,
  targetWarmupMs: 500,
};

export const STATUS_TEXT = {
  idle: '点击开始扫描后，请允许摄像头权限。',
  starting: '正在启动摄像头与识别器…',
  scanning: '请将镜头对准量子纠缠识别图',
  found: '识别成功：量子纠缠实验室已启动',
  lost: '请重新对准识别图',
  targetError: '识别文件加载失败，请检查 public/targets/target.mind。',
  cameraError: '摄像头启动失败，请检查权限，或使用系统浏览器打开。',
  modelError: '3D 模型加载失败，请检查 models/scene12_13_vr.glb。',
};
