import React from 'react';
import {parseSides} from './utils';

const units = 'rem';

export default function Spacing({
  children,
  margin,
  padding,
  style,
  ...attr
}) {
  return (
    <div
      style={{
        margin: margin && parseSides(margin, units),
        padding: padding && parseSides(padding, units),
        ...style
      }}
      {...attr}
    >
      {children}
    </div>
  );
}