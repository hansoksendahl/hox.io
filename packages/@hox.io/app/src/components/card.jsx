import React, {useContext} from 'react';
import Panel from './panel';
import Golden, {
  goldenContext,
  Main as GoldenMain,
  Aside as GoldenAside,
} from './golden';

export function Main({
  children,
  style,
  ...attr
}) {
  return (
    <GoldenMain
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          height: '90%',
          width: '90%',
          overflow: 'hidden',
          ...style
        }}
        {...attr}
      >
        {children}
      </div>
    </GoldenMain>
  )
}

export function Aside({
  children,
  style,
  ...attr
}) {
  const {orientation} = useContext(goldenContext);
  const isLandscape = orientation === 'landscape'
  const flexDirection = isLandscape ? 'row' : 'column';

  return (
    <GoldenAside
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection
      }}
    >
      <div
        style={{
          height: isLandscape ? '90%' : '92%',
          width: isLandscape ? '92%' : '90%',
          ...style
        }}
        {...attr}
      >
        {children}
      </div>
    </GoldenAside>
  );
}

function CardContent({
  children
}) {
  const {orientation} = useContext(goldenContext);
  const flexDirection = orientation === 'landscape' ? 'row' : 'column';

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.33)',
        borderRadius: '1vmin',
        overflow: 'hidden',
        position: 'relative',
        flexDirection,
      }}
    >
      {children}
    </div>
  )
}

export default function Card({
  children,
  y = 2,
  scale = 0.9
}) {
  return (
    <Panel
      y={y}
      color='#e5e5e5'
    >
      <Golden
        scale={scale}
      >
        <CardContent>
          {children}
        </CardContent>
      </Golden>
    </Panel>
  );
}
