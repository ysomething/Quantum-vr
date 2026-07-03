import{l as $,c as Q,C as q,V as L,M as K}from"./hotspots-IBT_bgf8.js";import{c as j,T as x,a as W,b as X,d as J,e as Y,f as Z,g as tt,h as at,i as et}from"./labUi-CJ4rbYiC.js";import{g as ot}from"./runtimeConfig-bT2k2tCC.js";import{d as nt,c as it}from"./index-BX0K1C9K.js";function st(){const o=document.createElement("section");return o.className="mode-page lab-mode-page immersive-master-page three-d-mode-page",o.innerHTML=`
    <canvas class="scene-canvas lab-scene-canvas" aria-label="量子纠缠实验室 3D 展示"></canvas>
    <div class="ambient-haze" aria-hidden="true"></div>

    <div class="entry-transition" data-entry-transition aria-hidden="true">
      <div class="tunnel-rings" aria-hidden="true"><span></span><span></span><span></span></div>
      <p>PHONE IMMERSIVE</p>
      <h2 data-entry-title>校准沉浸视角</h2>
      <span data-entry-detail>单屏沉浸导览已就绪</span>
    </div>

    <div class="loading-screen" data-loading aria-busy="true">
      <div class="loader-core" aria-hidden="true"><span></span><span></span><span></span></div>
      <p class="loading-eyebrow">Loading GLB</p>
      <h1>正在连接量子纠缠实验室</h1>
      <div class="loading-track"><i data-loading-bar></i></div>
      <p class="loading-detail" data-loading-detail>正在准备模型与光路效果</p>
      <button class="retry-button" type="button" data-retry hidden>重新加载</button>
    </div>

    <div class="interface-shell" data-interface aria-hidden="true">
      <header class="lab-header">
        <div class="lab-identity">
          <p>QUANTUM</p>
          <h1>量子纠缠实验室</h1>
        </div>
        <div class="lab-header-actions">
          <button class="lab-back-button" type="button" data-back>返回首页</button>
        </div>
      </header>

      <aside class="experiment-readout" aria-label="实验路径">
        <p class="readout-kicker">EXPERIMENT PATH</p>
        <ol>
          <li><span>01</span>405nm 泵浦激光</li>
          <li><span>02</span>BBO / SPDC</li>
          <li><span>03</span>纠缠光子路径</li>
          <li><span>04</span>APD 符合计数</li>
          <li><span>05</span>S ≤ 2 / S &gt; 2</li>
        </ol>
        <div class="classical-limit">
          <span>CLASSICAL LIMIT</span>
          <strong>S ≤ 2</strong>
        </div>
      </aside>

      <aside class="tour-readout">
        <p data-tour-mode>自动导览</p>
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
        <h2 data-spatial-title>单屏沉浸导览</h2>
        <p data-spatial-body>单指拖动旋转视角，双指缩放；开启体感后可转动手机观察。</p>
      </article>

      <div class="focus-reticle" data-focus-reticle aria-hidden="true"><span></span></div>
      <p class="orientation-hint" data-orientation-hint>体感模式已开启：缓慢转动手机观察实验室</p>
      <button class="return-tour-button" type="button" data-return-tour hidden>回到导览</button>

      <div class="mobile-scene-chrome" aria-label="手机端快捷操作">
        <button class="mobile-icon-button" type="button" data-mobile-back aria-label="返回首页">←</button>
        <h1>量子纠缠实验室</h1>
        <button class="mobile-icon-button" type="button" data-mobile-menu aria-expanded="false" aria-label="打开操作菜单">☰</button>
        <button class="mobile-best-view" type="button" data-mobile-best-view>最佳视角</button>
        <p class="mobile-bottom-hint">单指旋转 · 双指缩放</p>
      </div>

      <div class="mobile-drawer-backdrop" data-mobile-drawer-backdrop hidden></div>
      <nav class="mobile-drawer" data-mobile-drawer hidden aria-label="手机端操作菜单">
        <div class="mobile-drawer__handle" aria-hidden="true"></div>
        <div class="mobile-drawer__header">
          <span>操作</span>
          <button type="button" data-mobile-close>关闭</button>
        </div>
        <div class="mobile-drawer__grid">
          <button type="button" data-mobile-tour-restart>自动导览</button>
          <button type="button" data-mobile-play-conclusion>播放 S &gt; 2</button>
          <button type="button" data-mobile-motion-toggle>开启体感</button>
          <button type="button" data-mobile-free>自由查看</button>
          <button type="button" data-mobile-path>实验路径</button>
          <button type="button" data-mobile-ar>AR 扫描</button>
          <button type="button" data-mobile-home>返回首页</button>
        </div>
      </nav>

      <section class="mobile-path-sheet" data-mobile-path-sheet hidden aria-label="实验路径">
        <div class="mobile-drawer__handle" aria-hidden="true"></div>
        <div class="mobile-drawer__header">
          <span>实验路径</span>
          <button type="button" data-mobile-path-close>关闭</button>
        </div>
        <ol>
          <li>405nm 泵浦激光</li>
          <li>BBO / SPDC</li>
          <li>纠缠光子路径</li>
          <li>APD 符合计数</li>
          <li>S &gt; 2 违反贝尔不等式</li>
        </ol>
      </section>

      <nav class="controls-panel" aria-label="3D 展示控制">
        <button class="primary-control" type="button" data-tour-restart>自动导览</button>
        <button type="button" data-scan-mode>扫码体验模式</button>
        <button type="button" data-motion-toggle>开启体感</button>
        <button type="button" data-best-view>最佳视角</button>
        <button type="button" data-play-conclusion>播放 S &gt; 2</button>
        <button type="button" data-tour-free>自由查看</button>
      </nav>

      <div class="toast" data-toast role="status" aria-live="polite"></div>
    </div>
  `,o}function a(o,s){return o.querySelector(s)}function H(o,s=new L){return o?new L(o.x??s.x,o.y??s.y,o.z??s.z):s.clone()}function R(o,s,t){const d=Math.round(K.clamp(s,0,1)*100);a(o,"[data-loading-bar]").style.width=`${d}%`,a(o,"[data-loading-detail]").textContent=t||(d<98?`正在连接实验光路 · ${d}%`:"正在校准量子态与光子路径…")}function V(o,{mode:s,label:t,index:d,count:M,progress:S}){a(o,"[data-tour-mode]").textContent=s,a(o,"[data-tour-step]").textContent=t,a(o,"[data-tour-index]").textContent=`${String(d+1).padStart(2,"0")} / ${String(M).padStart(2,"0")}`,a(o,"[data-tour-line]").style.width=`${Math.round(S*100)}%`}function N(o,s){console.error("3D mode failed to start.",s);const t=a(o,"[data-loading]");t.classList.add("is-error"),t.setAttribute("aria-busy","false"),t.querySelector("h1").textContent="实验场景加载失败",a(o,"[data-loading-detail]").textContent="请确认 public/models/scene12_13_vr.glb 存在，并通过本地服务打开页面。",a(o,"[data-retry]").hidden=!1}async function ut(o,{navigate:s}){const t=st();o.append(t);const d=it(),M=a(t,".lab-scene-canvas"),S={interface:a(t,"[data-interface]"),entryTransition:a(t,"[data-entry-transition]"),entryTitle:a(t,"[data-entry-title]"),entryDetail:a(t,"[data-entry-detail]"),toast:a(t,"[data-toast]"),spatialPanel:a(t,"[data-spatial-panel]"),spatialKicker:a(t,"[data-spatial-kicker]"),spatialTitle:a(t,"[data-spatial-title]"),spatialBody:a(t,"[data-spatial-body]"),crosshair:a(t,"[data-focus-reticle]"),orientationHint:a(t,"[data-orientation-hint]"),returnTour:a(t,"[data-return-tour]")},r=at(S),m=ot();t.dataset.runtimeLevel=m.level.toLowerCase(),d.add(()=>r.dispose());let b;try{b=j(M,{modeConfig:x,runtimeConfig:m})}catch(e){return N(t,e),{dispose:()=>d.dispose()}}const{scene:w,camera:c,controls:p,renderer:_}=b;let h=0;d.add(()=>{_.setAnimationLoop(null),b.dispose(),nt(w),t.remove(),document.body.removeAttribute("data-view-mode"),delete document.body.dataset.climax}),a(t,"[data-back]").addEventListener("click",()=>s("/home")),a(t,"[data-retry]").addEventListener("click",()=>window.location.reload());let i;try{i=await $({onProgress:e=>R(t,e),onSourceChange:()=>R(t,.1,"压缩模型不可用，正在切换兼容版本…")})}catch(e){return N(t,e),{dispose:()=>d.dispose()}}w.add(i.root),i.applyVisualConfig?.(x.model),b.setGridFloor(i.bounds.min.y-.035);const k=W({scene:w,camera:c,anchors:i.anchors,isMobile:b.isMobile,reducedMotion:b.reducedMotion,visualConfig:x.effects,runtimeConfig:m}),v=Q({camera:c,anchors:i.anchors,layer:a(t,"[data-hotspots]"),card:a(t,"[data-hotspot-card]"),closeButton:a(t,"[data-hotspot-close]")});d.add(()=>v.dispose());const f=X({scene:w,camera:c,hotspots:v,anchors:i.anchors,ui:r});d.add(()=>f.dispose());const E=J({element:a(t,"[data-climax]"),valueElement:a(t,"[data-climax-value]"),onTick:(e,n)=>{n===2&&i.triggerGlow(.72)},onImpact:()=>{k.triggerClimax(h),i.triggerGlow(1.8),document.body.dataset.climax="complete",r.setSpatialPanel({kicker:"S = 2.52",title:"突破经典上限 S ≤ 2",body:"符合计数显示贝尔不等式被违反，量子关联不能用经典局域模型解释。"})}});d.add(()=>E.dispose());const u=Y({camera:c,controls:p,anchors:i.anchors,bounds:i.bounds,onUpdate:e=>{V(t,e),(document.body.dataset.viewMode==="scan"||document.body.dataset.viewMode==="motion")&&r.setSpatialPanel({kicker:e.mode,title:e.label,body:"单指拖动旋转视角，双指缩放；开启体感后可转动手机观察。"})},onPause:e=>{V(t,{mode:e,label:"单指拖动、双指缩放，也可以点击热点查看说明。",index:0,count:1,progress:1})},onClimax:()=>E.play()});d.add(()=>u.dispose());const z=et(c),I=Z({sceneSystem:b,effects:k,dot:a(t,"[data-performance-dot]"),label:a(t,"[data-performance]"),runtimeConfig:m}),l=tt({app:t,camera:c,orbitControls:p,anchors:i.anchors,bounds:i.bounds,gyroControls:z,showToast:r.showToast,onEnterTransition:r.playEntranceTransition,onModeChange:e=>{r.setMode(e);const n=e==="scan"||e==="motion";I.applyQualityMode(),v.setEnabled(!n),f.setEnabled(n),e!=="motion"&&T(!1)}});d.add(()=>l.dispose());async function B({notify:e=!0}={}){u.free(),await l.exitToFree({exitScreen:!1});const n=x.scene,g=m.isMobile&&n.mobileCameraPosition||n.cameraPosition,A=m.isMobile&&n.mobileOrbitTarget||n.orbitTarget;c.fov=m.isMobile?n.mobileCameraFov:n.cameraFov,c.aspect=window.innerWidth/window.innerHeight,c.position.copy(H(g,new L(8.4,5.4,10.8))),c.updateProjectionMatrix(),p.enabled=!0,p.enablePan=!0,p.target.copy(H(A,new L(0,.25,0))),p.update(),v.setEnabled(!0),f.setEnabled(!1),r.setMode("free"),e&&r.showToast("已回到手机最佳视角：可拖动旋转，双指缩放。")}async function D(){u.free(),await l.exitToFree({exitScreen:!1}),i.mixer.setTime(Math.max(i.animationTime,15.8)),k.triggerClimax(h),i.triggerGlow(1.8),E.play(),document.body.dataset.climax="complete",r.setSpatialPanel({kicker:"S = 2.52",title:"突破经典上限 S ≤ 2",body:"符合计数器给出贝尔不等式违背，量子纠缠关联无法用经典局域模型解释。"}),r.showToast("已播放 S > 2 结论高潮。")}async function C(){l.setTourMode(),r.setMode("tour"),v.setEnabled(!0),f.setEnabled(!1),E.reset(),document.body.dataset.climax="pending",i.mixer.setTime(0),r.playEntranceTransition("手机导览开始","从实验室远景推进到量子光路"),u.restart(h),r.showToast("自动导览已开始，可以随时拖动打断。")}function T(e){a(t,"[data-motion-toggle]").textContent=e?"关闭体感":"开启体感";const n=a(t,"[data-mobile-motion-toggle]");n&&(n.textContent=e?"关闭体感":"开启体感")}function P(e){const n=a(t,"[data-mobile-drawer]"),g=a(t,"[data-mobile-drawer-backdrop]"),A=a(t,"[data-mobile-menu]");n.hidden=!e,g.hidden=!e,A?.setAttribute("aria-expanded",String(e))}function G(e){const n=a(t,"[data-mobile-path-sheet]"),g=a(t,"[data-mobile-drawer-backdrop]");n.hidden=!e,g.hidden=!e}function y(){P(!1),G(!1)}async function F(){if(l.motionActive){l.disableMotion(),T(!1);return}u.free();const e=await l.enableMotion();T(e)}async function O(){u.free(),await l.exitToFree({exitScreen:!0}),v.setEnabled(!0),f.setEnabled(!1)}a(t,"[data-tour-restart]").addEventListener("click",C),a(t,"[data-best-view]").addEventListener("click",()=>B()),a(t,"[data-play-conclusion]").addEventListener("click",D),a(t,"[data-scan-mode]").addEventListener("click",async()=>{u.free(),await l.enterScanMode({fullscreen:!0})}),a(t,"[data-motion-toggle]").addEventListener("click",F),a(t,"[data-tour-free]").addEventListener("click",O),a(t,"[data-return-tour]").addEventListener("click",C),a(t,"[data-mobile-back]").addEventListener("click",()=>s("/home")),a(t,"[data-mobile-home]").addEventListener("click",()=>s("/home")),a(t,"[data-mobile-menu]").addEventListener("click",()=>{const e=a(t,"[data-mobile-drawer]");P(e.hidden)}),a(t,"[data-mobile-close]").addEventListener("click",y),a(t,"[data-mobile-drawer-backdrop]").addEventListener("click",y),a(t,"[data-mobile-best-view]").addEventListener("click",()=>B()),a(t,"[data-mobile-tour-restart]").addEventListener("click",()=>{y(),C()}),a(t,"[data-mobile-play-conclusion]").addEventListener("click",()=>{y(),D()}),a(t,"[data-mobile-motion-toggle]").addEventListener("click",async()=>{y(),await F()}),a(t,"[data-mobile-free]").addEventListener("click",async()=>{y(),await O()}),a(t,"[data-mobile-path]").addEventListener("click",()=>{P(!1),G(!0)}),a(t,"[data-mobile-path-close]").addEventListener("click",y),a(t,"[data-mobile-ar]").addEventListener("click",()=>s("/ar"));const U=new q;return _.setAnimationLoop(()=>{const e=Math.min(U.getDelta(),.05);h+=e,i.update(e),u.update(h),l.update(e),!u.active&&p.enabled&&p.update(),k.update(e,h,i.animationTime),v.update(),f.update(e),b.render(),I.update(e,{immersiveActive:l.mode==="scan"||l.mode==="motion",isMobile:b.isMobile})}),u.restart(h),window.requestAnimationFrame(()=>{a(t,"[data-interface]").classList.add("is-ready"),a(t,"[data-interface]").setAttribute("aria-hidden","false"),a(t,"[data-loading]").setAttribute("aria-busy","false"),a(t,"[data-loading]").classList.add("is-done")}),document.body.dataset.climax="pending",{dispose:()=>d.dispose()}}export{ut as mount};
