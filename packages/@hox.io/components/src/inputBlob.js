import React from 'react';
import createInputEventHandler from './utils/createInputEventHandler';

export default function InputBlob({
  style,
  onChange,
  ...attr
}) {
  return (
    <textarea
      onChange={onChange && createInputEventHandler(onChange)}
      style={{
        outline: 'none',
        display: 'block',
        height: '100%',
        width: '100%',
        resize: 'none',
        ...style
      }}
      {...attr}
    />
  )
}