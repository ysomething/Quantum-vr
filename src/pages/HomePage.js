import { describeRuntime, getRuntimeConfig } from '../shared/runtimeConfig.js';

const desktopCards = [
  {
    route: '/3d',
    eyebrow: 'Mode 01',
    title: '3D 展示模式',
    mobileTitle: '3D 展示模式',
    description: '打开视觉母版级 Three.js 量子纠缠实验室，自由旋转、缩放，并跟随自动导览观察光路。',
    mobileDescription: '无需摄像头，手机端同样保留 Bloom、粒子、网格与清晰光路。',
    action: '进入 3D 展示',
    mobileAction: '进入 3D 展示',
  },
  {
    route: '/vr',
    eyebrow: 'Mode 02',
    title: 'VR 沉浸模式',
    description: '以第一人称进入实验室，可切换普通沉浸、手机体感、自动导览和自由查看。',
    mobileDescription: '适合横屏或体感观看；若设备不支持体感，会自动回到手指拖动。',
    action: '进入 VR 沉浸',
    mobileAction: '进入 VR 模式',
  },
  {
    route: '/ar',
    eyebrow: '推荐体验',
    title: 'AR 扫描模式',
    description: '微信扫码打开后启动摄像头，对准识别图，让量子纠缠实验室贴合到现实画面上。',
    mobileDescription: '对准识别图，让实验装置从纸面浮现，适合评委手机现场体验。',
    action: '进入 AR 扫描',
    mobileAction: '开始 AR 扫描',
    recommended: true,
  },
];

function getCards(runtime) {
  if (!runtime.isMobile) return desktopCards;
  return [
    desktopCards.find((card) => card.route === '/ar'),
    desktopCards.find((card) => card.route === '/3d'),
    desktopCards.find((card) => card.route === '/vr'),
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
        <p class="home-subtitle">扫码进入三维、VR 与 AR 量子实验展示。</p>
        <p class="home-description">3D 与 VR 模式以 scene12-13-vr-real-vr 为视觉母版；AR 模式使用 MindAR 图像识别实现微信扫码体验。手机端保留接近电脑端的高质量材质、Bloom、粒子、背景和光路，只把操作收纳到小菜单里。</p>
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
      <p>${runtime.isMobile ? '推荐先进入 AR 扫描模式；如果摄像头权限失败，请切换到 3D 展示模式观看。' : '电脑端可先体验 3D 展示；正式评审扫码建议使用 HTTPS 部署地址。'}</p>
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
