/**
 * Take `num` items from an IterableIterator.
 *
 * @param num - The number of items to take from `pattern`.
 * @param pattern - The iterator to take items from
 * @yields {Iterable.<any>}
 */
export default function* take(num, pattern) {
  let count = 0;

  for (const item of pattern) {
    if (count < num) {
      yield item;
      count += 1;
    } else {
      break;
    }
  }
}