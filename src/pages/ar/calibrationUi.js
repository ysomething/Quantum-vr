import { AR_CONFIG, formatConfigForSource } from './arConfig.js';

const CONTROLS = [
  { path: 'model.scale', label: 'scale 缩放', min: 0.03, max: 0.18, step: 0.001 },
  { path: 'model.position.x', label: 'position.x 左右', min: -0.35, max: 0.35, step: 0.005 },
  { path: 'model.position.y', label: 'position.y 上下', min: -0.35, max: 0.35, step: 0.005 },
  { path: 'model.position.z', label: 'position.z 高度', min: -0.08, max: 0.35, step: 0.005 },
  { path: 'model.rotation.x', label: 'rotation.x', min: -3.142, max: 3.142, step: 0.01 },
  { path: 'model.rotation.y', label: 'rotation.y', min: -3.142, max: 3.142, step: 0.01 },
  { path: 'model.rotation.z', label: 'rotation.z', min: -3.142, max: 3.142, step: 0.01 },
  { path: 'visual.bloomStrength', label: 'bloomStrength', min: 0.1, max: 0.8, step: 0.01 },
  { path: 'visual.exposure', label: 'exposure', min: 0.45, max: 1, step: 0.01 },
  { path: 'visual.ringOpacity', label: 'ringOpacity', min: 0, max: 0.24, step: 0.005 },
  { path: 'visual.textOpacity', label: 'textOpacity', min: 0.28, max: 0.86, step: 0.01 },
];

function getByPath(source, path) {
  return path.split('.').reduce((cursor, segment) => cursor?.[segment], source);
}

function setByPath(target, path, value) {
  const segments = path.split('.');
  let cursor = target;
  for (let i = 0; i < segments.length - 1; i += 1) cursor = cursor[segments[i]];
  cursor[segments[segments.length - 1]] = value;
}

function formatNumber(value) {
  return Number(value).toFixed(3).replace(/0+$/, '').replace(/\.$/, '');
}

function createElement(tag, className, text = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
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
  let currentConfig = initialConfig;
  let isOpen = false;
  let lowBrightness = initialLowBrightness;
  const inputs = new Map();

  const panel = createElement('aside', 'calibration-panel');
  panel.setAttribute('aria-label', 'AR 校准面板');
  panel.setAttribute('aria-hidden', 'true');

  const header = createElement('div', 'calibration-panel__header');
  const titleWrap = createElement('div');
  titleWrap.append(createElement('p', 'calibration-panel__kicker', 'Calibration'));
  titleWrap.append(createElement('h3', '', 'AR 点位校准'));
  const closeButton = createElement('button', 'calibration-panel__close', '×');
  closeButton.type = 'button';
  closeButton.setAttribute('aria-label', '关闭校准面板');
  header.append(titleWrap, closeButton);
  panel.append(header);

  panel.append(createElement(
    'p',
    'calibration-panel__hint',
    '打开后会显示识别图边框、中心十字和模型底座。调节会实时生效，保存到本机 localStorage。',
  ));

  const controls = createElement('div', 'calibration-controls');
  for (const control of CONTROLS) {
    const row = createElement('label', 'calibration-row');
    const label = createElement('span', 'calibration-row__label', control.label);
    const value = createElement('output', 'calibration-row__value');
    const input = document.createElement('input');
    input.type = 'range';
    input.min = String(control.min);
    input.max = String(control.max);
    input.step = String(control.step);
    input.value = String(getByPath(currentConfig, control.path) ?? getByPath(AR_CONFIG, control.path));
    input.dataset.path = control.path;
    value.textContent = formatNumber(input.value);
    input.addEventListener('input', () => {
      const nextValue = Number(input.value);
      setByPath(currentConfig, control.path, nextValue);
      value.textContent = formatNumber(nextValue);
      onChange?.(currentConfig, control.path, nextValue);
    });
    row.append(label, value, input);
    controls.append(row);
    inputs.set(control.path, { input, value });
  }
  panel.append(controls);

  const actions = createElement('div', 'calibration-actions');
  const saveButton = createElement('button', 'calibration-action calibration-action--primary', '保存参数');
  const resetButton = createElement('button', 'calibration-action', '重置参数');
  const copyButton = createElement('button', 'calibration-action', '复制配置');
  saveButton.type = 'button';
  resetButton.type = 'button';
  copyButton.type = 'button';
  actions.append(saveButton, resetButton, copyButton);
  panel.append(actions);

  const code = createElement('pre', 'calibration-code');
  code.textContent = formatConfigForSource(currentConfig);
  panel.append(code);
  mount?.append(panel);

  function refreshInputs() {
    for (const control of CONTROLS) {
      const pair = inputs.get(control.path);
      if (!pair) continue;
      const value = getByPath(currentConfig, control.path);
      pair.input.value = String(value);
      pair.value.textContent = formatNumber(value);
    }
    code.textContent = formatConfigForSource(currentConfig);
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

  toggleButton?.addEventListener('click', () => setOpen(!isOpen));
  closeButton.addEventListener('click', () => setOpen(false));
  lowBrightnessButton?.addEventListener('click', () => setLowBrightness(!lowBrightness));
  saveButton.addEventListener('click', () => {
    onSave?.(currentConfig);
    code.textContent = formatConfigForSource(currentConfig);
  });
  resetButton.addEventListener('click', () => {
    const nextConfig = onReset?.();
    if (nextConfig) currentConfig = nextConfig;
    refreshInputs();
  });
  copyButton.addEventListener('click', async () => {
    const text = formatConfigForSource(currentConfig);
    code.textContent = text;
    try {
      await navigator.clipboard?.writeText(text);
    } catch (error) {
      console.warn('Clipboard write failed; config remains visible.', error);
    }
  });

  setLowBrightness(lowBrightness, false);
  refreshInputs();

  return {
    setOpen,
    isOpen() {
      return isOpen;
    },
    setConfig(nextConfig) {
      currentConfig = nextConfig;
      refreshInputs();
    },
    setLowBrightness,
    dispose() {
      panel.remove();
    },
  };
}
