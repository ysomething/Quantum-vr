import * as THREE from 'three';

export function applyOutputColorSpace(renderer) {
  if ('outputColorSpace' in renderer && THREE.SRGBColorSpace) {
    renderer.outputColorSpace = THREE.SRGBColorSpace;
  } else if ('outputEncoding' in renderer && THREE.sRGBEncoding) {
    renderer.outputEncoding = THREE.sRGBEncoding;
  }
}

export function applyTextureColorSpace(texture) {
  if (!texture) return texture;
  if ('colorSpace' in texture && THREE.SRGBColorSpace) {
    texture.colorSpace = THREE.SRGBColorSpace;
  } else if ('encoding' in texture && THREE.sRGBEncoding) {
    texture.encoding = THREE.sRGBEncoding;
  }
  texture.needsUpdate = true;
  return texture;
}

export function setSafePixelRatio(renderer, max = 1.5) {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, max));
}
