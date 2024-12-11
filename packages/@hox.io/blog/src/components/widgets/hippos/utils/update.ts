import { viewGet, viewSet } from "@recon-struct/bitcraft"
import { INITIAL_POPULATION, ORGANISM_STRUCT, Pi2 } from "../constants"


const update = (buffer: ArrayBuffer) => {
  const dataView = new DataView(buffer)

  for (let i = 0; i < INITIAL_POPULATION; i++) {
    const [entity, position, angle, velocity] = viewGet(
      dataView,
      ORGANISM_STRUCT,
      i * ORGANISM_STRUCT.byteLength,
    )

    const x = position[0] + Math.cos(angle) * velocity
    const y = position[1] + Math.sin(angle) * velocity

    viewSet(dataView, ORGANISM_STRUCT, i * ORGANISM_STRUCT.byteLength, [
      entity,
      [x, y],
      (angle + 0.02) % Pi2,
      velocity,
    ])
  }
}

export default update