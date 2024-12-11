import { createStruct, f32, u16, u8 } from "@recon-struct/bitcraft";

export const ENTITY_TYPE_STRUCT = u8

export const ENTITY_QUANTITY_STRUCT = u16

export const ANGLE = f32

export const VELOCITY = f32

export const POSITION_STRUCT = createStruct([f32, f32])

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