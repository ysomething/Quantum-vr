import { mountOriginalDemoPage } from './originalDemoPage.js';

export async function mount(app, context) {
  return mountOriginalDemoPage(app, context, {
    kind: 'three',
    title: '3D Demo',
    description: '源码级集成原版 Three.js 3D Demo，保留原版三维实验台、参数面板、计数和交互逻辑。',
  });
}
