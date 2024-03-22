export default function i1D(from, to) {
  const delta = to - from;

  return (norm) => delta * norm + from;
}