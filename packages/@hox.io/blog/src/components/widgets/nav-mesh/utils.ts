export type Pos = [number, number]

/**
 * Generates a random number between the specified minimum and maximum values.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random number between the minimum and maximum values.
 */
export const randomVal = (min: number, max: number) => {
  const delta = max - min

  return Math.random() * delta + min
}

/**
 * Creates a random position within the specified width and height.
 * @param width The width of the area.
 * @param height The height of the area.
 * @returns A random position as an array of two numbers.
 */
export const createRandomPos = (width: number, height: number): Pos => [
  randomVal(0, width),
  randomVal(0, height),
]

/**
 * Calculates the distance between two positions.
 * @param a - The first position.
 * @param b - The second position.
 * @returns The distance between the two positions.
 */
export const distance = (a: Pos, b: Pos) => {
  const deltaX = b[0] - a[0]
  const deltaY = b[1] - a[1]

  return Math.sqrt(deltaX ** 2 + deltaY ** 2)
}

/**
 * Creates an array of random positions within the specified width and height.
 *
 * @param width - The width of the area.
 * @param height - The height of the area.
 * @param nodeCount - The number of positions to create.
 * @returns An array of random positions.
 */
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

/**
 * Creates a mesh based on the given nodes.
 * The mesh is a map where each node is mapped to an array of nearby nodes with their distances.
 *
 * @param nodes - An array of positions representing the nodes.
 * @returns A map where each node is mapped to an array of nearby nodes with their distances.
 */
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
