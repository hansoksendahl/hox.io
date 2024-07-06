import { marked } from 'marked'
import markedKatex from 'marked-katex-extension'
import headingRenderer from './heading-renderer'

marked.use({ renderer: { heading: headingRenderer } })
marked.use(markedKatex())

export default marked
