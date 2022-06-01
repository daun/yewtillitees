export default function createTemplateInstance(template) {
  // Find template element from selector
  if (typeof template === 'string') {
    template = document.querySelector(template)
  }
  // Create a clone of the template element
  if (template && template instanceof Element) {
    return document.importNode(template.content, true)
  } else {
    return null
  }
}
