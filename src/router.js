import { removeAllModeDom } from './shared/dispose.js';

const routes = {
  '/home': () => import('./pages/HomePage.js'),
  '/3d': () => import('./pages/ThreeDMode.js'),
  '/vr': () => import('./pages/VRMode.js'),
  '/ar': () => import('./pages/ARMode.js'),
  '/demo/photon': () => import('./pages/DemoPhotonPage.js'),
  '/demo/three': () => import('./pages/DemoThreePage.js'),
};

let currentPage = null;
let isRouting = false;

function normalizeHash() {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash || hash === '/') return '/home';
  return hash.startsWith('/') ? hash : `/${hash}`;
}

function setActiveRoute(route) {
  document.body.dataset.route = route.replace('/', '') || 'home';
}

export function navigate(route) {
  window.location.hash = route.startsWith('#') ? route : `#${route}`;
}

export async function startRouter(app) {
  async function renderRoute() {
    if (isRouting) return;
    isRouting = true;

    const route = routes[normalizeHash()] ? normalizeHash() : '/home';
    if (window.location.hash !== `#${route}`) {
      window.location.replace(`#${route}`);
    }

    try {
      await currentPage?.dispose?.();
      currentPage = null;
      removeAllModeDom();
      app.replaceChildren();
      setActiveRoute(route);

      const module = await routes[route]();
      currentPage = await module.mount(app, { navigate });
    } catch (error) {
      console.error('Route failed.', error);
      app.innerHTML = `
        <main class="fatal-state">
          <p class="eyebrow">启动失败</p>
          <h1>页面加载时遇到问题</h1>
          <p>请刷新页面。如果仍然失败，请检查控制台中的错误信息。</p>
          <button class="primary-button" type="button" data-route-home>返回首页</button>
        </main>
      `;
      app.querySelector('[data-route-home]')?.addEventListener('click', () => navigate('/home'));
    } finally {
      isRouting = false;
    }
  }

  window.addEventListener('hashchange', renderRoute);
  if (!window.location.hash) window.location.replace('#/home');
  await renderRoute();
}
