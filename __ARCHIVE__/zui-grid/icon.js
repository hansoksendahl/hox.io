import React from 'react';

const padding = 0.2071067811865475;

export default function Icon({
  name,
  backgroundColor='black',
  foregroundColor='white',
  style,
  ...attr
}) {
  const scale = `scale(${Math.SQRT1_2})`;
  const translate = `translate(${padding}, ${padding})`;
  const transform = `${scale} ${translate}`;

  return (
    <>
      <g
        transform={transform}
      >
        <use
          x={0}
          y={0}
          xlinkHref={`#${name}`}
          style={{ 
            color: foregroundColor,
            ...style
          }}
          {...attr}
        />
      </g>
    </>
  );
}