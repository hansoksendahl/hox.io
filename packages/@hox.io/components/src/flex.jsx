import React from 'react'

export default function Flex({
  children,
  direction,
  style,
  ...attr
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        ...style
      }}
      {...attr}
    >
      {children}
    </div>
  )
}