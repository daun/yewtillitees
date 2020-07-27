export default function linear(
  [domainMin, domainMax],
  [rangeMin, rangeMax] = [0, 1]
) {
  const delta = (rangeMax - rangeMin) / (domainMax - domainMin)

  return Object.assign((num) => rangeMin + (num - domainMin) * delta, {
    inverse: () => linear([rangeMin, rangeMax], [domainMin, domainMax])
  })
}
