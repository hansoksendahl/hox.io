'use server'

import { writeFile } from 'fs/promises'
import getArticleDates from '~/utils/get-article-dates'
import getAllMeta from './get-all-meta'
import getTagCounts from './get-tag-counts'

const generateMeta = async () => {
  const dates = await getArticleDates()
  const allMeta = await getAllMeta(dates)
  const articles = allMeta.map((meta, i) => ({
    title: meta.title,
    date: dates[i],
  }))
  const tagCounts = getTagCounts(allMeta.map(meta => meta.tags).flat())

  const meta = {
    articles,
    tagCounts,
  }

  await writeFile(
    `${process.cwd()}/src/meta/data.json`,
    JSON.stringify(meta, null, 2),
    'utf-8',
  )
}

export default generateMeta()
