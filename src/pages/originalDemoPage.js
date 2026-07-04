import originalDemoCss from "../demo-original/original-demo.css?raw";

const shadowFixes = `
  :host {
    display: block;
    min-width: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color-scheme: light dark;
  }

  .original-demo-shadow-root,
  .original-demo-route {
    min-width: 0;
    min-height: 100%;
    height: auto;
    overflow: visible;
    touch-action: pan-y;
  }

  .original-photon-demo,
  .original-three-demo {
    height: auto;
    min-height: 100%;
    overflow: visible;
    touch-action: pan-y;
  }

  .original-open-three {
    bottom: calc(1.25rem + env(safe-area-inset-bottom, 0px));
    right: calc(1.25rem + env(safe-area-inset-right, 0px));
  }

  .original-three-demo canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
    touch-action: none;
  }

  .original-photon-demo button,
  .original-three-demo button {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .original-photon-demo {
      height: auto;
      min-height: auto;
      overflow: visible;
      touch-action: pan-y;
      padding: 1rem 0.75rem calc(1.25rem + env(safe-area-inset-bottom, 0px));
    }

    .original-photon-inner {
      max-width: 100%;
    }

    .original-photon-visual {
      display: flex;
      align-items: center;
      justify-content: center;
      width: calc(100% + 2rem);
      margin-inline: -1rem;
      overflow: hidden;
      border-radius: 1rem;
    }

    .original-photon-svg {
      width: 100%;
      height: auto;
      min-height: 0;
      aspect-ratio: 1050 / 520;
    }

    .original-photon-demo button,
    .original-photon-demo input,
    .original-three-demo button,
    .original-three-demo input {
      min-height: 42px;
      font-size: 15px;
    }

    .original-open-three {
      right: calc(0.75rem + env(safe-area-inset-right, 0px));
      bottom: calc(0.9rem + env(safe-area-inset-bottom, 0px));
      padding: 0.75rem 0.95rem;
      border-radius: 0.75rem;
    }

    .original-three-demo::before {
      display: block;
      padding: 0.75rem 1rem 0;
      color: rgb(165 243 252);
      font-size: 0.88rem;
      line-height: 1.5;
      content: "建议横屏体验 3D Demo，可获得更大视野。";
    }

    .original-three-layout {
      height: auto;
      min-height: auto;
      overflow: visible;
      align-items: start;
      padding: 0.75rem;
      touch-action: pan-y;
    }

    .original-three-stage-card {
      height: min(68vh, 560px);
      min-height: 390px;
    }

    .original-three-canvas {
      min-height: 315px;
    }

    .original-three-controls {
      overflow: visible;
      padding-bottom: calc(1rem + env(safe-area-inset-bottom, 0px));
      touch-action: pan-y;
    }
  }

  @media (max-width: 480px) {
    .original-photon-svg {
      width: 100%;
      min-height: 0;
    }

    .original-three-stage-card {
      height: min(62vh, 520px);
      min-height: 360px;
    }

    .original-three-canvas {
      min-height: 285px;
    }
  }

  @media (max-width: 768px) and (orientation: landscape) {
    .original-three-stage-card {
      height: 78vh;
      min-height: 320px;
    }

    .original-three-canvas {
      min-height: 248px;
    }
  }
`;

export async function mountOriginalDemoPage(app, { navigate }, { title, description, kind }) {
  const page = document.createElement("main");
  page.className = "original-demo-page";
  let disposed = false;
  let reactRoot = null;

  document.documentElement.classList.add("demo-page-active");
  document.body.classList.add("demo-page-active");

  page.innerHTML = `
    <header class="original-demo-header">
      <button class="ghost-button" type="button" data-route-home>返回首页</button>
      <div class="original-demo-heading">
        <p class="eyebrow">Interactive Demo</p>
        <h1>${title}</h1>
        <p>${description}</p>
      </div>
    </header>
    <section class="original-demo-host-shell" aria-label="${title} 交互演示">
      <div class="original-demo-loading" data-original-demo-loading>
        <p class="eyebrow">Loading</p>
        <strong>正在加载交互演示...</strong>
        <span>实验光路与计数模型即将显示。</span>
      </div>
      <div class="original-demo-shadow-host" data-original-demo-host></div>
    </section>
  `;

  page.querySelector("[data-route-home]")?.addEventListener("click", () => navigate("/home"));
  app.append(page);

  const host = page.querySelector("[data-original-demo-host]");
  const loading = page.querySelector("[data-original-demo-loading]");
  const shadowRoot = host.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = `${originalDemoCss}\n${shadowFixes}`;
  const reactMount = document.createElement("div");
  reactMount.className = "original-demo-shadow-root";
  shadowRoot.append(style, reactMount);

  try {
    const [{ default: React }, { createRoot }, { default: OriginalDemoApp }] = await Promise.all([
      import("react"),
      import("react-dom/client"),
      import("../demo-original/OriginalDemoApp.jsx"),
    ]);

    if (disposed) return { dispose() {} };
    reactRoot = createRoot(reactMount);
    reactRoot.render(React.createElement(OriginalDemoApp, { kind, navigate }));
    loading?.remove();
  } catch (error) {
    console.error("Original demo failed to load.", error);
    if (loading) {
      loading.querySelector("strong").textContent = "交互演示加载失败";
      loading.querySelector("span").textContent = "请刷新页面，或稍后重新进入该 Demo。";
      loading.classList.add("is-error");
    }
  }

  return {
    dispose() {
      disposed = true;
      reactRoot?.unmount();
      document.documentElement.classList.remove("demo-page-active");
      document.body.classList.remove("demo-page-active");
      page.remove();
    },
  };
}
