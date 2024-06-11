import { createEffect } from 'solid-js'
import { container } from './nav-mesh.module.css'
import { createMesh, createPoints } from './utils'

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
      const start = nodes[Math.floor(Math.random() * nodes.length)]
      const end = nodes[Math.floor(Math.random() * nodes.length)]

      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node[0], node[1], 2, 0, 2 * Math.PI)
        ctx.fill()
      }

      const mesh = createMesh(nodes)

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
