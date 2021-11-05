import React from 'react';
import Flex from './flex';

export default function Row({
  style,
  ...attr
}) {
  return (
    <Flex
      {...attr}
      direction='row'
      style={{
        width: '100%',
        ...style,
      }}
    />
  )
}