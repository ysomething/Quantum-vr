# 量子纠缠交互实验室

这是一个统一的 Three.js / VR / 微信 WebAR 交互式展示系统，项目路径：

```txt
D:\code\finally\quantum-entanglement-interactive-showcase
```

3D 与 VR 模式以 `scene12-13-vr-real-vr` 版本为视觉母版，AR 模式使用 MindAR 图像识别实现微信扫码体验。

系统保留统一首页，通过 Hash 路由进入三个展示模式与两个 Demo 页面：

- `#/home`：统一首页
- `#/3d`：3D 展示模式
- `#/vr`：VR / 手机沉浸模式
- `#/ar`：MindAR 图像识别扫描模式
- `#/demo/photon`：双光子纠缠 Demo
- `#/demo/three`：3D Demo

二维码建议始终指向首页，而不是直接指向某一个模式页面。这样评委扫码后可以先看到模式选择，并在 AR 摄像头权限失败时快速切到 3D 展示模式。

## Demo 集成说明

原 demo 来源：

```txt
https://github.com/ysomething/quantum-entanglement-demo
```

当前项目已经把原版 2D Demo 和 3D Demo 做成源码级迁移，主要文件位于：

```txt
src/demo-original
```

迁移方式：

- `OriginalPhotonDemo`：保留原版双光子纠缠 2D 光路、参数控制、符合计数、S 值估计和实验说明区域。
- `Original3DDemo`：保留原版 Three.js 3D 实验台、OrbitControls、参数面板、实时计数和光子动画。
- `originalDemoPage`：在主项目 demo 路由里创建 Shadow DOM，把原版 Tailwind 编译 CSS 注入 shadow root，避免污染 `#/3d`、`#/vr`、`#/ar` 的按钮、面板、canvas 和全局样式。

此前 iframe 在部分手机浏览器或微信内嵌环境下可能白屏，因此现在默认不再依赖 iframe，而是直接渲染原版 demo 组件。`public/embedded-demo` 只保留兼容跳转页，旧静态构建不再发布，避免线上出现未接入统一模型的历史 Demo。

2D Demo 的 CHSH 计数逻辑由 Excel 实验数据离线拟合生成，而不是固定预设结果卡片：
- 原始数据包保存在 `data/量子纠缠网页计数_CHSH拟合数据包.xlsx`。
- 拟合脚本为 `scripts/fit-chsh-model.py`，读取原始计数、CHSH 计算、拟合参数、网页推荐数据和角度曲线等 sheet，拟合可解释的偏振相关、符合计数、探测器增益和单路计数参数。
- 脚本输出 `public/data/chsh_fit_model.json` 与 `public/data/chsh_fit_report.json`。页面优先加载 JSON，失败时使用 `src/demo-original/model/chshPredictor.js` 内置的同结构回退模型。
- `predictCounts()` 每次根据滑块输入实时计算 APD1/APD2、当前符合计数、E(θ₁,θ₂)、CHSH 四项 E、S、S 不确定度、可见度、偶然符合和四类符合计数。预设按钮只负责快速设置滑块参数，不直接写死 S 或计数输出。
- “高可见度教学态”等按钮是教学比较用的参数组，不代表页面默认实测结果。

新增主项目路由：

```txt
#/demo/photon
#/demo/three
```

首页新增入口：

- 双光子纠缠 Demo
- 3D Demo

更新原版 demo 源码参考的方法：

```bash
git clone https://github.com/ysomething/quantum-entanglement-demo.git D:\code\finally\_external\quantum-entanglement-demo
cd D:\code\finally\_external\quantum-entanglement-demo
git pull --ff-only
```

如需同步上游改动，应对照更新 `src/demo-original` 里的源码与 `original-demo.css`。主项目依赖保持克制：运行时只新增 `react`、`react-dom`，继续复用当前主项目已有的 `three`，避免升级 Three.js 影响现有 3D / VR / AR。

手机端适配说明：

- `#/demo/photon` 和 `#/demo/three` 在手机端仍然直接渲染原版组件，不使用 iframe。
- 原版样式、颜色、布局和控件尽量保留，只补充 `max-width: 768px` 下的宽度、按钮尺寸、安全区和 3D 视野适配。
- 2D Demo 的大光路图在小屏中按容器宽度整体缩放并居中显示，尽量让主光路结构在竖屏中完整可见，整体页面不横向溢出。
- 3D Demo 竖屏可操作，并提示“建议横屏体验 3D Demo，可获得更大视野。”

复制或调整原版 demo 后，重新构建和部署主项目：

```bash
npm run build
npm run deploy
```

命名注意：第二个 demo 是 3D Demo，不是三光子页面。所有用户可见文案中都不要出现“三光子”，统一写作“3D Demo”。

## 数据模型统一说明

- 原始实验数据保留在 `data/量子纠缠网页计数_CHSH拟合数据包.xlsx`。
- 拟合脚本输出 `public/data/chsh_fit_model.json` 与 `public/data/chsh_fit_report.json`，页面运行时优先通过 `import.meta.env.BASE_URL` 加载 JSON，加载失败时使用同结构内置回退模型。
- 统一预测模块为 `src/demo-original/model/chshPredictor.js`，对外提供 `loadFitModel()`、`predictCounts()`、`predictCHSH()`、`calculateE()` 与 `calculateS()`。
- `#/demo/photon` 和 `#/demo/three` 共用这套 CHSH 拟合预测模型。APD1/APD2、符合计数、偶然符合、E、CHSH S、S 不确定度和可见度均随滑块输入实时计算，预设按钮只设置输入参数，不直接写死输出结果。
- 该模型用于教学演示，说明网页中的计数与 S 值来自实验数据拟合链路，而不是无来源的固定展示数值。

## 评委手机扫码体验说明

最终使用场景是物理实验创新赛评委用手机微信扫码观看，因此手机端已经做了优先适配：

1. 推荐使用微信扫码进入统一首页。
2. 手机端首页会优先显示“AR 扫描模式”，其次是“3D 展示模式”，最后是“VR 模式”。
3. 推荐优先进入 AR 扫描模式；页面会先显示说明页，只有点击“开始扫描”后才请求摄像头权限。
4. 如果摄像头权限失败、浏览器不支持 `getUserMedia`，或微信环境无法调用摄像头，请点击“3D 展示模式”观看。
5. 手机端 3D / VR 默认保留与电脑端接近的材质、Bloom、背景粒子、量子网格、光路尾迹和 `S > 2` 高潮效果。
6. 手机端不再提供画质切换，也不会根据 FPS 调整 3D / VR 视觉配置；仅保留温和的 DPR 上限，避免极端高分屏过热。
7. 正式二维码必须使用 HTTPS 地址。摄像头权限通常只在 HTTPS、localhost 或浏览器认可的安全上下文中可用。
8. 如果 AR 识别图是电脑屏幕或投影画面，可能因为反光、摩尔纹、亮度过高导致追踪抖动；正式展示建议打印识别图或使用高质量海报图。

## 技术栈

- Vite
- Three.js
- GLTFLoader + DRACOLoader
- OrbitControls
- UnrealBloomPass
- MindAR 图片识别 WebAR
- 原生 JavaScript Hash Router

## 本地运行

```bash
npm install
npm run dev -- --host 0.0.0.0
```

电脑端可打开：

```txt
http://localhost:5173/#/home
http://localhost:5173/#/3d
http://localhost:5173/#/vr
http://localhost:5173/#/ar
```

手机局域网测试时，让电脑和手机处于同一 Wi-Fi，并使用 Vite 终端输出的 `Network` 地址访问。例如：

```txt
http://192.168.x.x:5173/#/home
```

注意：局域网 HTTP 地址在部分手机浏览器或微信中可能无法调用摄像头。正式 AR 扫码请部署到 HTTPS。

## 构建

```bash
npm run build
```

构建产物输出到：

```txt
dist/
```

当前 `vite.config.js` 已做 GitHub Pages 适配：

- 生产构建默认 `base: '/Quantum-vr/'`
- 本地开发默认 `base: '/'`
- 如果部署到根域名，可临时覆盖：

PowerShell：

```powershell
$env:VITE_BASE='/'; npm.cmd run build
```

Bash：

```bash
VITE_BASE=/ npm run build
```

## 部署到 GitHub Pages

如果仓库地址是：

```txt
https://github.com/ysomething/Quantum-vr.git
```

GitHub Pages 地址通常是：

```txt
https://ysomething.github.io/Quantum-vr/
```

线上访问地址：

```txt
https://ysomething.github.io/Quantum-vr/
```

本地运行：

```bash
npm install
npm run dev -- --host 0.0.0.0
```

构建：

```bash
npm run build
```

部署：

```bash
npm run deploy
```

生成二维码：

```bash
npm run qr -- --url "https://ysomething.github.io/Quantum-vr/"
```

如果仓库名改变，需要同步修改 `vite.config.js` 里的 `base`。例如部署到 `https://ysomething.github.io/Quantum-vr/` 时，生产 base 应为 `/Quantum-vr/`；如果部署到用户主页仓库 `ysomething.github.io`，base 应为 `/`。

GitHub Pages 必须使用 HTTPS，AR 摄像头模式才更稳定。正式展示二维码应指向：

```txt
https://ysomething.github.io/Quantum-vr/
```

不要直接指向 `#/ar`，因为首页可以提供 AR / 3D / VR 的 fallback 选择。

## 生成统一入口二维码

```bash
npm run qr -- --url "https://ysomething.github.io/Quantum-vr/"
```

输出文件：

```txt
public/qr/showcase_qr.png
```

如果部署地址不同，请把 `--url` 替换成实际 HTTPS 首页地址。

## 三个模式说明

### 3D 展示模式

3D 模式复用 `scene12-13-vr-real-vr` 的克制辉光视觉作为母版，保留：

- 深蓝黑量子空间背景
- 清晰实验台、BBO、APD、符合计数器和光路
- Bloom 辉光、背景粒子、量子网格
- 中文热点标签
- 左侧实验路径 UI
- 自动导览、扫码体验、体感、自由查看、最佳视角、播放 `S > 2`
- `S = 2.52` 高潮提示，但避免大面积过曝白屏

手机端进入 3D 会使用接近电脑端的高质量视觉配置：Bloom、粒子、网格、BBO 脉冲和光子尾迹都会保留。默认支持手指拖动旋转、双指缩放；点击“开启体感”后，如果设备允许 DeviceOrientation，可以通过转动手机辅助观察。体感权限失败时会自动回到手指拖动，不会白屏。手机 UI 默认只保留小标题、返回、菜单按钮和短提示，实验路径与操作按钮收纳在右上角菜单中。

### VR 沉浸模式

VR 模式同样以 `scene12-13-vr-real-vr` 为视觉母版，并与 3D 模式保持一致的低曝光、高级量子实验室风格。

VR 页面支持：

- 第一人称沉浸观察
- 普通沉浸模式
- 手机体感模式
- 自动导览
- 自由查看

手机扫码场景下，VR 模式不再提供左右眼分屏或头显式观看入口。页面以单屏沉浸、手指拖动和手机体感为主，若体感授权失败，会自动回到手指拖动观看。手机端 UI 会收纳为返回按钮、右上角菜单和短提示，避免遮挡实验装置。

### AR 扫描模式

AR 模式保留 MindAR 扫描逻辑，并且不与 3D / VR 的 Bloom 参数混用。

AR 页面保留：

- 微信扫码打开
- 点击“开始扫描”后再请求摄像头
- MindAR 图片识别
- AR 专用动态模型：`public/models/scene12_13_ar.glb`
- `public/targets/target.mind`
- 触发图源文件：`public/targets/target-source.png`
- 真实摄像头背景叠加，不使用黑底场景
- 较小尺寸的平视 / 45° 斜视动态实验台，加载后自动播放 GLB 动画
- GLB 加载与 Draco 解码
- 识别成功提示
- 重新扫描按钮
- 帮助按钮
- 低亮度模式
- 校准面板
- 辅助对齐框、中心十字、坐标轴、底座平面
- 返回首页时关闭摄像头和 AR 会话

手机端如果没有保存过低亮度偏好，AR 默认启用更克制的低曝光表现，减少识别成功后摄像头画面被光效盖住的风险。这里的低曝光只用于 AR 摄像头叠加画面，不代表 3D / VR 降画质。

## AR 校准参数写回源码

校准面板会把参数保存到浏览器 `localStorage`，只影响当前设备。正式固化参数时：

1. 进入 `#/ar`。
2. 点击“开始扫描”并识别图片。
3. 点击“校准”。
4. 调整 `scale`、`position`、`rotation`、Bloom、曝光和光环透明度。
5. 点击“保存参数”。
6. 点击“复制配置”。
7. 将复制出的 `AR_CONFIG` 中的 `model` 和 `visual` 数值同步回：

```txt
src/pages/ar/arConfig.js
```

## 替换识别图时必须注意

如果识别图换了，必须重新编译 `target.mind`，否则 MindAR 仍然会识别旧图：

```bash
npm run compile-target
```

建议：

- 正式展示使用打印图或高质量海报。
- 不要只用二维码、大面积纯色或低纹理图片做识别图。
- 如果用电脑屏幕显示识别图，反光、摩尔纹和过高亮度可能导致追踪抖动。
- 扫描时手机尽量正对识别图，不要角度过斜。

## 已知注意事项

- iOS / 微信中的 DeviceOrientation 需要用户点击按钮后授权。
- WebXR 真 VR 取决于浏览器、HTTPS 和设备支持；不支持时请使用普通沉浸、体感或 3D 展示模式。
- WebAR 摄像头权限在部分微信环境中可能受系统策略影响，可尝试右上角菜单选择“在浏览器打开”。
- 3D / VR 手机端保持高质量视觉配置；AR 模式单独使用低曝光配置，避免摄像头画面被光效盖住。

## 修改后自动部署规则

从现在开始，本项目每次完成任何源码、样式、资源或配置修改后，都必须同步完成线上部署流程，不允许只修改本地版本后停下。

固定流程：

1. 仅在依赖变化或 `node_modules` 不完整时执行 `npm install`。
2. 重新生成线上二维码，二维码必须指向 HTTPS 统一首页：

   ```bash
   npm run qr -- --url "https://ysomething.github.io/Quantum-vr/"
   ```

3. 执行 `npm run build`，构建失败必须先修复，不能部署失败版本。
4. 提交源码到 `main`：

   ```bash
   git add .
   git commit -m "Update interactive showcase"
   git push origin main
   ```

   如果确实没有源码改动可提交，可以跳过 commit，但需要在交付说明里明确说明。

5. 部署 `dist` 到 GitHub Pages：

   ```bash
   npm run deploy
   ```

6. 部署后检查：

   ```txt
   https://ysomething.github.io/Quantum-vr/
   https://ysomething.github.io/Quantum-vr/#/3d
   https://ysomething.github.io/Quantum-vr/#/vr
   https://ysomething.github.io/Quantum-vr/#/ar
   ```

7. 如发现 `models`、`targets`、`draco`、`qr` 等 public 资源 404，必须修复 `import.meta.env.BASE_URL` 相关路径后重新构建并重新部署。

注意：

- 二维码必须指向线上 HTTPS 首页，不要指向 `localhost`，也不要直接指向 `#/ar`。
- GitHub Pages 仓库名改变时，需要同步修改 `vite.config.js` 中的生产 `base`。
- AR 摄像头体验以 HTTPS 线上地址为准，手机微信局域网 HTTP 测试可能无法调起摄像头。
