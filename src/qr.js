export const QR_OUTPUT = 'public/qr/wechat_webar_qr.png';

export function getQrCommand(url = 'https://你的部署地址/') {
  return `npm run qr -- --url "${url}"`;
}
