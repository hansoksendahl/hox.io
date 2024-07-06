import { createAsync } from '@solidjs/router'
import { createEffect, createMemo, createSignal, onCleanup } from 'solid-js'
import { Dynamic, render } from 'solid-js/web'
import * as widgets from '~/components/widgets'
import marked from '~/lib/marked'
import client from '~/lib/trpc/client'
import getDateParts from '~/utils/get-date-parts'
import getDeclarationAndMarkup from './get-declaration-and-markup'
import { articleContainer } from './index.module.css'

export interface ArticleProps {
  date: string
}

const Article = (props: ArticleProps) => {
  const dateParts = createMemo(() => getDateParts(props.date))
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

      const prettyDate = `${dateParts().month} ${dateParts().day}, ${dateParts().year}`
      const content = await marked(
        `# ${articleData()!.title}\n<sub>${prettyDate}</sub>\n${markup}`,
      )

      setArticleContent(content)
      setArticleDeclaration(declaration)
    }
  })

  createEffect(async () => {
    if (articleContent() || articleDeclaration()) {
      let components = [] as any[]
      let editors = [] as any[]

      // Import and render components
      if (articleData()?.components) {
        for (const name of articleData()!.components!) {
          ref?.querySelectorAll(`${name}`).forEach(node => {
            const attributes = Array.from(node.attributes).reduce(
              (acc, { name, value }) => ({ ...acc, [name]: JSON.parse(value) }),
              {},
            )
            const componentNode = document.createElement('div')

            node.parentNode?.replaceChild(componentNode, node)

            const dispose = render(
              () => (
                <Dynamic
                  component={widgets[name as keyof typeof widgets]}
                  {...attributes}
                />
              ),
              componentNode,
            )

            components.push(dispose)
          })
        }
      }

      // Render code blocks
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
        div.style.borderRadius = '15px'
        div.style.overflow = 'hidden'
        editor.layout()

        editors.push(editor)
      })

      onCleanup(() => {
        editors.forEach((editor: { dispose: () => void }) => editor.dispose())
        components.forEach((dispose: () => void) => dispose())
      })
    }
  })

  return (
    <article class={articleContainer} ref={ref} innerHTML={articleContent()} />
  )
}

export default Article
