import { STATUS_TEXT } from './config.js';

function byId(id) {
  return document.getElementById(id);
}

export function createArUi() {
  const elements = {
    body: document.body,
    startScreen: byId('start-screen'),
    arStage: byId('ar-stage'),
    startButton: byId('start-scan'),
    startHelpButton: byId('open-help-from-start'),
    helpButton: byId('open-help'),
    helpDialog: byId('help-dialog'),
    rescanButton: byId('rescan'),
    retryButton: byId('retry-after-error'),
    scanOverlay: byId('scan-overlay'),
    scanMessage: byId('scan-message'),
    loadingPanel: byId('loading-panel'),
    loadingText: byId('loading-text'),
    loadingBar: byId('loading-bar'),
    toast: byId('toast'),
    errorPanel: byId('error-panel'),
    errorMessage: byId('error-message'),
  };

  let toastTimer = null;

  function setState(state) {
    elements.body.dataset.arState = state;
    elements.scanMessage.textContent = STATUS_TEXT[state] || STATUS_TEXT.scanning;
  }

  function showToast(message, duration = 2200) {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => {
      elements.toast.classList.remove('is-visible');
    }, duration);
  }

  function setLoading(message, progress = null) {
    elements.loadingPanel.hidden = false;
    elements.loadingText.textContent = message;
    if (typeof progress === 'number') {
      elements.loadingBar.style.transform = `scaleX(${Math.max(0.04, Math.min(1, progress))})`;
    }
  }

  function hideLoading() {
    elements.loadingPanel.hidden = true;
    elements.loadingBar.style.transform = 'scaleX(0.04)';
  }

  function showError(message) {
    hideLoading();
    setState('error');
    elements.errorMessage.textContent = message;
    elements.errorPanel.hidden = false;
    elements.scanOverlay.classList.remove('is-hidden');
  }

  function hideError() {
    elements.errorPanel.hidden = true;
    elements.errorMessage.textContent = '';
  }

  function openHelp() {
    if (typeof elements.helpDialog.showModal === 'function') {
      elements.helpDialog.showModal();
    } else {
      elements.helpDialog.setAttribute('open', '');
    }
  }

  elements.helpButton.addEventListener('click', openHelp);
  elements.startHelpButton.addEventListener('click', openHelp);

  return {
    elements,
    setState,
    showStart() {
      setState('idle');
      elements.startScreen.hidden = false;
      elements.arStage.classList.remove('is-active');
      hideError();
      hideLoading();
    },
    showScanner() {
      elements.startScreen.hidden = true;
      elements.arStage.classList.add('is-active');
      elements.scanOverlay.classList.remove('is-hidden');
      hideError();
    },
    setLoading,
    hideLoading,
    showError,
    hideError,
    showToast,
    targetFound() {
      setState('found');
      elements.scanOverlay.classList.add('is-hidden');
      showToast(STATUS_TEXT.found, 2600);
    },
    targetLost() {
      setState('lost');
      elements.scanOverlay.classList.remove('is-hidden');
      showToast(STATUS_TEXT.lost, 1800);
    },
  };
}
