import * as THREE from 'three';
import { createSceneSystem } from '../shared/sceneSystem.js';
import { loadQuantumModel } from '../shared/loadModel.js';
import { createQuantumEffects } from '../shared/effects.js';
import { createHotspots } from '../shared/hotspots.js';
import { createGuidedTour, createClimaxController } from '../shared/guidedTour.js';
import { createGyroControls } from '../shared/gyroControls.js';
import { createPhoneImmersiveMode } from '../shared/phoneImmersiveMode.js';
import { createGazeInteraction } from '../shared/gazeInteraction.js';
import { createPerformanceGovernor } from '../shared/performance.js';
import { createLabUI } from '../shared/labUi.js';
import { VR_MODE_CONFIG } from '../shared/visualConfig.js';
import { getRuntimeConfig } from '../shared/runtimeConfig.js';
import { createDisposalBag, disposeScene } from '../shared/dispose.js';

function renderShell() {
  const page = document.createElement('section');
  page.className = 'mode-page lab-mode-page immersive-master-page vr-mode-page';
  page.innerHTML = `
    <canvas class="scene-canvas lab-scene-canvas" aria-label="量子纠缠实验室 VR 沉浸展示"></canvas>
    <div class="ambient-haze" aria-hidden="true"></div>

    <div class="entry-transition" data-entry-transition aria-hidden="true">
      <div class="tunnel-rings" aria-hidden="true"><span></span><span></span><span></span></div>
      <p>IMMERSIVE LAB</p>
      <h2 data-entry-title>校准第一人称视角</h2>
      <span data-entry-detail>沉浸导览已就绪</span>
    </div>

    <div class="loading-screen" data-loading aria-busy="true">
      <div class="loader-core" aria-hidden="true"><span></span><span></span><span></span></div>
      <p class="loading-eyebrow">Loading GLB</p>
      <h1>正在进入量子纠缠实验室</h1>
      <div class="loading-track"><i data-loading-bar></i></div>
      <p class="loading-detail" data-loading-detail>正在准备模型与第一人称视角</p>
      <button class="retry-button" type="button" data-retry hidden>重新加载</button>
    </div>

    <div class="interface-shell" data-interface aria-hidden="true">
      <header class="lab-header">
        <div class="lab-identity">
          <p>QUANTUM</p>
          <h1>量子纠缠实验室</h1>
        </div>
        <div class="lab-header-actions">
          <button class="lab-back-button" type="button" data-back>返回首页</button>
        </div>
      </header>

      <aside class="experiment-readout" aria-label="实验路径">
        <p class="readout-kicker">IMMERSIVE PATH</p>
        <ol>
          <li><span>01</span>第一人称进入实验室</li>
          <li><span>02</span>405nm 泵浦激光</li>
          <li><span>03</span>BBO / SPDC</li>
          <li><span>04</span>APD 符合计数</li>
          <li><span>05</span>S = 2.52</li>
        </ol>
      </aside>

      <aside class="tour-readout">
        <p data-tour-mode>第一人称导览</p>
        <h2 data-tour-step>正在准备实验室</h2>
        <div class="tour-line"><i data-tour-line></i></div>
        <span data-tour-index>00 / 00</span>
      </aside>

      <div class="hotspot-layer" data-hotspots></div>
      <article class="hotspot-card" data-hotspot-card aria-hidden="true">
        <button class="hotspot-card__close" type="button" data-hotspot-close aria-label="关闭热点">×</button>
        <p id="hotspot-kicker">实验装置</p>
        <h2 id="hotspot-title">热点</h2>
        <p id="hotspot-description"></p>
      </article>

      <aside class="climax" data-climax aria-hidden="true">
        <p class="climax-kicker">BELL TEST</p>
        <strong data-climax-value>S = 1.82</strong>
        <div class="climax-conclusion">
          <span>CLASSICAL LIMIT BROKEN</span>
          <h2>突破经典上限 S ≤ 2</h2>
          <p>符合计数显示量子关联无法由经典局域模型解释</p>
        </div>
      </aside>

      <article class="spatial-panel" data-spatial-panel aria-hidden="true">
        <p data-spatial-kicker>沉浸提示</p>
        <h2 data-spatial-title>第一人称观察</h2>
        <p data-spatial-body>手机沉浸支持手指拖动和体感；可随时切回自由查看。</p>
      </article>

      <div class="focus-reticle" data-focus-reticle aria-hidden="true"><span></span></div>
      <p class="orientation-hint" data-orientation-hint>体感模式已开启：缓慢转动手机观察实验室</p>
      <button class="return-tour-button" type="button" data-return-tour hidden>回到导览</button>

      <div class="mobile-scene-chrome" aria-label="手机端快捷操作">
        <button class="mobile-icon-button" type="button" data-mobile-back aria-label="返回首页">←</button>
        <h1>量子纠缠实验室</h1>
        <button class="mobile-icon-button" type="button" data-mobile-menu aria-expanded="false" aria-label="打开操作菜单">☰</button>
        <p class="mobile-bottom-hint">单指旋转 · 双指缩放 · 可开启体感</p>
      </div>

      <section class="mobile-vr-start-panel" data-mobile-vr-start>
        <p>VR 沉浸模式</p>
        <h2>选择观看方式</h2>
        <div class="mobile-vr-start-panel__grid">
          <button class="primary-button" type="button" data-mobile-vr-phone>普通沉浸</button>
          <button class="secondary-button" type="button" data-mobile-vr-motion>手机体感</button>
          <button class="secondary-button" type="button" data-mobile-vr-free>自由查看</button>
          <button class="ghost-button" type="button" data-mobile-vr-home>返回首页</button>
        </div>
      </section>

      <div class="mobile-drawer-backdrop" data-mobile-drawer-backdrop hidden></div>
      <nav class="mobile-drawer" data-mobile-drawer hidden aria-label="手机端 VR 操作菜单">
        <div class="mobile-drawer__handle" aria-hidden="true"></div>
        <div class="mobile-drawer__header">
          <span>操作</span>
          <button type="button" data-mobile-close>关闭</button>
        </div>
        <div class="mobile-drawer__grid">
          <button type="button" data-mobile-tour-restart>自动导览</button>
          <button type="button" data-mobile-phone>普通沉浸</button>
          <button type="button" data-mobile-motion-toggle>手机体感</button>
          <button type="button" data-mobile-free>自由查看</button>
          <button type="button" data-mobile-ar>AR 扫描</button>
          <button type="button" data-mobile-home>返回首页</button>
        </div>
      </nav>

      <nav class="controls-panel vr-controls-panel" aria-label="VR 沉浸控制">
        <button class="primary-control" type="button" data-tour-restart>自动导览</button>
        <button type="button" data-phone>普通沉浸模式</button>
        <button type="button" data-motion-toggle>手机体感模式</button>
        <button type="button" data-tour-free>自由查看</button>
      </nav>

      <div class="toast" data-toast role="status" aria-live="polite"></div>
    </div>
  `;
  return page;
}

function by(page, selector) {
  return page.querySelector(selector);
}

function setLoadingProgress(page, progress, message) {
  const percent = Math.round(THREE.MathUtils.clamp(progress, 0, 1) * 100);
  by(page, '[data-loading-bar]').style.width = `${percent}%`;
  by(page, '[data-loading-detail]').textContent = message || (percent < 98
    ? `正在加载沉浸实验室 · ${percent}%`
    : '正在校准第一人称光路…');
}

function updateTourReadout(page, { mode, label, index, count, progress }) {
  by(page, '[data-tour-mode]').textContent = mode;
  by(page, '[data-tour-step]').textContent = label;
  by(page, '[data-tour-index]').textContent = `${String(index + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`;
  by(page, '[data-tour-line]').style.width = `${Math.round(progress * 100)}%`;
}

function showLoadError(page, error) {
  console.error('VR mode failed to start.', error);
  const loading = by(page, '[data-loading]');
  loading.classList.add('is-error');
  loading.setAttribute('aria-busy', 'false');
  loading.querySelector('h1').textContent = '沉浸实验室加载失败';
  by(page, '[data-loading-detail]').textContent = '请确认模型资源存在，并通过本地服务打开页面。';
  by(page, '[data-retry]').hidden = false;
}

export async function mount(app, { navigate }) {
  const page = renderShell();
  app.append(page);

  const bag = createDisposalBag();
  const canvas = by(page, '.lab-scene-canvas');
  const elements = {
    app: page,
    interface: by(page, '[data-interface]'),
    entryTransition: by(page, '[data-entry-transition]'),
    entryTitle: by(page, '[data-entry-title]'),
    entryDetail: by(page, '[data-entry-detail]'),
    toast: by(page, '[data-toast]'),
    spatialPanel: by(page, '[data-spatial-panel]'),
    spatialKicker: by(page, '[data-spatial-kicker]'),
    spatialTitle: by(page, '[data-spatial-title]'),
    spatialBody: by(page, '[data-spatial-body]'),
    crosshair: by(page, '[data-focus-reticle]'),
    orientationHint: by(page, '[data-orientation-hint]'),
    returnTour: by(page, '[data-return-tour]'),
  };
  const ui = createLabUI(elements);
  const runtimeConfig = getRuntimeConfig();
  page.dataset.runtimeLevel = runtimeConfig.level.toLowerCase();
  bag.add(() => ui.dispose());

  let sceneSystem;
  try {
    sceneSystem = createSceneSystem(canvas, { modeConfig: VR_MODE_CONFIG, runtimeConfig });
  } catch (error) {
    showLoadError(page, error);
    return { dispose: () => bag.dispose() };
  }

  const { scene, camera, controls, renderer } = sceneSystem;
  const gyroControls = createGyroControls(camera);
  let elapsed = 0;

  bag.add(() => {
    gyroControls.disable();
    renderer.xr && (renderer.xr.enabled = false);
    renderer.setAnimationLoop(null);
    sceneSystem.dispose();
    disposeScene(scene);
    page.remove();
    document.body.removeAttribute('data-view-mode');
    delete document.body.dataset.climax;
  });

  by(page, '[data-back]').addEventListener('click', () => navigate('/home'));
  by(page, '[data-retry]').addEventListener('click', () => window.location.reload());

  let model;
  try {
    model = await loadQuantumModel({
      onProgress: (progress) => setLoadingProgress(page, progress),
      onSourceChange: () => setLoadingProgress(page, 0.1, '压缩模型不可用，正在切换兼容版本…'),
    });
  } catch (error) {
    showLoadError(page, error);
    return { dispose: () => bag.dispose() };
  }

  scene.add(model.root);
  model.applyVisualConfig?.(VR_MODE_CONFIG.model);
  sceneSystem.setGridFloor(model.bounds.min.y - 0.035);

  const effects = createQuantumEffects({
    scene,
    camera,
    anchors: model.anchors,
    isMobile: sceneSystem.isMobile,
    reducedMotion: sceneSystem.reducedMotion,
    visualConfig: VR_MODE_CONFIG.effects,
    runtimeConfig,
  });

  const hotspots = createHotspots({
    camera,
    anchors: model.anchors,
    layer: by(page, '[data-hotspots]'),
    card: by(page, '[data-hotspot-card]'),
    closeButton: by(page, '[data-hotspot-close]'),
  });
  bag.add(() => hotspots.dispose());

  const gaze = createGazeInteraction({
    scene,
    camera,
    hotspots,
    anchors: model.anchors,
    ui,
  });
  bag.add(() => gaze.dispose());

  const climax = createClimaxController({
    element: by(page, '[data-climax]'),
    valueElement: by(page, '[data-climax-value]'),
    onTick: (_value, index) => {
      if (index === 2) model.triggerGlow(0.72);
    },
    onImpact: () => {
      effects.triggerClimax(elapsed);
      model.triggerGlow(1.8);
      document.body.dataset.climax = 'complete';
      ui.setSpatialPanel({
        kicker: 'S = 2.52',
        title: '突破经典上限 S ≤ 2',
        body: '符合计数显示贝尔不等式被违反，量子关联不能用经典局域模型解释。',
      });
    },
  });
  bag.add(() => climax.dispose());

  const tour = createGuidedTour({
    camera,
    controls,
    anchors: model.anchors,
    bounds: model.bounds,
    modeLabel: '第一人称导览',
    firstPerson: true,
    onUpdate: (state) => {
      updateTourReadout(page, state);
      if (['scan', 'motion'].includes(document.body.dataset.viewMode)) {
        ui.setSpatialPanel({
          kicker: state.mode,
          title: state.label,
          body: '可切换体感或自由查看；不支持 WebXR 也不会影响当前画面。',
        });
      }
    },
    onPause: (label) => {
      updateTourReadout(page, {
        mode: label,
        label: '可用手指拖动查看；体感需要点击按钮授权。',
        index: 0,
        count: 1,
        progress: 1,
      });
    },
    onClimax: () => climax.play(),
  });
  bag.add(() => tour.dispose());

  const performance = createPerformanceGovernor({
    sceneSystem,
    effects,
    dot: by(page, '[data-performance-dot]'),
    label: by(page, '[data-performance]'),
    runtimeConfig,
    showToast: ui.showToast,
  });

  const phoneMode = createPhoneImmersiveMode({
    app: page,
    camera,
    orbitControls: controls,
    anchors: model.anchors,
    bounds: model.bounds,
    gyroControls,
    showToast: ui.showToast,
    onEnterTransition: ui.playEntranceTransition,
    onModeChange: (mode) => {
      ui.setMode(mode);
      const immersive = mode === 'scan' || mode === 'motion';
      hotspots.setEnabled(!immersive);
      gaze.setEnabled(immersive);
      if (mode !== 'motion') setMotionButtons(false);
    },
  });
  bag.add(() => phoneMode.dispose());

  async function restartTour() {
    phoneMode.setTourMode();
    ui.setMode('tour');
    hotspots.setEnabled(true);
    gaze.setEnabled(false);
    climax.reset();
    document.body.dataset.climax = 'pending';
    model.mixer.setTime(0);
    ui.playEntranceTransition('第一人称导览开始', '从实验室入口推进到纠缠光路');
    tour.restart(elapsed);
    ui.showToast('自动导览已开始，可以随时拖动打断。');
  }

  function setMotionButtons(enabled) {
    by(page, '[data-motion-toggle]').textContent = enabled ? '关闭体感' : '手机体感模式';
    const mobileButton = by(page, '[data-mobile-motion-toggle]');
    if (mobileButton) mobileButton.textContent = enabled ? '关闭体感' : '手机体感';
  }

  function hideMobileVrStart() {
    const panel = by(page, '[data-mobile-vr-start]');
    if (panel) panel.hidden = true;
  }

  function setMobileDrawerOpen(open) {
    const drawer = by(page, '[data-mobile-drawer]');
    const backdrop = by(page, '[data-mobile-drawer-backdrop]');
    const button = by(page, '[data-mobile-menu]');
    drawer.hidden = !open;
    backdrop.hidden = !open;
    button?.setAttribute('aria-expanded', String(open));
  }

  function closeMobileDrawer() {
    setMobileDrawerOpen(false);
  }

  async function enterPhoneMode() {
    hideMobileVrStart();
    tour.free();
    await phoneMode.enterScanMode({ fullscreen: true });
  }

  async function toggleMotion() {
    hideMobileVrStart();
    if (phoneMode.motionActive) {
      phoneMode.disableMotion();
      setMotionButtons(false);
      return;
    }
    tour.free();
    const enabled = await phoneMode.enableMotion();
    setMotionButtons(enabled);
  }

  async function enterFreeView() {
    hideMobileVrStart();
    tour.free();
    await phoneMode.exitToFree({ exitScreen: true });
    hotspots.setEnabled(true);
    gaze.setEnabled(false);
  }

  by(page, '[data-tour-restart]').addEventListener('click', restartTour);
  by(page, '[data-phone]').addEventListener('click', enterPhoneMode);
  by(page, '[data-motion-toggle]').addEventListener('click', toggleMotion);
  by(page, '[data-tour-free]').addEventListener('click', enterFreeView);
  by(page, '[data-return-tour]').addEventListener('click', restartTour);
  by(page, '[data-mobile-back]').addEventListener('click', () => navigate('/home'));
  by(page, '[data-mobile-home]').addEventListener('click', () => navigate('/home'));
  by(page, '[data-mobile-vr-home]').addEventListener('click', () => navigate('/home'));
  by(page, '[data-mobile-menu]').addEventListener('click', () => {
    const drawer = by(page, '[data-mobile-drawer]');
    setMobileDrawerOpen(drawer.hidden);
  });
  by(page, '[data-mobile-close]').addEventListener('click', closeMobileDrawer);
  by(page, '[data-mobile-drawer-backdrop]').addEventListener('click', closeMobileDrawer);
  by(page, '[data-mobile-vr-phone]').addEventListener('click', enterPhoneMode);
  by(page, '[data-mobile-vr-motion]').addEventListener('click', toggleMotion);
  by(page, '[data-mobile-vr-free]').addEventListener('click', enterFreeView);
  by(page, '[data-mobile-tour-restart]').addEventListener('click', () => {
    closeMobileDrawer();
    hideMobileVrStart();
    restartTour();
  });
  by(page, '[data-mobile-phone]').addEventListener('click', async () => {
    closeMobileDrawer();
    await enterPhoneMode();
  });
  by(page, '[data-mobile-motion-toggle]').addEventListener('click', async () => {
    closeMobileDrawer();
    await toggleMotion();
  });
  by(page, '[data-mobile-free]').addEventListener('click', async () => {
    closeMobileDrawer();
    await enterFreeView();
  });
  by(page, '[data-mobile-ar]').addEventListener('click', () => navigate('/ar'));

  const clock = new THREE.Clock();
  renderer.setAnimationLoop((time, xrFrame) => {
    const delta = Math.min(clock.getDelta(), 0.05);
    elapsed += delta;
    model.update(delta);
    tour.update(elapsed);
    phoneMode.update(delta);
    if (!tour.active && controls.enabled) controls.update();
    effects.update(delta, elapsed, model.animationTime);
    hotspots.update();
    gaze.update(delta);

    if (renderer.xr?.isPresenting && xrFrame) {
      renderer.render(scene, camera);
    } else {
      sceneSystem.render();
    }

    performance.update(delta, {
      immersiveActive: ['scan', 'motion'].includes(phoneMode.mode),
      isMobile: sceneSystem.isMobile,
    });
  });

  tour.restart(elapsed);
  window.requestAnimationFrame(() => {
    by(page, '[data-interface]').classList.add('is-ready');
    by(page, '[data-interface]').setAttribute('aria-hidden', 'false');
    by(page, '[data-loading]').setAttribute('aria-busy', 'false');
    by(page, '[data-loading]').classList.add('is-done');
  });

  document.body.dataset.climax = 'pending';

  return {
    dispose: () => bag.dispose(),
  };
}
