import React from 'react';
import useLottie from '@hox.io/use-lottie';

export default function Lottie({
  lottieOptions,
  normal,
}) {
  const {animation, ref} = useLottie(lottieOptions);
  
  if (animation && normal) {
    // NOTE I think lottie might be incrementing the actual duration by one frame.
    //      This can create an awkward situation where the last frame simply
    //      doesn't exist when interpolating the animation manually.
    const duration = animation.getDuration(true) - 1;
    const frame = Math.floor(duration * normal);
    animation.goToAndStop(frame, true);
  }

  return (
    <span
      ref={ref}
    />
  )
}