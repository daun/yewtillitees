export default function normalize(min, max) {
  const delta = max - min
  return function normalized(val) {
    if (!delta) return 0
    return (val - min) / delta
  }
}
