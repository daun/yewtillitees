export default function linear(
  [domainMin, domainMax],
  [rangeMin, rangeMax] = [0, 1]
) {
  const delta = (rangeMax - rangeMin) / (domainMax - domainMin)
  const linearFn = (num) => rangeMin + (num - domainMin) * delta
  const inverseFn = () => linear([rangeMin, rangeMax], [domainMin, domainMax])

  return Object.assign(linearFn, { inverse: inverseFn })
}
