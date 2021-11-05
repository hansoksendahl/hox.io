import {useLayoutEffect, useState} from 'react';
import lottie from 'lottie-web';

export default function useLottie(options) {
  const [animation, setAnimation] = useState(null);
  const [node, setRef] = useState(null);

  useLayoutEffect(
    () => {
      if (node !== null) {
        setAnimation(
          lottie.loadAnimation({
            renderer: 'svg',
            loop: true,
            autoplay: true,
            ...options,
            container: node,
          })
        );

        return () => animation && animation.paused === false && animation.stop();
      }
    },
    [node]
  );

  return {animation, ref: setRef};
}