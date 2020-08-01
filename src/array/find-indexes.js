export default function findIndexes(array, func) {
  return array.reduce((acc, v, i) => (func(v) && acc.push(i), acc), [])
}
