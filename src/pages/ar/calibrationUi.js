import { AR_CONFIG } from './arConfig.js';
import {
  DEFAULT_AR_CALIBRATION,
  applyCalibrationToARConfig,
  formatCalibrationJson,
  normalizeCalibrationConfig,
  runtimeToCalibrationConfig,
} from '../../config/arCalibrationConfig.js';

const TAB_LABELS = [
  { id: 'transform', label: '变换' },
  { id: 'brightness', label: '亮度' },
  { id: 'labels', label: '标签' },
  { id: 'save', label: '保存' },
];

const RANGE_CONTROLS = {
  transform: [
    { path: 'scale', label: '模型整体缩放', min: 0.05, max: 2, step: 0.01, digits: 3 },
    { path: 'position.x', label: '水平位置', min: -2, max: 2, step: 0.01 },
    { path: 'position.y', label: '垂直位置', min: -2, max: 2, step: 0.01 },
    { path: 'position.z', label: '前后位置', min: -2, max: 2, step: 0.01 },
    { path: 'rotation.x', label: '俯仰角', min: -180, max: 180, step: 1, suffix: '°', digits: 0 },
    { path: 'rotation.y', label: '水平转角', min: -180, max: 180, step: 1, suffix: '°', digits: 0 },
    { path: 'rotation.z', label: '平面旋转', min: -180, max: 180, step: 1, suffix: '°', digits: 0 },
  ],
  brightness: [
    { path: 'visual.laserIntensity', label: '激光亮度', min: 0, max: 2, step: 0.01 },
    { path: 'visual.bboIntensity', label: '晶体亮度', min: 0, max: 2, step: 0.01 },
    { path: 'visual.photonIntensity', label: '光子路径亮度', min: 0, max: 2, step: 0.01 },
    { path: 'visual.glowOpacity', label: '外发光强度', min: 0, max: 1, step: 0.01 },
  ],
  labels: [
    { path: 'labels.labelScale', label: '标签大小', min: 0.3, max: 2, step: 0.05 },
    { path: 'labels.labelOffset.x', label: '标签水平偏移', min: -1, max: 1, step: 0.01 },
    { path: 'labels.labelOffset.y', label: '标签垂直偏移', min: -1, max: 1, step: 0.01 },
    { path: 'labels.labelOffset.z', label: '标签前后偏移', min: -1, max: 1, step: 0.01 },
  ],
};

function createElement(tag, className, text = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function getByPath(source, path) {
  return path.split('.').reduce((cursor, segment) => cursor?.[segment], source);
}

function setByPath(target, path, value) {
  const segments = path.split('.');
  let cursor = target;
  for (let i = 0; i < segments.length - 1; i += 1) {
    const segment = segments[i];
    if (!cursor[segment] || typeof cursor[segment] !== 'object') cursor[segment] = {};
    cursor = cursor[segment];
  }
  cursor[segments[segments.length - 1]] = value;
}

function formatNumber(value, digits = 2, suffix = '') {
  return `${Number(value).toFixed(digits).replace(/0+$/, '').replace(/\.$/, '')}${suffix}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeAngle(value) {
  let next = Number(value) || 0;
  while (next > 180) next -= 360;
  while (next < -180) next += 360;
  return next;
}

function createButton(text, onClick, className = 'calibration-action') {
  const button = createElement('button', className, text);
  button.type = 'button';
  button.addEventListener('click', onClick);
  return button;
}

export function createCalibrationUi({
  mount,
  toggleButton,
  lowBrightnessButton,
  initialConfig,
  initialLowBrightness = false,
  onChange,
  onSave,
  onReset,
  onToggle,
  onLowBrightnessChange,
} = {}) {
  let currentRuntimeConfig = initialConfig;
  let currentCalibration = runtimeToCalibrationConfig(initialConfig);
  let isOpen = false;
  let lowBrightness = initialLowBrightness;
  let activeTab = 'transform';
  const controls = new Map();

  const panel = createElement('aside', 'calibration-panel calibration-panel--realtime');
  panel.setAttribute('aria-label', 'AR 实时校准面板');
  panel.setAttribute('aria-hidden', 'true');

  const header = createElement('div', 'calibration-panel__header');
  const titleWrap = createElement('div');
  titleWrap.append(createElement('p', 'calibration-panel__kicker', 'AR Calibration'));
  titleWrap.append(createElement('h3', '', 'AR 校准工具'));
  const headerActions = createElement('div', 'calibration-panel__header-actions');
  const expandButton = createElement('button', 'calibration-panel__mini-action', '展开');
  const closeButton = createElement('button', 'calibration-panel__close', '×');
  expandButton.type = 'button';
  closeButton.type = 'button';
  expandButton.setAttribute('aria-label', '展开或收起校准面板高度');
  closeButton.setAttribute('aria-label', '关闭校准面板');
  headerActions.append(expandButton, closeButton);
  header.append(titleWrap, headerActions);
  panel.append(header);

  panel.append(createElement(
    'p',
    'calibration-panel__hint',
    '滑块会实时生效，不需要刷新页面或重新识别。建议在识别图稳定后少量微调。',
  ));

  const tabBar = createElement('div', 'calibration-tabs');
  const tabButtons = new Map();
  for (const tab of TAB_LABELS) {
    const button = createElement('button', 'calibration-tab', tab.label);
    button.type = 'button';
    button.dataset.tab = tab.id;
    button.setAttribute('aria-pressed', tab.id === activeTab ? 'true' : 'false');
    button.addEventListener('click', () => setActiveTab(tab.id));
    tabButtons.set(tab.id, button);
    tabBar.append(button);
  }
  panel.append(tabBar);

  const body = createElement('div', 'calibration-panel__body');
  const tabPanels = new Map();
  panel.append(body);

  function refreshCode() {}

  function emitRealtimeChange() {
    currentCalibration = normalizeCalibrationConfig(currentCalibration);
    currentRuntimeConfig = applyCalibrationToARConfig(AR_CONFIG, currentCalibration);
    refreshControls();
    refreshCode();
    onChange?.(currentRuntimeConfig, currentCalibration);
  }

  function setCalibrationValue(path, value, emit = true) {
    setByPath(currentCalibration, path, value);
    currentCalibration = normalizeCalibrationConfig(currentCalibration);
    if (emit) emitRealtimeChange();
    else refreshControls();
  }

  function adjustValue(path, delta) {
    const control = [...Object.values(RANGE_CONTROLS).flat()].find((item) => item.path === path);
    const current = Number(getByPath(currentCalibration, path) ?? 0);
    const next = path.startsWith('rotation.')
      ? normalizeAngle(current + delta)
      : clamp(current + delta, control?.min ?? -Infinity, control?.max ?? Infinity);
    setCalibrationValue(path, next);
  }

  function patchCalibration(patch) {
    currentCalibration = normalizeCalibrationConfig({
      ...currentCalibration,
      ...patch,
      position: {
        ...currentCalibration.position,
        ...(patch.position || {}),
      },
      rotation: {
        ...currentCalibration.rotation,
        ...(patch.rotation || {}),
      },
      visual: {
        ...currentCalibration.visual,
        ...(patch.visual || {}),
      },
      labels: {
        ...currentCalibration.labels,
        ...(patch.labels || {}),
        labelOffset: {
          ...currentCalibration.labels.labelOffset,
          ...(patch.labels?.labelOffset || {}),
        },
      },
    });
    emitRealtimeChange();
  }

  function makeRange(control) {
    const row = createElement('label', 'calibration-row');
    const label = createElement('span', 'calibration-row__label', control.label);
    const value = createElement('output', 'calibration-row__value');
    const input = document.createElement('input');
    input.type = 'range';
    input.min = String(control.min);
    input.max = String(control.max);
    input.step = String(control.step);
    input.dataset.path = control.path;
    input.addEventListener('input', () => {
      const nextValue = Number(input.value);
      setByPath(currentCalibration, control.path, nextValue);
      currentCalibration = normalizeCalibrationConfig(currentCalibration);
      value.textContent = formatNumber(getByPath(currentCalibration, control.path), control.digits ?? 2, control.suffix || '');
      emitRealtimeChange();
    });
    row.append(label, value, input);
    controls.set(control.path, { control, input, value });
    return row;
  }

  function makeQuickGrid(buttons) {
    const grid = createElement('div', 'calibration-quick-grid');
    for (const button of buttons) grid.append(button);
    return grid;
  }

  function buildTransformPanel() {
    const panelElement = createElement('section', 'calibration-tabpanel');
    panelElement.dataset.panel = 'transform';
    panelElement.append(createElement('p', 'calibration-section-title', '模型方向'));
    panelElement.append(makeQuickGrid([
      createButton('顺时针 90°', () => adjustValue('rotation.z', 90)),
      createButton('逆时针 90°', () => adjustValue('rotation.z', -90)),
      createButton('平放', () => patchCalibration({ rotation: { x: 90, y: 0, z: 90 } })),
      createButton('竖放', () => patchCalibration({ rotation: { x: 0, y: 0, z: 90 } })),
      createButton('默认角度', () => patchCalibration({ rotation: { ...DEFAULT_AR_CALIBRATION.rotation } })),
    ]));
    panelElement.append(createElement('p', 'calibration-section-title', '位置快捷微调'));
    panelElement.append(makeQuickGrid([
      createButton('上移', () => adjustValue('position.y', 0.05)),
      createButton('下移', () => adjustValue('position.y', -0.05)),
      createButton('左移', () => adjustValue('position.x', -0.05)),
      createButton('右移', () => adjustValue('position.x', 0.05)),
      createButton('靠近', () => adjustValue('position.z', 0.05)),
      createButton('远离', () => adjustValue('position.z', -0.05)),
      createButton('放大', () => adjustValue('scale', 0.01)),
      createButton('缩小', () => adjustValue('scale', -0.01)),
    ]));
    for (const control of RANGE_CONTROLS.transform) panelElement.append(makeRange(control));
    return panelElement;
  }

  function buildBrightnessPanel() {
    const panelElement = createElement('section', 'calibration-tabpanel');
    panelElement.dataset.panel = 'brightness';
    panelElement.append(createElement('p', 'calibration-section-title', '发光快捷微调'));
    panelElement.append(makeQuickGrid([
      createButton('降低发光', () => patchCalibration({
        visual: {
          laserIntensity: currentCalibration.visual.laserIntensity * 0.85,
          bboIntensity: currentCalibration.visual.bboIntensity * 0.85,
          photonIntensity: currentCalibration.visual.photonIntensity * 0.85,
          glowOpacity: currentCalibration.visual.glowOpacity * 0.82,
        },
      })),
      createButton('增强发光', () => patchCalibration({
        visual: {
          laserIntensity: currentCalibration.visual.laserIntensity * 1.12,
          bboIntensity: currentCalibration.visual.bboIntensity * 1.12,
          photonIntensity: currentCalibration.visual.photonIntensity * 1.12,
          glowOpacity: currentCalibration.visual.glowOpacity * 1.16,
        },
      })),
      createButton('低亮度', () => patchCalibration({
        visual: {
          laserIntensity: 0.22,
          bboIntensity: 0.18,
          photonIntensity: 0.24,
          glowOpacity: 0.05,
        },
      })),
      createButton('标准亮度', () => patchCalibration({ visual: { ...DEFAULT_AR_CALIBRATION.visual } })),
    ]));
    for (const control of RANGE_CONTROLS.brightness) panelElement.append(makeRange(control));
    return panelElement;
  }

  function buildLabelsPanel() {
    const panelElement = createElement('section', 'calibration-tabpanel');
    panelElement.dataset.panel = 'labels';
    const switchRow = createElement('label', 'calibration-switch-row');
    const switchText = createElement('span', 'calibration-row__label', '显示器件标签');
    const switchInput = document.createElement('input');
    switchInput.type = 'checkbox';
    switchInput.addEventListener('change', () => {
      currentCalibration.labels.showLabels = switchInput.checked;
      emitRealtimeChange();
    });
    switchRow.append(switchText, switchInput);
    controls.set('labels.showLabels', { input: switchInput, type: 'checkbox' });
    panelElement.append(switchRow);
    panelElement.append(makeQuickGrid([
      createButton('隐藏标签', () => patchCalibration({ labels: { showLabels: false } })),
      createButton('显示标签', () => patchCalibration({ labels: { showLabels: true } })),
      createButton('标签复位', () => patchCalibration({ labels: { ...DEFAULT_AR_CALIBRATION.labels } })),
    ]));
    for (const control of RANGE_CONTROLS.labels) panelElement.append(makeRange(control));
    return panelElement;
  }

  const savePanel = createElement('section', 'calibration-tabpanel');
  savePanel.dataset.panel = 'save';
  const saveActions = createElement('div', 'calibration-actions calibration-actions--stacked');
  const saveButton = createButton('保存到本机', () => {
    onSave?.(currentRuntimeConfig, currentCalibration);
    refreshCode();
  }, 'calibration-action calibration-action--primary');
  const resetButton = createButton('重置默认值', () => {
    const nextConfig = onReset?.();
    currentRuntimeConfig = nextConfig || applyCalibrationToARConfig(AR_CONFIG, DEFAULT_AR_CALIBRATION);
    currentCalibration = runtimeToCalibrationConfig(currentRuntimeConfig);
    emitRealtimeChange();
  });
  const copyButton = createButton('导出校准配置', async () => {
    const text = formatCalibrationJson(currentCalibration);
    code.textContent = text;
    fallbackTextarea.value = text;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(text);
      fallbackTextarea.hidden = true;
    } catch (error) {
      console.warn('Clipboard write failed; showing textarea fallback.', error);
      fallbackTextarea.hidden = false;
      fallbackTextarea.focus();
      fallbackTextarea.select();
    }
  });
  saveActions.append(saveButton, resetButton, copyButton);
  savePanel.append(saveActions);
  const code = createElement('pre', 'calibration-code');
  const fallbackTextarea = document.createElement('textarea');
  fallbackTextarea.className = 'calibration-copy-fallback';
  fallbackTextarea.hidden = true;
  fallbackTextarea.setAttribute('aria-label', '当前 AR 校准配置，长按复制');
  savePanel.append(code, fallbackTextarea);

  const panels = [
    buildTransformPanel(),
    buildBrightnessPanel(),
    buildLabelsPanel(),
    savePanel,
  ];
  for (const tabPanel of panels) {
    body.append(tabPanel);
    tabPanels.set(tabPanel.dataset.panel, tabPanel);
  }

  mount?.append(panel);

  function refreshControls() {
    for (const [path, pair] of controls.entries()) {
      if (pair.type === 'checkbox') {
        pair.input.checked = Boolean(getByPath(currentCalibration, path));
        continue;
      }
      const value = getByPath(currentCalibration, path);
      pair.input.value = String(value);
      pair.value.textContent = formatNumber(value, pair.control.digits ?? 2, pair.control.suffix || '');
    }
  }

  refreshCode = function updateCode() {
    const text = formatCalibrationJson(currentCalibration);
    code.textContent = text;
    if (!fallbackTextarea.hidden) fallbackTextarea.value = text;
  };

  function setActiveTab(nextTab) {
    activeTab = nextTab;
    for (const [tab, button] of tabButtons.entries()) {
      button.classList.toggle('is-active', tab === activeTab);
      button.setAttribute('aria-pressed', String(tab === activeTab));
    }
    for (const [tab, tabPanel] of tabPanels.entries()) {
      tabPanel.hidden = tab !== activeTab;
    }
  }

  function setOpen(nextOpen) {
    isOpen = nextOpen;
    panel.classList.toggle('is-open', isOpen);
    panel.setAttribute('aria-hidden', String(!isOpen));
    toggleButton?.classList.toggle('is-active', isOpen);
    toggleButton?.setAttribute('aria-pressed', String(isOpen));
    onToggle?.(isOpen);
  }

  function setLowBrightness(nextValue, emit = true) {
    lowBrightness = nextValue;
    lowBrightnessButton?.classList.toggle('is-active', lowBrightness);
    lowBrightnessButton?.setAttribute('aria-pressed', String(lowBrightness));
    lowBrightnessButton?.setAttribute('data-enabled', lowBrightness ? 'true' : 'false');
    if (emit) onLowBrightnessChange?.(lowBrightness);
  }

  expandButton.addEventListener('click', () => {
    panel.classList.toggle('is-expanded');
    expandButton.textContent = panel.classList.contains('is-expanded') ? '收起' : '展开';
  });
  toggleButton?.addEventListener('click', () => setOpen(!isOpen));
  closeButton.addEventListener('click', () => setOpen(false));
  lowBrightnessButton?.addEventListener('click', () => setLowBrightness(!lowBrightness));

  setActiveTab(activeTab);
  setLowBrightness(lowBrightness, false);
  currentRuntimeConfig = applyCalibrationToARConfig(AR_CONFIG, currentCalibration);
  refreshControls();
  refreshCode();

  return {
    setOpen,
    isOpen() {
      return isOpen;
    },
    setConfig(nextConfig) {
      currentRuntimeConfig = nextConfig;
      currentCalibration = runtimeToCalibrationConfig(nextConfig);
      refreshControls();
      refreshCode();
    },
    setLowBrightness,
    dispose() {
      panel.remove();
    },
  };
}
