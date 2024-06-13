So, today I dove headfirst into the wild world of navigation meshes. Buckle up,
nerds.

<NavMesh></NavMesh>

Confession time: I’m a novice in the dark arts of game programming and
optimization, especially when it comes to navigation meshes. But hey, every
expert starts somewhere, right?

For the uninitiated, a navigation mesh (or nav-mesh for those of us who like to
sound cool) is essentially a graph data structure that maps out distances
between nodes in a mesh. Imagine a spider web spun from pure mathematical genius
and computer magic. In its humble beginnings, navigating this mesh relied on
Djikstra's algorithm. Think of it as the Ford Pinto of algorithms—reliable but
not exactly the epitome of elegance.

But we’re not about that basic life here. We crave optimization. We yearn for
efficiency. We demand our nav-meshes to be slicker than a greased-up ferret in a
Teflon tube.

Picture this: a randomly generated field of nodes, a chaotic playground of
potential. The nav-mesh is dynamically birthed from this primordial soup,
evolving in real-time to calculate the optimal path between two points. It's
like watching the universe unveil its secrets, compressing aeons of evolutionary
finesse into mere moments.

This isn’t just game navigation; this is tapping into a well-established realm
of programming. We're scratching the surface of a discipline honed by countless
hours of developer blood, sweat, and code. A symphony of algorithms working in
perfect harmony, crafting paths with the precision of a Swiss watchmaker and the
speed of a lightning strike. Every calculation, every adjustment, is a step
towards perfection, an ode to the relentless pursuit of efficiency.

And the best part? This page is randomly generated. Refresh to witness the
algorithmic ballet anew, with a freshly minted nav-mesh each time. It’s
mathematical poetry in motion, and it’s just getting started.

We'll start by defining some util functions that will help us generate the data
structures needed to do some path-finding on a nav-mesh.

```typescript
/**
 * A 2-dimensional point
 */
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
 * The mesh is a map where each node is mapped to an array of nearby nodes with
 * their distances.
 *
 * @param nodes - An array of positions representing the nodes.
 * @returns A map where each node is mapped to an array of nearby nodes with
 *          their distances.
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
```

We have a basic mesh. The mesh has some redundancy due to the fact that each
node has 6 edges to the closest other nodes. If we wanted to remove this
redundancy we could use a method such as delanay triangulation to form perfect
triangles between our nodes with no overlap. However the redundancy can actually
be a benefit for path finding purposes.

Then we'll define a simple solid-js component that performs path finding on a
generated navMesh.

```typescript
import { createEffect } from 'solid-js'
import { container } from './nav-mesh.module.css'
import { createMesh, createPoints, randomVal } from './utils'

const NavMesh = () => {
  let ref: HTMLCanvasElement | undefined

  createEffect(() => {
    if (ref) {
      // Setup
      const { width, height } = ref.getBoundingClientRect()!
      const ctx = ref.getContext('2d')!
      ref.setAttribute('width', `${width}px`)
      ref.setAttribute('height', `${height}px`)

      const nodes = createPoints(width, height, 400)
      const start = nodes[Math.floor(randomVal(0, nodes.length - 1))]
      const end = nodes[Math.floor(randomVal(0, nodes.length - 1))]

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node[0], node[1], 2, 0, 2 * Math.PI)
        ctx.fill()
      }

      // Create our nav-mesh
      const mesh = createMesh(nodes)

      // Draw edges
      for (const [node, connections] of mesh) {
        for (const { pos } of connections) {
          ctx.beginPath()
          ctx.moveTo(node[0], node[1])
          ctx.lineTo(pos[0], pos[1])
          ctx.strokeStyle = 'lightgray'
          ctx.stroke()
        }
      }

      // Find the shortest path between start and end nodes
      const path = new Map()
      const visited = new Set()
      const queue = [{ pos: start, distance: 0 }]
      let found = false

      while (queue.length) {
        const { pos, distance } = queue.shift()!

        if (pos === end) {
          found = true
          break
        }

        visited.add(pos)

        for (const { pos: nextPos, distance: nextDistance } of mesh.get(pos)!) {
          if (visited.has(nextPos)) {
            continue
          }

          const totalDistance = nextDistance + distance
          const existingDistance = path.get(nextPos)?.distance

          if (
            existingDistance === undefined ||
            totalDistance < existingDistance
          ) {
            path.set(nextPos, { pos, distance: totalDistance })
            queue.push({ pos: nextPos, distance: totalDistance })
          }
        }
      }

      if (found) {
        let current = end

        // Draw path
        while (current !== start) {
          const { pos } = path.get(current)!
          ctx.beginPath()
          ctx.moveTo(current[0], current[1])
          ctx.strokeStyle = 'black'
          ctx.lineTo(pos[0], pos[1])
          ctx.stroke()

          current = pos
        }
      }
    }
  })

  return <canvas ref={ref} class={container} />
}

export default NavMesh
```

And that's it! In this post we explored path finding on nav meshes. I hope you
enjoyed the journey.
