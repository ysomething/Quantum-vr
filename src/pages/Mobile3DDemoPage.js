const HOTSPOTS = [
  ['405nm 激光', '蓝紫色泵浦光进入 BBO 晶体，是下转换过程的能量来源。'],
  ['BBO / SPDC', '非线性晶体中发生自发参量下转换，产生两路相关光子。'],
  ['偏振分析', '两路偏振片改变测量基，让联合统计呈现角度相关性。'],
  ['APD 探测', '单光子探测器把光子事件转化为电脉冲。'],
  ['符合计数', '符合计数器只记录时间窗口内成对到达的事件。'],
  ['S > 2', '合适角度下，联合统计可以超过经典贝尔不等式上限。'],
];

function labSvg() {
  return `
    <svg class="mobile-3d-svg" viewBox="0 0 360 330" role="img" aria-label="3D Demo 实验台光路">
      <defs>
        <linearGradient id="mobile3dPump" x1="0" x2="1">
          <stop offset="0%" stop-color="#8d7bff" />
          <stop offset="100%" stop-color="#5ee7ff" />
        </linearGradient>
        <linearGradient id="mobile3dA" x1="0" x2="1">
          <stop offset="0%" stop-color="#63e6ff" />
          <stop offset="100%" stop-color="#b6fbff" />
        </linearGradient>
        <linearGradient id="mobile3dB" x1="0" x2="1">
          <stop offset="0%" stop-color="#f07bff" />
          <stop offset="100%" stop-color="#9d7bff" />
        </linearGradient>
        <filter id="mobile3dGlow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path id="mobile3dPumpPath" d="M38 166 H148" />
        <path id="mobile3dPathA" d="M176 164 C220 118, 265 92, 320 78" />
        <path id="mobile3dPathB" d="M176 164 C220 210, 265 238, 320 252" />
      </defs>
      <path class="mobile-3d-table" d="M32 222 L160 120 L334 168 L198 284 Z" />
      <g class="mobile-3d-grid-lines">
        <path d="M76 210 L200 112 M120 236 L244 136 M164 262 L288 150" />
        <path d="M82 182 L252 230 M118 154 L290 202 M154 126 L326 174" />
      </g>
      <path class="mobile-3d-beam-pump" d="M38 166 H148" stroke="url(#mobile3dPump)" />
      <path class="mobile-3d-beam-a" d="M176 164 C220 118, 265 92, 320 78" stroke="url(#mobile3dA)" />
      <path class="mobile-3d-beam-b" d="M176 164 C220 210, 265 238, 320 252" stroke="url(#mobile3dB)" />
      <circle r="5" class="mobile-3d-dot mobile-3d-dot--pump">
        <animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#mobile3dPumpPath" /></animateMotion>
      </circle>
      <circle r="5" class="mobile-3d-dot mobile-3d-dot--a">
        <animateMotion dur="1.9s" repeatCount="indefinite"><mpath href="#mobile3dPathA" /></animateMotion>
      </circle>
      <circle r="5" class="mobile-3d-dot mobile-3d-dot--b">
        <animateMotion dur="1.9s" begin="0.25s" repeatCount="indefinite"><mpath href="#mobile3dPathB" /></animateMotion>
      </circle>
      <g class="mobile-3d-object mobile-3d-laser" transform="translate(38 148)">
        <rect width="54" height="36" rx="12" />
        <circle cx="44" cy="18" r="7" />
      </g>
      <g class="mobile-3d-object mobile-3d-bbo" transform="translate(148 140)">
        <polygon points="0,0 42,10 34,48 -8,36" />
        <line x1="9" y1="7" x2="26" y2="42" />
      </g>
      <g class="mobile-3d-object mobile-3d-analyzer-a" transform="translate(244 88)">
        <circle r="18" />
        <line x1="-12" y1="0" x2="12" y2="0" />
      </g>
      <g class="mobile-3d-object mobile-3d-analyzer-b" transform="translate(244 236)">
        <circle r="18" />
        <line x1="-12" y1="0" x2="12" y2="0" />
      </g>
      <g class="mobile-3d-object mobile-3d-apd-a" transform="translate(306 56)">
        <rect width="42" height="34" rx="10" />
        <circle cx="12" cy="17" r="5" />
      </g>
      <g class="mobile-3d-object mobile-3d-apd-b" transform="translate(306 236)">
        <rect width="42" height="34" rx="10" />
        <circle cx="12" cy="17" r="5" />
      </g>
      <g class="mobile-3d-labels" data-3d-labels>
        <text x="28" y="136">405nm 激光</text>
        <text x="136" y="126">BBO</text>
        <text x="210" y="62">偏振分析</text>
        <text x="210" y="294">APD 探测</text>
        <text x="138" y="306">符合计数</text>
      </g>
      <g class="mobile-3d-s-burst" data-s-burst>
        <circle cx="180" cy="164" r="48" />
        <text x="180" y="170" text-anchor="middle">S &gt; 2</text>
      </g>
    </svg>
  `;
}

export function mountMobile3DDemoPage(app, { navigate }) {
  let autoRotate = true;
  let labelsVisible = true;
  let angle = -18;
  let tilt = 12;
  let rafId = 0;
  let dragging = false;
  let lastX = 0;
  let lastY = 0;

  const page = document.createElement('main');
  page.className = 'mobile-demo-page mobile-3d-demo';
  page.innerHTML = `
    <header class="mobile-demo-topbar">
      <button class="ghost-button" type="button" data-route-home>返回首页</button>
      <div>
        <p class="eyebrow">Mobile Native Demo</p>
        <h1>3D Demo</h1>
      </div>
      <button class="secondary-button compact-button" type="button" data-scroll-info>说明</button>
    </header>

    <section class="mobile-demo-intro">
      <p>移动端使用轻量 3D Demo，不依赖 iframe。拖动实验台可以改变视角，也可以播放 S &gt; 2 的联合统计提示。</p>
    </section>

    <section class="mobile-3d-stage-shell">
      <div class="mobile-3d-stage" data-3d-stage>
        ${labSvg()}
      </div>
    </section>

    <section class="mobile-demo-presets mobile-3d-actions" aria-label="3D Demo 操作区">
      <button class="secondary-button is-active" type="button" data-action="rotate">自动旋转</button>
      <button class="secondary-button" type="button" data-action="best">最佳视角</button>
      <button class="secondary-button" type="button" data-action="labels">隐藏标签</button>
      <button class="primary-button" type="button" data-action="bell">播放 S &gt; 2</button>
    </section>

    <section class="mobile-3d-readout" aria-live="polite">
      <span>视角 Y</span>
      <strong data-readout="angle">-18°</strong>
      <span>演示状态</span>
      <strong data-readout="state">自动旋转</strong>
    </section>

    <section class="mobile-3d-hotspots" data-info-card>
      ${HOTSPOTS.map(([title, text]) => `
        <article>
          <h2>${title}</h2>
          <p>${text}</p>
        </article>
      `).join('')}
    </section>
  `;

  const stage = page.querySelector('[data-3d-stage]');
  const rotateButton = page.querySelector('[data-action="rotate"]');
  const labelButton = page.querySelector('[data-action="labels"]');
  const stateReadout = page.querySelector('[data-readout="state"]');
  const angleReadout = page.querySelector('[data-readout="angle"]');

  function renderStage() {
    stage.style.setProperty('--mobile-3d-rotate', `${angle}deg`);
    stage.style.setProperty('--mobile-3d-tilt', `${tilt}deg`);
    angleReadout.textContent = `${Math.round(angle)}°`;
  }

  function setAutoRotate(enabled) {
    autoRotate = enabled;
    rotateButton.classList.toggle('is-active', autoRotate);
    rotateButton.textContent = autoRotate ? '停止旋转' : '自动旋转';
    stateReadout.textContent = autoRotate ? '自动旋转' : '手动视角';
  }

  function animate() {
    if (autoRotate && !dragging) {
      angle += 0.12;
      if (angle > 26) angle = -26;
      renderStage();
    }
    rafId = window.requestAnimationFrame(animate);
  }

  function startDrag(event) {
    dragging = true;
    setAutoRotate(false);
    lastX = event.clientX;
    lastY = event.clientY;
    stage.setPointerCapture?.(event.pointerId);
  }

  function drag(event) {
    if (!dragging) return;
    angle = clampAngle(angle + (event.clientX - lastX) * 0.28);
    tilt = Math.max(4, Math.min(22, tilt - (event.clientY - lastY) * 0.08));
    lastX = event.clientX;
    lastY = event.clientY;
    renderStage();
  }

  function endDrag(event) {
    dragging = false;
    stage.releasePointerCapture?.(event.pointerId);
  }

  function clampAngle(value) {
    return Math.max(-34, Math.min(34, value));
  }

  page.querySelector('[data-route-home]')?.addEventListener('click', () => navigate('/home'));
  page.querySelector('[data-scroll-info]')?.addEventListener('click', () => {
    page.querySelector('[data-info-card]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  rotateButton.addEventListener('click', () => setAutoRotate(!autoRotate));
  page.querySelector('[data-action="best"]')?.addEventListener('click', () => {
    angle = -18;
    tilt = 12;
    setAutoRotate(false);
    renderStage();
  });
  labelButton.addEventListener('click', () => {
    labelsVisible = !labelsVisible;
    page.classList.toggle('is-labels-hidden', !labelsVisible);
    labelButton.textContent = labelsVisible ? '隐藏标签' : '显示标签';
  });
  page.querySelector('[data-action="bell"]')?.addEventListener('click', () => {
    page.classList.remove('is-bell-playing');
    window.requestAnimationFrame(() => {
      page.classList.add('is-bell-playing');
      stateReadout.textContent = 'S > 2 高亮';
    });
  });
  stage.addEventListener('pointerdown', startDrag);
  stage.addEventListener('pointermove', drag);
  stage.addEventListener('pointerup', endDrag);
  stage.addEventListener('pointercancel', endDrag);

  renderStage();
  setAutoRotate(true);
  app.append(page);
  rafId = window.requestAnimationFrame(animate);

  return {
    dispose() {
      window.cancelAnimationFrame(rafId);
      page.remove();
    },
  };
}

export async function mount(app, context) {
  return mountMobile3DDemoPage(app, context);
}
