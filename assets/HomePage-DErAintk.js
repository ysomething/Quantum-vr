import{g as m,d as c}from"./runtimeConfig-bT2k2tCC.js";const n=[{route:"/3d",eyebrow:"Mode 01",title:"3D 展示模式",mobileTitle:"3D 展示模式",description:"自由观察量子纠缠实验装置，理解泵浦光、BBO 晶体、偏振分析与符合计数的空间结构。",mobileDescription:"自由观察量子纠缠实验装置，理解泵浦光、BBO 晶体、偏振分析与符合计数的空间结构。",action:"进入 3D 展示",mobileAction:"进入 3D 展示"},{route:"/vr",eyebrow:"Mode 02",title:"VR 沉浸模式",description:"以沉浸式视角进入实验场景，观察纠缠光子路径与贝尔不等式检验过程。",mobileDescription:"以沉浸式视角进入实验场景，观察纠缠光子路径与贝尔不等式检验过程。",action:"进入 VR 沉浸",mobileAction:"进入 VR 沉浸"},{route:"/ar",eyebrow:"推荐体验",title:"AR 扫描模式",description:"扫描识别图，在真实环境中叠加动态量子纠缠实验装置。",mobileDescription:"扫描识别图，在真实环境中叠加动态量子纠缠实验装置。",action:"进入 AR 扫描",mobileAction:"进入 AR 扫描",recommended:!0},{route:"/demo/photon",eyebrow:"Demo 01",title:"双光子纠缠 Demo",description:"调节实验参数，实时观察单路计数、符合计数、关联函数与 CHSH 的 S 值变化。",action:"进入双光子 Demo"},{route:"/demo/three",eyebrow:"Demo 02",title:"3D Demo",description:"通过 Three.js 三维交互演示补充理解实验光路与器件结构。",action:"进入 3D Demo"}];function l(e){return e.isMobile?[n.find(o=>o.route==="/ar"),n.find(o=>o.route==="/3d"),n.find(o=>o.route==="/vr"),n.find(o=>o.route==="/demo/photon"),n.find(o=>o.route==="/demo/three")]:n}function a(e,o,i){const t=document.createElement("article");return t.className=`mode-card${e.recommended?" is-recommended":""}`,t.innerHTML=`
    <p class="eyebrow">${o.isMobile&&e.recommended?"推荐体验":e.eyebrow}</p>
    <h2>${o.isMobile&&e.mobileTitle?e.mobileTitle:e.title}</h2>
    <p>${o.isMobile&&e.mobileDescription?e.mobileDescription:e.description}</p>
    <button class="primary-button" type="button">${o.isMobile&&e.mobileAction?e.mobileAction:e.action}</button>
  `,t.querySelector("button").addEventListener("click",()=>i(e.route)),t}async function d(e,{navigate:o}){const i=m(),t=document.createElement("main");t.className=`home-page${i.isMobile?" is-mobile-home":""}`,t.innerHTML=`
    <section class="home-hero">
      <div class="home-hero__copy">
        <p class="eyebrow">Quantum Interactive Showcase</p>
        <h1>量子纠缠交互实验室</h1>
        <p class="home-subtitle">融合三维建模、沉浸式展示、WebAR 图像识别与实验数据驱动模型的量子纠缠教学演示系统。</p>
        <p class="home-description">系统围绕双光子纠缠实验、SPDC 过程、偏振分析、符合计数与 CHSH 不等式检验构建多模态交互展示，适合课堂讲解、现场演示和移动端扫码体验。</p>
        <div class="home-runtime-badges" aria-label="当前设备体验状态">
          <span>${i.isWeChat?"微信扫码环境":i.isMobile?"手机浏览器":"电脑端展示环境"}</span>
          <span>${c(i)}</span>
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
      <p>${i.isMobile?"推荐先体验 AR 扫描模式；如果摄像头权限受限，可切换到 3D 展示模式观看。":"电脑端可先体验 3D 展示；扫码展示时建议使用正式 HTTPS 地址。"}</p>
    </footer>
  `;const s=t.querySelector(".mode-grid");return l(i).forEach(r=>s.append(a(r,i,o))),e.append(t),{dispose(){t.remove()}}}export{d as mount};
