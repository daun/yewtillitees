export default function mapObject(obj, callback) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = callback(obj[key])
    return result
  }, {})
}
