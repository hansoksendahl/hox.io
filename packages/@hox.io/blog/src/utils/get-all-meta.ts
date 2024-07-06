'use server'

import { Meta } from '~/@types/meta'
import getMeta from './get-meta'

const getAllMeta = async (dates: string[]) => {
  dates.sort((a, b) => b.localeCompare(a))

  const tags = await Promise.all(
    dates.map(async date => (await getMeta(date)) as Meta),
  )

  return tags.flat()
}

export default getAllMeta
