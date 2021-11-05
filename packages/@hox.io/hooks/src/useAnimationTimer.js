import {useState, useEffect} from 'react';

export default function useAnimationTimer(
  duration = 1000,
  delay = 0,
  callback,
) {
  const [elapsed, setTime] = useState(0);

  useEffect(
    () => {
      let animationFrame, timerStop, start;

      function onFrame() {
        setTime(performance.now() - start);
        loop();
      }

      function loop() {
        animationFrame = requestAnimationFrame(onFrame);
      }

      function onStart() {
        timerStop = setTimeout(() => {
          cancelAnimationFrame(animationFrame);
          setTime(Date.now() - start);
          if (callback) callback();
        }, duration);

        start = performance.now();
        loop();
      }

      const timerDelay = setTimeout(onStart, delay);

      return () => {
        clearTimeout(timerStop);
        clearTimeout(timerDelay);
        cancelAnimationFrame(animationFrame);
      };
    },
    [duration, delay]
  );

  return elapsed;
}