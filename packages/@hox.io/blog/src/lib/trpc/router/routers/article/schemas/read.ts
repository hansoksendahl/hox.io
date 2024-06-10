import { z } from 'zod'
import { Components, Content, IsoDate, Title } from './validations'

// Input

export const ArticleReadInput = z.object({
  date: IsoDate,
})
export type ArticleReadInput = z.infer<typeof ArticleReadInput>

// Output

export const ArticleReadOutput = z.object({
  title: Title,
  content: Content,
  components: Components.optional(),
})
export type ArticleReadOutput = z.infer<typeof ArticleReadOutput>
