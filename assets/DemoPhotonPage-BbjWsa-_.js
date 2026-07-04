import{e as B}from"./device-Cetftdrt.js";import{m as $}from"./demoEmbedPage-0ALIDmEG.js";const M={classical:{alpha:0,beta:45,windowNs:12,pump:58,noise:18},entangled:{alpha:0,beta:45,windowNs:6,pump:72,noise:6},max:{alpha:0,beta:22.5,windowNs:5,pump:82,noise:2}},c=(t,n,s)=>Math.max(n,Math.min(s,t)),y=t=>t*Math.PI/180,x=(t,n=2)=>Number(t).toFixed(n);function k(t,n=0){const s=t.pump/100,i=t.noise/100,l=c(.96-i*1.55+s*.035,.38,.98),o=t.alpha-t.beta,m=c(l*Math.cos(2*y(o)),-.98,.98),p=c(.5*(1+m),.03,.97),r=c(1-Math.exp(-t.windowNs/5.5),.18,.98),u=t.pump*t.windowNs*(.18+t.noise*.025),d=Math.sin(n*.09+t.alpha*.02)*36,h=Math.cos(n*.083+t.beta*.017)*34,e=1800+t.pump*118,a=Math.max(0,Math.round(e*(1-i*.12)+d)),f=Math.max(0,Math.round(e*.96*(1-i*.1)+h)),v=Math.max(0,Math.round((a+f)*.13*p*r+u)),P=Math.cos(2*y(o-22.5)),S=c(.82+.18*P,.68,1),A=c(1.05-Math.abs(t.windowNs-5)*.018,.72,1),g=c(2*Math.SQRT2*l*S*A,0,2.82);return{visibility:l,correlation:m,countA:a,countB:f,coincidence:v,sValue:g,violatesBell:g>2}}function b({key:t,label:n,min:s,max:i,step:l,suffix:o}){return`
    <label class="mobile-demo-slider" data-control="${t}">
      <span class="mobile-demo-slider__label">${n}</span>
      <span class="mobile-demo-slider__value" data-value="${t}"></span>
      <input type="range" min="${s}" max="${i}" step="${l}" data-input="${t}" />
      <span class="mobile-demo-slider__suffix">${o}</span>
    </label>
  `}function C(){return`
    <svg class="mobile-photon-svg" viewBox="0 0 360 460" role="img" aria-label="双光子纠缠光路图">
      <defs>
        <linearGradient id="mobilePumpGradient" x1="0" x2="1">
          <stop offset="0%" stop-color="#8d7bff" />
          <stop offset="100%" stop-color="#5ee7ff" />
        </linearGradient>
        <linearGradient id="mobilePhotonA" x1="0" x2="1">
          <stop offset="0%" stop-color="#63e6ff" />
          <stop offset="100%" stop-color="#9df8ff" />
        </linearGradient>
        <linearGradient id="mobilePhotonB" x1="0" x2="1">
          <stop offset="0%" stop-color="#f07bff" />
          <stop offset="100%" stop-color="#9d7bff" />
        </linearGradient>
        <filter id="mobileGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path id="pumpMobilePath" d="M180 34 L180 132" />
        <path id="photonMobilePathA" d="M180 178 C120 214, 86 262, 74 326" />
        <path id="photonMobilePathB" d="M180 178 C240 214, 274 262, 286 326" />
      </defs>

      <rect x="0" y="0" width="360" height="460" rx="22" fill="rgba(2, 8, 20, 0.54)" />
      <g opacity="0.22">
        <path d="M40 30 V430 M100 30 V430 M160 30 V430 M220 30 V430 M280 30 V430 M320 30 V430" stroke="#5ee7ff" stroke-width="1" />
        <path d="M24 70 H336 M24 130 H336 M24 190 H336 M24 250 H336 M24 310 H336 M24 370 H336" stroke="#5ee7ff" stroke-width="1" />
      </g>

      <g class="mobile-photon-node" transform="translate(180 34)">
        <rect x="-64" y="-22" width="128" height="44" rx="14" />
        <text text-anchor="middle" dominant-baseline="middle">405nm 泵浦激光</text>
      </g>
      <path class="mobile-pump-path" d="M180 58 L180 132" stroke="url(#mobilePumpGradient)" />
      <circle r="5" class="mobile-pump-dot">
        <animateMotion dur="1.4s" repeatCount="indefinite">
          <mpath href="#pumpMobilePath" />
        </animateMotion>
      </circle>
      <circle r="4" class="mobile-pump-dot is-second">
        <animateMotion dur="1.4s" begin="0.7s" repeatCount="indefinite">
          <mpath href="#pumpMobilePath" />
        </animateMotion>
      </circle>

      <g class="mobile-bbo-crystal" transform="translate(180 154)">
        <polygon points="-36,-24 42,-10 32,40 -46,24" />
        <line x1="-18" y1="-18" x2="18" y2="32" />
        <text x="0" y="68" text-anchor="middle">BBO / SPDC</text>
      </g>

      <path class="mobile-photon-path-a" d="M180 178 C120 214, 86 262, 74 326" stroke="url(#mobilePhotonA)" />
      <path class="mobile-photon-path-b" d="M180 178 C240 214, 274 262, 286 326" stroke="url(#mobilePhotonB)" />
      <circle r="5.5" class="mobile-photon-dot-a">
        <animateMotion dur="1.8s" repeatCount="indefinite">
          <mpath href="#photonMobilePathA" />
        </animateMotion>
      </circle>
      <circle r="5.5" class="mobile-photon-dot-b">
        <animateMotion dur="1.8s" begin="0.22s" repeatCount="indefinite">
          <mpath href="#photonMobilePathB" />
        </animateMotion>
      </circle>

      <g class="mobile-analyzer" transform="translate(74 326)">
        <circle r="27" />
        <line x1="-17" y1="0" x2="17" y2="0" data-alpha-needle />
        <text y="48" text-anchor="middle">偏振 α</text>
      </g>
      <g class="mobile-analyzer" transform="translate(286 326)">
        <circle r="27" />
        <line x1="-17" y1="0" x2="17" y2="0" data-beta-needle />
        <text y="48" text-anchor="middle">偏振 β</text>
      </g>

      <g class="mobile-detector" transform="translate(74 410)">
        <rect x="-40" y="-24" width="80" height="48" rx="16" />
        <circle cx="-20" cy="0" r="7" />
        <text y="46" text-anchor="middle">APD A</text>
      </g>
      <g class="mobile-detector" transform="translate(286 410)">
        <rect x="-40" y="-24" width="80" height="48" rx="16" />
        <circle cx="-20" cy="0" r="7" />
        <text y="46" text-anchor="middle">APD B</text>
      </g>
      <path class="mobile-coincidence-link" d="M114 410 H246" />
      <g class="mobile-counter-node" transform="translate(180 410)">
        <rect x="-54" y="-18" width="108" height="36" rx="13" />
        <text text-anchor="middle" dominant-baseline="middle">符合计数</text>
      </g>
    </svg>
  `}function w(t,{navigate:n}){const s={...M.entangled};let i=0,l=0;const o=document.createElement("main");o.className="mobile-demo-page mobile-photon-demo",o.innerHTML=`
    <header class="mobile-demo-topbar">
      <button class="ghost-button" type="button" data-route-home>返回首页</button>
      <div>
        <p class="eyebrow">Mobile Native Demo</p>
        <h1>双光子纠缠 Demo</h1>
      </div>
      <button class="secondary-button compact-button" type="button" data-scroll-info>说明</button>
    </header>

    <section class="mobile-demo-intro">
      <p>移动端使用主项目内置的轻量模型，不依赖 iframe。调节偏振角、泵浦强度和噪声，观察符合计数与 S 值如何变化。</p>
    </section>

    <section class="mobile-demo-visual mobile-photon-visual">
      ${C()}
    </section>

    <section class="mobile-demo-presets" aria-label="一键预设">
      <button class="secondary-button" type="button" data-preset="classical">经典相关</button>
      <button class="secondary-button is-active" type="button" data-preset="entangled">量子纠缠</button>
      <button class="secondary-button" type="button" data-preset="max">最大违反</button>
    </section>

    <section class="mobile-demo-controls" aria-label="参数控制区">
      ${b({key:"alpha",label:"偏振角 α",min:0,max:180,step:.5,suffix:"0° - 180°"})}
      ${b({key:"beta",label:"偏振角 β",min:0,max:180,step:.5,suffix:"0° - 180°"})}
      ${b({key:"windowNs",label:"符合窗口",min:1,max:20,step:.5,suffix:"1 ns - 20 ns"})}
      ${b({key:"pump",label:"泵浦强度",min:0,max:100,step:1,suffix:"0% - 100%"})}
      ${b({key:"noise",label:"噪声水平",min:0,max:20,step:1,suffix:"0% - 20%"})}
    </section>

    <section class="mobile-photon-results" aria-label="结果显示区">
      <article class="mobile-result-card">
        <span>N_A 单路计数</span>
        <strong data-stat="countA">0</strong>
      </article>
      <article class="mobile-result-card">
        <span>N_B 单路计数</span>
        <strong data-stat="countB">0</strong>
      </article>
      <article class="mobile-result-card">
        <span>N_AB 符合计数</span>
        <strong data-stat="coincidence">0</strong>
      </article>
      <article class="mobile-result-card">
        <span>E(α, β)</span>
        <strong data-stat="correlation">0.00</strong>
      </article>
      <article class="mobile-result-card mobile-result-card--wide" data-bell-card>
        <span>S 值 · 经典上限 S ≤ 2</span>
        <strong data-stat="sValue">0.00</strong>
        <em data-stat="conclusion">调整参数查看结论</em>
      </article>
    </section>

    <section class="mobile-demo-info" data-info-card>
      <h2>教学近似模型</h2>
      <p>这里用 <code>cos(2θ)</code> 表示偏振相关性，用可见度、噪声和符合窗口估算计数。它用于手机现场讲解，不替代真实实验数据处理。</p>
    </section>
  `;const m=[...o.querySelectorAll("[data-input]")],p=[...o.querySelectorAll("[data-preset]")],r=e=>o.querySelector(`[data-stat="${e}"]`);function u(){m.forEach(e=>{const a=e.dataset.input;e.value=s[a];const f=a==="windowNs"?" ns":a==="pump"||a==="noise"?"%":"°";o.querySelector(`[data-value="${a}"]`).textContent=`${x(s[a],a==="pump"||a==="noise"?0:1)}${f}`}),o.querySelector("[data-alpha-needle]")?.setAttribute("transform",`rotate(${s.alpha})`),o.querySelector("[data-beta-needle]")?.setAttribute("transform",`rotate(${s.beta})`)}function d(){const e=k(s,l);r("countA").textContent=String(e.countA),r("countB").textContent=String(e.countB),r("coincidence").textContent=String(e.coincidence),r("correlation").textContent=x(e.correlation,3),r("sValue").textContent=x(e.sValue,2),r("conclusion").textContent=e.violatesBell?"贝尔不等式被违反":"未超过经典上限",o.querySelector("[data-bell-card]")?.classList.toggle("is-violating",e.violatesBell),o.style.setProperty("--mobile-s-strength",`${c(e.sValue/2.82,.25,1)}`)}function h(){l+=1,d(),i=window.requestAnimationFrame(h)}return o.querySelector("[data-route-home]")?.addEventListener("click",()=>n("/home")),o.querySelector("[data-scroll-info]")?.addEventListener("click",()=>{o.querySelector("[data-info-card]")?.scrollIntoView({behavior:"smooth",block:"center"})}),m.forEach(e=>{e.addEventListener("input",()=>{s[e.dataset.input]=Number(e.value),p.forEach(a=>a.classList.remove("is-active")),u(),d()})}),p.forEach(e=>{e.addEventListener("click",()=>{Object.assign(s,M[e.dataset.preset]),p.forEach(a=>a.classList.toggle("is-active",a===e)),u(),d()})}),u(),d(),t.append(o),i=window.requestAnimationFrame(h),{dispose(){window.cancelAnimationFrame(i),o.remove()}}}async function q(t,n){return B()||window.innerWidth<=768?w(t,n):$(t,n,{title:"双光子纠缠 Demo",description:"通过可调参数展示泵浦光、BBO 自发参量下转换、偏振分析和符合计数的教学近似模型。",demoHash:"#/",fallbackMount:w})}export{q as mount};
