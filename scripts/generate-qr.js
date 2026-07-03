import fs from 'node:fs/promises';
import path from 'node:path';
import QRCode from 'qrcode';

function getArgValue(name) {
  const index = process.argv.indexOf(name);
  if (index >= 0 && process.argv[index + 1]) return process.argv[index + 1];
  const inline = process.argv.find((item) => item.startsWith(`${name}=`));
  if (inline) return inline.slice(name.length + 1);
  return null;
}

const url = getArgValue('--url') || 'http://局域网IP:5173/';
const output = getArgValue('--out') || 'public/qr/wechat_webar_qr.png';
const outputPath = path.resolve(process.cwd(), output);

await fs.mkdir(path.dirname(outputPath), { recursive: true });

await QRCode.toFile(outputPath, url, {
  type: 'png',
  width: 1024,
  margin: 2,
  errorCorrectionLevel: 'H',
  color: {
    dark: '#07101fff',
    light: '#f4fcffff',
  },
});

console.log(`QR generated: ${output}`);
console.log(`URL: ${url}`);
