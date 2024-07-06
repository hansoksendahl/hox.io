import { getHypot, getMidPoint, getPointOnLine } from '@recon-struct/utils'
import { container } from './right-triangle.module.css'

interface TriangleProps {
  opposite: number
  adjacent: number
}

type Point = [number, number]

type Line = [Point, Point]

const angleOffset = 30
const labelOffset = 30

const RightTriangle = (props: TriangleProps) => {
  const aPt: Point = [0, props.opposite]
  const bPt: Point = [props.adjacent, 0]
  const cPt: Point = [props.adjacent, props.opposite]
  let ref: SVGSVGElement | undefined
  const hypot = getHypot(0, props.opposite, props.adjacent, 0)
  const aStart = getPointOnLine(...aPt, ...bPt, angleOffset / hypot)
  const aEnd = getPointOnLine(...aPt, ...cPt, angleOffset / props.adjacent)
  const bStart = getPointOnLine(...bPt, ...cPt, angleOffset / props.opposite)
  const bEnd = getPointOnLine(...bPt, ...aPt, angleOffset / hypot)
  const hypotMidPoint = getMidPoint(...aPt, ...bPt)
  const adjacentMidPoint = getMidPoint(...aPt, ...cPt)
  const oppositeMidPoint = getMidPoint(
    props.adjacent,
    0,
    props.adjacent,
    props.opposite,
  )

  return (
    <svg
      class={container}
      ref={ref}
      viewBox={`0 -1 ${+props.adjacent} ${+props.opposite + 2}`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={props.adjacent}
      height={props.opposite}
    >
      <path
        d={`M ${aStart} A ${angleOffset} ${angleOffset} 0 0 1 ${aEnd}`}
        fill='none'
        stroke='red'
        stroke-width={1}
      />
      <path
        d={`M ${bStart} A ${angleOffset} ${angleOffset} 0 0 1 ${bEnd}`}
        fill='none'
        stroke='red'
        stroke-width={1}
      />
      <path
        d={`M 0 ${props.opposite} L ${props.adjacent} ${props.opposite} L ${props.adjacent} 0 Z`}
        stroke='black'
        stroke-width={1}
      />
      <path
        d={`M ${props.adjacent - angleOffset} ${props.opposite} L ${props.adjacent - angleOffset} ${props.opposite - angleOffset} L ${props.adjacent} ${props.opposite - angleOffset}`}
        stroke='black'
      />
      <circle cx={hypotMidPoint[0]} cy={hypotMidPoint[1]} r={5} fill='black' />
      <circle
        cx={adjacentMidPoint[0]}
        cy={adjacentMidPoint[1]}
        r={5}
        fill='black'
      />
      <circle
        cx={oppositeMidPoint[0]}
        cy={oppositeMidPoint[1]}
        r={5}
        fill='black'
      />
    </svg>
  )
}

export default RightTriangle
