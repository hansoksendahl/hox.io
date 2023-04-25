import {randomN, randomEntry} from '@hox.io/rando';

const icons = ['goddess', 'masks', 'nevermore', 'daruma'];

// NOTE Number.MAX_SAFE_INTEGER works on everything but IE.
export function getRandomLinks(depth = 2) {
  return depth > 0
    ? (new Array(randomN(10))).fill().map(() => ({
      id: randomN(Number.MAX_SAFE_INTEGER),
      icon: randomEntry(icons),
      links: getRandomLinks(depth - 1)
    }))
    : [];
}