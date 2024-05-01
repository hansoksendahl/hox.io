import { createCallerFactory, router } from '~/lib/trpc/init'
import profileCreateProcedure from './create'
import profileDeleteProcedure from './delete'
import profileReadProcedure from './read'
import profileUpdateProcedure from './update'

const profileRouter = router({
  create: profileCreateProcedure,
  read: profileReadProcedure,
  delete: profileDeleteProcedure,
  update: profileUpdateProcedure,
  list: profileReadProcedure,
})

export const createProfileCaller = createCallerFactory(profileRouter)

export default profileRouter
