import { z } from 'zod'

export const IsoDate = z.string()
export type IsoDate = z.infer<typeof IsoDate>

export const Content = z.string()
export type Content = z.infer<typeof Content>

export const Title = z.string()
export type Title = z.infer<typeof Title>
