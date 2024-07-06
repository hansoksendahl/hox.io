import { Point } from '@recon-struct/utility-types/dist/geometry/point'

const createCartPlane = (width: number, height: number) => {
  const viewBox = `-2 -${height - 2} ${width + 4} ${height + 4}`
  const setPoint = (point: Point): Point => [point[0], -point[1]]

  return {
    viewBox,
    setPoint,
  }
}

export default createCartPlane
