import { mountDemoEmbedPage } from './demoEmbedPage.js';

export async function mount(app, context) {
  return mountDemoEmbedPage(app, context, {
    title: '3D Demo',
    description: '打开 demo 的 3D 交互页面，补充展示实验路径与三维演示内容。',
    demoHash: '#/three',
  });
}
