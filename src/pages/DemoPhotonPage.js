import { mountDemoEmbedPage } from './demoEmbedPage.js';

export async function mount(app, context) {
  return mountDemoEmbedPage(app, context, {
    title: '双光子纠缠 Demo',
    description: '通过可调参数展示泵浦光、BBO 自发参量下转换、偏振分析和符合计数的教学近似模型。',
    demoHash: '#/',
  });
}
