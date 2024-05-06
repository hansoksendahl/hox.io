import i1D from './i1D';

export default function iND(from, to) {
  if (from.length !== to.length) throw new Error('Vector length mis-match');

  const i = from.map((fromI, i) => i1D(fromI, to[i]));

  return (norm) => i.map(f => f(norm));
}