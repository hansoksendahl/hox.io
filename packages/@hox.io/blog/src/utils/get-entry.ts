"use server"

import { readFile } from 'fs/promises'

const getEntry = async (date: string) => await readFile(
  `${process.cwd()}/${process.env.APP_ARTICLES_PATH}/${date.split('-').join('/')}/entry.md`,
  'utf-8'
)

export default getEntry