# MindAR 识别图 target 准备说明

本目录用于放置 WebAR Image Tracking 的识别图和编译结果。

## 当前文件

- `target-source.png`：临时测试识别图。后续可以替换成正式海报图。
- `target.mind`：MindAR 编译后的识别文件。网页运行时会加载它。

## 识别图要求

1. 识别图应该使用高对比度、特征丰富的图片。
2. 不要用纯文字、纯色背景、简单几何图形。
3. 推荐使用量子纠缠实验海报、BBO 光路图、S > 2 结论图、实验装置合成图。
4. 图片尺寸建议不低于 800px 宽；打印时尽量保证清晰、无强反光。
5. 光线太暗、图片太小、画面反光或特征过少，都会降低识别成功率。

## 替换正式识别图

1. 用正式海报替换 `public/targets/target-source.png`。
2. 优先尝试本地编译：

   ```bash
   npm run compile-target
   ```

3. 如果本地编译失败，再打开 MindAR Image Target Compiler。
4. 上传 `target-source.png`。
5. 编译并下载 `target.mind`。
6. 将下载后的文件放到 `public/targets/target.mind`。
7. 重新运行 `npm run dev -- --host 0.0.0.0` 或重新部署。

## 临时占位图说明

如果没有正式海报，本项目提供的 `target-source.png` 仅用于调试，内容包含：

- 量子纠缠实验室
- 405nm 激光
- BBO 晶体
- 纠缠光子
- S > 2
- 贝尔不等式被违反

正式展示时建议使用视觉更稳定、细节更丰富的海报图，再重新编译 `target.mind`。
