import './styles.css';
import { AR_CONFIG, STATUS_TEXT } from './config.js';
import { createARSession } from './arSetup.js';
import { createArUi } from './arUi.js';
import { loadQuantumModel } from './loadModel.js';
import { createQuantumAREffects } from './effects.js';
import { createHotspots } from './hotspots.js';
import { createPerformanceMonitor } from './performance.js';

const isMobile = matchMedia('(pointer: coarse), (max-width: 780px)').matches;
const ui = createArUi();

let session = null;
let model = null;
let effects = null;
let hotspots = null;
let performanceMonitor = null;
let startInProgress = false;
let targetVisible = false;

async function assetExists(url) {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    return response.ok;
  } catch (error) {
    console.warn(`Asset preflight failed: ${url}`, error);
    return false;
  }
}

function mapStartupError(error) {
  const message = String(error?.message || error || '');
  if (error?.code === 'TARGET_MISSING' || /target\.mind|image target|compile/i.test(message)) {
    return STATUS_TEXT.targetError;
  }
  if (error?.code === 'MODEL_MISSING' || /scene12_13_vr|GLB|gltf|model/i.test(message)) {
    return STATUS_TEXT.modelError;
  }
  if (/camera|permission|NotAllowed|NotFound|getUserMedia|Requested device/i.test(message)) {
    return STATUS_TEXT.cameraError;
  }
  return `AR 启动失败：${message || '请检查摄像头权限、HTTPS 和识别文件。'}`;
}

async function stopSession() {
  if (session) {
    try {
      await session.stop();
    } catch (error) {
      console.warn('Failed to stop AR session cleanly.', error);
    }
    session.dispose();
  }
  session = null;
  model = null;
  effects = null;
  hotspots = null;
  performanceMonitor = null;
  targetVisible = false;
}

function wireTargetCallbacks(anchor) {
  anchor.onTargetFound = () => {
    targetVisible = true;
    session.content.visible = true;
    model?.setVisible(true);
    model?.triggerGlow(1.8);
    effects?.setTargetVisible(true);
    effects?.triggerFound(performance.now() / 1000);
    hotspots?.setEnabled(true);
    ui.hideLoading();
    ui.targetFound();
  };

  anchor.onTargetLost = () => {
    targetVisible = false;
    model?.setVisible(false);
    effects?.setTargetVisible(false);
    hotspots?.setEnabled(false);
    session.content.visible = false;
    ui.targetLost();
  };
}

async function startScan() {
  if (startInProgress) return;
  startInProgress = true;
  ui.showScanner();
  ui.setState('starting');
  ui.setLoading('正在检查识别文件…', 0.08);
  ui.hideError();

  try {
    await stopSession();

    const hasTarget = await assetExists(AR_CONFIG.imageTargetSrc);
    if (!hasTarget) {
      const error = new Error('target.mind missing');
      error.code = 'TARGET_MISSING';
      throw error;
    }

    ui.setLoading('正在准备摄像头，请在弹窗中允许权限…', 0.16);
    session = createARSession({
      container: ui.elements.arStage.querySelector('#ar-container'),
      imageTargetSrc: AR_CONFIG.imageTargetSrc,
    });
    wireTargetCallbacks(session.anchor);

    const modelPromise = loadQuantumModel({
      onProgress(progress) {
        ui.setLoading(`正在加载 3D 量子实验室 ${Math.round(progress * 100)}%`, 0.18 + progress * 0.48);
      },
    });

    await session.start();
    ui.setState('scanning');
    ui.setLoading('摄像头已启动，正在加载模型…', 0.68);

    model = await modelPromise;
    model.setVisible(false);
    session.content.add(model.root);
    session.content.visible = false;
    session.content.updateMatrixWorld(true);

    effects = createQuantumAREffects({
      anchorGroup: session.content,
      modelRoot: model.root,
      camera: session.camera,
      anchors: model.anchors,
      isMobile,
    });

    hotspots = createHotspots({
      camera: session.camera,
      anchors: model.anchors,
      layer: document.getElementById('hotspot-layer'),
      card: document.getElementById('hotspot-card'),
      closeButton: document.getElementById('hotspot-close'),
    });

    performanceMonitor = createPerformanceMonitor({
      renderer: session.renderer,
      effects,
      ui,
    });

    session.setFrameCallback(({ delta, elapsed }) => {
      model?.update(delta);
      effects?.update(delta, elapsed);
      hotspots?.update(delta);
      performanceMonitor?.update(delta);
    });

    ui.hideLoading();
    ui.setState(targetVisible ? 'found' : 'scanning');
    ui.showToast('摄像头已启动，请对准量子纠缠识别图。', 2200);

    window.__quantumWebAR = {
      session,
      model,
      effects,
      hotspots,
      config: AR_CONFIG,
      actions: {
        restart: startScan,
        triggerClimax: () => effects?.triggerClimax(performance.now() / 1000),
      },
      stats: {
        animations: model.animationCount,
        glowMaterials: model.glowMaterialCount,
        hotspots: hotspots.count,
        effects: effects.stats,
      },
    };
  } catch (error) {
    console.error(error);
    await stopSession();
    ui.showError(mapStartupError(error));
  } finally {
    startInProgress = false;
  }
}

ui.elements.startButton.addEventListener('click', startScan);
ui.elements.rescanButton.addEventListener('click', startScan);
ui.elements.retryButton.addEventListener('click', startScan);

window.addEventListener('pagehide', () => {
  stopSession();
});

ui.showStart();
