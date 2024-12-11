import { createStruct, f32, u16, u8 } from '@recon-struct/bitcraft'

export const POSITION_STRUCT = createStruct([f32, f32])

export const ENTITY_TYPE_STRUCT = u8

export const ENTITY_QUANTITY_STRUCT = u16

export const ANGLE = f32

export const VELOCITY = f32

export const RESOURCE_STRUCT = createStruct([
  ENTITY_TYPE_STRUCT,
  ENTITY_QUANTITY_STRUCT,
  POSITION_STRUCT,
])

export const ORGANISM_STRUCT = createStruct([
  ENTITY_TYPE_STRUCT,
  POSITION_STRUCT,
  ANGLE,
  VELOCITY,
])

export const FRAME_RATE = 1000 / 60

export const WORLD_MAX_X = 1000

export const WORLD_MAX_Y = 1000

export const INITIAL_POPULATION = 1

export const MIN_RESOURCE_QUANTITY = 100

export const MAX_RESOURCE_QUANTITY = 500

export const ENTITY = {
  Hippo: 0,
  Crocodile: 1,
  FOOD: 2,
} as const

export const Pi2 = Math.PI * 2