import * as THREE from 'three';
import { applyTextureColorSpace } from './threeCompat.js';

const tempWorld = new THREE.Vector3();
const tempDirection = new THREE.Vector3();
const tempToTarget = new THREE.Vector3();

function drawRoundRect(context, x, y, width, height, radius) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.arcTo(x + width, y, x + width, y + height, radius);
  context.arcTo(x + width, y + height, x, y + height, radius);
  context.arcTo(x, y + height, x, y, radius);
  context.arcTo(x, y, x + width, y, radius);
  context.closePath();
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const chars = text.split('');
  let line = '';
  let currentY = y;

  for (const char of chars) {
    const test = line + char;
    if (context.measureText(test).width > maxWidth && line) {
      context.fillText(line, x, currentY);
      line = char;
      currentY += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) context.fillText(line, x, currentY);
}

function makeTexture({ title, body = '', kicker = '实验热点', compact = false }) {
  const canvas = document.createElement('canvas');
  canvas.width = compact ? 512 : 1024;
  canvas.height = compact ? 160 : 360;
  const context = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, 'rgba(4, 24, 42, 0.94)');
  gradient.addColorStop(1, 'rgba(4, 8, 22, 0.88)');
  context.fillStyle = gradient;
  drawRoundRect(context, 16, 16, width - 32, height - 32, compact ? 24 : 32);
  context.fill();

  context.strokeStyle = 'rgba(92, 234, 255, 0.72)';
  context.lineWidth = compact ? 3 : 4;
  context.stroke();

  context.fillStyle = 'rgba(82, 234, 255, 0.92)';
  context.font = compact
    ? '600 24px "Microsoft YaHei", "PingFang SC", sans-serif'
    : '600 30px "Microsoft YaHei", "PingFang SC", sans-serif';
  context.fillText(kicker, 42, compact ? 58 : 78);

  context.fillStyle = '#eaffff';
  context.font = compact
    ? '700 42px "Microsoft YaHei", "PingFang SC", sans-serif'
    : '700 62px "Microsoft YaHei", "PingFang SC", sans-serif';
  context.fillText(title, 42, compact ? 112 : 164);

  if (!compact && body) {
    context.fillStyle = 'rgba(210, 238, 246, 0.92)';
    context.font = '400 34px "Microsoft YaHei", "PingFang SC", sans-serif';
    wrapText(context, body, 44, 232, width - 88, 48);
  }

  return applyTextureColorSpace(new THREE.CanvasTexture(canvas));
}

function makeSprite(texture, scale) {
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(scale[0], scale[1], 1);
  sprite.renderOrder = 30;
  sprite.visible = false;
  return sprite;
}

function disposeSpriteMaterial(sprite) {
  sprite.material?.map?.dispose?.();
  sprite.material?.dispose?.();
}

export function createGazeInteraction({ scene, camera, hotspots, anchors, ui }) {
  const targets = hotspots.getTargets();
  const labels = targets.map((target) => {
    const texture = makeTexture({ title: target.label, kicker: '凝视查看', compact: true });
    const sprite = makeSprite(texture, [1.18, 0.36]);
    scene.add(sprite);
    return { ...target, sprite };
  });

  const activeCard = makeSprite(
    makeTexture({
      title: 'BBO 晶体',
      body: '自发参量下转换，产生纠缠光子对。',
      kicker: '沉浸说明',
    }),
    [2.65, 0.94],
  );
  scene.add(activeCard);

  const conclusionSprite = makeSprite(
    makeTexture({
      title: 'S = 2.52',
      body: '突破经典上限 S ≤ 2，贝尔不等式被违反。',
      kicker: 'COINCIDENCE ANALYSIS',
    }),
    [2.9, 1.02],
  );
  scene.add(conclusionSprite);

  let enabled = false;
  let focusedId = null;
  let dwell = 0;
  let activeUntil = 0;
  let elapsed = 0;

  function setEnabled(value) {
    enabled = value;
    if (!enabled) {
      dwell = 0;
      focusedId = null;
      activeCard.visible = false;
      conclusionSprite.visible = false;
      for (const item of labels) item.sprite.visible = false;
      ui.hideSpatialPanel();
    }
  }

  function setActiveCard(target) {
    disposeSpriteMaterial(activeCard);
    activeCard.material = new THREE.SpriteMaterial({
      map: makeTexture({
        title: target.label,
        body: target.description,
        kicker: '沉浸说明',
      }),
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    activeCard.scale.set(2.65, 0.94, 1);
    activeCard.visible = true;
    activeUntil = elapsed + 4.5;

    target.anchor.getWorldPosition(tempWorld);
    activeCard.position.copy(tempWorld).add(target.offset).add(new THREE.Vector3(0, 0.72, 0));
    ui.setSpatialPanel({
      kicker: '凝视热点已打开',
      title: target.label,
      body: target.description,
    });
  }

  function updateLabelPositions() {
    for (const item of labels) {
      item.anchor.getWorldPosition(tempWorld);
      item.sprite.position.copy(tempWorld).add(item.offset).add(new THREE.Vector3(0, 0.32, 0));
      item.sprite.visible = enabled;
    }

    const counter = anchors.counter || anchors.bbo;
    if (counter) {
      counter.getWorldPosition(tempWorld);
      conclusionSprite.position.copy(tempWorld).add(new THREE.Vector3(0, 1.15, 0));
      conclusionSprite.visible = enabled && document.body.dataset.climax === 'complete';
    }
  }

  function update(delta) {
    elapsed += delta;
    if (!enabled) return;

    updateLabelPositions();
    camera.getWorldDirection(tempDirection);

    let best = null;
    let bestAngle = Infinity;
    for (const target of labels) {
      target.anchor.getWorldPosition(tempWorld);
      tempWorld.add(target.offset);
      tempToTarget.copy(tempWorld).sub(camera.position);
      const distance = tempToTarget.length();
      if (distance <= 0.001 || distance > 16) continue;
      tempToTarget.normalize();
      const angle = tempDirection.angleTo(tempToTarget);
      if (angle < bestAngle) {
        bestAngle = angle;
        best = target;
      }
    }

    const threshold = window.innerWidth < 820 ? 0.092 : 0.065;
    if (best && bestAngle < threshold) {
      if (focusedId === best.id) dwell += delta;
      else {
        focusedId = best.id;
        dwell = 0;
      }

      if (dwell > 0.92) {
        setActiveCard(best);
        dwell = -999;
      }
    } else {
      focusedId = null;
      dwell = 0;
    }

    if (activeCard.visible && elapsed > activeUntil) {
      activeCard.visible = false;
    }
  }

  function dispose() {
    for (const item of labels) {
      scene.remove(item.sprite);
      disposeSpriteMaterial(item.sprite);
    }
    scene.remove(activeCard);
    scene.remove(conclusionSprite);
    disposeSpriteMaterial(activeCard);
    disposeSpriteMaterial(conclusionSprite);
  }

  return {
    setEnabled,
    update,
    dispose,
    get enabled() {
      return enabled;
    },
  };
}
