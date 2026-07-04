function r(a){return`/Quantum-vr/embedded-demo/index.html${a}`}function n(a,{navigate:o},{title:m,description:d,demoHash:t}){const e=document.createElement("main");return e.className="demo-embed-page",e.innerHTML=`
    <header class="demo-embed-header">
      <button class="ghost-button" type="button" data-route-home>返回首页</button>
      <div class="demo-embed-heading">
        <p class="eyebrow">Embedded Demo</p>
        <h1>${m}</h1>
        <p>${d}</p>
      </div>
    </header>
    <section class="demo-embed-frame-shell" aria-label="${m} 嵌入页面">
      <iframe
        class="demo-embed-frame"
        title="${m}"
        allow="fullscreen"
        loading="eager"
      ></iframe>
    </section>
  `,e.querySelector("[data-route-home]")?.addEventListener("click",()=>o("/home")),e.querySelector(".demo-embed-frame").src=r(t),a.append(e),{dispose(){e.remove()}}}export{n as m};
