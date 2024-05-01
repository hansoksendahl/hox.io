import { createTRPCClient, httpBatchLink, loggerLink } from '@trpc/client'
import { API_ROUTE } from '~/constants/routes'
import getOrigin from '~/utils/get-origin'
import type { AppRouter } from './router'

// create the client, export it
const client = createTRPCClient<AppRouter>({
  links: [
    // will print out helpful logs when using client
    loggerLink(),
    // identifies what url will handle trpc requests
    httpBatchLink({
      url: `${getOrigin()}${API_ROUTE}`,
      headers: async () => ({}),
    }),
  ],
})

export default client
