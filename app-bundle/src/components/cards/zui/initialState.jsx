const datumProps = {
  hueIndex: 0,
  scale: 1,
  translate: [0, 0],
  icon: 'me',
}

export const initState = (x) => x

export default {
  mode: 'view',
  history: [datumProps],
  isAnimating: false,
  zoomProps: null,
  db: null,
  datumProps,
}