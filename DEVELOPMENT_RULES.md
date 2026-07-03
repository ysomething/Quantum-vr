# Quantum-vr 修改后自动部署规则

本项目的最终线上目录是：

```txt
D:\code\finally\quantum-entanglement-interactive-showcase
```

线上地址是：

```txt
https://ysomething.github.io/Quantum-vr/
```

从现在开始，每次完成任何源码、样式、资源或配置修改后，都必须完成以下流程，不允许只改本地不部署。

## 固定流程

1. 仅在依赖变化或 `node_modules` 不完整时执行：

   ```bash
   npm install
   ```

2. 重新生成线上二维码，二维码必须指向 HTTPS 统一首页：

   ```bash
   npm run qr -- --url "https://ysomething.github.io/Quantum-vr/"
   ```

3. 构建：

   ```bash
   npm run build
   ```

   如果 build 失败，必须先修复，不能部署失败版本。

4. 提交源码到 `main`：

   ```bash
   git add .
   git commit -m "Update interactive showcase"
   git push origin main
   ```

   如果没有源码改动可提交，可以跳过 commit，但交付说明必须写清楚。

5. 部署 GitHub Pages：

   ```bash
   npm run deploy
   ```

6. 部署后至少检查以下地址：

   ```txt
   https://ysomething.github.io/Quantum-vr/
   https://ysomething.github.io/Quantum-vr/#/3d
   https://ysomething.github.io/Quantum-vr/#/vr
   https://ysomething.github.io/Quantum-vr/#/ar
   ```

## 资源路径规则

所有运行时 public 资源必须使用 `import.meta.env.BASE_URL` 拼接，不要写死为根路径：

```js
const BASE = import.meta.env.BASE_URL;
const modelUrl = `${BASE}models/scene12_13_vr.glb`;
const arModelUrl = `${BASE}models/scene12_13_ar.glb`;
const targetUrl = `${BASE}targets/target.mind`;
const targetImageUrl = `${BASE}targets/target-source.png`;
const dracoPath = `${BASE}draco/`;
```

禁止写死：

```txt
/models/xxx
/targets/xxx
/draco/xxx
```

如果 GitHub Pages 上出现 `models`、`targets`、`draco`、`qr` 等资源 404，必须修复 base 路径后重新构建并重新部署。

## 二维码规则

- 二维码必须指向 `https://ysomething.github.io/Quantum-vr/`。
- 不要指向 `localhost`。
- 不要直接指向 `#/ar`；统一首页需要保留 3D / VR / AR fallback 入口。

