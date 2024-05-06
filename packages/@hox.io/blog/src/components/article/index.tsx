import { createAsync } from '@solidjs/router'
import { createEffect, createSignal, onCleanup } from 'solid-js'
import marked from '~/lib/marked'
import client from '~/lib/trpc/client'
import getDateParts from '~/utils/get-date-parts'
import getDeclarationAndMarkup from './get-declaration-and-markup'
import { articleContainer } from './index.module.css'

export interface ArticleProps {
  date: string
}

const Article = (props: ArticleProps) => {
  const [articleContent, setArticleContent] = createSignal<string>()
  const [articleDeclaration, setArticleDeclaration] = createSignal<string>()
  let ref: HTMLDivElement | undefined

  const articleData = createAsync(
    async () => await client.article.read.query({ date: props.date }),
  )

  createEffect(async () => {
    if (articleData()) {
      const { declaration, markup } = getDeclarationAndMarkup(
        articleData()!.content,
      )

      const { year, month, day } = getDateParts(props.date)
      const prettyDate = `${month} ${day}, ${year}`
      const content = await marked(
        `# ${articleData()!.title}\n<sub>${prettyDate}</sub>\n${markup}`,
      )

      setArticleContent(content)
      setArticleDeclaration(declaration)
    }
  })

  createEffect(() => {
    if (articleContent() && articleDeclaration()) {
      let editors = [] as any[]

      ref?.querySelectorAll('pre code').forEach(async codeBlock => {
        const div = document.createElement('div')
        codeBlock.parentNode?.replaceChild(div, codeBlock)

        const language = codeBlock.className.replace(/language-/, '')
        const monaco = await import('~/lib/monaco')

        if (articleDeclaration()) {
          monaco.default.languages.typescript.typescriptDefaults.addExtraLib(
            articleDeclaration()!,
          )
        }

        const editor = monaco.default.editor.create(div as HTMLElement, {
          language,
          value: codeBlock.textContent?.replace(/\n+$/, '') || '',
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          overviewRulerLanes: 0,
          theme: 'cobalt2',
          renderLineHighlight: 'none',
          scrollbar: { alwaysConsumeMouseWheel: false },
          padding: { top: 30, bottom: 30 },
          fixedOverflowWidgets: true,
          readOnly: true,
        })
        const contentHeight = editor.getContentHeight()

        div.style.height = `${contentHeight}px`
        div.style.width = '100%'
        div.style.margin = '2rem 0'
        div.style.backgroundColor = 'black'
        div.style.borderRadius = '1vmin'
        div.style.overflow = 'hidden'
        editor.layout()

        editors.push(editor)
      })

      onCleanup(() => {
        editors.forEach((editor: { dispose: () => void }) => editor.dispose())
      })
    }
  })

  return (
    <article class={articleContainer} ref={ref} innerHTML={articleContent()} />
  )
}

export default Article
