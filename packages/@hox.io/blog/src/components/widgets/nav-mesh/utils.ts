export type Pos = [number, number]

export const randomVal = (min: number, max: number) => {
  const delta = max - min

  return Math.random() * delta + min
}

export const createRandomPos = (width: number, height: number): Pos => [
  randomVal(0, width),
  randomVal(0, height),
]

export const distance = (a: Pos, b: Pos) => {
  const deltaX = b[0] - a[0]
  const deltaY = b[1] - a[1]

  return Math.sqrt(deltaX ** 2 + deltaY ** 2)
}

export const createPoints = (
  width: number,
  height: number,
  nodeCount: number,
) => {
  const nodes: Pos[] = []

  for (let i = 0; i < nodeCount; i++) {
    const node = createRandomPos(width, height)

    nodes.push(node)
  }

  return nodes
}

export const createMesh = (nodes: Pos[]) => {
  const mesh = new Map<Pos, { pos: Pos; distance: number }[]>()

  for (const node of nodes) {
    const distances = nodes
      .filter(n => n !== node)
      .map(pos => ({
        pos,
        distance: distance(node, pos),
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 6)

    mesh.set(node, distances)
  }

  return mesh
}
