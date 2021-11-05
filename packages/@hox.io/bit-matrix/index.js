
export default class BitMatrix {
  constructor(dimensions) {
    const length = dimensions.reduce((a, b) => a * b);

    if (length === 0) throw new Error('Bit matrix cannot have dimensions of zero.');

    const byteLength = Math.ceil(length / 8);
    const buffer = new ArrayBuffer(byteLength);

    this.dimensions = dimensions;
    this.length = length;
    this.byteLength = byteLength;
    this.buffer = buffer;
    this.array = new Uint8Array(buffer);
  }

  // (Array<number>) => number
  getIndex(vector) {
    let product = 1;
    let index = 0;

    for (let i = 0; i < this.n; i += 1) {
      index += vector[i] * product;
      product *= this.dimensions[i];
    }

    return index;
  }

  // (number) => number
  get(index) {
    if (index < 0 || index >= this.length) throw new Error(`Index ${index} is out of bounds.`);
    const bit = index % 8;
    const byte = (index - bit) / 8;

    return this.array[byte] & (1 << bit);
  }

  // (number, boolean) => BitMatrix
  set(index, value) {
    if (index < 0 || index >= this.length) throw new Error(`Index ${index} is out of bounds.`);
    const bit = index % 8;
    const byte = (index - bit) / 8;
    const bin = 1 << bit;
    const prev = this.array[byte];
    
    this.array[byte] = value ? prev | bin : prev & ~bin;

    return this;
  }
}