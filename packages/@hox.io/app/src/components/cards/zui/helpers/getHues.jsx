export default function getHues(theta, divisions) {
  const wedge = 360 / divisions;
  const hues = [];

  for (let i = 0; i < divisions; i++) {
    hues.push(
      (i * wedge + theta) % 360
    )
  }

  return hues;
}