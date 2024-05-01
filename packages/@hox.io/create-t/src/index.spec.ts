import { describe, expect, it } from 'vitest'
import createT from './index'

describe('createT', () => {
  it('It should kick ass and take names', () => {
    const expected = 'Kick ass and take names.'
    const t = createT({
      motto: 'Kick {{this}} and take {{that}}.',
    } as const)
    const actual = t('motto', { this: 'ass', that: 'names' } as const)

    expect(actual).toBe(expected)
  })

  it('It should allow for setting different capture settings', () => {
    const expected = 'We are the champions!'
    const t = createT(
      {
        anthem: 'We are the ::title::!',
      } as const,
      { start: '::', end: '::' } as const,
    )
    const actual = t('anthem', { title: 'champions' } as const)

    expect(actual).toBe(expected)
  })

  it('It should support templates that contain no variables', () => {
    const expected = 'I am a template string'
    const t = createT({
      template: 'I am a template string',
    } as const)
    const actual = t('template')
    expect(actual).toBe(expected)
  })
})

export {}
