import { JSX } from 'solid-js'
import ArticlesNav from '~/components/articles-nav'
import meta from '~/meta/data.json'
import PageHeader from '../page-header'
import {
  container,
  content,
  leftNav,
  navContent,
  pageHeader,
  sectionLabel,
} from './index.module.css'

interface PageProps {
  children: JSX.Element
}

const Page = (props: PageProps) => {
  return (
    <>
      <div class={container}>
        <header class={pageHeader}>
          <PageHeader />
        </header>
        <div class={navContent}>
          <main class={content}>{props.children}</main>
        </div>
        <footer></footer>
      </div>
      <aside class={leftNav}>
        <strong class={sectionLabel}>Articles</strong>
        <ArticlesNav articles={meta.articles} />
      </aside>
    </>
  )
}

export default Page
