export default function random(min, max) {
  if (max === undefined) {
    max = min
    min = 0
  }
  return min + Math.random() * (max - min)
}
