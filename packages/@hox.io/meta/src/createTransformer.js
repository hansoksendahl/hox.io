/**
 * Create a `transformer` which takes a parameter and transforms it.
 *
 * @param transformer - The combinator function (similar to the inner function of `Array.map`)
 * @param pattern - An iterable instance
 * @yield {number}
 */
export default function* createTransformer(
  combinator,
  pattern,
) {
  let index = 0;

  for (const item of pattern) {
    yield combinator(item, index);
    index ++;
  }
}