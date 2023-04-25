import React from 'react';

const basisWidth = 400;
const strokeWidth = 4;

export default function Progress({
  normal,
  y,
}) {
  const m = 1 / y;
  const a = basisWidth * m;
  const b = basisWidth - a;
  const x = b * normal;

  return (
    <svg viewBox={`${-strokeWidth / 2},${-strokeWidth / 2} ${basisWidth + strokeWidth},${strokeWidth}`}>
      <path
        d={`M 0,0 L ${basisWidth},0`}
        stroke='rgb(230,230,230)'
        strokeWidth={strokeWidth}
        strokeLinecap='round'
      />
      <path
        d={`M ${x},0 L ${a + x},0`}
        stroke='rgb(200,200,200)'
        strokeWidth={strokeWidth}
        strokeLinecap='round'
      />
    </svg>
  );
}