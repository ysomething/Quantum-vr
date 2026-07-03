export function createLabUI(elements) {
  let toastTimer = null;
  let entryTimer = null;

  function showToast(message, duration = 2400) {
    window.clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => elements.toast.classList.remove('is-visible'), duration);
  }

  function playEntranceTransition(title, detail = '校准沉浸视角') {
    window.clearTimeout(entryTimer);
    elements.entryTitle.textContent = title;
    elements.entryDetail.textContent = detail;
    elements.entryTransition.classList.add('is-active');
    elements.entryTransition.setAttribute('aria-hidden', 'false');
    entryTimer = window.setTimeout(() => {
      elements.entryTransition.classList.remove('is-active');
      elements.entryTransition.setAttribute('aria-hidden', 'true');
    }, 1250);
  }

  function setSpatialPanel({ kicker = '沉浸提示', title, body }) {
    elements.spatialKicker.textContent = kicker;
    elements.spatialTitle.textContent = title;
    elements.spatialBody.textContent = body;
    elements.spatialPanel.setAttribute('aria-hidden', 'false');
    elements.spatialPanel.classList.add('is-visible');
  }

  function hideSpatialPanel() {
    elements.spatialPanel.classList.remove('is-visible');
    elements.spatialPanel.setAttribute('aria-hidden', 'true');
  }

  function setMode(mode) {
    const immersive = mode === 'scan' || mode === 'motion';
    elements.interface.classList.toggle('is-immersive', immersive);
    if (elements.returnTour) elements.returnTour.hidden = !immersive;
    elements.orientationHint?.classList.toggle('is-visible', mode === 'motion');
    elements.crosshair?.classList.toggle('is-visible', immersive);
    if (!immersive) hideSpatialPanel();
  }

  function dispose() {
    window.clearTimeout(toastTimer);
    window.clearTimeout(entryTimer);
  }

  return {
    showToast,
    playEntranceTransition,
    setSpatialPanel,
    hideSpatialPanel,
    setMode,
    dispose,
  };
}
