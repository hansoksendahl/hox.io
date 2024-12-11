import { AnyFunction } from '@recon-struct/utility-types'

const extractFunctionBody = (func: AnyFunction) => {
  const funcStr = func.toString()
  const match = funcStr.match(/\{([\s\S]*)\}$/)
  return match?.[1]
}

/**
 * Best practices... What are those?
 * 
 * @param func 
 * @returns A worker.
 */
const workerize = (func: string | AnyFunction) => {
  const funcBody = typeof func === 'function' ? extractFunctionBody(func) : func
  const blob = new Blob([`${funcBody}`], { type: 'application/javascript' })
  const blobURL = URL.createObjectURL(blob)
  const worker = new Worker(blobURL)

  return worker
}

export default workerize
