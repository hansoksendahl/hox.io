import { AnyObject } from "@recon-struct/utility-types"

const getTagCounts = (entries: string[]) => {
  const counts = entries.reduce((memo, entry) => {
    memo[entry] = (memo[entry] ?? 0) + 1
    return memo
  }, {} as AnyObject<string, number>)

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
}

export default getTagCounts