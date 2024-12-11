const getDirection = (rad: number): 'left' | 'right' => {
  if (rad < Math.PI / 2 || rad > Math.PI * 1.5) {
    return 'right'
  }
  return 'left'
}

export default getDirection