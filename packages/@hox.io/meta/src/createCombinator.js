/**
 * Create a `combinator` which takes two parameters and performs some operation
 * on them returning the result.
 *
 * @param combinator - The combinator function (similar to the inner function of `Array.reduce`)
 * @param pattern - An iterable instance
 * @param initial - The initial value
 * @yield {number}
 */
export default function* createCombinator(
  combinator,
  pattern,
  initial,
) {
  let value = initial;

  for (const item of pattern) {
    yield value;
    value = combinator(value, item);
  }

  yield value;
}