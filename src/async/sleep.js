export default function sleep(ms) {
  return new Promise((fulfil) => {
    setTimeout(fulfil, ms)
  })
}
