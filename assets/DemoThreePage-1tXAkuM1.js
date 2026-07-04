import{e as w}from"./device-Cetftdrt.js";import{m as C}from"./demoEmbedPage-0ALIDmEG.js";const B=[["405nm 激光","蓝紫色泵浦光进入 BBO 晶体，是下转换过程的能量来源。"],["BBO / SPDC","非线性晶体中发生自发参量下转换，产生两路相关光子。"],["偏振分析","两路偏振片改变测量基，让联合统计呈现角度相关性。"],["APD 探测","单光子探测器把光子事件转化为电脉冲。"],["符合计数","符合计数器只记录时间窗口内成对到达的事件。"],["S > 2","合适角度下，联合统计可以超过经典贝尔不等式上限。"]];function q(){return`
    <svg class="mobile-3d-svg" viewBox="0 0 360 330" role="img" aria-label="3D Demo 实验台光路">
      <defs>
        <linearGradient id="mobile3dPump" x1="0" x2="1">
          <stop offset="0%" stop-color="#8d7bff" />
          <stop offset="100%" stop-color="#5ee7ff" />
        </linearGradient>
        <linearGradient id="mobile3dA" x1="0" x2="1">
          <stop offset="0%" stop-color="#63e6ff" />
          <stop offset="100%" stop-color="#b6fbff" />
        </linearGradient>
        <linearGradient id="mobile3dB" x1="0" x2="1">
          <stop offset="0%" stop-color="#f07bff" />
          <stop offset="100%" stop-color="#9d7bff" />
        </linearGradient>
        <filter id="mobile3dGlow">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path id="mobile3dPumpPath" d="M38 166 H148" />
        <path id="mobile3dPathA" d="M176 164 C220 118, 265 92, 320 78" />
        <path id="mobile3dPathB" d="M176 164 C220 210, 265 238, 320 252" />
      </defs>
      <path class="mobile-3d-table" d="M32 222 L160 120 L334 168 L198 284 Z" />
      <g class="mobile-3d-grid-lines">
        <path d="M76 210 L200 112 M120 236 L244 136 M164 262 L288 150" />
        <path d="M82 182 L252 230 M118 154 L290 202 M154 126 L326 174" />
      </g>
      <path class="mobile-3d-beam-pump" d="M38 166 H148" stroke="url(#mobile3dPump)" />
      <path class="mobile-3d-beam-a" d="M176 164 C220 118, 265 92, 320 78" stroke="url(#mobile3dA)" />
      <path class="mobile-3d-beam-b" d="M176 164 C220 210, 265 238, 320 252" stroke="url(#mobile3dB)" />
      <circle r="5" class="mobile-3d-dot mobile-3d-dot--pump">
        <animateMotion dur="1.5s" repeatCount="indefinite"><mpath href="#mobile3dPumpPath" /></animateMotion>
      </circle>
      <circle r="5" class="mobile-3d-dot mobile-3d-dot--a">
        <animateMotion dur="1.9s" repeatCount="indefinite"><mpath href="#mobile3dPathA" /></animateMotion>
      </circle>
      <circle r="5" class="mobile-3d-dot mobile-3d-dot--b">
        <animateMotion dur="1.9s" begin="0.25s" repeatCount="indefinite"><mpath href="#mobile3dPathB" /></animateMotion>
      </circle>
      <g class="mobile-3d-object mobile-3d-laser" transform="translate(38 148)">
        <rect width="54" height="36" rx="12" />
        <circle cx="44" cy="18" r="7" />
      </g>
      <g class="mobile-3d-object mobile-3d-bbo" transform="translate(148 140)">
        <polygon points="0,0 42,10 34,48 -8,36" />
        <line x1="9" y1="7" x2="26" y2="42" />
      </g>
      <g class="mobile-3d-object mobile-3d-analyzer-a" transform="translate(244 88)">
        <circle r="18" />
        <line x1="-12" y1="0" x2="12" y2="0" />
      </g>
      <g class="mobile-3d-object mobile-3d-analyzer-b" transform="translate(244 236)">
        <circle r="18" />
        <line x1="-12" y1="0" x2="12" y2="0" />
      </g>
      <g class="mobile-3d-object mobile-3d-apd-a" transform="translate(306 56)">
        <rect width="42" height="34" rx="10" />
        <circle cx="12" cy="17" r="5" />
      </g>
      <g class="mobile-3d-object mobile-3d-apd-b" transform="translate(306 236)">
        <rect width="42" height="34" rx="10" />
        <circle cx="12" cy="17" r="5" />
      </g>
      <g class="mobile-3d-labels" data-3d-labels>
        <text x="28" y="136">405nm 激光</text>
        <text x="136" y="126">BBO</text>
        <text x="210" y="62">偏振分析</text>
        <text x="210" y="294">APD 探测</text>
        <text x="138" y="306">符合计数</text>
      </g>
      <g class="mobile-3d-s-burst" data-s-burst>
        <circle cx="180" cy="164" r="48" />
        <text x="180" y="170" text-anchor="middle">S &gt; 2</text>
      </g>
    </svg>
  `}function M(n,{navigate:l}){let i=!0,r=!0,o=-18,s=12,b=0,d=!1,u=0,p=0;const t=document.createElement("main");t.className="mobile-demo-page mobile-3d-demo",t.innerHTML=`
    <header class="mobile-demo-topbar">
      <button class="ghost-button" type="button" data-route-home>返回首页</button>
      <div>
        <p class="eyebrow">Mobile Native Demo</p>
        <h1>3D Demo</h1>
      </div>
      <button class="secondary-button compact-button" type="button" data-scroll-info>说明</button>
    </header>

    <section class="mobile-demo-intro">
      <p>移动端使用轻量 3D Demo，不依赖 iframe。拖动实验台可以改变视角，也可以播放 S &gt; 2 的联合统计提示。</p>
    </section>

    <section class="mobile-3d-stage-shell">
      <div class="mobile-3d-stage" data-3d-stage>
        ${q()}
      </div>
    </section>

    <section class="mobile-demo-presets mobile-3d-actions" aria-label="3D Demo 操作区">
      <button class="secondary-button is-active" type="button" data-action="rotate">自动旋转</button>
      <button class="secondary-button" type="button" data-action="best">最佳视角</button>
      <button class="secondary-button" type="button" data-action="labels">隐藏标签</button>
      <button class="primary-button" type="button" data-action="bell">播放 S &gt; 2</button>
    </section>

    <section class="mobile-3d-readout" aria-live="polite">
      <span>视角 Y</span>
      <strong data-readout="angle">-18°</strong>
      <span>演示状态</span>
      <strong data-readout="state">自动旋转</strong>
    </section>

    <section class="mobile-3d-hotspots" data-info-card>
      ${B.map(([e,P])=>`
        <article>
          <h2>${e}</h2>
          <p>${P}</p>
        </article>
      `).join("")}
    </section>
  `;const a=t.querySelector("[data-3d-stage]"),f=t.querySelector('[data-action="rotate"]'),g=t.querySelector('[data-action="labels"]'),h=t.querySelector('[data-readout="state"]'),L=t.querySelector('[data-readout="angle"]');function c(){a.style.setProperty("--mobile-3d-rotate",`${o}deg`),a.style.setProperty("--mobile-3d-tilt",`${s}deg`),L.textContent=`${Math.round(o)}°`}function m(e){i=e,f.classList.toggle("is-active",i),f.textContent=i?"停止旋转":"自动旋转",h.textContent=i?"自动旋转":"手动视角"}function y(){i&&!d&&(o+=.12,o>26&&(o=-26),c()),b=window.requestAnimationFrame(y)}function v(e){d=!0,m(!1),u=e.clientX,p=e.clientY,a.setPointerCapture?.(e.pointerId)}function D(e){d&&(o=S(o+(e.clientX-u)*.28),s=Math.max(4,Math.min(22,s-(e.clientY-p)*.08)),u=e.clientX,p=e.clientY,c())}function x(e){d=!1,a.releasePointerCapture?.(e.pointerId)}function S(e){return Math.max(-34,Math.min(34,e))}return t.querySelector("[data-route-home]")?.addEventListener("click",()=>l("/home")),t.querySelector("[data-scroll-info]")?.addEventListener("click",()=>{t.querySelector("[data-info-card]")?.scrollIntoView({behavior:"smooth",block:"center"})}),f.addEventListener("click",()=>m(!i)),t.querySelector('[data-action="best"]')?.addEventListener("click",()=>{o=-18,s=12,m(!1),c()}),g.addEventListener("click",()=>{r=!r,t.classList.toggle("is-labels-hidden",!r),g.textContent=r?"隐藏标签":"显示标签"}),t.querySelector('[data-action="bell"]')?.addEventListener("click",()=>{t.classList.remove("is-bell-playing"),window.requestAnimationFrame(()=>{t.classList.add("is-bell-playing"),h.textContent="S > 2 高亮"})}),a.addEventListener("pointerdown",v),a.addEventListener("pointermove",D),a.addEventListener("pointerup",x),a.addEventListener("pointercancel",x),c(),m(!0),n.append(t),b=window.requestAnimationFrame(y),{dispose(){window.cancelAnimationFrame(b),t.remove()}}}async function k(n,l){return w()||window.innerWidth<=768?M(n,l):C(n,l,{title:"3D Demo",description:"打开 demo 的 3D 交互页面，补充展示实验路径与三维演示内容。",demoHash:"#/three",fallbackMount:M})}export{k as mount};
