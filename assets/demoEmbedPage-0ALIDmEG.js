function h(t){return`/Quantum-vr/embedded-demo/index.html${t}`}async function w(t,{navigate:d},{title:n,description:b,demoHash:f,fallbackMount:m}){const e=document.createElement("main");e.className="demo-embed-page";let o=!1,c=null,a=0;e.innerHTML=`
    <header class="demo-embed-header">
      <button class="ghost-button" type="button" data-route-home>返回首页</button>
      <div class="demo-embed-heading">
        <p class="eyebrow">Embedded Demo</p>
        <h1>${n}</h1>
        <p>${b}</p>
      </div>
    </header>
    <section class="demo-embed-frame-shell" aria-label="${n} 嵌入页面">
      <iframe
        class="demo-embed-frame"
        title="${n}"
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
  `;const l=e.querySelector(".demo-embed-frame"),s=e.querySelector("[data-demo-status]"),i=e.querySelector("[data-demo-fallback]");async function u(p="Demo 子应用加载失败，已切换到移动端轻量版本。"){if(!m||o)return;window.clearTimeout(a),o=!0,e.remove(),t.replaceChildren(),c=await m(t,{navigate:d});const r=document.createElement("p");r.className="mobile-demo-fallback-notice",r.textContent=p,t.querySelector(".mobile-demo-page")?.prepend(r)}return e.querySelector("[data-route-home]")?.addEventListener("click",()=>d("/home")),i?.addEventListener("click",()=>u("已打开移动端轻量 Demo。")),l.addEventListener("load",()=>{o||(window.clearTimeout(a),s?.classList.add("is-loaded"))}),l.addEventListener("error",()=>{u()}),l.src=h(f),t.append(e),a=window.setTimeout(()=>{o||s?.classList.contains("is-loaded")||(s.querySelector("strong").textContent="Demo 子应用加载较慢",s.querySelector("span").textContent="如果这里持续空白，请打开移动端轻量版本。",i.hidden=!1)},3e3),{dispose(){o=!0,window.clearTimeout(a),c?.dispose?.(),e.remove()}}}export{w as m};
