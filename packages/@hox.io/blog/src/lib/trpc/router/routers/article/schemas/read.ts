import { z } from 'zod'
import { Content, IsoDate, Title } from './validations'

// Input

export const ArticleReadInput = z.object({
  date: IsoDate,
})

// Output

export const ArticleReadOutput = z.object({
  title: Title,
  content: Content,
})
