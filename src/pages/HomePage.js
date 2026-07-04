import { describeRuntime, getRuntimeConfig } from '../shared/runtimeConfig.js';

const modeCards = [
  {
    route: '/3d',
    eyebrow: 'Mode 01',
    title: '3D 展示模式',
    mobileTitle: '3D 展示模式',
    description: '自由观察量子纠缠实验装置，理解泵浦光、BBO 晶体、偏振分析与符合计数的空间结构。',
    mobileDescription: '自由观察量子纠缠实验装置，理解泵浦光、BBO 晶体、偏振分析与符合计数的空间结构。',
    action: '进入 3D 展示',
    mobileAction: '进入 3D 展示',
  },
  {
    route: '/vr',
    eyebrow: 'Mode 02',
    title: 'VR 沉浸模式',
    description: '以沉浸式视角进入实验场景，观察纠缠光子路径与贝尔不等式检验过程。',
    mobileDescription: '以沉浸式视角进入实验场景，观察纠缠光子路径与贝尔不等式检验过程。',
    action: '进入 VR 沉浸',
    mobileAction: '进入 VR 沉浸',
  },
  {
    route: '/ar',
    eyebrow: '推荐体验',
    title: 'AR 扫描模式',
    description: '扫描识别图，在真实环境中叠加动态量子纠缠实验装置。',
    mobileDescription: '扫描识别图，在真实环境中叠加动态量子纠缠实验装置。',
    action: '进入 AR 扫描',
    mobileAction: '进入 AR 扫描',
    recommended: true,
  },
  {
    route: '/demo/photon',
    eyebrow: 'Demo 01',
    title: '双光子纠缠 Demo',
    description: '调节实验参数，实时观察单路计数、符合计数、关联函数与 CHSH 的 S 值变化。',
    action: '进入双光子 Demo',
  },
  {
    route: '/demo/three',
    eyebrow: 'Demo 02',
    title: '3D Demo',
    description: '通过 Three.js 三维交互演示补充理解实验光路与器件结构。',
    action: '进入 3D Demo',
  },
];

function getCards(runtime) {
  if (!runtime.isMobile) return modeCards;
  return [
    modeCards.find((card) => card.route === '/ar'),
    modeCards.find((card) => card.route === '/3d'),
    modeCards.find((card) => card.route === '/vr'),
    modeCards.find((card) => card.route === '/demo/photon'),
    modeCards.find((card) => card.route === '/demo/three'),
  ];
}

function createCard(card, runtime, navigate) {
  const article = document.createElement('article');
  article.className = `mode-card${card.recommended ? ' is-recommended' : ''}`;
  article.innerHTML = `
    <p class="eyebrow">${runtime.isMobile && card.recommended ? '推荐体验' : card.eyebrow}</p>
    <h2>${runtime.isMobile && card.mobileTitle ? card.mobileTitle : card.title}</h2>
    <p>${runtime.isMobile && card.mobileDescription ? card.mobileDescription : card.description}</p>
    <button class="primary-button" type="button">${runtime.isMobile && card.mobileAction ? card.mobileAction : card.action}</button>
  `;
  article.querySelector('button').addEventListener('click', () => navigate(card.route));
  return article;
}

export async function mount(app, { navigate }) {
  const runtime = getRuntimeConfig();
  const page = document.createElement('main');
  page.className = `home-page${runtime.isMobile ? ' is-mobile-home' : ''}`;
  page.innerHTML = `
    <section class="home-hero">
      <div class="home-hero__copy">
        <p class="eyebrow">Quantum Interactive Showcase</p>
        <h1>量子纠缠交互实验室</h1>
        <p class="home-subtitle">融合三维建模、沉浸式展示、WebAR 图像识别与实验数据驱动模型的量子纠缠教学演示系统。</p>
        <p class="home-description">系统围绕双光子纠缠实验、SPDC 过程、偏振分析、符合计数与 CHSH 不等式检验构建多模态交互展示，适合课堂讲解、现场演示和移动端扫码体验。</p>
        <div class="home-runtime-badges" aria-label="当前设备体验状态">
          <span>${runtime.isWeChat ? '微信扫码环境' : runtime.isMobile ? '手机浏览器' : '电脑端展示环境'}</span>
          <span>${describeRuntime(runtime)}</span>
          ${runtime.isMobile ? '<span>高质量移动展示</span>' : ''}
        </div>
      </div>
      <div class="home-orb" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
    <section class="mode-grid" aria-label="展示模式选择"></section>
    <footer class="home-footer">
      <p>${runtime.isMobile ? '推荐先体验 AR 扫描模式；如果摄像头权限受限，可切换到 3D 展示模式观看。' : '电脑端可先体验 3D 展示；扫码展示时建议使用正式 HTTPS 地址。'}</p>
    </footer>
  `;

  const grid = page.querySelector('.mode-grid');
  getCards(runtime).forEach((card) => grid.append(createCard(card, runtime, navigate)));
  app.append(page);

  return {
    dispose() {
      page.remove();
    },
  };
}
