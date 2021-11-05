import React from 'react';
import createInputEventHandler from './utils/createInputEventHandler';

export default function InputText({
  style,
  onChange,
  ...attr
}) {
  return (
    <input
      type='text'
      onChange={onChange && createInputEventHandler(onChange)}
      style={{
        outline: 'none',
        display: 'block',
        ...style
      }}
      {...attr}
    />
  )
}