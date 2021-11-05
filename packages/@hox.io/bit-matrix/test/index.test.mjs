import BitMatrix from '../index';

(() => {
  const a = new BitMatrix([16]);

  a.set(0, true);
  a.set(8, true);

  console.assert(a.array[0] === 1 && a.array[1] === 1, 'should equal 1 and 1')
})();

(() => {
  const a = new BitMatrix([8]);

  a.set(0, true);
  a.set(1, true);
  a.set(2, true);
  a.set(3, true);
  a.set(4, true);
  a.set(5, true);
  a.set(6, true);
  a.set(7, true);

  console.assert(a.array[0] === 255, 'should equal 255');
})();

(() => {
  const a = new BitMatrix([8]);

  a.set(0, true);
  a.set(1, true);
  a.set(0, false);

  console.assert(a.array[0] === 2, 'should equal 255');
})();