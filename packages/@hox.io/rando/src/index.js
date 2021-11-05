// (void) => boolean
export const randomBoolean = () => {
  Math.random() > 0.5
}

// (number) => number
export const randomN = n => (
  Math.floor(Math.random() * n)
);

// (number) => number
export const randomZ = n => (
  randomN(n) * (randomBoolean() ? 1 : -1)
);

// (void) => string
export const randomRGB = () => (
  `rgb(${(new Array(3)).fill().map(l => randomN(l)).join(',')})`
);

// (Array<any>) => any
export const randomEntry = a => (
  a[randomN(a.length - 1)]
);

// ({ [string|Symbol]: any }) => string|Symbol
export const randomKey = o => (
  randomEntry(Object.keys(o))
);

// ({ [string|Symbol]: any }) => any
export const randomValue = o => (
  randomEntry(Object.values(o))
);
