import useAnimationTimer from './useAnimationTimer';

const easing = {
  linear: n => n,
  elastic: n =>
    n * (33 * n * n * n * n - 106 * n * n * n + 126 * n * n - 67 * n + 15),
  inExpo: n => Math.pow(2, 10 * (n - 1))
};

export default function useAnimation(
  easingName = 'linear',
  duration = 500,
  delay = 0,
  callback
) {
  const elapsed = useAnimationTimer(
    duration,
    delay,
    callback
  );
  const n = Math.min(1, elapsed / duration);
  return easing[easingName](n);
}

