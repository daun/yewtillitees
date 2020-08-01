export default function onIdle(callback, { timeoutFallback = 1000 }) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback)
  } else {
    setTimeout(callback, timeoutFallback)
  }
}
