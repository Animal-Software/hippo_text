const appWindow = window.__TAURI__.window.appWindow;

document
  .querySelector('#titlebar-minimize')
  .addEventListener('click', () => appWindow.minimize())
document
  .querySelector('#titlebar-maximize')
  .addEventListener('click', () => appWindow.toggleMaximize())
document
  .querySelector('#titlebar-close')
  .addEventListener('click', () => appWindow.close())