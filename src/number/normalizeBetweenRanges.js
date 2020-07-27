export default function normalizeBetweenRanges(
  [min, max],
  [newMin, newMax] = [0, 1]
) {
  const delta = max - min
  const newDelta = newMax - newMin

  return function normalized(val) {
    if (!delta) return 0
    return newMin + ((val - min) * newDelta) / delta
  }
}
