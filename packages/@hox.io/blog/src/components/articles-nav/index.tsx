import { Article } from '~/@types/meta'
import List from '~/components/list'
import getDateParts from '~/utils/get-date-parts'
import Details from '../details'
import Link from '../link'
import {
  articleTitle,
  articlesNav,
  dateContainer,
  dateList,
  dateRow,
} from './index.module.css'

interface ArticlesNavProps {
  articles: Article[]
}

const ArticlesNav = (props: ArticlesNavProps) => {
  const articles = props.articles.reduce(
    (memo, article) => {
      const { year, month, day } = getDateParts(article.date)

      if (!memo.has(year)) {
        memo.set(year, new Map())
      }

      if (!memo.get(year)?.has(month)) {
        memo.get(year)?.set(month, new Map())
      }

      memo.get(year)?.get(month)?.set(day, article)

      return memo
    },
    new Map() as Map<number, Map<string, Map<string, Article>>>,
  )

  return (
    <nav class={articlesNav}>
      <List
        items={Array.from(articles).map((year, yearIndex) => (
          <Details
            isOpen={yearIndex === 0}
            summary={year[0]}
            children={
              <List
                items={Array.from(year[1]).map((month, monthIndex) => (
                  <Details
                    isOpen={yearIndex === 0 && monthIndex === 0}
                    summary={month[0]}
                    class={dateList}
                    children={
                      <List
                        items={Array.from(month[1]).map(day => (
                          <p class={dateRow}>
                            <span class={dateContainer}>{day[0]}: </span>
                            <Link
                              class={articleTitle}
                              href={`/articles/${day[1].date}`}
                            >
                              {day[1].title}
                            </Link>
                          </p>
                        ))}
                      />
                    }
                  />
                ))}
              />
            }
          />
        ))}
      />
    </nav>
  )
}

export default ArticlesNav
