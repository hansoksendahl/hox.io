import { Line } from '@recon-struct/utility-types'
import { getHypot } from '@recon-struct/utils'
import createCartPlane from '~/utils/create-cart-plane'

const triGeom = (width: number, height: number) => {
  const { setPoint, viewBox } = createCartPlane(width, height)

  const point = {
    A: setPoint([0, 0]),
    B: setPoint([width, height]),
    C: setPoint([width, 0]),
  }
  const line: Record<string, Line> = {
    a: [point.B, point.C],
    b: [point.C, point.A],
    c: [point.A, point.B],
  }
  const length = {
    a: height,
    b: width,
    c: getHypot(...point.A, ...point.B),
  }
  const angle = {
    a: Math.asin(height / length.c),
    b: Math.asin(width / length.c),
    c: Math.PI / 2,
  }

  return { point, line, length, angle, viewBox }
}

export default triGeom
