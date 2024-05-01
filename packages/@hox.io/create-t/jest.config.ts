import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  testEnvironment: 'node',
  projects: ['<rootDir>'],
  transform: {
    '\\.tsx?$': ['ts-jest', { useESM: true }],
  },
}

export default config
