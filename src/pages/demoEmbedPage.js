function getDemoUrl(demoHash) {
  const demoBase = `${import.meta.env.BASE_URL}embedded-demo/index.html`;
  return `${demoBase}${demoHash}`;
}

export async function mountDemoEmbedPage(app, { navigate }, {
  title,
  description,
  demoHash,
  fallbackMount,
}) {
  const page = document.createElement('main');
  page.className = 'demo-embed-page';
  let disposed = false;
  let fallbackPage = null;
  let fallbackTimer = 0;

  page.innerHTML = `
    <header class="demo-embed-header">
      <button class="ghost-button" type="button" data-route-home>返回首页</button>
      <div class="demo-embed-heading">
        <p class="eyebrow">Embedded Demo</p>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </header>
    <section class="demo-embed-frame-shell" aria-label="${title} 嵌入页面">
      <iframe
        class="demo-embed-frame"
        title="${title}"
        allow="fullscreen"
        loading="eager"
      ></iframe>
      <div class="demo-embed-status" data-demo-status>
        <p class="eyebrow">Demo Status</p>
        <strong>正在加载 Demo...</strong>
        <span>如果子应用在当前浏览器中无法显示，可以切换到移动端轻量版本。</span>
        <button class="secondary-button" type="button" data-demo-fallback hidden>打开移动端轻量 Demo</button>
      </div>
    </section>
  `;

  const iframe = page.querySelector('.demo-embed-frame');
  const status = page.querySelector('[data-demo-status]');
  const fallbackButton = page.querySelector('[data-demo-fallback]');

  async function switchToFallback(reason = 'Demo 子应用加载失败，已切换到移动端轻量版本。') {
    if (!fallbackMount || disposed) return;
    window.clearTimeout(fallbackTimer);
    disposed = true;
    page.remove();
    app.replaceChildren();
    const fallbackResult = await fallbackMount(app, { navigate });
    fallbackPage = fallbackResult;
    const notice = document.createElement('p');
    notice.className = 'mobile-demo-fallback-notice';
    notice.textContent = reason;
    app.querySelector('.mobile-demo-page')?.prepend(notice);
  }

  page.querySelector('[data-route-home]')?.addEventListener('click', () => navigate('/home'));
  fallbackButton?.addEventListener('click', () => switchToFallback('已打开移动端轻量 Demo。'));
  iframe.addEventListener('load', () => {
    if (disposed) return;
    window.clearTimeout(fallbackTimer);
    status?.classList.add('is-loaded');
  });
  iframe.addEventListener('error', () => {
    switchToFallback();
  });

  iframe.src = getDemoUrl(demoHash);
  app.append(page);
  fallbackTimer = window.setTimeout(() => {
    if (disposed || status?.classList.contains('is-loaded')) return;
    status.querySelector('strong').textContent = 'Demo 子应用加载较慢';
    status.querySelector('span').textContent = '如果这里持续空白，请打开移动端轻量版本。';
    fallbackButton.hidden = false;
  }, 3000);

  return {
    dispose() {
      disposed = true;
      window.clearTimeout(fallbackTimer);
      fallbackPage?.dispose?.();
      page.remove();
    },
  };
}
