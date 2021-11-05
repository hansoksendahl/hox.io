import createCombinator from '../createCombinator';

export default function combinatorFactory(combinator) {
  return (pattern, initial) => (
    createCombinator(
      combinator,
      pattern,
      initial,
    )
  )
}