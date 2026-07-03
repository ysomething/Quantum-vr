import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { MODEL_ASSETS } from './modelConfig.js';

export function createGLTFLoader() {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(MODEL_ASSETS.dracoUrl);
  dracoLoader.setDecoderConfig({ type: 'wasm' });
  dracoLoader.preload();

  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  return { loader, dracoLoader };
}
