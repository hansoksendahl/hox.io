const types = {
  'Uint8': {
    byteLength: 1,
    getMethodName: 'getUint8',
    setMethodName: 'setUint8',
  },
  'Uint16': {
    byteLength: 2,
    getMethodName: 'getUint16',
    setMethodName: 'setUint16',
  },
  'Uint32': {
    byteLength: 4,
    getMethodName: 'getUint32',
    setMethodName: 'setUint32',
  },
  'Int8': {
    byteLength: 1,
    getMethodName: 'getInt8',
    setMethodName: 'setInt8',
  },
  'Int16': {
    byteLength: 2,
    getMethodName: 'getInt16',
    setMethodName: 'setInt16',
  },
  'Int32': {
    byteLength: 4,
    getMethodName: 'getInt32',
    setMethodName: 'setInt32',
  },
  'Float32': {
    byteLength: 4,
    getMethodName: 'getFloat32',
    setMethodName: 'setFloat32',
  },
  'Float64': {
    byteLength: 8,
    getMethodName: 'getFloat64',
    setMethodName: 'setFloat64',
  },
}

export default class Matrix {
  constructor(dimensions, type = 'Uint8') {
    const methods = types[type]

    if (!methods) throw new Error(`Unrecognized type ${type}.`)

    const {
      byteLength,
      getMethodName,
      setMethodName,
    } = methods
    const length = dimensions.reduce((a, b) => a * b, 1)

    if (length === 0) throw new Error('Matrix cannot have dimensions of zero.')

    const buffer = new ArrayBuffer(length * byteLength)

    this.type = type
    this.byteLength = byteLength
    this.length = length
    this.buffer = buffer
    this.view = new DataView(buffer, 0, length * byteLength)
    this.getMethodName = getMethodName
    this.setMethodName = setMethodName
    this.dimensions = dimensions
    this.n = dimensions.length
    this.isBigEndian = new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x12
  }

  // (Array<number>) => number
  getIndex(vector) {
    if (vector.length > this.dimensions.length) throw new Error(`Vector ${vector} is wrong shape.`)

    let product = 1
    let index = 0

    for (let i = 0; i < this.n; i += 1) {
      index += vector[i] * product
      product *= this.dimensions[i]
    }

    return index
  }

  // (number) => Array<number>
  getVector(index) {
    if (index > this.length) throw new Error(`Index ${index} is out ouf bounds.`)

    const vector = []
    let product = 1

    for (let i = 0; i < this.n; i += 1) {
      const dimension = this.dimensions[i]
      vector[i] = Math.floor(index / product) % dimension
      product *= dimension
    }

    return vector
  }

  // (number) => number
  get(address) {
    const index = typeof address === 'number'
      ? address
      : this.getIndex(address)

    if (index < 0 && index >= this.length) throw new Error(`Index ${index} out of bounds.`)

    return this.view[this.getMethodName](index)
  }

  // (number, number) => void
  set(address, value) {
    const index = typeof address === 'number'
      ? address
      : this.getIndex(address)

    if (index < 0 && index >= this.length) throw new Error(`Index ${index} out of bounds.`)

    this.view[this.setMethodName](index, value)
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i += 1) {
      yield this.get(i)
    }
  }

  *entries(isVector=false) {
    for (let i = 0; i < this.length; i += 1) {
      const address = isVector
        ? this.getVector(i)
        : i
      
      yield [address, this.get(i)]
    }
  }
}