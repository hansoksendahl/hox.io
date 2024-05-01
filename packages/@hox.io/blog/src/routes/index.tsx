import Article from '~/components/article'
import Page from '~/components/page'
import meta from '~/meta/data.json'

const HomeRoute = () => {
  return (
    <Page>
      <Article date={meta.articles[0].date} />
    </Page>
  )
}

export default HomeRoute
