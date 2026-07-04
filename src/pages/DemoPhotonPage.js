import { isMobile } from '../utils/device.js';
import { mountDemoEmbedPage } from './demoEmbedPage.js';
import { mountMobilePhotonDemoPage } from './MobilePhotonDemoPage.js';

export async function mount(app, context) {
  if (isMobile() || window.innerWidth <= 768) {
    return mountMobilePhotonDemoPage(app, context);
  }

  return mountDemoEmbedPage(app, context, {
    title: '双光子纠缠 Demo',
    description: '通过可调参数展示泵浦光、BBO 自发参量下转换、偏振分析和符合计数的教学近似模型。',
    demoHash: '#/',
    fallbackMount: mountMobilePhotonDemoPage,
  });
}
