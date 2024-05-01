'use server'

import { readFile } from 'fs/promises'
import { Article } from '~/@types/meta'

const getMeta = async (date: string) => {
  const meta = await readFile(
    `${process.cwd()}/${process.env.APP_ARTICLES_PATH}/${date.split('-').join('/')}/meta.json`,
    'utf8',
  )

  return JSON.parse(meta) as Article
}

export default getMeta
