import React from 'react';
import phiPow from './utils/phiPow';

const defaultColor = 'rgb(80,80,80)';

function TextNode({
  style,
  children,
  size = 0,
  ...attr
}) {
  return (
    <span
      style={{
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: `${phiPow(size)}rem`,
        lineHeight: '1.3em',
        color: defaultColor,
        ...style
      }}
      {...attr}
    >
      {children}
    </span>
  );
}

export default function Text({
  children,
  style,
  ...attr
}) {
  if (Array.isArray(children)) {
    return children.map((child, i) => (
      <TextNode
        key={i}
        style={{
          display: 'inline-block',
          marginBottom: '1rem',
          ...style,
        }}
      >{child}</TextNode>
    ))
  } else {
    return <TextNode style={style} {...attr}>{children}</TextNode>
  }
}