export default function camelCase(str) {
  return str.replace(/-./g, (x) => x.toUpperCase()[1])
}
