import { mountOriginalDemoPage } from './originalDemoPage.js';

export async function mount(app, context) {
  return mountOriginalDemoPage(app, context, {
    kind: 'three',
    title: '3D Demo',
    description: '本页面以 Three.js 三维交互方式展示实验光路结构和关键器件位置，辅助理解双光子纠缠实验的空间布局。',
  });
}
