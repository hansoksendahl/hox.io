import React from 'react';
import Flex from './flex';

export default function Column({
  style,
  ...attr
}) {
  return (
    <Flex
      {...attr}
      direction='column'
      style={{
        width: '100%',
        ...style,
      }}
    />
  )
}