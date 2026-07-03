import fs from 'node:fs/promises';
import path from 'node:path';
import { PNG } from 'pngjs';
import { CompilerBase } from './mindar-image-target/compiler-base.js';
import { buildTrackingImageList } from './mindar-image-target/image-list.js';
import { extractTrackingFeatures } from './mindar-image-target/tracker/extract-utils.js';
import './mindar-image-target/detector/kernels/cpu/index.js';

function getArgValue(name) {
  const index = process.argv.indexOf(name);
  if (index >= 0 && process.argv[index + 1]) return process.argv[index + 1];
  const inline = process.argv.find((item) => item.startsWith(`${name}=`));
  if (inline) return inline.slice(name.length + 1);
  return null;
}

class PngCompiler extends CompilerBase {
  createProcessCanvas(img) {
    return {
      width: img.width,
      height: img.height,
      getContext() {
        return {
          drawImage() {},
          getImageData() {
            return { data: img.rgba };
          },
        };
      },
    };
  }

  compileTrack({ progressCallback, targetImages, basePercent }) {
    return new Promise((resolve) => {
      const percentPerImage = (100 - basePercent) / targetImages.length;
      let percent = 0;
      const list = [];
      for (let i = 0; i < targetImages.length; i += 1) {
        const targetImage = targetImages[i];
        const imageList = buildTrackingImageList(targetImage);
        const percentPerAction = percentPerImage / imageList.length;
        const trackingData = extractTrackingFeatures(imageList, (index) => {
          percent += percentPerAction;
          progressCallback(basePercent + percent, index);
        });
        list.push(trackingData);
      }
      resolve(list);
    });
  }
}

const source = getArgValue('--source') || 'public/targets/target-source.png';
const output = getArgValue('--out') || 'public/targets/target.mind';
const sourcePath = path.resolve(process.cwd(), source);
const outputPath = path.resolve(process.cwd(), output);

const sourceBuffer = await fs.readFile(sourcePath);
const png = PNG.sync.read(sourceBuffer);
const compiler = new PngCompiler();

console.log(`Compiling MindAR target from ${source}`);
await compiler.compileImageTargets(
  [
    {
      width: png.width,
      height: png.height,
      rgba: png.data,
    },
  ],
  (progress) => {
    const rounded = Math.max(0, Math.min(100, Math.round(progress)));
    if (rounded % 10 === 0) console.log(`progress ${rounded}%`);
  },
);

const mindBuffer = compiler.exportData();
await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, Buffer.from(mindBuffer));

console.log(`MindAR target generated: ${output}`);
