import * as THREE from 'three';

export const HOTSPOT_DEFINITIONS = [
  {
    id: 'laser',
    label: '405nm 泵浦光源',
    description: '405nm 激光为 BBO 晶体提供泵浦光。',
    anchor: 'laser',
    offset: [0, 0.45, 0],
  },
  {
    id: 'bbo',
    label: 'BBO 晶体',
    description: '自发参量下转换，产生纠缠光子对。',
    anchor: 'bbo',
    offset: [0, 0.5, 0],
  },
  {
    id: 'polarizer',
    label: '偏振片',
    description: '选择测量基，用于比较不同偏振关联。',
    anchor: 'polarizer',
    offset: [0, 0.44, 0],
  },
  {
    id: 'apd',
    label: 'APD',
    description: '单光子探测器，记录左右两路光子事件。',
    anchor: 'apd',
    offset: [0, 0.42, 0],
  },
  {
    id: 'counter',
    label: '符合计数器',
    description: '统计符合事件并计算 S 值。',
    anchor: 'counter',
    offset: [0, 0.46, 0],
  },
];

export function createHotspots({ camera, anchors, layer, card, closeButton }) {
  const title = card.querySelector('#hotspot-title');
  const description = card.querySelector('#hotspot-description');
  const kicker = card.querySelector('#hotspot-kicker');
  const markers = [];
  const projected = new THREE.Vector3();
  const world = new THREE.Vector3();
  let activeId = null;
  let enabled = false;
  let centerFocusTimer = 0;
  let centerFocusId = null;

  function open(definition) {
    activeId = definition.id;
    kicker.textContent = 'AR 空间热点';
    title.textContent = definition.label;
    description.textContent = definition.description;
    card.classList.add('is-open');
    card.setAttribute('aria-hidden', 'false');
    for (const marker of markers) {
      marker.element.classList.toggle('is-active', marker.definition.id === definition.id);
      marker.element.setAttribute('aria-expanded', marker.definition.id === definition.id ? 'true' : 'false');
    }
  }

  function close() {
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
    element.innerHTML = `<span>${definition.label}</span>`;
    element.addEventListener('click', () => {
      if (activeId === definition.id) close();
      else open(definition);
    });
    layer.append(element);
    markers.push({ definition, anchor, element, offset: new THREE.Vector3(...definition.offset), screenDistance: Infinity });
  }

  function update(delta = 0) {
    if (!enabled) return;
    camera.updateMatrixWorld();

    let nearest = null;
    for (const marker of markers) {
      marker.anchor.getWorldPosition(world);
      world.add(marker.offset);
      projected.copy(world).project(camera);
      const behindCamera = projected.z < -1 || projected.z > 1;
      const outside = Math.abs(projected.x) > 1.15 || Math.abs(projected.y) > 1.15;
      marker.element.classList.toggle('is-hidden', behindCamera || outside);
      marker.screenDistance = Infinity;
      if (behindCamera || outside) continue;

      const rawX = (projected.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-projected.y * 0.5 + 0.5) * window.innerHeight;
      const markerWidth = marker.element.offsetWidth || 124;
      const x = THREE.MathUtils.clamp(rawX, 14, window.innerWidth - markerWidth - 14);
      marker.element.style.left = `${x}px`;
      marker.element.style.top = `${THREE.MathUtils.clamp(y, 76, window.innerHeight - 96)}px`;
      marker.element.style.zIndex = String(Math.round((1 - projected.z) * 10) + 4);

      marker.screenDistance = Math.hypot(projected.x, projected.y);
      if (!nearest || marker.screenDistance < nearest.screenDistance) nearest = marker;
    }

    if (!activeId && nearest && nearest.screenDistance < 0.16) {
      if (centerFocusId !== nearest.definition.id) {
        centerFocusId = nearest.definition.id;
        centerFocusTimer = 0;
      }
      centerFocusTimer += delta;
      if (centerFocusTimer > 1.1) open(nearest.definition);
    } else if (!nearest || nearest.screenDistance > 0.22) {
      centerFocusId = null;
      centerFocusTimer = 0;
    }
  }

  closeButton.addEventListener('click', close);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });

  return {
    update,
    open(id) {
      const marker = markers.find((item) => item.definition.id === id);
      if (marker) open(marker.definition);
    },
    close,
    setEnabled(value) {
      enabled = value;
      layer.hidden = !value;
      for (const marker of markers) marker.element.classList.toggle('is-hidden', !value);
      if (!value) close();
    },
    get count() {
      return markers.length;
    },
  };
}
