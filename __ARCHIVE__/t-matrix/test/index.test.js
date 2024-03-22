import TMatrix from '../index';

(() => {
  const matrix = new TMatrix([3, 3]);
  
  console.assert(matrix.getIndex([0, 0]) === 0, 'Should equal 0');
  console.assert(matrix.getIndex([1, 0]) === 1, 'Should equal 1');
  console.assert(matrix.getIndex([2, 0]) === 2, 'Should equal 2');
  console.assert(matrix.getIndex([0, 1]) === 3, 'Should equal 3');
  console.assert(matrix.getIndex([1, 1]) === 4, 'Should equal 4');
  console.assert(matrix.getIndex([2, 1]) === 5, 'Should equal 5');
  console.assert(matrix.getIndex([0, 2]) === 6, 'Should equal 6');
  console.assert(matrix.getIndex([1, 2]) === 7, 'Should equal 7');
  console.assert(matrix.getIndex([2, 2]) === 8, 'Should equal 8');
})();

(() => {
  const matrix = new TMatrix([3, 3]);

  console.assert(matrix.getIndex([-1, -1]) === 8, 'should equal 2');
  console.assert(matrix.getIndex([0, -1]) === 6, 'should equal 6');
  console.assert(matrix.getIndex([1, -1]) === 7, 'should equal 7');
  console.assert(matrix.getIndex([2, -1]) === 8, 'should equal 8');
  console.assert(matrix.getIndex([3, -1]) === 6, 'should equal 6');
  console.assert(matrix.getIndex([3, 0]) === 0, 'should equal 0');
  console.assert(matrix.getIndex([3, 1]) === 3, 'should equal 3');
  console.assert(matrix.getIndex([3, 2]) === 6, 'should equal 6');
  console.assert(matrix.getIndex([3, 3]) === 0, 'should equal 0');
  console.assert(matrix.getIndex([2, 3]) === 2, 'should equal 2');
  console.assert(matrix.getIndex([1, 3]) === 1, 'should equal 1');
  console.assert(matrix.getIndex([0, 3]) === 0, 'should equal 0');
  console.assert(matrix.getIndex([-1, 3]) === 2, 'should equal 2');
  console.assert(matrix.getIndex([-1, 2]) === 8, 'should equal 6');
  console.assert(matrix.getIndex([-1, 1]) === 5, 'should equal 2');
  console.assert(matrix.getIndex([-1, 0]) === 2, 'should equal 2');
})();

(() => {
  // Test a 3x3 toroidal matrix with absolute vector indices
  const matrix = new TMatrix([3, 3, 3]);
  const a = 2;
  const aV = matrix.getIndex([0, 0, 0]);
  const b = 3;
  const bV = matrix.getIndex([1, 1, 1]);
  const c = 5;
  const cV = matrix.getIndex([2, 2, 2]);

  matrix.set(aV, a);
  matrix.set(bV, b);
  matrix.set(cV, c);

  console.assert(matrix.get(aV) + matrix.get(bV) + matrix.get(cV) === a + b + c, `Should equal ${a + b + c}`);
})();
