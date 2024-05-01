import { publicProcedure } from '~/lib/trpc/init'
import getEntry from '~/utils/get-entry'
import getMeta from '~/utils/get-meta'
import { ArticleReadInput, ArticleReadOutput } from './schemas/read'

const articleReadProcedure = publicProcedure
  .input(ArticleReadInput)
  .output(ArticleReadOutput)
  .query(async ({ input }) => {
    const meta = await getMeta(input.date)
    const content = await getEntry(input.date)

    return { title: meta.title, content }
  })

export default articleReadProcedure
