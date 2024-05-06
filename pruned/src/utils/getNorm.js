// #DreamGrammar
//
// export default 𝒇(x₀, )

export default function getNorm(from, to, value) {
  if (to < from) return norm(to, from, value);
  
  return value <= from
    ? 0
    : value >= to
      ? 1
      : Math.abs((value - from) / (to - from));
}
