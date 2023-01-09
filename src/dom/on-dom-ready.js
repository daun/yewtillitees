export default function onDomReady(callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    document.addEventListener('DOMContentLoaded', () => callback())
  }
}
