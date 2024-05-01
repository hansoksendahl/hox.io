import { TRPCError } from '@trpc/server'

interface CreateTrpcError {
  (err: TRPCError): TRPCError
  (...params: ConstructorParameters<typeof TRPCError>): TRPCError
  (...params: any[]): TRPCError
}

const createServerError: CreateTrpcError = (...params: any[]) => {
  if (params[0] instanceof TRPCError) {
    return params[0]
  } else if (params[0] instanceof Error) {
    return new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      cause: params[0],
    })
  } else {
    return new TRPCError(...(params as ConstructorParameters<typeof TRPCError>))
  }
}

export default createServerError
