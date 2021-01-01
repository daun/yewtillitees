export default function createTemplateInstance(template) {
  if (typeof template === 'string') {
    template = document.querySelector(template)
  }
  if (template && template instanceof Element) {
    return document.importNode(template.content, true)
  } else {
    return null
  }
}
