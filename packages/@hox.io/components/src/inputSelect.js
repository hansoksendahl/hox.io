import React from 'react';
import createInputEventHandler from './utils/createInputEventHandler';

function Option({
  children,
  ...attr
}) {
  return (
    <option
      {...attr}
    >{children}</option>
  )
}

export default function InputSelect({
  options,
  style,
  onChange,
  ...attr
}) {
  return (
    <select
      onChange={onChange && createInputEventHandler(onChange)}
      style={{
        outline: 'none',
        ...style
      }}
      {...attr}
    >
      {options && options.map(({label, value}, i) => (
        <Option
          key={i}
          value={value}
        >{label}</Option>
      ))}
    </select>
  )
}