import React, {useContext} from 'react';
import {panelContext} from '../../panel'
import {goldenContext} from '../../golden'
import {usePath} from '@hox.io/hooks';
import Card from '../../card';
import getNorm from '../../../utils/getNorm'
import GoDown from './go-down'

const viewBoxes = {
  landscape: [[0, 0], [1110, 700]],
  portrait: [[0, -500], [1110, 1730]],
};

const lastName = [
  'O',
  'K',
  'S',
  'E',
  'N',
  'D',
  'A',
  'H',
  'L',
];

function IntroAnimation() {
  const {normal} = useContext(panelContext);
  const {orientation} = useContext(goldenContext);
  const {length, ref: lengthRef} = usePath();
  const subNormal = normal < 0.8 ? 0 : (normal - 0.8) * 5;
  const viewBox = viewBoxes[orientation];
  const anNorm = getNorm(0, 1.175, normal);
  const haNorm = getNorm(0.0725, 1.485, normal);

  return (
    <>
      <svg
        viewBox={viewBox}
        style={{width: '100%', height: '100%'}}
      >
        <defs>
          <pattern
            id='Pattern'
            x='13'
            y='13'
            width='60'
            height='60'
            patternUnits='userSpaceOnUse'
          >
            <circle
              cx='2'
              cy='2'
              r='2'
              fill='rgb(200,200,200)'
            />
            <circle
              cx='32'
              cy='0'
              r='1'
              fill='rgb(200,200,200)'
            />
            <circle
              cx='2'
              cy='32'
              r='1'
              fill='rgb(200,200,200)'
            />
            <circle
              cx='32'
              cy='32'
              r='1'
              fill='rgb(200,200,200)'
            />
          </pattern>
        </defs>

        <rect
          fill='url(#Pattern)'
          x={viewBox[0][0]}
          y={viewBox[0][1]}
          width={viewBox[1][0]}
          height={viewBox[1][1]}
          opacity={1 - subNormal}
        />
        <path
          ref={lengthRef}
          d='M75,435 L75,255 M315,435 L315,255 M555,435 L555,255 M795,435 L795,255 M795,435 L1005,435 A30,30 0 0,0 1035,405 L1035,405 A30,30 0 0,0 1005,375 L1005,375 L870,375 A60,60 0 0,1 810,315 L810,315 A60,60 0 0,1 870,255 L870,255 L1005,255 '
          stroke='rgb(90,90,90)'
          fill='none'
          strokeDasharray={length}
          strokeDashoffset={length * (1 - normal)}
          strokeWidth={16}
          strokeLinecap='round'
        />
        <path
          d='M315,435 A240,180 0 0,1 555,255 L555,255 A240,180 0 0,1 795,435'
          stroke='rgb(90,90,90)'
          fill='none'
          strokeDasharray={length}
          strokeDashoffset={length * (1 - anNorm)}
          strokeWidth={16}
          strokeLinecap='round'
        />
        <path
          d='M75,375 L555,375'
          stroke='rgb(90,90,90)'
          fill='none'
          strokeDasharray={length}
          strokeDashoffset={length * (1 - haNorm)}
          strokeWidth={16}
          strokeLinecap='round'
        />
        {lastName.map((letter, i) => (
          <g
            key={i}
            transform={`translate(${120 * i + 75}, 520)`}
          >
            <text
              fill='rgb(120,120,120)'
              textAnchor='middle'
              x={0}
              y={0}
              style={{
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontSize: '10vmin',
                transform: `rotateX(${(1 - subNormal) * 90}deg)`,
                transformOrigin: '50%, 100%'
              }}
            >{letter}</text>
          </g>
        ))}
      </svg>
      {normal === 0 && <GoDown />}
    </>
  )
}

export default function CardIntro() {
  return (
    <Card y={2}>
      <IntroAnimation />
    </Card>
  );
}