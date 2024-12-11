
import { viewSet } from "@recon-struct/bitcraft"

const init = () => {
  const buffer = new ArrayBuffer(ORGANISM_STRUCT.byteLength)
  const view = new DataView(buffer)

  for (let i = 0; i < INITIAL_POPULATION; i++) {
    const entity = ENTITY.Hippo
    const x = WORLD_MAX_X / 2
    const y = WORLD_MAX_Y / 2

    viewSet(view, ORGANISM_STRUCT, i * ORGANISM_STRUCT.byteLength, [
      entity,
      [x, y],
      Math.PI * 0.75,
      1,
    ])
  }

  return buffer
}

export default init