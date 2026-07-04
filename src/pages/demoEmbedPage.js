function getDemoUrl(demoHash) {
  const demoBase = `${import.meta.env.BASE_URL}embedded-demo/index.html`;
  return `${demoBase}${demoHash}`;
}

export function mountDemoEmbedPage(app, { navigate }, { title, description, demoHash }) {
  const page = document.createElement('main');
  page.className = 'demo-embed-page';
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
    </section>
  `;

  page.querySelector('[data-route-home]')?.addEventListener('click', () => navigate('/home'));
  page.querySelector('.demo-embed-frame').src = getDemoUrl(demoHash);
  app.append(page);

  return {
    dispose() {
      page.remove();
    },
  };
}
