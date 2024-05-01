import { router } from '../init'
import * as routers from './routers'

const appRouter = router(routers)

export type AppRouter = typeof appRouter

export default appRouter
