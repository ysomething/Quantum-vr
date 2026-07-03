export function stopAnimationLoop(renderer) {
  renderer?.setAnimationLoop?.(null);
}

export function disposeRenderer(renderer) {
  if (!renderer) return;
  stopAnimationLoop(renderer);
  renderer.dispose?.();
  const canvas = renderer.domElement;
  if (canvas?.parentNode) canvas.parentNode.removeChild(canvas);
}

export function disposeObject3D(object) {
  if (!object) return;
  object.traverse?.((child) => {
    child.geometry?.dispose?.();
    const materials = Array.isArray(child.material) ? child.material : child.material ? [child.material] : [];
    for (const material of materials) {
      for (const value of Object.values(material)) {
        if (value && typeof value === 'object' && typeof value.dispose === 'function') {
          value.dispose();
        }
      }
      material.dispose?.();
    }
  });
}

export function disposeScene(scene) {
  if (!scene) return;
  disposeObject3D(scene);
  scene.clear?.();
}

export function stopCameraStream(root = document) {
  const videos = root.querySelectorAll?.('video') || [];
  for (const video of videos) {
    const stream = video.srcObject;
    if (stream?.getTracks) {
      for (const track of stream.getTracks()) track.stop();
    }
    video.srcObject = null;
  }
}

export function removeAllModeDom() {
  document.body.classList.remove('is-ar-running', 'is-low-brightness');
  document.body.removeAttribute('data-view-mode');
  document.querySelectorAll('.mode-page, .home-page, .toast-layer').forEach((node) => node.remove());
  stopCameraStream(document);
}

export function createDisposalBag() {
  const callbacks = new Set();

  return {
    add(callback) {
      if (typeof callback === 'function') callbacks.add(callback);
      return callback;
    },
    async dispose() {
      const ordered = Array.from(callbacks).reverse();
      callbacks.clear();
      for (const callback of ordered) {
        try {
          await callback();
        } catch (error) {
          console.warn('Dispose callback failed.', error);
        }
      }
    },
  };
}
