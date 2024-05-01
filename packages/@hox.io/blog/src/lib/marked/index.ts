import { marked } from 'marked'
import headingRenderer from './heading-renderer'

marked.use({ renderer: { heading: headingRenderer } })

export default marked
