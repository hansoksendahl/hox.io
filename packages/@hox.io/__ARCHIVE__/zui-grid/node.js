import React from 'react';

export default function Node({
  icon,
  links = [],
}) {
  const square = Math.ceil(Math.sqrt(links.length)) ** 2;
  const divisions = Math.sqrt(square) + 1;
  const percentage = 1 / divisions * 100;
  const gridTemplate = `repeat(${divisions}, ${percentage}%)`;

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: gridTemplate,
          gridTemplateRows: gridTemplate,
          height: '100%',
          width: '100%',
        }}
      >
        <div
          style={{
            gridColumn: `1 / span ${divisions}`,
          }}
        >{icon}</div>
      </div>
    </>
  );
}