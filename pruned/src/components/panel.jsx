import React, { createContext } from 'react';
import {useScroll, useRect} from '@hox.io/hooks';

export const panelContext = createContext({normal: 0, width: 0, height: 0});

export default function Panel({
  y = 1,
  color = 'pink',
  children = null
}) {
  const {rect: {top, bottom, width, height}, ref} = useRect();
  const {y: scrollY} = useScroll();
  const {innerHeight} = window;
  const passedTop = scrollY >= top;
  const passedBottom = scrollY >= bottom - innerHeight;
  const normal = scrollY > top
    ? passedBottom
      ? 1
      : (scrollY - top) / (height - innerHeight)
    : 0;
  // const onScreen = (scrollY + innerHeight >= top) && (scrollY <= bottom);

  return (
    <div
      ref={ref}
      style={{
        width: `${100}vw`,
        height: `${100 * y}vh`,
        position: 'relative',
      }}
    >
      <div
        style={{
          position: (passedTop && !passedBottom) ? 'fixed' : 'absolute',
          top: (passedTop && !passedBottom) ? 0 : 'auto',
          bottom: (passedTop && passedBottom) ? 0 : 'auto',
          left: 0,
          width: `100vw`,
          height: `100vh`,
          backgroundColor: color
        }}
      >
        <panelContext.Provider
          value={{
            normal,
            width,
            height: height / y
          }}
        >
          {height > 0 && children}
          {/* {height > 0 && onScreen && children} */}
        </panelContext.Provider>
      </div>
    </div>
  );
}