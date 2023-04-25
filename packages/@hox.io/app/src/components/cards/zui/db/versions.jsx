import {version} from '@hox.io/use-dexie';

export default [
  version(1, {
    nodes: '++id, content',
    links: '++id, icon, ordinal, from, to',
  }),
]
