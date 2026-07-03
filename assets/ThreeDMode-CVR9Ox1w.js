import{l as Q,c as q,C as K,V as x,M as j}from"./hotspots-BkZJaBOZ.js";import{c as W,T as L,a as X,b as J,d as Y,e as Z,f as tt,g as et,h as at,i as ot}from"./labUi-BiycXtZK.js";import{g as nt}from"./runtimeConfig-bT2k2tCC.js";import{d as it,c as st}from"./index-J0iP4DaJ.js";function dt(){const o=document.createElement("section");return o.className="mode-page lab-mode-page immersive-master-page three-d-mode-page",o.innerHTML=`
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
  `,o}function e(o,s){return o.querySelector(s)}function R(o,s=new x){return o?new x(o.x??s.x,o.y??s.y,o.z??s.z):s.clone()}function V(o,s,t){const d=Math.round(j.clamp(s,0,1)*100);e(o,"[data-loading-bar]").style.width=`${d}%`,e(o,"[data-loading-detail]").textContent=t||(d<98?`正在连接实验光路 · ${d}%`:"正在校准量子态与光子路径…")}function N(o,{mode:s,label:t,index:d,count:M,progress:S}){e(o,"[data-tour-mode]").textContent=s,e(o,"[data-tour-step]").textContent=t,e(o,"[data-tour-index]").textContent=`${String(d+1).padStart(2,"0")} / ${String(M).padStart(2,"0")}`,e(o,"[data-tour-line]").style.width=`${Math.round(S*100)}%`}function z(o,s){console.error("3D mode failed to start.",s);const t=e(o,"[data-loading]");t.classList.add("is-error"),t.setAttribute("aria-busy","false"),t.querySelector("h1").textContent="实验场景加载失败",e(o,"[data-loading-detail]").textContent="请确认 public/models/scene12_13_vr.glb 存在，并通过本地服务打开页面。",e(o,"[data-retry]").hidden=!1}async function bt(o,{navigate:s}){const t=dt();o.append(t);const d=st(),M=e(t,".lab-scene-canvas"),S={interface:e(t,"[data-interface]"),entryTransition:e(t,"[data-entry-transition]"),entryTitle:e(t,"[data-entry-title]"),entryDetail:e(t,"[data-entry-detail]"),toast:e(t,"[data-toast]"),spatialPanel:e(t,"[data-spatial-panel]"),spatialKicker:e(t,"[data-spatial-kicker]"),spatialTitle:e(t,"[data-spatial-title]"),spatialBody:e(t,"[data-spatial-body]"),crosshair:e(t,"[data-focus-reticle]"),orientationHint:e(t,"[data-orientation-hint]"),returnTour:e(t,"[data-return-tour]")},r=at(S),h=nt();t.dataset.runtimeLevel=h.level.toLowerCase(),d.add(()=>r.dispose());let b;try{b=W(M,{modeConfig:L,runtimeConfig:h})}catch(a){return z(t,a),{dispose:()=>d.dispose()}}const{scene:w,camera:c,controls:p,renderer:_}=b;let v=0;d.add(()=>{_.setAnimationLoop(null),b.dispose(),it(w),t.remove(),document.body.removeAttribute("data-view-mode"),delete document.body.dataset.climax}),e(t,"[data-back]").addEventListener("click",()=>s("/home")),e(t,"[data-retry]").addEventListener("click",()=>window.location.reload());let i;try{i=await Q({onProgress:a=>V(t,a),onSourceChange:()=>V(t,.1,"压缩模型不可用，正在切换兼容版本…")})}catch(a){return z(t,a),{dispose:()=>d.dispose()}}w.add(i.root),i.applyVisualConfig?.(L.model),b.setGridFloor(i.bounds.min.y-.035);const k=X({scene:w,camera:c,anchors:i.anchors,isMobile:b.isMobile,reducedMotion:b.reducedMotion,visualConfig:L.effects,runtimeConfig:h}),y=q({camera:c,anchors:i.anchors,layer:e(t,"[data-hotspots]"),card:e(t,"[data-hotspot-card]"),closeButton:e(t,"[data-hotspot-close]")});d.add(()=>y.dispose());const f=J({scene:w,camera:c,hotspots:y,anchors:i.anchors,ui:r});d.add(()=>f.dispose());const E=Y({element:e(t,"[data-climax]"),valueElement:e(t,"[data-climax-value]"),onTick:(a,n)=>{n===2&&i.triggerGlow(.72)},onImpact:()=>{k.triggerClimax(v),i.triggerGlow(1.8),document.body.dataset.climax="complete",r.setSpatialPanel({kicker:"S = 2.52",title:"突破经典上限 S ≤ 2",body:"符合计数显示贝尔不等式被违反，量子关联不能用经典局域模型解释。"})}});d.add(()=>E.dispose());const u=Z({camera:c,controls:p,anchors:i.anchors,bounds:i.bounds,onUpdate:a=>{N(t,a),(document.body.dataset.viewMode==="scan"||document.body.dataset.viewMode==="motion")&&r.setSpatialPanel({kicker:a.mode,title:a.label,body:"单指拖动旋转视角，双指缩放；开启体感后可转动手机观察。"})},onPause:a=>{N(t,{mode:a,label:"单指拖动、双指缩放，也可以点击热点查看说明。",index:0,count:1,progress:1})},onClimax:()=>E.play()});d.add(()=>u.dispose());const U=ot(c),B=tt({sceneSystem:b,effects:k,dot:e(t,"[data-performance-dot]"),label:e(t,"[data-performance]"),runtimeConfig:h}),l=et({app:t,camera:c,orbitControls:p,anchors:i.anchors,bounds:i.bounds,gyroControls:U,showToast:r.showToast,onEnterTransition:r.playEntranceTransition,onModeChange:a=>{r.setMode(a);const n=a==="scan"||a==="motion";B.applyQualityMode(),y.setEnabled(!n),f.setEnabled(n),a!=="motion"&&T(!1)}});d.add(()=>l.dispose());async function I({notify:a=!0}={}){u.free(),await l.exitToFree({exitScreen:!1});const n=L.scene,m=h.isMobile&&n.mobileCameraPosition||n.cameraPosition,A=h.isMobile&&n.mobileOrbitTarget||n.orbitTarget;c.fov=h.isMobile?n.mobileCameraFov:n.cameraFov,c.aspect=window.innerWidth/window.innerHeight,c.position.copy(R(m,new x(8.4,5.4,10.8))),c.updateProjectionMatrix(),p.enabled=!0,p.enablePan=!0,p.target.copy(R(A,new x(0,.25,0))),p.update(),y.setEnabled(!0),f.setEnabled(!1),r.setMode("free"),a&&r.showToast("已回到手机最佳视角：可拖动旋转，双指缩放。")}async function D(){u.free(),await l.exitToFree({exitScreen:!1}),i.mixer.setTime(Math.max(i.animationTime,15.8)),k.triggerClimax(v),i.triggerGlow(1.8),E.play(),document.body.dataset.climax="complete",r.setSpatialPanel({kicker:"S = 2.52",title:"突破经典上限 S ≤ 2",body:"符合计数器给出贝尔不等式违背，量子纠缠关联无法用经典局域模型解释。"}),r.showToast("已播放 S > 2 结论高潮。")}async function C(){l.setTourMode(),r.setMode("tour"),y.setEnabled(!0),f.setEnabled(!1),E.reset(),document.body.dataset.climax="pending",i.mixer.setTime(0),r.playEntranceTransition("手机导览开始","从实验室远景推进到量子光路"),u.restart(v),r.showToast("自动导览已开始，可以随时拖动打断。")}function T(a){e(t,"[data-motion-toggle]").textContent=a?"关闭体感":"开启体感";const n=e(t,"[data-mobile-motion-toggle]");n&&(n.textContent=a?"关闭体感":"开启体感")}function G(){const a=e(t,"[data-mobile-drawer]"),n=e(t,"[data-mobile-path-sheet]"),m=!!(a&&!a.hidden||n&&!n.hidden);t.classList.toggle("mobile-menu-open",m),document.body.classList.toggle("mobile-menu-open",m)}function P(a){const n=e(t,"[data-mobile-drawer]"),m=e(t,"[data-mobile-drawer-backdrop]"),A=e(t,"[data-mobile-menu]");n.hidden=!a,m.hidden=!a,A?.setAttribute("aria-expanded",String(a)),G()}function O(a){const n=e(t,"[data-mobile-path-sheet]"),m=e(t,"[data-mobile-drawer-backdrop]");n.hidden=!a,m.hidden=!a,G()}function g(){P(!1),O(!1)}async function F(){if(l.motionActive){l.disableMotion(),T(!1);return}u.free();const a=await l.enableMotion();T(a)}async function H(){u.free(),await l.exitToFree({exitScreen:!0}),y.setEnabled(!0),f.setEnabled(!1)}e(t,"[data-tour-restart]").addEventListener("click",C),e(t,"[data-best-view]").addEventListener("click",()=>I()),e(t,"[data-play-conclusion]").addEventListener("click",D),e(t,"[data-scan-mode]").addEventListener("click",async()=>{u.free(),await l.enterScanMode({fullscreen:!0})}),e(t,"[data-motion-toggle]").addEventListener("click",F),e(t,"[data-tour-free]").addEventListener("click",H),e(t,"[data-return-tour]").addEventListener("click",C),e(t,"[data-mobile-back]").addEventListener("click",()=>s("/home")),e(t,"[data-mobile-home]").addEventListener("click",()=>s("/home")),e(t,"[data-mobile-menu]").addEventListener("click",()=>{const a=e(t,"[data-mobile-drawer]");P(a.hidden)}),e(t,"[data-mobile-close]").addEventListener("click",g),e(t,"[data-mobile-drawer-backdrop]").addEventListener("click",g),e(t,"[data-mobile-best-view]").addEventListener("click",()=>I()),e(t,"[data-mobile-tour-restart]").addEventListener("click",()=>{g(),C()}),e(t,"[data-mobile-play-conclusion]").addEventListener("click",()=>{g(),D()}),e(t,"[data-mobile-motion-toggle]").addEventListener("click",async()=>{g(),await F()}),e(t,"[data-mobile-free]").addEventListener("click",async()=>{g(),await H()}),e(t,"[data-mobile-path]").addEventListener("click",()=>{P(!1),O(!0)}),e(t,"[data-mobile-path-close]").addEventListener("click",g),e(t,"[data-mobile-ar]").addEventListener("click",()=>s("/ar"));const $=new K;return _.setAnimationLoop(()=>{const a=Math.min($.getDelta(),.05);v+=a,i.update(a),u.update(v),l.update(a),!u.active&&p.enabled&&p.update(),k.update(a,v,i.animationTime),y.update(),f.update(a),b.render(),B.update(a,{immersiveActive:l.mode==="scan"||l.mode==="motion",isMobile:b.isMobile})}),u.restart(v),window.requestAnimationFrame(()=>{e(t,"[data-interface]").classList.add("is-ready"),e(t,"[data-interface]").setAttribute("aria-hidden","false"),e(t,"[data-loading]").setAttribute("aria-busy","false"),e(t,"[data-loading]").classList.add("is-done")}),document.body.dataset.climax="pending",d.add(()=>document.body.classList.remove("mobile-menu-open")),{dispose:()=>d.dispose()}}export{bt as mount};
