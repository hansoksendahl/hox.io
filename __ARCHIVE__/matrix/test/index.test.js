import Matrix from '../index'

// Test scalar matrix
;(() => {
  const value = 42
  const matrix = new Matrix([1])

  matrix.set(0, value)

  console.assert(matrix.get(0) === value, 'Should equal 42')
})()

;(() => {
  const a = 2
  const b = 2
  const matrix = new Matrix([2])

  matrix.set(0, a)
  matrix.set(1, b)

  console.assert(matrix.get(0) + matrix.get(1) === a + b, `Should equal ${a + b}`)
})()


;(() => {
  const a = 2
  const b = 2
  const matrix = new Matrix([2, 2])

  matrix.set(0, a)
  matrix.set(2, b)

  console.assert(matrix.get(0) + matrix.get(2) === a + b, `Should equal ${a + b}`)
})()

;(() => {
  const matrix = new Matrix([2, 2])
  matrix.set([0, 1], 2)

  for (let x of matrix.entries(true)) console.log(x)
})()