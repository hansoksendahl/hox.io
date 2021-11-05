import React from 'react';

export default function Icon({
  name,
  style,
  transform,
  color='black',
  ...attr
}) {
  return (
    <>
      <svg viewBox='0,0 1,1' {...attr}>
        <g
          transform={transform}
        >
          <use
            x={0}
            y={0}
            xlinkHref={`#${name}`}
            style={{ 
              color,
              ...style
            }}
          />
        </g>
      </svg>
    </>
  );
}