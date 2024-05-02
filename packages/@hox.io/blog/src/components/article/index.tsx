import { createAsync } from '@solidjs/router'
import { createEffect, onCleanup } from 'solid-js'
import marked from '~/lib/marked'
import client from '~/lib/trpc/client'
import getDateParts from '~/utils/get-date-parts'
import getDeclarationAndMarkup from './get-declaration-and-markup'
import { articleContainer } from './index.module.css'

export interface ArticleProps {
  date: string
}

const Article = (props: ArticleProps) => {
  let ref: HTMLDivElement | undefined

  const article = createAsync(async () => {
    const entry = await client.article.read.query({ date: props.date })
    const { year, month, day } = getDateParts(props.date)
    const prettyDate = `${month} ${day}, ${year}`
    const articleParts = getDeclarationAndMarkup(entry.content)
    const markup = await marked.parse(
      `# ${entry.title}\n\n<sub>${prettyDate}</sub>\n\n${articleParts.markup}`,
    )

    return {
      markup,
      declaration: articleParts.declaration,
    }
  })

  createEffect(async prev => {
    let editors = [] as any[]
    const monaco = await import('~/lib/monaco')

    console.log('article', article())

    if (article()?.declaration) {
      monaco.default.languages.typescript.typescriptDefaults.addExtraLib(
        article()?.declaration!,
        'file:///index.d.ts',
      )
    }

    ref?.querySelectorAll('pre code').forEach(async codeBlock => {
      const div = document.createElement('div')
      codeBlock.parentNode?.replaceChild(div, codeBlock)

      const language = codeBlock.className.replace(/language-/, '')

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
      return prev
    }, article())

    onCleanup(() => {
      editors.forEach((editor: { dispose: () => void }) => editor.dispose())
    })
  })

  return (
    <article class={articleContainer} ref={ref} innerHTML={article()?.markup} />
  )
}

export default Article
