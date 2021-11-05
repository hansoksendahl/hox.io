import createCombinator from './createCombinator';

/**
 * Create a numeric series
 *
 * @param pattern - The repeated pattern
 * @param initial - The initial value of the series
 * @yield {number}
 */
export default function* createSeries(pattern, initial = 0) {
  yield* createCombinator((x, y) => x + y, pattern, initial);
}

