import { APIEvent } from '@solidjs/start/server'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { API_ROUTE } from '~/constants/routes'
import appRouter from '~/lib/trpc/router'

// define the handler for handling requests
const handler = (event: APIEvent) =>
  fetchRequestHandler({
    // the endpoint handling the requests
    endpoint: API_ROUTE,
    // the request object
    req: event.request,
    // the router for handling the requests
    router: appRouter,
    // any arbitary data that should be available to all actions
    createContext: () => ({}),
  })

// use handler to handle all get/post requests to /api/*
export const GET = handler
export const POST = handler
