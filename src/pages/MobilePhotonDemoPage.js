const PRESETS = {
  classical: {
    alpha: 0,
    beta: 45,
    windowNs: 12,
    pump: 58,
    noise: 18,
  },
  entangled: {
    alpha: 0,
    beta: 45,
    windowNs: 6,
    pump: 72,
    noise: 6,
  },
  max: {
    alpha: 0,
    beta: 22.5,
    windowNs: 5,
    pump: 82,
    noise: 2,
  },
};

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const toRad = (value) => (value * Math.PI) / 180;
const format = (value, digits = 2) => Number(value).toFixed(digits);

function calculatePhotonStats(state, tick = 0) {
  const pumpFactor = state.pump / 100;
  const noiseFactor = state.noise / 100;
  const visibility = clamp(0.96 - noiseFactor * 1.55 + pumpFactor * 0.035, 0.38, 0.98);
  const angleDelta = state.alpha - state.beta;
  const correlation = clamp(visibility * Math.cos(2 * toRad(angleDelta)), -0.98, 0.98);
  const coincidenceProbability = clamp(0.5 * (1 + correlation), 0.03, 0.97);
  const windowEfficiency = clamp(1 - Math.exp(-state.windowNs / 5.5), 0.18, 0.98);
  const accidentals = state.pump * state.windowNs * (0.18 + state.noise * 0.025);
  const jitterA = Math.sin(tick * 0.09 + state.alpha * 0.02) * 36;
  const jitterB = Math.cos(tick * 0.083 + state.beta * 0.017) * 34;
  const baseSingles = 1800 + state.pump * 118;
  const countA = Math.max(0, Math.round(baseSingles * (1 - noiseFactor * 0.12) + jitterA));
  const countB = Math.max(0, Math.round((baseSingles * 0.96) * (1 - noiseFactor * 0.1) + jitterB));
  const coincidence = Math.max(
    0,
    Math.round((countA + countB) * 0.13 * coincidenceProbability * windowEfficiency + accidentals),
  );
  const chshAngle = Math.cos(2 * toRad(angleDelta - 22.5));
  const angleQuality = clamp(0.82 + 0.18 * chshAngle, 0.68, 1);
  const windowQuality = clamp(1.05 - Math.abs(state.windowNs - 5) * 0.018, 0.72, 1);
  const sValue = clamp(2 * Math.SQRT2 * visibility * angleQuality * windowQuality, 0, 2.82);

  return {
    visibility,
    correlation,
    countA,
    countB,
    coincidence,
    sValue,
    violatesBell: sValue > 2,
  };
}

function sliderMarkup({ key, label, min, max, step, suffix }) {
  return `
    <label class="mobile-demo-slider" data-control="${key}">
      <span class="mobile-demo-slider__label">${label}</span>
      <span class="mobile-demo-slider__value" data-value="${key}"></span>
      <input type="range" min="${min}" max="${max}" step="${step}" data-input="${key}" />
      <span class="mobile-demo-slider__suffix">${suffix}</span>
    </label>
  `;
}

function photonSvg() {
  return `
    <svg class="mobile-photon-svg" viewBox="0 0 360 460" role="img" aria-label="双光子纠缠光路图">
      <defs>
        <linearGradient id="mobilePumpGradient" x1="0" x2="1">
          <stop offset="0%" stop-color="#8d7bff" />
          <stop offset="100%" stop-color="#5ee7ff" />
        </linearGradient>
        <linearGradient id="mobilePhotonA" x1="0" x2="1">
          <stop offset="0%" stop-color="#63e6ff" />
          <stop offset="100%" stop-color="#9df8ff" />
        </linearGradient>
        <linearGradient id="mobilePhotonB" x1="0" x2="1">
          <stop offset="0%" stop-color="#f07bff" />
          <stop offset="100%" stop-color="#9d7bff" />
        </linearGradient>
        <filter id="mobileGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path id="pumpMobilePath" d="M180 34 L180 132" />
        <path id="photonMobilePathA" d="M180 178 C120 214, 86 262, 74 326" />
        <path id="photonMobilePathB" d="M180 178 C240 214, 274 262, 286 326" />
      </defs>

      <rect x="0" y="0" width="360" height="460" rx="22" fill="rgba(2, 8, 20, 0.54)" />
      <g opacity="0.22">
        <path d="M40 30 V430 M100 30 V430 M160 30 V430 M220 30 V430 M280 30 V430 M320 30 V430" stroke="#5ee7ff" stroke-width="1" />
        <path d="M24 70 H336 M24 130 H336 M24 190 H336 M24 250 H336 M24 310 H336 M24 370 H336" stroke="#5ee7ff" stroke-width="1" />
      </g>

      <g class="mobile-photon-node" transform="translate(180 34)">
        <rect x="-64" y="-22" width="128" height="44" rx="14" />
        <text text-anchor="middle" dominant-baseline="middle">405nm 泵浦激光</text>
      </g>
      <path class="mobile-pump-path" d="M180 58 L180 132" stroke="url(#mobilePumpGradient)" />
      <circle r="5" class="mobile-pump-dot">
        <animateMotion dur="1.4s" repeatCount="indefinite">
          <mpath href="#pumpMobilePath" />
        </animateMotion>
      </circle>
      <circle r="4" class="mobile-pump-dot is-second">
        <animateMotion dur="1.4s" begin="0.7s" repeatCount="indefinite">
          <mpath href="#pumpMobilePath" />
        </animateMotion>
      </circle>

      <g class="mobile-bbo-crystal" transform="translate(180 154)">
        <polygon points="-36,-24 42,-10 32,40 -46,24" />
        <line x1="-18" y1="-18" x2="18" y2="32" />
        <text x="0" y="68" text-anchor="middle">BBO / SPDC</text>
      </g>

      <path class="mobile-photon-path-a" d="M180 178 C120 214, 86 262, 74 326" stroke="url(#mobilePhotonA)" />
      <path class="mobile-photon-path-b" d="M180 178 C240 214, 274 262, 286 326" stroke="url(#mobilePhotonB)" />
      <circle r="5.5" class="mobile-photon-dot-a">
        <animateMotion dur="1.8s" repeatCount="indefinite">
          <mpath href="#photonMobilePathA" />
        </animateMotion>
      </circle>
      <circle r="5.5" class="mobile-photon-dot-b">
        <animateMotion dur="1.8s" begin="0.22s" repeatCount="indefinite">
          <mpath href="#photonMobilePathB" />
        </animateMotion>
      </circle>

      <g class="mobile-analyzer" transform="translate(74 326)">
        <circle r="27" />
        <line x1="-17" y1="0" x2="17" y2="0" data-alpha-needle />
        <text y="48" text-anchor="middle">偏振 α</text>
      </g>
      <g class="mobile-analyzer" transform="translate(286 326)">
        <circle r="27" />
        <line x1="-17" y1="0" x2="17" y2="0" data-beta-needle />
        <text y="48" text-anchor="middle">偏振 β</text>
      </g>

      <g class="mobile-detector" transform="translate(74 410)">
        <rect x="-40" y="-24" width="80" height="48" rx="16" />
        <circle cx="-20" cy="0" r="7" />
        <text y="46" text-anchor="middle">APD A</text>
      </g>
      <g class="mobile-detector" transform="translate(286 410)">
        <rect x="-40" y="-24" width="80" height="48" rx="16" />
        <circle cx="-20" cy="0" r="7" />
        <text y="46" text-anchor="middle">APD B</text>
      </g>
      <path class="mobile-coincidence-link" d="M114 410 H246" />
      <g class="mobile-counter-node" transform="translate(180 410)">
        <rect x="-54" y="-18" width="108" height="36" rx="13" />
        <text text-anchor="middle" dominant-baseline="middle">符合计数</text>
      </g>
    </svg>
  `;
}

export function mountMobilePhotonDemoPage(app, { navigate }) {
  const state = { ...PRESETS.entangled };
  let rafId = 0;
  let tick = 0;

  const page = document.createElement('main');
  page.className = 'mobile-demo-page mobile-photon-demo';
  page.innerHTML = `
    <header class="mobile-demo-topbar">
      <button class="ghost-button" type="button" data-route-home>返回首页</button>
      <div>
        <p class="eyebrow">Mobile Native Demo</p>
        <h1>双光子纠缠 Demo</h1>
      </div>
      <button class="secondary-button compact-button" type="button" data-scroll-info>说明</button>
    </header>

    <section class="mobile-demo-intro">
      <p>移动端使用主项目内置的轻量模型，不依赖 iframe。调节偏振角、泵浦强度和噪声，观察符合计数与 S 值如何变化。</p>
    </section>

    <section class="mobile-demo-visual mobile-photon-visual">
      ${photonSvg()}
    </section>

    <section class="mobile-demo-presets" aria-label="一键预设">
      <button class="secondary-button" type="button" data-preset="classical">经典相关</button>
      <button class="secondary-button is-active" type="button" data-preset="entangled">量子纠缠</button>
      <button class="secondary-button" type="button" data-preset="max">最大违反</button>
    </section>

    <section class="mobile-demo-controls" aria-label="参数控制区">
      ${sliderMarkup({ key: 'alpha', label: '偏振角 α', min: 0, max: 180, step: 0.5, suffix: '0° - 180°' })}
      ${sliderMarkup({ key: 'beta', label: '偏振角 β', min: 0, max: 180, step: 0.5, suffix: '0° - 180°' })}
      ${sliderMarkup({ key: 'windowNs', label: '符合窗口', min: 1, max: 20, step: 0.5, suffix: '1 ns - 20 ns' })}
      ${sliderMarkup({ key: 'pump', label: '泵浦强度', min: 0, max: 100, step: 1, suffix: '0% - 100%' })}
      ${sliderMarkup({ key: 'noise', label: '噪声水平', min: 0, max: 20, step: 1, suffix: '0% - 20%' })}
    </section>

    <section class="mobile-photon-results" aria-label="结果显示区">
      <article class="mobile-result-card">
        <span>N_A 单路计数</span>
        <strong data-stat="countA">0</strong>
      </article>
      <article class="mobile-result-card">
        <span>N_B 单路计数</span>
        <strong data-stat="countB">0</strong>
      </article>
      <article class="mobile-result-card">
        <span>N_AB 符合计数</span>
        <strong data-stat="coincidence">0</strong>
      </article>
      <article class="mobile-result-card">
        <span>E(α, β)</span>
        <strong data-stat="correlation">0.00</strong>
      </article>
      <article class="mobile-result-card mobile-result-card--wide" data-bell-card>
        <span>S 值 · 经典上限 S ≤ 2</span>
        <strong data-stat="sValue">0.00</strong>
        <em data-stat="conclusion">调整参数查看结论</em>
      </article>
    </section>

    <section class="mobile-demo-info" data-info-card>
      <h2>教学近似模型</h2>
      <p>这里用 <code>cos(2θ)</code> 表示偏振相关性，用可见度、噪声和符合窗口估算计数。它用于手机现场讲解，不替代真实实验数据处理。</p>
    </section>
  `;

  const inputs = [...page.querySelectorAll('[data-input]')];
  const presetButtons = [...page.querySelectorAll('[data-preset]')];
  const stat = (key) => page.querySelector(`[data-stat="${key}"]`);

  function syncControls() {
    inputs.forEach((input) => {
      const key = input.dataset.input;
      input.value = state[key];
      const suffix = key === 'windowNs' ? ' ns' : key === 'pump' || key === 'noise' ? '%' : '°';
      page.querySelector(`[data-value="${key}"]`).textContent = `${format(state[key], key === 'pump' || key === 'noise' ? 0 : 1)}${suffix}`;
    });
    page.querySelector('[data-alpha-needle]')?.setAttribute('transform', `rotate(${state.alpha})`);
    page.querySelector('[data-beta-needle]')?.setAttribute('transform', `rotate(${state.beta})`);
  }

  function updateResults() {
    const stats = calculatePhotonStats(state, tick);
    stat('countA').textContent = String(stats.countA);
    stat('countB').textContent = String(stats.countB);
    stat('coincidence').textContent = String(stats.coincidence);
    stat('correlation').textContent = format(stats.correlation, 3);
    stat('sValue').textContent = format(stats.sValue, 2);
    stat('conclusion').textContent = stats.violatesBell ? '贝尔不等式被违反' : '未超过经典上限';
    page.querySelector('[data-bell-card]')?.classList.toggle('is-violating', stats.violatesBell);
    page.style.setProperty('--mobile-s-strength', `${clamp(stats.sValue / 2.82, 0.25, 1)}`);
  }

  function animate() {
    tick += 1;
    updateResults();
    rafId = window.requestAnimationFrame(animate);
  }

  page.querySelector('[data-route-home]')?.addEventListener('click', () => navigate('/home'));
  page.querySelector('[data-scroll-info]')?.addEventListener('click', () => {
    page.querySelector('[data-info-card]')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      state[input.dataset.input] = Number(input.value);
      presetButtons.forEach((button) => button.classList.remove('is-active'));
      syncControls();
      updateResults();
    });
  });

  presetButtons.forEach((button) => {
    button.addEventListener('click', () => {
      Object.assign(state, PRESETS[button.dataset.preset]);
      presetButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      syncControls();
      updateResults();
    });
  });

  syncControls();
  updateResults();
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
  return mountMobilePhotonDemoPage(app, context);
}
