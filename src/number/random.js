export default function random(a, b) {
  if (b === undefined) return Math.random() * a
  return a + Math.random() * (b - a)
}
