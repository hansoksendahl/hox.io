/**
 * Create an IterableIterator with a repeated sequence of `items`.
 *
 * @param items - The repeated items in the pattern.
 * @yield {number}
 */
export default function* createPattern(...items) {
  const length = items.length;
  let i = 0;

  while (true) {
    const item = items[i];
    yield typeof item === 'function' ? item() : item;
    i = (i + 1) % length;
  }
}
