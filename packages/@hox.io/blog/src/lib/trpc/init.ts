import { initTRPC } from '@trpc/server'

// Create TRPC Server
export const t = initTRPC.create()

// export router, middleware and procedure
export const router = t.router
export const middleware = t.middleware
export const publicProcedure = t.procedure
export const createCallerFactory = t.createCallerFactory
export const mergeRouters = t.mergeRouters
