"use server"

import { readdir } from 'fs/promises'
import getDirs from './get-dirs'

const getDates = async () => {
  const years = await getDirs(`${process.cwd()}/${process.env.APP_ARTICLES_PATH}`)

  const dates = await Promise.all(
    years.map(async year => {
      const months = await getDirs(`${process.cwd()}/${process.env.APP_ARTICLES_PATH}/${year}`)

      return await Promise.all(
        months.map(async month => {
          const days = await getDirs(`${process.cwd()}/${process.env.APP_ARTICLES_PATH}/${year}/${month}`)

          return days.map(day => `${year}-${month}-${day}`)
        })
      )
    })
  )

  return dates.flat().flat()
}

export default getDates