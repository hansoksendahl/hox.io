import { createEffect } from 'solid-js'
import { background } from './hello-world.module.css'

const HelloWorld = () => {
  let ref: HTMLCanvasElement | undefined

  createEffect(() => {
    if (ref) {
      // Setup
      const start = performance.now()
      const ctx = ref?.getContext('2d')!
      const { width, height } = ref?.getBoundingClientRect()!
      const maxDim = Math.max(width, height)
      const midHeight = height / 2
      ref.setAttribute('width', `${maxDim}px`)
      ref.setAttribute('height', `${maxDim}px`)
      ctx.fillStyle = 'gray'
      ctx.fillRect(0, 0, width || 0, height || 0)
      ctx.translate(width / 2, height / 2)
      ctx.save()

      // Animation
      const animate = () => {
        const elapsed = performance.now() - start
        const m = Math.pow(0.99, elapsed / 1000)

        ctx.save()
        ctx.scale(m, m)
        ctx.rotate((elapsed * 0.001) % 360)
        ctx.beginPath()
        ctx.arc(0, -midHeight / 2, maxDim / 4, 0, Math.PI * 2)
        ctx.fillStyle = 'black'
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.arc(0, midHeight / 2, maxDim / 4, 0, Math.PI * 2)
        ctx.fillStyle = 'white'
        ctx.fill()
        ctx.closePath()
        ctx.restore()

        requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    }
  })

  return <canvas ref={ref} class={background} />
}

export default HelloWorld
