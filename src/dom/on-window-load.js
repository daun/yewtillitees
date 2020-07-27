export default function onWindowLoad(callback) {
  if (document.readyState === 'complete') {
    setTimeout(() => callback(), 0)
    return
  }
  window.addEventListener('load', () => callback())
}
