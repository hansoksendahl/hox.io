import { TRPCError } from '@trpc/server'
import { publicProcedure } from '~/lib/trpc/init'

/**
 * @depracated Not implemented
 */
const articleCreateProcedure = publicProcedure.mutation(async () => {
  throw new TRPCError({
    code: 'NOT_IMPLEMENTED',
  })
})

export default articleCreateProcedure
