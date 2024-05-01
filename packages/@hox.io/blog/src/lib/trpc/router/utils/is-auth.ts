import { Session } from '@auth/solid-start'
import { TRPCError } from '@trpc/server'
import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'
import t from '~/utils/t'
import { Context } from '../../create-context'

type NonUndefined<A> = A extends undefined ? never : A

export interface ContextWithUser extends FetchCreateContextFnOptions {
  user: NonUndefined<Session['user']>
}

const assertIsAuth = (ctx: Context): asserts ctx is ContextWithUser => {
  if (!ctx.user) {
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: t('general.errorNotAuthorized'),
    })
  }
}

export default assertIsAuth
