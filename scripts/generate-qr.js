import fs from 'node:fs/promises';
import path from 'node:path';
import QRCode from 'qrcode';

function readUrlArg() {
  const index = process.argv.indexOf('--url');
  if (index >= 0 && process.argv[index + 1]) return process.argv[index + 1];
  return process.env.SHOWCASE_URL || 'https://你的部署地址/';
}

const url = readUrlArg();
const outputDir = path.resolve('public/qr');
const outputFile = path.join(outputDir, 'showcase_qr.png');

await fs.mkdir(outputDir, { recursive: true });
await QRCode.toFile(outputFile, url, {
  errorCorrectionLevel: 'H',
  margin: 2,
  width: 960,
  color: {
    dark: '#071427',
    light: '#ffffff',
  },
});

console.log(`QR generated: ${outputFile}`);
console.log(`URL: ${url}`);
