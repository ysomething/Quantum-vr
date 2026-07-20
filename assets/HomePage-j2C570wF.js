import{g as r,d as a}from"./runtimeConfig-De3KaEZK.js";const l=[{route:"/3d",eyebrow:"Mode 1",title:"3D 展示模式",mobileTitle:"3D 展示模式",description:"自由观察量子纠缠实验装置，理解泵浦光、BBO 晶体、偏振分析与符合计数的空间结构。",mobileDescription:"自由观察量子纠缠实验装置，理解泵浦光、BBO 晶体、偏振分析与符合计数的空间结构。",action:"进入 3D 展示",mobileAction:"进入 3D 展示"},{route:"/vr",eyebrow:"Mode 2",title:"VR 沉浸模式",description:"以沉浸式视角进入实验场景，观察纠缠光子路径与贝尔不等式检验过程。",mobileDescription:"以沉浸式视角进入实验场景，观察纠缠光子路径与贝尔不等式检验过程。",action:"进入 VR 沉浸",mobileAction:"进入 VR 沉浸"},{route:"/ar",eyebrow:"Mode 3",title:"AR 扫描模式",description:"扫描识别图，在真实环境中叠加动态量子纠缠实验装置。",mobileDescription:"扫描识别图，在真实环境中叠加动态量子纠缠实验装置。",action:"进入 AR 扫描",mobileAction:"进入 AR 扫描"},{route:"/demo/photon",eyebrow:"Mode 4",title:"双光子纠缠 Demo",description:"调节实验参数，实时观察单路计数、符合计数、关联函数与 CHSH 的 S 值变化。",action:"进入双光子 Demo"},{route:"/demo/three",eyebrow:"Mode 5",title:"3D Demo",description:"通过 Three.js 三维交互演示补充理解实验光路与器件结构。",action:"进入 3D Demo"}];function c(){return l}function p(e,t,i){const o=document.createElement("article");return o.className="mode-card",o.innerHTML=`
    <p class="eyebrow">${e.eyebrow}</p>
    <h2>${t.isMobile&&e.mobileTitle?e.mobileTitle:e.title}</h2>
    <p>${t.isMobile&&e.mobileDescription?e.mobileDescription:e.description}</p>
    <button class="primary-button" type="button">${t.isMobile&&e.mobileAction?e.mobileAction:e.action}</button>
  `,o.querySelector("button").addEventListener("click",()=>i(e.route)),o}async function b(e,{navigate:t}){const i=r(),o=document.createElement("main");o.className=`home-page${i.isMobile?" is-mobile-home":""}`,o.innerHTML=`
    <section class="home-hero">
      <div class="home-hero__copy">
        <p class="eyebrow">QUANTUM ENTANGLEMENT LAB</p>
        <h1 aria-label="量子纠缠实验交互仿真教学系统">
          <span>量子纠缠实验</span>
          <span>交互仿真教学系统</span>
        </h1>
        <p class="home-subtitle">融合三维建模、沉浸式展示、WebAR 图像识别与实验数据驱动模型的量子纠缠实验交互教学平台。</p>
        <p class="home-description">本系统围绕双光子纠缠实验、SPDC 过程、偏振分析、符合计数与 CHSH 不等式检验，构建多模态交互展示，适合课堂讲解、现场演示和移动端扫码体验。</p>
        <div class="home-runtime-badges" aria-label="当前设备体验状态">
          <span>${i.isWeChat?"微信扫码环境":i.isMobile?"手机浏览器":"电脑端展示环境"}</span>
          <span>${a(i)}</span>
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
      <p>建议根据设备环境选择合适的展示模式。3D 与 VR 模式可快速观察实验结构，AR 模式可在真实环境中叠加动态实验装置。</p>
    </footer>
  `;const s=o.querySelector(".mode-grid");return c().forEach(n=>s.append(p(n,i,t))),e.append(o),{dispose(){o.remove()}}}export{b as mount};
