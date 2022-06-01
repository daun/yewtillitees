import jsdom from 'jsdom-global'

export const installWindowLoadEvent = () => {
  // Simulate window load event
  const loadEvent = document.createEvent('Event')
  loadEvent.initEvent('load', true, true)

  window.triggerLoadEvent = () => {
    window.dispatchEvent(loadEvent)
  }
}

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

export const createDocument = (html = undefined) => {
  const doc = jsdom(html)
  installIdleCallback()
  installWindowLoadEvent()
  return doc
}

export default createDocument
