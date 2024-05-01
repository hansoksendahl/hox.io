import { useParams } from '@solidjs/router'
import { JSX, Show, createEffect, createSignal } from 'solid-js'
import type { Article as ArticleType } from '~/@types/meta'
import Article from '~/components/article'
import Page from '~/components/page'
import meta from '~/meta/data.json'

export interface ArticleProps {
  children: JSX.Element
}

const ArticleRoute = (props: ArticleProps) => {
  const params = useParams()
  const [date, setDate] = createSignal(params.date)

  createEffect(() => {
    setDate(params.date)
  })

  const hasArticle = meta.articles.find((a: ArticleType) => a.date === date())

  return (
    <Page>
      <Show when={hasArticle}>
        <Article date={date()} />
      </Show>
      <Show when={!hasArticle}>
        <div>Article not found</div>
      </Show>
    </Page>
  )
}

export default ArticleRoute
