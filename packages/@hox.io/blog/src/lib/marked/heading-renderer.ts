import { Renderer } from 'marked'
import marked from '~/lib/marked'

const headerRenderer: Renderer['heading'] = ({ tokens, depth }) => {
  const text = tokens.map(token => token.raw).join('')

  const id = text.toLowerCase().replace(/[^\w]+/g, '-')
  return `<h${depth} id="${id}"><a href="#${id}">${text}</a></h${depth}>`
}

export default headerRenderer
