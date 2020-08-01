import jsdom from 'jsdom-global'

export const installIdleCallback = () => {
  window.requestIdleCallback =
    window.requestIdleCallback ||
    function (cb) {
      var start = Date.now()
      return setTimeout(function () {
        cb({
          didTimeout: false,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - start))
          }
        })
      }, 1)
    }

  window.cancelIdleCallback =
    window.cancelIdleCallback ||
    function (id) {
      clearTimeout(id)
    }
}

export const createDocument = () => {
  const doc = jsdom()
  installIdleCallback()
  return doc
}

export default createDocument
