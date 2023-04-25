import Matrix from 'matrix';

export default class TMatrix extends Matrix {
  // (Array<number>) => number
  getIndex(vector) {
    let product = 1;
    let index = 0;

    for (let i = 0; i < this.n; i += 1) {
      const dimension = this.dimensions[i];
      const offset = vector[i];
      const vectorModD = offset % dimension;
      const index_i = vectorModD < 0 ? dimension + vectorModD : vectorModD;

      index += index_i * product;
      product *= dimension;
    }

    return index;
  }
}