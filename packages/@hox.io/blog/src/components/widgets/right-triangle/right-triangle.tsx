import { getMidPoint, getPointOnLine } from '@recon-struct/utils'
import { container } from './right-triangle.module.css'
import triGeom from './utils'

export interface RightTriangleProps {
  opposite: number
  adjacent: number
}

const RightTriangle = (props: RightTriangleProps) => {
  const tri = triGeom(props.adjacent, props.opposite)
  const aAngStart = getPointOnLine(
    ...tri.line.c[0],
    ...tri.line.c[1],
    20 / tri.length.c,
  )
  const aAngEnd = getPointOnLine(
    ...tri.line.b[1],
    ...tri.line.b[0],
    20 / tri.length.b,
  )
  const aAngMid = getMidPoint(
    ...(aAngStart as [number, number]),
    ...(aAngEnd as [number, number]),
  )
  const bAngStart = getPointOnLine(
    ...tri.line.a[0],
    ...tri.line.a[1],
    20 / tri.length.a,
  )
  const bAngEnd = getPointOnLine(
    ...tri.line.c[1],
    ...tri.line.c[0],
    20 / tri.length.c,
  )

  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={`${props.adjacent}px`}
      height={`${props.opposite}px`}
      viewBox={tri.viewBox}
      class={container}
    >
      <path
        d={`M ${aAngStart} A ${20} ${20} 0 0 1 ${aAngEnd}`}
        fill='none'
        stroke='red'
        stroke-width={1}
      />
      <path
        d={`M ${bAngStart} A ${20} ${20} 0 0 1 ${bAngEnd}`}
        fill='none'
        stroke='red'
        stroke-width={1}
      />
      <path d={`M${tri.line.a[0]} L${tri.line.a[1]}`} stroke='black' />
      <path d={`M${tri.line.b[0]} L${tri.line.b[1]}`} stroke='black' />
      <path d={`M${tri.line.c[0]} L${tri.line.c[1]}`} stroke='black' />
    </svg>
  )
}

export default RightTriangle
