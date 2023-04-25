import React from 'react';
import Text from '@hox.io/components';

export default function Heading({
  children,
  style,
  size = 1,
  ...attr
}) {
  const Tag = `h${size}`;

  return (
    <Tag
      style={{marginBottom: '1rem'}}
    >
      <Text
        style={{
          ...style,
        }}
        size={size}
        {...attr}
      >{children}</Text>
    </Tag>
  )
}