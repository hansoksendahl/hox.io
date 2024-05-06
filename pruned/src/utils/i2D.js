import i1D from './i1D';

export default function i2D(from, to) {
  const i = [i1D(from[0], to[0]), i1D(from[1], to[1])];

  return (norm) => [i[0](norm), i[1](norm)];
}