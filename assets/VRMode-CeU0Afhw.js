import{C as H,M as N}from"./three.module-CbQKnzqj.js";import{c as q,V as P,a as z,b as Q,d as K,e as W,f as X,g as j,h as J,i as Y}from"./labUi-CkVMDaux.js";import{l as Z,c as tt}from"./hotspots-B40VPf0H.js";import{g as at}from"./runtimeConfig-De3KaEZK.js";import{d as et,c as ot}from"./index-CtTN2skn.js";import"./OrbitControls-CMV-iHXY.js";function nt(){const o=document.createElement("section");return o.className="mode-page lab-mode-page immersive-master-page vr-mode-page",o.innerHTML=`
    <canvas class="scene-canvas lab-scene-canvas" aria-label="量子纠缠 VR 沉浸展示"></canvas>
    <div class="ambient-haze" aria-hidden="true"></div>

    <div class="entry-transition" data-entry-transition aria-hidden="true">
      <div class="tunnel-rings" aria-hidden="true"><span></span><span></span><span></span></div>
      <p>IMMERSIVE LAB</p>
      <h2 data-entry-title>校准第一人称视角</h2>
      <span data-entry-detail>沉浸导览已就绪</span>
    </div>

    <div class="loading-screen" data-loading aria-busy="true">
      <div class="loader-core" aria-hidden="true"><span></span><span></span><span></span></div>
      <p class="loading-eyebrow">Loading GLB</p>
      <h1>正在进入量子纠缠 VR 沉浸展示</h1>
      <div class="loading-track"><i data-loading-bar></i></div>
      <p class="loading-detail" data-loading-detail>正在准备模型与第一人称视角</p>
      <button class="retry-button" type="button" data-retry hidden>重新加载</button>
    </div>

    <div class="interface-shell" data-interface aria-hidden="true">
      <header class="lab-header">
        <div class="lab-identity">
          <p>QUANTUM</p>
          <h1>量子纠缠 VR 沉浸展示</h1>
        </div>
        <div class="lab-header-actions">
          <button class="lab-back-button" type="button" data-back>返回首页</button>
        </div>
      </header>

      <aside class="experiment-readout" aria-label="实验路径">
        <p class="readout-kicker">IMMERSIVE PATH</p>
        <ol>
          <li><span>01</span>第一人称进入实验室</li>
          <li><span>02</span>405nm 泵浦激光</li>
          <li><span>03</span>BBO / SPDC</li>
          <li><span>04</span>APD 符合计数</li>
          <li><span>05</span>S = 2.52</li>
        </ol>
      </aside>

      <aside class="tour-readout">
        <p data-tour-mode>第一人称导览</p>
        <h2 data-tour-step>正在准备实验室</h2>
        <div class="tour-line"><i data-tour-line></i></div>
        <span data-tour-index>00 / 00</span>
      </aside>

      <div class="hotspot-layer" data-hotspots></div>
      <article class="hotspot-card" data-hotspot-card aria-hidden="true">
        <button class="hotspot-card__close" type="button" data-hotspot-close aria-label="关闭热点">×</button>
        <p id="hotspot-kicker">实验装置</p>
        <h2 id="hotspot-title">热点</h2>
        <p id="hotspot-description"></p>
      </article>

      <aside class="climax" data-climax aria-hidden="true">
        <p class="climax-kicker">BELL TEST</p>
        <strong data-climax-value>S = 1.82</strong>
        <div class="climax-conclusion">
          <span>CLASSICAL LIMIT BROKEN</span>
          <h2>突破经典上限 S ≤ 2</h2>
          <p>符合计数显示量子关联无法由经典局域模型解释</p>
        </div>
      </aside>

      <article class="spatial-panel" data-spatial-panel aria-hidden="true">
        <p data-spatial-kicker>沉浸提示</p>
        <h2 data-spatial-title>第一人称观察</h2>
        <p data-spatial-body>本模式通过沉浸式视角展示实验光路，使观众以第一人称方式观察纠缠光子产生、分析与探测过程。</p>
      </article>

      <div class="focus-reticle" data-focus-reticle aria-hidden="true"><span></span></div>
      <p class="orientation-hint" data-orientation-hint>体感模式已开启：缓慢转动手机观察实验室</p>
      <button class="return-tour-button" type="button" data-return-tour hidden>回到导览</button>

      <div class="mobile-scene-chrome" aria-label="手机端快捷操作">
        <button class="mobile-icon-button" type="button" data-mobile-back aria-label="返回首页">←</button>
        <h1>量子纠缠 VR 沉浸展示</h1>
        <button class="mobile-icon-button" type="button" data-mobile-menu aria-expanded="false" aria-label="打开操作菜单">☰</button>
        <p class="mobile-bottom-hint">单指旋转 · 双指缩放 · 可开启体感</p>
      </div>

      <section class="mobile-vr-start-panel vr-inline-controls" data-mobile-vr-start>
        <p>VR 沉浸模式</p>
        <h2>选择观看方式</h2>
        <div class="mobile-vr-start-panel__grid">
          <button class="primary-button" type="button" data-mobile-vr-phone>普通沉浸</button>
          <button class="secondary-button" type="button" data-mobile-vr-motion>手机体感</button>
          <button class="secondary-button" type="button" data-mobile-vr-free>自由查看</button>
          <button class="ghost-button" type="button" data-mobile-vr-home>返回首页</button>
        </div>
      </section>

      <div class="mobile-drawer-backdrop" data-mobile-drawer-backdrop hidden></div>
      <nav class="mobile-drawer" data-mobile-drawer hidden aria-label="手机端 VR 操作菜单">
        <div class="mobile-drawer__handle" aria-hidden="true"></div>
        <div class="mobile-drawer__header">
          <span>操作</span>
          <button type="button" data-mobile-close>关闭</button>
        </div>
        <div class="mobile-drawer__grid">
          <button type="button" data-mobile-tour-restart>自动导览</button>
          <button type="button" data-mobile-phone>普通沉浸模式</button>
          <button type="button" data-mobile-motion-toggle>手机体感模式</button>
          <button type="button" data-mobile-free>自由查看</button>
          <button type="button" data-mobile-ar>AR 扫描</button>
          <button type="button" data-mobile-home>返回首页</button>
        </div>
      </nav>

      <nav class="controls-panel vr-controls-panel vr-inline-controls" aria-label="VR 沉浸控制">
        <button class="primary-control" type="button" data-tour-restart>自动导览</button>
        <button type="button" data-phone>普通沉浸模式</button>
        <button type="button" data-motion-toggle>手机体感模式</button>
        <button type="button" data-tour-free>自由查看</button>
      </nav>

      <div class="toast" data-toast role="status" aria-live="polite"></div>
    </div>
  `,o}function a(o,d){return o.querySelector(d)}function I(o,d,t){const n=Math.round(N.clamp(d,0,1)*100);a(o,"[data-loading-bar]").style.width=`${n}%`,a(o,"[data-loading-detail]").textContent=t||(n<98?`正在加载沉浸实验室 · ${n}%`:"正在校准第一人称光路…")}function G(o,{mode:d,label:t,index:n,count:E,progress:M}){a(o,"[data-tour-mode]").textContent=d,a(o,"[data-tour-step]").textContent=t,a(o,"[data-tour-index]").textContent=`${String(n+1).padStart(2,"0")} / ${String(E).padStart(2,"0")}`,a(o,"[data-tour-line]").style.width=`${Math.round(M*100)}%`}function D(o,d){console.error("VR mode failed to start.",d);const t=a(o,"[data-loading]");t.classList.add("is-error"),t.setAttribute("aria-busy","false"),t.querySelector("h1").textContent="沉浸实验室加载失败",a(o,"[data-loading-detail]").textContent="请确认模型资源存在，并通过本地服务打开页面。",a(o,"[data-retry]").hidden=!1}async function ut(o,{navigate:d}){const t=nt();o.append(t);const n=ot(),E=a(t,".lab-scene-canvas"),M={interface:a(t,"[data-interface]"),entryTransition:a(t,"[data-entry-transition]"),entryTitle:a(t,"[data-entry-title]"),entryDetail:a(t,"[data-entry-detail]"),toast:a(t,"[data-toast]"),spatialPanel:a(t,"[data-spatial-panel]"),spatialKicker:a(t,"[data-spatial-kicker]"),spatialTitle:a(t,"[data-spatial-title]"),spatialBody:a(t,"[data-spatial-body]"),crosshair:a(t,"[data-focus-reticle]"),orientationHint:a(t,"[data-orientation-hint]"),returnTour:a(t,"[data-return-tour]")},r=J(M),k=at();t.dataset.runtimeLevel=k.level.toLowerCase(),n.add(()=>r.dispose());let l;try{l=q(E,{modeConfig:P,runtimeConfig:k})}catch(e){return D(t,e),{dispose:()=>n.dispose()}}const{scene:f,camera:p,controls:L,renderer:m}=l,_=Y(p);let h=0;n.add(()=>{_.disable(),m.xr&&(m.xr.enabled=!1),m.setAnimationLoop(null),l.dispose(),et(f),t.remove(),document.body.removeAttribute("data-view-mode"),delete document.body.dataset.climax}),a(t,"[data-back]").addEventListener("click",()=>d("/home")),a(t,"[data-retry]").addEventListener("click",()=>window.location.reload());let i;try{i=await Z({onProgress:e=>I(t,e),onSourceChange:()=>I(t,.1,"压缩模型不可用，正在切换兼容版本…")})}catch(e){return D(t,e),{dispose:()=>n.dispose()}}f.add(i.root),i.applyVisualConfig?.(P.model),l.setGridFloor(i.bounds.min.y-.035);const x=z({scene:f,camera:p,anchors:i.anchors,isMobile:l.isMobile,reducedMotion:l.reducedMotion,visualConfig:P.effects,runtimeConfig:k}),v=tt({camera:p,anchors:i.anchors,layer:a(t,"[data-hotspots]"),card:a(t,"[data-hotspot-card]"),closeButton:a(t,"[data-hotspot-close]")});n.add(()=>v.dispose());const g=Q({scene:f,camera:p,hotspots:v,anchors:i.anchors,ui:r});n.add(()=>g.dispose());const S=K({element:a(t,"[data-climax]"),valueElement:a(t,"[data-climax-value]"),onTick:(e,s)=>{s===2&&i.triggerGlow(.72)},onImpact:()=>{x.triggerClimax(h),i.triggerGlow(1.8),document.body.dataset.climax="complete",r.setSpatialPanel({kicker:"S = 2.52",title:"突破经典上限 S ≤ 2",body:"符合计数显示贝尔不等式被违反，量子关联不能用经典局域模型解释。"})}});n.add(()=>S.dispose());const u=W({camera:p,controls:L,anchors:i.anchors,bounds:i.bounds,modeLabel:"第一人称导览",firstPerson:!0,onUpdate:e=>{G(t,e),["scan","motion"].includes(document.body.dataset.viewMode)&&r.setSpatialPanel({kicker:e.mode,title:e.label,body:"可切换体感或自由查看；不支持 WebXR 也不会影响当前画面。"})},onPause:e=>{G(t,{mode:e,label:"可用手指拖动查看；体感需要点击按钮授权。",index:0,count:1,progress:1})},onClimax:()=>S.play()});n.add(()=>u.dispose());const O=X({sceneSystem:l,effects:x,dot:a(t,"[data-performance-dot]"),label:a(t,"[data-performance]"),runtimeConfig:k}),c=j({app:t,camera:p,orbitControls:L,anchors:i.anchors,bounds:i.bounds,gyroControls:_,showToast:r.showToast,onEnterTransition:r.playEntranceTransition,onModeChange:e=>{r.setMode(e);const s=e==="scan"||e==="motion";v.setEnabled(!s),g.setEnabled(s),e!=="motion"&&T(!1)}});n.add(()=>c.dispose());async function C(){c.setTourMode(),r.setMode("tour"),v.setEnabled(!0),g.setEnabled(!1),S.reset(),document.body.dataset.climax="pending",i.mixer.setTime(0),r.playEntranceTransition("第一人称导览开始","从实验室入口推进到纠缠光路"),u.restart(h),r.showToast("自动导览已开始，可以随时拖动打断。")}function T(e){a(t,"[data-motion-toggle]").textContent=e?"关闭体感":"手机体感模式";const s=a(t,"[data-mobile-motion-toggle]");s&&(s.textContent=e?"关闭体感":"手机体感")}function w(){const e=a(t,"[data-mobile-vr-start]");e&&(e.hidden=!0)}function F(){const e=a(t,"[data-mobile-drawer]"),s=!!(e&&!e.hidden);t.classList.toggle("mobile-menu-open",s),document.body.classList.toggle("mobile-menu-open",s)}function B(e){const s=a(t,"[data-mobile-drawer]"),b=a(t,"[data-mobile-drawer-backdrop]"),$=a(t,"[data-mobile-menu]");s.hidden=!e,b.hidden=!e,$?.setAttribute("aria-expanded",String(e)),F()}function y(){B(!1)}async function A(){w(),u.free(),await c.enterScanMode({fullscreen:!0})}async function R(){if(w(),c.motionActive){c.disableMotion(),T(!1);return}u.free();const e=await c.enableMotion();T(e)}async function V(){w(),u.free(),await c.exitToFree({exitScreen:!0}),v.setEnabled(!0),g.setEnabled(!1)}a(t,"[data-tour-restart]").addEventListener("click",C),a(t,"[data-phone]").addEventListener("click",A),a(t,"[data-motion-toggle]").addEventListener("click",R),a(t,"[data-tour-free]").addEventListener("click",V),a(t,"[data-return-tour]").addEventListener("click",C),a(t,"[data-mobile-back]").addEventListener("click",()=>d("/home")),a(t,"[data-mobile-home]").addEventListener("click",()=>d("/home")),a(t,"[data-mobile-vr-home]").addEventListener("click",()=>d("/home")),a(t,"[data-mobile-menu]").addEventListener("click",()=>{const e=a(t,"[data-mobile-drawer]");B(e.hidden)}),a(t,"[data-mobile-close]").addEventListener("click",y),a(t,"[data-mobile-drawer-backdrop]").addEventListener("click",y),a(t,"[data-mobile-vr-phone]").addEventListener("click",A),a(t,"[data-mobile-vr-motion]").addEventListener("click",R),a(t,"[data-mobile-vr-free]").addEventListener("click",V),a(t,"[data-mobile-tour-restart]").addEventListener("click",()=>{y(),w(),C()}),a(t,"[data-mobile-phone]").addEventListener("click",async()=>{y(),await A()}),a(t,"[data-mobile-motion-toggle]").addEventListener("click",async()=>{y(),await R()}),a(t,"[data-mobile-free]").addEventListener("click",async()=>{y(),await V()}),a(t,"[data-mobile-ar]").addEventListener("click",()=>d("/ar"));const U=new H;return m.setAnimationLoop((e,s)=>{const b=Math.min(U.getDelta(),.05);h+=b,i.update(b),u.update(h),c.update(b),!u.active&&L.enabled&&L.update(),x.update(b,h,i.animationTime),v.update(),g.update(b),m.xr?.isPresenting&&s?m.render(f,p):l.render(),O.update(b,{immersiveActive:["scan","motion"].includes(c.mode),isMobile:l.isMobile})}),u.restart(h),window.requestAnimationFrame(()=>{a(t,"[data-interface]").classList.add("is-ready"),a(t,"[data-interface]").setAttribute("aria-hidden","false"),a(t,"[data-loading]").setAttribute("aria-busy","false"),a(t,"[data-loading]").classList.add("is-done")}),document.body.dataset.climax="pending",n.add(()=>document.body.classList.remove("mobile-menu-open")),{dispose:()=>n.dispose()}}export{ut as mount};
