import onWindowLoad from './on-window-load'
import onIdle from './on-idle'

export default function onIdleAfterLoad(callback, { delayAfterLoad = 0 }) {
  onWindowLoad(() => {
    if (delayAfterLoad > 0) {
      setTimeout(() => onIdle(callback), delayAfterLoad)
    } else {
      onIdle(callback)
    }
  })
}
