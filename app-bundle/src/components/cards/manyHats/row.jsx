import React from 'react';
import {Icon, Text} from '@hox.io/components';

export default function Row({
  icon,
  text,
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Icon name={icon} width={40} height={40} color='rgb(140,140,140)' />
      <span style={{borderBottom: '1px dashed rgb(140,140,140)', marginRight: '10px', flex: '1', height: '18px'}}></span>
      <Text size={1} style={{color: 'rgb(140,140,140)', textAlign: 'right'}}>{text}</Text>
    </div>
  );
}