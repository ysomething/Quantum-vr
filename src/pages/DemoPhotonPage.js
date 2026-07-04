import { mountOriginalDemoPage } from './originalDemoPage.js';

export async function mount(app, context) {
  return mountOriginalDemoPage(app, context, {
    kind: 'photon',
    title: '双光子纠缠 Demo',
    description: '源码级集成原版 2D Demo，保留原版光路动画、参数控制、符合计数和 S 值交互。',
  });
}
