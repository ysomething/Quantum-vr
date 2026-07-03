# Scene 12-13 微信扫码 WebAR 量子纠缠实验室

这个项目是从已有 Three.js 量子纠缠 3D 展示页派生出来的独立 WebAR 版本。目标流程是：

微信扫描二维码打开 WebAR 页面 → 点击“开始扫描”授权摄像头 → 对准识别图/海报 → 页面识别图片 target → 在图像上方叠加 GLB 量子纠缠 3D 实验室。

它不是普通 OrbitControls 播放器，也不是 VR 眼镜模式；核心是 MindAR 图像识别 + Three.js GLB 叠加。

## 技术栈

- Vite
- Three.js
- MindAR Image Tracking（浏览器运行时 vendored 到 `src/vendor/mind-ar/`，避免 Windows/Node 24 安装时编译 `canvas`）
- GLB + Draco
- QRCode

## 目录结构

```text
scene12-13-wechat-webar
├─ package.json
├─ index.html
├─ src
│  ├─ main.js
│  ├─ arSetup.js
│  ├─ loadModel.js
│  ├─ effects.js
│  ├─ hotspots.js
│  ├─ arUi.js
│  ├─ performance.js
│  ├─ qr.js
│  └─ styles.css
├─ scripts
│  └─ generate-qr.js
├─ public
│  ├─ models
│  │  ├─ scene12_13_vr.glb
│  │  └─ scene12_13_vr_uncompressed.glb
│  ├─ targets
│  │  ├─ target-source.png
│  │  ├─ target.mind
│  │  └─ README_target.md
│  ├─ qr
│  │  └─ wechat_webar_qr.png
│  └─ draco
├─ src
│  └─ vendor
│     └─ mind-ar
└─ README.md
```

## 安装和运行

```bash
npm install
npm run dev -- --host 0.0.0.0
```

启动后，电脑浏览器可以访问：

```text
http://localhost:5173/
```

手机微信测试时，需要手机和电脑在同一局域网，然后用电脑的局域网 IP 访问，例如：

```text
http://192.168.1.23:5173/
```

正式展示建议部署到 HTTPS 域名。微信内置浏览器、Safari、Chrome 在摄像头权限上都更偏向 HTTPS；局域网 HTTP 只适合开发测试，部分手机或微信版本可能会限制摄像头。

## 生成微信扫码二维码

默认二维码输出到：

```text
public/qr/wechat_webar_qr.png
```

生成命令：

```bash
npm run qr -- --url "https://你的部署地址/"
```

局域网调试示例：

```bash
npm run qr -- --url "http://192.168.1.23:5173/"
```

二维码不会硬编码固定 IP。每次换网络或部署地址后，重新运行上面的命令即可。

## 替换识别图 target

WebAR 不是扫描二维码后直接出现模型；二维码只负责打开网页。真正触发 AR 的是摄像头识别 `public/targets/target.mind` 对应的图片。

替换方法：

1. 替换 `public/targets/target-source.png`。
2. 优先尝试本地编译：

   ```bash
   npm run compile-target
   ```

3. 如果本地编译失败，再打开 MindAR Image Target Compiler。
4. 上传 `target-source.png`。
5. 编译并下载 `target.mind`。
6. 把下载后的文件放到 `public/targets/target.mind`。
7. 重新启动开发服务器或重新部署。

识别图建议使用高对比度、特征丰富的实验海报，例如 BBO 光路图、量子纠缠实验装置合成图、S > 2 结论图。不要只用纯文字、纯色背景或简单几何图形。

## 微信测试流程

1. 运行：

   ```bash
   npm run dev -- --host 0.0.0.0
   ```

2. 获取电脑局域网 IP，例如 `192.168.1.23`。
3. 生成二维码：

   ```bash
   npm run qr -- --url "http://192.168.1.23:5173/"
   ```

4. 用微信扫码打开页面。
5. 点击“开始扫描”，允许摄像头权限。
6. 将摄像头对准 `public/targets/target-source.png` 对应的打印图或屏幕图。
7. 识别成功后，3D 量子实验室会出现在图片上方；识别丢失时模型会隐藏，再次对准后重新出现。

## 已保留的视觉能力

- GLB 原有动画自动播放。
- Draco 压缩 GLB 加载，失败时回退到未压缩 GLB。
- 发光材质增强，优先保证微信端稳定。
- BBO 晶体呼吸脉冲。
- 左右两路纠缠光子尾迹。
- 识别图上方蓝紫色能量环。
- S > 2 / 贝尔不等式被违反的 AR 空间文字。
- 5 个中文热点：
  - 405nm 泵浦光源
  - BBO 晶体
  - 偏振片
  - APD
  - 符合计数器

## 可调参数

主要调参位置在 `src/config.js`：

```js
modelScale
modelPosition
modelRotation
bloomStrength
arYOffset
arZOffset
maxPixelRatio
```

如果模型在识别图上太大或太小，优先调整 `modelScale`。如果模型没有贴近图面，调整 `arYOffset` 和 `arZOffset`。

## 微信兼容性和已知问题

- 摄像头权限必须由用户点击按钮触发，所以页面不会打开后立刻请求摄像头。
- 正式展示建议使用 HTTPS；`file://` 和普通本地路径不能作为摄像头 WebAR 展示方式。
- 如果摄像头启动失败，页面会显示中文错误提示，不会白屏。
- 如果 `target.mind` 缺失或加载失败，页面会提示检查 `public/targets/target.mind`。
- 如果 GLB 加载失败，页面会提示检查 `models/scene12_13_vr.glb`。
- 竖屏和横屏都能使用，但推荐竖屏扫描。
- 移动端 pixelRatio 限制到 1.5 以内；帧率过低时会自动降低粒子和光晕强度。

## 后续优化建议

- 设计正式识别海报，并重新编译 `target.mind`。
- 在真机微信里微调 `modelScale` 和模型位置。
- 针对低端手机进一步降低粒子数量。
- 添加音效或旁白，但要保持微信自动播放限制下的用户点击触发。
