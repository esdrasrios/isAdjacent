
const solution = require('./adjValues');

describe('test', () => {
  it('return maxAdj in the arr (expected 5)', () => {
    const result = solution([0, 3, 3, 12, 5, 3, 7, 1]);
    expect(result).toEqual(5);
  });
  it('return maxAdj in the arr (expected 18)', () => {
    const result = solution([0, 3, 3, 25, 5, 3, 7, 1]);
    expect(result).toEqual(18);
  });
  it('return maxAdj in the arr (expected 4)', () => {
    const result = solution([0, 3, 3, 11, 5, 3, 7, 1]);
    expect(result).toEqual(4);
  });
  it('return -2 given a arr with no adjValues (expected -2)', () => {
    const result = solution([1]);
    expect(result).toEqual(-2);
  });
  it('return maxAdj in the arr given a negative arr(expected 5)', () => {
    const result = solution([0, -3, -3, -12, -5, -3, -7, -1]);
    expect(result).toEqual(5);
  });
});


