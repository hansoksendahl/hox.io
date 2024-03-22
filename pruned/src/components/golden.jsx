import React, {useContext, createContext} from 'react';
import {panelContext} from './panel';
import {phi} from '@hox.io/components';

export const goldenContext = createContext({
  orientation: 'landscape',
  size: 0
});

function getDim(x, y) {
  if (x < y) {
    const inverse = getDim(y, x);
    return { x: inverse.y, y: inverse.x };
  }

  const xPhi = x * phi;
  const dim = (xPhi > y) ? y : xPhi;

  return {x: dim / phi, y: dim};
}

export default function Golden({
  children,
  scale = 1,
}) {
  const {width, height} = useContext(panelContext);
  const {x, y} = getDim(width * scale, height * scale);
  const size = Math.min(width, height);
  const orientation = x > y ? 'landscape' : 'portrait';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          width: `${x}px`,
          height: `${y}px`,
        }}
      >
        <goldenContext.Provider value={{orientation, size}}>
          {children}
        </goldenContext.Provider>
      </div>
    </div>
  )
}

export function Main({
  children,
  style,
  attr,
}) {
  return (
    <main
      style={{
        flex: 1,
        ...style,
      }}
      {...attr}
    >
      {children}
    </main>
  );
}

export function Aside({
  children,
  style,
  attr,
}) {
  return (
    <aside
      style={{
        flex: phi,
        ...style
      }}
      {...attr}
    >
      {children}
    </aside>
  );
}
