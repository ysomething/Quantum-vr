import * as THREE from 'three';

export const HOTSPOT_DEFINITIONS = [
  {
    id: 'laser',
    label: '405nm 激光器',
    description: '泵浦光源向 BBO 晶体注入能量，是纠缠光子对产生的起点。',
    anchor: 'laser',
    offset: [0, 0.5, 0],
  },
  {
    id: 'bbo',
    label: 'BBO 晶体',
    description: '自发参量下转换在这里发生，一个泵浦光子转化为一对纠缠光子。',
    anchor: 'bbo',
    offset: [0, 0.55, 0],
  },
  {
    id: 'polarizer',
    label: '偏振分析器',
    description: '选择测量基，比较不同偏振角度下两路光子的关联强度。',
    anchor: 'polarizer',
    offset: [0, 0.52, 0],
  },
  {
    id: 'apd',
    label: 'APD 探测器',
    description: '雪崩光电二极管记录单光子事件，左右两路结果进入符合计数。',
    anchor: 'apd',
    offset: [0, 0.48, 0],
  },
  {
    id: 'counter',
    label: '符合计数器',
    description: '统计同时探测到的事件并计算贝尔参数 S，高潮阶段显示 S = 2.52。',
    anchor: 'counter',
    offset: [0, 0.52, 0],
  },
];

export function createHotspots({ camera, anchors, layer, card, closeButton }) {
  const title = card.querySelector('#hotspot-title');
  const description = card.querySelector('#hotspot-description');
  const kicker = card.querySelector('#hotspot-kicker');
  const markers = [];
  const projected = new THREE.Vector3();
  const world = new THREE.Vector3();
  const labelOffset = new THREE.Vector3();
  let activeId = null;
  let enabled = true;
  let autoCloseTimer = null;
  let labelTransformEnabled = false;
  let labelConfig = {
    showLabels: true,
    labelScale: 1,
    labelOffset: { x: 0, y: 0, z: 0 },
  };

  function clearAutoClose() {
    window.clearTimeout(autoCloseTimer);
    autoCloseTimer = null;
  }

  function isMobileViewport() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  function open(definition) {
    clearAutoClose();
    activeId = definition.id;
    kicker.textContent = '实验装置';
    title.textContent = definition.label;
    description.textContent = definition.description;
    card.classList.add('is-open');
    card.setAttribute('aria-hidden', 'false');
    for (const marker of markers) {
      marker.element.classList.toggle('is-active', marker.definition.id === definition.id);
      marker.element.setAttribute('aria-expanded', marker.definition.id === definition.id ? 'true' : 'false');
    }
    if (isMobileViewport()) {
      autoCloseTimer = window.setTimeout(close, 3000);
    }
  }

  function close() {
    clearAutoClose();
    activeId = null;
    card.classList.remove('is-open');
    card.setAttribute('aria-hidden', 'true');
    for (const marker of markers) {
      marker.element.classList.remove('is-active');
      marker.element.setAttribute('aria-expanded', 'false');
    }
  }

  for (const definition of HOTSPOT_DEFINITIONS) {
    const anchor = anchors[definition.anchor];
    if (!anchor) continue;
    const element = document.createElement('button');
    element.type = 'button';
    element.className = 'hotspot-marker is-hidden';
    element.dataset.hotspot = definition.id;
    element.setAttribute('aria-label', `${definition.label}：${definition.description}`);
    element.setAttribute('aria-expanded', 'false');
    const label = document.createElement('span');
    label.textContent = definition.label;
    element.append(label);
    element.addEventListener('click', () => {
      if (activeId === definition.id) close();
      else open(definition);
    });
    element.addEventListener('pointerenter', () => {
      if (window.matchMedia('(hover: hover)').matches) open(definition);
    });
    layer.append(element);
    markers.push({ definition, anchor, element, offset: new THREE.Vector3(...definition.offset) });
  }

  function update() {
    if (!enabled) return;
    camera.updateMatrixWorld();
    for (const marker of markers) {
      marker.anchor.getWorldPosition(world);
      world.add(marker.offset);
      world.add(labelOffset);
      projected.copy(world).project(camera);
      const behindCamera = projected.z < -1 || projected.z > 1;
      const outside = Math.abs(projected.x) > 1.12 || Math.abs(projected.y) > 1.12;
      marker.element.classList.toggle('is-hidden', behindCamera || outside);
      if (behindCamera || outside) continue;
      const rawX = (projected.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-projected.y * 0.5 + 0.5) * window.innerHeight;
      const markerWidth = marker.element.offsetWidth || 124;
      const x = THREE.MathUtils.clamp(rawX, 18, window.innerWidth - markerWidth - 18);
      marker.element.style.left = `${x}px`;
      marker.element.style.top = `${THREE.MathUtils.clamp(y, 72, window.innerHeight - 90)}px`;
      marker.element.style.zIndex = String(Math.round((1 - projected.z) * 10) + 4);
      if (labelTransformEnabled) {
        marker.element.style.transform = `scale(${labelConfig.labelScale || 1})`;
      }
    }
  }

  function setEnabled(value) {
    enabled = value && labelConfig.showLabels !== false;
    layer.hidden = !enabled;
    if (!enabled) close();
  }

  function setLabelConfig(config = {}) {
    labelTransformEnabled = true;
    labelConfig = {
      ...labelConfig,
      ...config,
      labelOffset: {
        ...labelConfig.labelOffset,
        ...(config.labelOffset || {}),
      },
    };
    labelOffset.set(
      labelConfig.labelOffset.x || 0,
      labelConfig.labelOffset.y || 0,
      labelConfig.labelOffset.z || 0,
    );
    for (const marker of markers) {
      marker.element.style.transform = `scale(${labelConfig.labelScale || 1})`;
    }
    if (labelConfig.showLabels === false) setEnabled(false);
  }

  function focus(id) {
    const marker = markers.find((item) => item.definition.id === id);
    if (marker) open(marker.definition);
  }

  function getTargets() {
    return markers.map((marker) => ({
      id: marker.definition.id,
      label: marker.definition.label,
      description: marker.definition.description,
      anchor: marker.anchor,
      offset: marker.offset.clone(),
    }));
  }

  const keydown = (event) => {
    if (event.key === 'Escape') close();
  };
  closeButton.addEventListener('click', close);
  document.addEventListener('keydown', keydown);

  return {
    update,
    open: focus,
    close,
    setEnabled,
    setLabelConfig,
    getTargets,
    get count() {
      return markers.length;
    },
    dispose() {
      clearAutoClose();
      document.removeEventListener('keydown', keydown);
      closeButton.removeEventListener('click', close);
      for (const marker of markers) marker.element.remove();
    },
  };
}
