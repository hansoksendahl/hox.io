import { createEffect } from 'solid-js'
import {
  ENTITY,
  FRAME_RATE,
  INITIAL_POPULATION,
  ORGANISM_STRUCT,
  WORLD_MAX_X,
  WORLD_MAX_Y,
} from './constants'
import init from './utils/init'
import update from './utils/update'
import { viewGet } from '@recon-struct/bitcraft'
import getDirection from './utils/get-direction'

export const ENTITY_EMOJI_BY_ENTITY_TYPE = {
  [ENTITY.Hippo]: '🦛',
  [ENTITY.Crocodile]: '🐊',
  [ENTITY.FOOD]: '🥦',
}

const Hippos = () => {
  let ref: HTMLCanvasElement | undefined
  let isRunning = false

  createEffect(() => {
    const buffer = init()
    const view = new DataView(buffer)
    isRunning = true
    
    const ctx = ref?.getContext('2d')!
    ctx.canvas.width = WORLD_MAX_X
    ctx.canvas.height = WORLD_MAX_Y

    const updateInterval = setInterval(() => update(buffer), FRAME_RATE)

    const drawEntity = (
      entitytype: typeof ENTITY[keyof typeof ENTITY],
      x: number,
      y: number,
      direction: 'left' | 'right',
    ) => {
      const emoji = ENTITY_EMOJI_BY_ENTITY_TYPE[entitytype]
      ctx.font = '50px serif'
      ctx.save()
      ctx.translate(x, y)
      ctx.textAlign = 'center'

      if (direction === 'right') {
        ctx.scale(-1, 1)
      }

      ctx.fillText(emoji, 0, 15)
      ctx.restore()
    }

    const draw = () => {
      ctx.fillStyle = '#4466ff'
      ctx.fillRect(0, 0, WORLD_MAX_X, WORLD_MAX_Y)

      for (let i = 0; i < INITIAL_POPULATION; i++) {
        const [entity, [x, y], angle] = viewGet(
          view,
          ORGANISM_STRUCT,
          i * ORGANISM_STRUCT.byteLength,
        )

        drawEntity(entity as any, x, y, getDirection(angle))
      }
    }

    const animate = () => {
      const frame = () => {
        draw()
        if (isRunning) requestAnimationFrame(frame)
      }

      frame()
    }

    init()
    animate()

    return () => {
      isRunning = false
      clearInterval(updateInterval)
    }
  })

  return <canvas ref={ref}>woo</canvas>
}

export default Hippos
