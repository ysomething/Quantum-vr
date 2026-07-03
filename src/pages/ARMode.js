import { loadQuantumModel } from '../shared/loadModel.js';
import { createHotspots } from '../shared/hotspots.js';
import { createDisposalBag, disposeScene, stopCameraStream } from '../shared/dispose.js';
import { canUseCamera, isCoarsePointer, isSecureLikeContext, isWeChat } from '../utils/device.js';
import { getRuntimeConfig } from '../shared/runtimeConfig.js';
import {
  AR_CONFIG,
  cloneARConfig,
  createRuntimeARConfig,
  loadLowBrightnessMode,
  resetSavedARConfig,
  saveARConfig,
  saveLowBrightnessMode,
} from './ar/arConfig.js';
import { createARSession } from './ar/arSetup.js';
import { createQuantumAREffects } from './ar/arEffects.js';
import { createCalibrationHelpers } from './ar/calibrationHelpers.js';
import { createCalibrationUi } from './ar/calibrationUi.js';
import { createARPerformanceMonitor } from './ar/arPerformance.js';

const STATUS_TEXT = {
  idle: '等待开始扫描',
  checkingCamera: '正在检查摄像头权限',
  loadingTarget: '正在加载识别图',
  starting: '正在启动 AR',
  scanning: '摄像头已启动，请对准识别图',
  found: '识别成功：实验室已启动。',
  lost: '请重新对准识别图。',
  targetError: '识别文件加载失败。',
  insecureContext: '当前环境可能无法启动摄像头。请使用 HTTPS 链接访问，或部署到 GitHub Pages 后再扫码体验。',
  cameraError: '摄像头启动失败。请检查微信摄像头权限，或点击右上角使用系统浏览器打开。',
  modelError: '3D 模型加载失败。',
};

const PREFERRED_CAMERA_CONSTRAINTS = {
  video: {
    facingMode: { ideal: 'environment' },
    width: { ideal: 1280 },
    height: { ideal: 720 },
  },
  audio: false,
};

const FALLBACK_CAMERA_CONSTRAINTS = {
  video: true,
  audio: false,
};

const ACTIVE_AR_STATES = new Set([
  'checkingCamera',
  'loadingTarget',
  'starting',
  'scanning',
  'found',
  'lost',
  'targetError',
  'insecureContext',
  'cameraError',
  'modelError',
]);

const ERROR_AR_STATES = new Set([
  'targetError',
  'insecureContext',
  'cameraError',
  'modelError',
]);

function isActiveArState(state) {
  return ACTIVE_AR_STATES.has(state);
}

function isErrorArState(state) {
  return ERROR_AR_STATES.has(state);
}

function renderShell() {
  const page = document.createElement('section');
  page.className = 'mode-page ar-mode-page';
  page.innerHTML = `
    <section class="ar-start-screen" data-start-screen>
      <div class="ar-start-card">
        <p class="eyebrow">WeChat WebAR</p>
        <h1>量子纠缠 AR 实验室</h1>
        <p>请允许摄像头权限，并将镜头对准识别图。模型会在图片平面上浮现，支持低亮度和现场校准。</p>
        <div class="ar-start-actions">
          <button class="primary-button" type="button" data-start-scan>开始扫描</button>
          <button class="secondary-button" type="button" data-open-target>查看识别图</button>
          <button class="secondary-button" type="button" data-fallback-3d>3D 展示模式</button>
          <button class="ghost-button" type="button" data-back-start>返回首页</button>
        </div>
        <p class="ar-wechat-hint">${isWeChat() ? '当前为微信环境：如无法启动摄像头，请尝试右上角用系统浏览器打开。' : '电脑端可预览页面，正式扫码建议使用手机微信或系统浏览器。'}</p>
        <p class="ar-wechat-hint">${isSecureLikeContext() ? '当前页面满足摄像头安全上下文要求。' : '摄像头通常需要 HTTPS、localhost 或局域网安全配置。'}</p>
        <p class="ar-security-warning">${isSecureLikeContext() ? '' : '当前环境可能无法调用摄像头，正式展示请使用 HTTPS 链接。'}</p>
        <p class="ar-debug-status" data-ar-debug-status>状态：${STATUS_TEXT.idle}</p>
      </div>
    </section>

    <section class="ar-stage" data-ar-stage hidden>
      <div class="ar-container" id="ar-container"></div>
      <div class="ar-topbar">
        <button class="ghost-button" type="button" data-back-stage>返回首页</button>
        <div>
          <p class="eyebrow">AR Scan</p>
          <h1>量子纠缠 AR 实验室</h1>
        </div>
        <div class="ar-topbar__actions">
          <button class="secondary-button compact-button" type="button" data-low-brightness aria-pressed="false">低亮度模式</button>
          <button class="secondary-button compact-button" type="button" data-calibration aria-pressed="false">校准</button>
          <button class="secondary-button compact-button" type="button" data-help>帮助</button>
        </div>
        <button class="mobile-icon-button ar-mobile-menu-button" type="button" data-ar-menu aria-expanded="false" aria-label="打开 AR 操作菜单">☰</button>
      </div>
      <p class="ar-debug-status ar-debug-status--stage" data-ar-debug-status>状态：${STATUS_TEXT.idle}</p>
      <div class="ar-scan-overlay" data-scan-overlay>
        <div class="scan-frame" aria-hidden="true"></div>
        <p data-scan-message>${STATUS_TEXT.idle}</p>
      </div>
      <div class="ar-bottom-actions">
        <button class="primary-button" type="button" data-rescan>重新扫描</button>
        <button class="secondary-button" type="button" data-open-target-stage>查看识别图</button>
      </div>
      <div class="mobile-drawer-backdrop" data-ar-drawer-backdrop hidden></div>
      <nav class="mobile-drawer ar-mobile-drawer" data-ar-drawer hidden aria-label="AR 手机端操作菜单">
        <div class="mobile-drawer__handle" aria-hidden="true"></div>
        <div class="mobile-drawer__header">
          <span>AR 操作</span>
          <button type="button" data-ar-drawer-close>关闭</button>
        </div>
        <div class="mobile-drawer__grid">
          <button type="button" data-ar-menu-rescan>重新扫描</button>
          <button type="button" data-ar-menu-target>查看识别图</button>
          <button type="button" data-ar-menu-calibration>校准</button>
          <button type="button" data-ar-menu-help>帮助</button>
          <button type="button" data-ar-menu-home>返回首页</button>
        </div>
      </nav>
      <div class="hotspot-layer" id="hotspot-layer"></div>
      <article class="hotspot-card" id="hotspot-card" aria-hidden="true">
        <button class="hotspot-card__close" type="button" id="hotspot-close" aria-label="关闭热点">×</button>
        <p class="eyebrow" id="hotspot-kicker">AR 空间热点</p>
        <h2 id="hotspot-title">热点</h2>
        <p id="hotspot-description"></p>
      </article>
      <div class="loading-panel ar-loading" data-loading hidden>
        <p class="eyebrow">AR Loading</p>
        <h2 data-loading-title>正在准备</h2>
        <div class="loading-bar"><span data-loading-bar></span></div>
        <p data-loading-text>请稍候</p>
      </div>
      <div class="error-panel" data-error hidden>
        <h2>AR 启动失败</h2>
        <p data-error-message></p>
        <div class="ar-fallback-actions">
          <button class="primary-button" type="button" data-retry>重试</button>
          <button class="secondary-button" type="button" data-error-3d>切换到 3D 展示模式</button>
          <button class="ghost-button" type="button" data-error-home>返回首页</button>
        </div>
      </div>
    </section>

    <div class="toast" data-toast role="status" aria-live="polite"></div>

    <div class="modal-sheet" data-target-modal hidden>
      <div class="modal-card">
        <button class="modal-close" type="button" data-close-target aria-label="关闭识别图">×</button>
        <p class="eyebrow">Image Target</p>
        <h2>识别图</h2>
        <p>把手机摄像头对准这张图。正式展示建议打印或使用高质量海报，避免只扫二维码或大面积纯色图。</p>
        <img src="${AR_CONFIG.assets.targetPreviewSrc}" alt="量子纠缠 AR 识别图" />
      </div>
    </div>

    <div class="modal-sheet" data-help-modal hidden>
      <div class="modal-card">
        <button class="modal-close" type="button" data-close-help aria-label="关闭帮助">×</button>
        <p class="eyebrow">Help</p>
        <h2>微信扫码 AR 使用说明</h2>
        <ul>
          <li>点击“开始扫描”后再允许摄像头权限。</li>
          <li>手机尽量正对识别图，避免反光、摩尔纹和过暗环境。</li>
          <li>如果画面太亮，打开“低亮度模式”。</li>
          <li>如果模型偏移，点击“校准”，用滑块微调 scale、position 和 rotation。</li>
        </ul>
      </div>
    </div>
  `;
  return page;
}

function by(page, selector) {
  return page.querySelector(selector);
}

function showToast(page, message, duration = 2200) {
  const toast = by(page, '[data-toast]');
  window.clearTimeout(toast._timer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toast._timer = window.setTimeout(() => toast.classList.remove('is-visible'), duration);
}

function setStageStatusVisible(page, visible) {
  const stageStatus = by(page, '.ar-debug-status--stage');
  stageStatus?.classList.toggle('is-transient-hidden', !visible);
}

function setTargetFoundUi(page, targetFound) {
  page.classList.toggle('is-target-found', targetFound);
  by(page, '[data-ar-stage]')?.classList.toggle('is-target-found', targetFound);
  setStageStatusVisible(page, false);

  if (targetFound) {
    by(page, '[data-scan-overlay]')?.classList.add('is-hidden');
    const drawer = by(page, '[data-ar-drawer]');
    const backdrop = by(page, '[data-ar-drawer-backdrop]');
    if (drawer) drawer.hidden = true;
    if (backdrop) backdrop.hidden = true;
    by(page, '[data-ar-menu]')?.setAttribute('aria-expanded', 'false');
  }
}

function applyArStateDisplay(page, state) {
  const active = isActiveArState(state);
  const found = state === 'found';
  const lost = state === 'lost';
  const error = isErrorArState(state);
  const startScreen = by(page, '[data-start-screen]');
  const stage = by(page, '[data-ar-stage]');
  const scanOverlay = by(page, '[data-scan-overlay]');
  const loading = by(page, '[data-loading]');
  const drawer = by(page, '[data-ar-drawer]');
  const backdrop = by(page, '[data-ar-drawer-backdrop]');

  page.classList.toggle('is-ar-active', active);
  page.classList.toggle('is-ar-idle', state === 'idle');
  page.classList.toggle('is-ar-scanning', active && !found && !error);
  page.classList.toggle('is-target-found', found);
  page.classList.toggle('is-ar-lost', lost);
  page.classList.toggle('is-ar-error', error);

  if (startScreen) startScreen.hidden = active;
  if (stage) {
    stage.hidden = !active;
    stage.classList.toggle('is-active', active);
    stage.classList.toggle('is-target-found', found);
  }
  if (scanOverlay) {
    scanOverlay.classList.toggle('is-hidden', !active || found || error);
  }
  if (loading && (state === 'idle' || found || error || lost || state === 'scanning')) {
    loading.hidden = true;
  }
  if (found || error || !active) {
    if (drawer) drawer.hidden = true;
    if (backdrop) backdrop.hidden = true;
    by(page, '[data-ar-menu]')?.setAttribute('aria-expanded', 'false');
  }
}

function setState(page, state) {
  page.dataset.arState = state;
  applyArStateDisplay(page, state);
  const message = STATUS_TEXT[state] || STATUS_TEXT.scanning;
  by(page, '[data-scan-message]').textContent = message;
  setDebugStatus(page, `状态：${message}`);
  setStageStatusVisible(page, false);
}

function setDebugStatus(page, message, isError = false) {
  page.querySelectorAll('[data-ar-debug-status]').forEach((element) => {
    element.textContent = message;
    element.classList.toggle('is-error', isError);
  });
}

function setLoading(page, title, message, progress = null) {
  by(page, '[data-loading]').hidden = true;
  by(page, '[data-loading-title]').textContent = title;
  by(page, '[data-loading-text]').textContent = message;
  if (typeof progress === 'number') {
    by(page, '[data-loading-bar]').style.transform = `scaleX(${Math.max(0.04, Math.min(1, progress))})`;
  }
}

function hideLoading(page) {
  by(page, '[data-loading]').hidden = true;
  by(page, '[data-loading-bar]').style.transform = 'scaleX(0.04)';
}

function showError(page, message, state = 'cameraError') {
  hideLoading(page);
  setTargetFoundUi(page, false);
  setState(page, state);
  by(page, '[data-error-message]').textContent = message;
  by(page, '[data-error]').hidden = false;
  by(page, '[data-scan-overlay]').classList.add('is-hidden');
  setDebugStatus(page, `状态：${STATUS_TEXT[state] || '启动失败'}${message ? `：${message}` : ''}`, true);
}

function hideError(page) {
  by(page, '[data-error]').hidden = true;
  by(page, '[data-error-message]').textContent = '';
}

async function assetExists(url) {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    return response.ok;
  } catch (error) {
    console.warn('Asset preflight failed.', error);
    return false;
  }
}

function createStartupError(code, message, cause = null) {
  const error = new Error(message);
  error.code = code;
  if (cause) error.cause = cause;
  return error;
}

function getErrorDetail(error) {
  const candidates = [error, error?.cause, error?.primaryError].filter(Boolean);
  const details = candidates
    .map((item) => {
      const name = item.name || item.code || 'Error';
      const itemMessage = item.message || String(item);
      return `${name}${itemMessage ? `: ${itemMessage}` : ''}`;
    })
    .filter(Boolean);
  return [...new Set(details)].join('；');
}

function stopProbeStream(stream) {
  stream?.getTracks?.().forEach((track) => track.stop());
}

async function requestCameraProbe() {
  if (!isSecureLikeContext()) {
    throw createStartupError('INSECURE_CONTEXT', STATUS_TEXT.insecureContext);
  }

  if (!canUseCamera()) {
    throw createStartupError(
      'CAMERA_UNAVAILABLE',
      '当前浏览器不支持摄像头访问。请使用手机微信、Chrome、Safari，或通过 HTTPS 页面访问。',
    );
  }

  let primaryError = null;
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia(PREFERRED_CAMERA_CONSTRAINTS);
  } catch (error) {
    primaryError = error;
    try {
      stream = await navigator.mediaDevices.getUserMedia(FALLBACK_CAMERA_CONSTRAINTS);
    } catch (fallbackError) {
      fallbackError.primaryError = primaryError;
      throw createStartupError('CAMERA_PERMISSION_FAILED', STATUS_TEXT.cameraError, fallbackError);
    }
  }

  const track = stream.getVideoTracks?.()[0] || null;
  const settings = track?.getSettings?.() || {};
  return {
    stream,
    deviceId: settings.deviceId || null,
    label: settings.label || track?.label || '',
  };
}

function mapStartupError(error) {
  const message = String(error?.message || error || '');
  const detail = getErrorDetail(error);
  if (error?.code === 'INSECURE_CONTEXT') return STATUS_TEXT.insecureContext;
  if (error?.code === 'CAMERA_UNAVAILABLE') return error.message;
  if (error?.code === 'TARGET_MISSING' || /target\.mind|image target|compile/i.test(message)) {
    return `${STATUS_TEXT.targetError} 请确认 ${AR_CONFIG.assets.imageTargetSrc} 可以访问。${detail ? ` 错误：${detail}` : ''}`;
  }
  if (error?.code === 'MODEL_MISSING' || /scene12_13_(vr|ar)|GLB|gltf|model/i.test(message)) {
    return `${STATUS_TEXT.modelError}${detail ? ` 错误：${detail}` : ''}`;
  }
  if (/camera|permission|NotAllowed|NotFound|NotReadable|getUserMedia|Requested device|Permission/i.test(message + detail)) {
    const help = isWeChat()
      ? '请检查微信摄像头权限，或点击右上角使用系统浏览器打开。'
      : '请检查浏览器摄像头权限，或换用 HTTPS 链接访问。';
    return `${STATUS_TEXT.cameraError} ${help}${detail ? ` 错误：${detail}` : ''}`;
  }
  return `AR 启动失败：${message || '请检查摄像头权限、HTTPS 和识别文件。'}${detail ? ` 错误：${detail}` : ''}`;
}

function wireModal(page, openSelector, modalSelector, closeSelector) {
  const modal = by(page, modalSelector);
  const openButtons = page.querySelectorAll(openSelector);
  const closeButton = by(page, closeSelector);
  const open = () => { modal.hidden = false; };
  const close = () => { modal.hidden = true; };
  openButtons.forEach((button) => button.addEventListener('click', open));
  closeButton.addEventListener('click', close);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
}

function hasSavedLowBrightnessPreference() {
  try {
    return window.localStorage?.getItem(AR_CONFIG.calibration.lowBrightnessKey) !== null;
  } catch {
    return false;
  }
}

export async function mount(app, { navigate }) {
  const page = renderShell();
  app.append(page);
  const bag = createDisposalBag();

  const runtimeInfo = getRuntimeConfig();
  let runtimeConfig = createRuntimeARConfig();
  let lowBrightnessMode = hasSavedLowBrightnessPreference()
    ? loadLowBrightnessMode()
    : Boolean(runtimeInfo.preferLowBrightnessAR);
  let session = null;
  let model = null;
  let effects = null;
  let hotspots = null;
  let performanceMonitor = null;
  let calibrationHelpers = null;
  let calibrationUi = null;
  let startInProgress = false;
  let targetVisible = false;

  function applyRuntimeConfig() {
    document.body.classList.toggle('is-low-brightness', lowBrightnessMode);
    session?.applyVisualConfig(runtimeConfig.visual);
    model?.applyModelConfig(runtimeConfig.model);
    model?.applyVisualConfig(runtimeConfig.visual);
    effects?.applyVisualConfig(runtimeConfig.visual);
    effects?.setLowBrightnessMode(lowBrightnessMode);
  }

  function setLowBrightnessMode(enabled, notify = true) {
    lowBrightnessMode = enabled;
    saveLowBrightnessMode(lowBrightnessMode);
    applyRuntimeConfig();
    if (notify) {
      showToast(
        page,
        lowBrightnessMode
          ? '低亮度模式已开启：光环、粒子和外发光已降低。'
          : '低亮度模式已关闭。',
        1800,
      );
    }
  }

  async function stopSession() {
    setTargetFoundUi(page, false);
    calibrationHelpers?.dispose();
    calibrationHelpers = null;
    hotspots?.dispose?.();
    hotspots = null;
    if (session) {
      try {
        await session.stop();
      } catch (error) {
        console.warn('Failed to stop AR session cleanly.', error);
      }
      disposeScene(session.scene);
      session.dispose();
      stopCameraStream(page);
    }
    session = null;
    model = null;
    effects = null;
    performanceMonitor = null;
    targetVisible = false;
  }

  function wireTargetCallbacks(anchor) {
    anchor.onTargetFound = () => {
      targetVisible = true;
      if (session) session.content.visible = true;
      model?.setVisible(true);
      model?.triggerGlow(1.0);
      effects?.setTargetVisible(true);
      effects?.triggerFound(performance.now() / 1000);
      hotspots?.setEnabled(true);
      calibrationHelpers?.setVisible(calibrationUi?.isOpen() ?? false);
      hideLoading(page);
      setState(page, 'found');
      setTargetFoundUi(page, true);
      showToast(page, STATUS_TEXT.found, 2000);
    };

    anchor.onTargetLost = () => {
      targetVisible = false;
      model?.setVisible(false);
      effects?.setTargetVisible(false);
      hotspots?.setEnabled(false);
      calibrationHelpers?.setVisible(false);
      if (session) session.content.visible = false;
      setTargetFoundUi(page, false);
      setState(page, 'lost');
      by(page, '[data-scan-overlay]').classList.remove('is-hidden');
    };
  }

  async function startScan() {
    if (startInProgress) return;
    startInProgress = true;
    let cameraProbe = null;
    by(page, '[data-start-screen]').hidden = true;
    by(page, '[data-ar-stage]').hidden = false;
    by(page, '[data-ar-stage]').classList.add('is-active');
    setTargetFoundUi(page, false);
    by(page, '[data-scan-overlay]').classList.remove('is-hidden');
    hideError(page);
    setState(page, 'checkingCamera');
    setLoading(
      page,
      '正在检查摄像头权限',
      isWeChat() ? '正在请求摄像头权限，请在弹窗中选择允许。' : '正在请求摄像头权限，请在浏览器弹窗中选择允许。',
      0.08,
    );
    document.body.classList.add('is-ar-running');

    try {
      await stopSession();

      cameraProbe = await requestCameraProbe();
      const cameraDeviceId = cameraProbe.deviceId;
      stopProbeStream(cameraProbe.stream);
      cameraProbe = null;

      setState(page, 'loadingTarget');
      setLoading(page, '正在加载识别图', `正在确认 ${AR_CONFIG.assets.imageTargetSrc}`, 0.16);
      const hasTarget = await assetExists(AR_CONFIG.assets.imageTargetSrc);
      if (!hasTarget) {
        const error = new Error('target.mind missing');
        error.code = 'TARGET_MISSING';
        throw error;
      }

      setState(page, 'starting');
      setLoading(page, '正在启动 AR', '摄像头权限已确认，正在启动图像识别。', 0.24);
      session = createARSession({
        container: by(page, '#ar-container'),
        imageTargetSrc: AR_CONFIG.assets.imageTargetSrc,
        visualConfig: runtimeConfig.visual,
        cameraDeviceId,
      });
      wireTargetCallbacks(session.anchor);

      const modelPromise = loadQuantumModel({
        assets: {
          modelUrl: AR_CONFIG.assets.modelUrl,
          fallbackUrl: AR_CONFIG.assets.modelFallbackUrl,
        },
        onProgress(progress) {
          setLoading(page, '加载 3D 模型', `正在加载量子实验室 ${Math.round(progress * 100)}%`, 0.22 + progress * 0.42);
        },
      });

      await session.start();
      setState(page, 'scanning');
      setLoading(page, '加载模型', '摄像头已启动，正在加载 GLB。', 0.68);

      model = await modelPromise;
      model.applyModelConfig(runtimeConfig.model);
      model.applyVisualConfig(runtimeConfig.visual);
      model.setVisible(false);
      session.content.add(model.root);
      session.content.visible = false;
      session.content.updateMatrixWorld(true);

      if (targetVisible) {
        model.setVisible(true);
        session.content.visible = true;
      }

      effects = createQuantumAREffects({
        anchorGroup: session.content,
        modelRoot: model.root,
        camera: session.camera,
        anchors: model.anchors,
        isMobile: isCoarsePointer(),
        arConfig: runtimeConfig,
        lowBrightnessMode,
      });

      calibrationHelpers = createCalibrationHelpers({
        anchorGroup: session.content,
        modelRoot: model.root,
        targetAspect: AR_CONFIG.assets.targetAspect,
      });
      calibrationHelpers.setVisible(targetVisible && (calibrationUi?.isOpen() ?? false));

      hotspots = createHotspots({
        camera: session.camera,
        anchors: model.anchors,
        layer: by(page, '#hotspot-layer'),
        card: by(page, '#hotspot-card'),
        closeButton: by(page, '#hotspot-close'),
      });
      hotspots.setEnabled(false);

      performanceMonitor = createARPerformanceMonitor({
        renderer: session.renderer,
        effects,
        showToast: (message, duration) => showToast(page, message, duration),
      });

      applyRuntimeConfig();

      session.setFrameCallback(({ delta, elapsed }) => {
        model?.update(delta);
        effects?.update(delta, elapsed);
        hotspots?.update(delta);
        performanceMonitor?.update(delta);
      });

      hideLoading(page);
      if (targetVisible) {
        setState(page, 'found');
        setTargetFoundUi(page, true);
        showToast(page, STATUS_TEXT.found, 2000);
      } else {
        setState(page, 'scanning');
      }
    } catch (error) {
      console.error(error);
      stopProbeStream(cameraProbe?.stream);
      await stopSession();
      const state = error?.code === 'INSECURE_CONTEXT'
        ? 'insecureContext'
        : error?.code === 'TARGET_MISSING'
          ? 'targetError'
          : error?.code === 'MODEL_MISSING'
            ? 'modelError'
            : 'cameraError';
      showError(page, mapStartupError(error), state);
    } finally {
      startInProgress = false;
    }
  }

  calibrationUi = createCalibrationUi({
    mount: by(page, '[data-ar-stage]'),
    toggleButton: by(page, '[data-calibration]'),
    lowBrightnessButton: by(page, '[data-low-brightness]'),
    initialConfig: runtimeConfig,
    initialLowBrightness: lowBrightnessMode,
    onToggle(open) {
      calibrationHelpers?.setVisible(open && targetVisible);
    },
    onChange(nextConfig) {
      runtimeConfig = nextConfig;
      applyRuntimeConfig();
    },
    onSave(nextConfig) {
      runtimeConfig = cloneARConfig(nextConfig);
      saveARConfig(runtimeConfig);
      applyRuntimeConfig();
      showToast(page, '校准参数已保存到本机 localStorage。', 1800);
    },
    onReset() {
      resetSavedARConfig();
      runtimeConfig = cloneARConfig(AR_CONFIG);
      applyRuntimeConfig();
      showToast(page, '校准参数已恢复默认值。', 1800);
      return runtimeConfig;
    },
    onLowBrightnessChange(enabled) {
      setLowBrightnessMode(enabled);
    },
  });
  setLowBrightnessMode(lowBrightnessMode, false);

  function setArDrawerOpen(open) {
    const drawer = by(page, '[data-ar-drawer]');
    const backdrop = by(page, '[data-ar-drawer-backdrop]');
    const button = by(page, '[data-ar-menu]');
    drawer.hidden = !open;
    backdrop.hidden = !open;
    button?.setAttribute('aria-expanded', String(open));
  }

  function closeArDrawer() {
    setArDrawerOpen(false);
  }

  const goHome = async () => {
    closeArDrawer();
    await stopSession();
    navigate('/home');
  };
  by(page, '[data-start-scan]').addEventListener('click', startScan);
  by(page, '[data-rescan]').addEventListener('click', startScan);
  by(page, '[data-retry]').addEventListener('click', startScan);
  by(page, '[data-fallback-3d]').addEventListener('click', () => navigate('/3d'));
  by(page, '[data-error-3d]').addEventListener('click', async () => {
    await stopSession();
    navigate('/3d');
  });
  by(page, '[data-error-home]').addEventListener('click', goHome);
  by(page, '[data-back-start]').addEventListener('click', goHome);
  by(page, '[data-back-stage]').addEventListener('click', goHome);
  by(page, '[data-help]').addEventListener('click', () => { by(page, '[data-help-modal]').hidden = false; });
  by(page, '[data-close-help]').addEventListener('click', () => { by(page, '[data-help-modal]').hidden = true; });
  wireModal(page, '[data-open-target], [data-open-target-stage]', '[data-target-modal]', '[data-close-target]');
  by(page, '[data-ar-menu]').addEventListener('click', () => {
    const drawer = by(page, '[data-ar-drawer]');
    setArDrawerOpen(drawer.hidden);
  });
  by(page, '[data-ar-drawer-close]').addEventListener('click', closeArDrawer);
  by(page, '[data-ar-drawer-backdrop]').addEventListener('click', closeArDrawer);
  by(page, '[data-ar-menu-rescan]').addEventListener('click', () => {
    closeArDrawer();
    startScan();
  });
  by(page, '[data-ar-menu-target]').addEventListener('click', () => {
    closeArDrawer();
    by(page, '[data-target-modal]').hidden = false;
  });
  by(page, '[data-ar-menu-calibration]').addEventListener('click', () => {
    closeArDrawer();
    calibrationUi?.setOpen(!(calibrationUi?.isOpen() ?? false));
  });
  by(page, '[data-ar-menu-help]').addEventListener('click', () => {
    closeArDrawer();
    by(page, '[data-help-modal]').hidden = false;
  });
  by(page, '[data-ar-menu-home]').addEventListener('click', goHome);

  const pageHideHandler = () => {
    stopSession();
  };
  window.addEventListener('pagehide', pageHideHandler);
  bag.add(() => window.removeEventListener('pagehide', pageHideHandler));
  bag.add(async () => {
    await stopSession();
    calibrationUi?.dispose();
    page.remove();
    document.body.classList.remove('is-ar-running', 'is-low-brightness');
    stopCameraStream(document);
  });

  setState(page, 'idle');

  return {
    dispose: () => bag.dispose(),
  };
}
