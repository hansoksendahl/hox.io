import { Renderer } from 'marked'

const headerRenderer: Renderer['heading'] = (text, level) => {
  const id = text.toLowerCase().replace(/[^\w]+/g, '-')
  return `<h${level} id="${id}"><a href="#${id}">${text}</a></h${level}>`
}

export default headerRenderer
