import{g as m,d as l}from"./runtimeConfig-bT2k2tCC.js";const n=[{route:"/3d",eyebrow:"Mode 01",title:"3D 展示模式",mobileTitle:"3D 展示模式",description:"打开视觉母版级 Three.js 量子纠缠实验室，自由旋转、缩放，并跟随自动导览观察光路。",mobileDescription:"无需摄像头，手机端同样保留 Bloom、粒子、网格与清晰光路。",action:"进入 3D 展示",mobileAction:"进入 3D 展示"},{route:"/vr",eyebrow:"Mode 02",title:"VR 沉浸模式",description:"以第一人称进入实验室，可切换普通沉浸、手机体感、自动导览和自由查看。",mobileDescription:"适合横屏或体感观看；若设备不支持体感，会自动回到手指拖动。",action:"进入 VR 沉浸",mobileAction:"进入 VR 模式"},{route:"/ar",eyebrow:"推荐体验",title:"AR 扫描模式",description:"微信扫码打开后启动摄像头，对准识别图，让量子纠缠实验室贴合到现实画面上。",mobileDescription:"对准识别图，让实验装置从纸面浮现，适合评委手机现场体验。",action:"进入 AR 扫描",mobileAction:"开始 AR 扫描",recommended:!0},{route:"/demo/photon",eyebrow:"Demo 01",title:"双光子纠缠 Demo",description:"调节泵浦光、补偿、偏振角与符合窗口，观察符合计数和 S 值变化。",action:"进入双光子 Demo"},{route:"/demo/three",eyebrow:"Demo 02",title:"3D Demo",description:"打开 demo 的 3D 交互页面，补充展示实验路径与三维演示内容。",action:"进入 3D Demo"}];function c(e){return e.isMobile?[n.find(o=>o.route==="/ar"),n.find(o=>o.route==="/3d"),n.find(o=>o.route==="/vr"),n.find(o=>o.route==="/demo/photon"),n.find(o=>o.route==="/demo/three")]:n}function a(e,o,i){const t=document.createElement("article");return t.className=`mode-card${e.recommended?" is-recommended":""}`,t.innerHTML=`
    <p class="eyebrow">${o.isMobile&&e.recommended?"推荐体验":e.eyebrow}</p>
    <h2>${o.isMobile&&e.mobileTitle?e.mobileTitle:e.title}</h2>
    <p>${o.isMobile&&e.mobileDescription?e.mobileDescription:e.description}</p>
    <button class="primary-button" type="button">${o.isMobile&&e.mobileAction?e.mobileAction:e.action}</button>
  `,t.querySelector("button").addEventListener("click",()=>i(e.route)),t}async function d(e,{navigate:o}){const i=m(),t=document.createElement("main");t.className=`home-page${i.isMobile?" is-mobile-home":""}`,t.innerHTML=`
    <section class="home-hero">
      <div class="home-hero__copy">
        <p class="eyebrow">Quantum Interactive Showcase</p>
        <h1>量子纠缠交互实验室</h1>
        <p class="home-subtitle">扫码进入三维、VR 与 AR 量子实验展示。</p>
        <p class="home-description">3D 与 VR 模式以 scene12-13-vr-real-vr 为视觉母版；AR 模式使用 MindAR 图像识别实现微信扫码体验。手机端保留接近电脑端的高质量材质、Bloom、粒子、背景和光路，只把操作收纳到小菜单里。</p>
        <div class="home-runtime-badges" aria-label="当前设备体验状态">
          <span>${i.isWeChat?"微信扫码环境":i.isMobile?"手机浏览器":"电脑端展示环境"}</span>
          <span>${l(i)}</span>
          ${i.isMobile?"<span>高质量移动展示</span>":""}
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
      <p>${i.isMobile?"推荐先进入 AR 扫描模式；如果摄像头权限失败，请切换到 3D 展示模式观看。":"电脑端可先体验 3D 展示；正式评审扫码建议使用 HTTPS 部署地址。"}</p>
    </footer>
  `;const s=t.querySelector(".mode-grid");return c(i).forEach(r=>s.append(a(r,i,o))),e.append(t),{dispose(){t.remove()}}}export{d as mount};
