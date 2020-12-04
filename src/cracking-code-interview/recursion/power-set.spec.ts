import { powerSet } from './power-set';

describe(powerSet.name, () => {
  it('should return a single set of 1', () => {
    const results = powerSet([1]);
    expect(results.length).toBe(1);
    expect(results[0].length).toBe(1);
    expect(results[0][0]).toBe(1);
  });

  it('should return all subsets for 1, 2', () => {
    const results = powerSet([1, 2]);
    expect(results.length).toBe(3);
    expect(results[0][0]).toBe(1);
    expect(results[1][0]).toBe(1);
    expect(results[1][1]).toBe(2);
    expect(results[2][0]).toBe(2);
  });

  it('should return all subsets for 1,2,3', () => {
    const results = powerSet([1, 2, 3]);
    // [ 1 ], [ 1, 2 ], [ 2 ], [ 1, 3 ], [ 1, 2, 3 ], [ 2, 3 ], [ 3 ]
    expect(results.length).toBe(7);
    expect(results[0][0]).toBe(1);
    expect(results[1][0]).toBe(1);
    expect(results[1][1]).toBe(2);
    expect(results[2][0]).toBe(2);
    expect(results[3][0]).toBe(1);
    expect(results[3][1]).toBe(3);
    expect(results[4][0]).toBe(1);
    expect(results[4][1]).toBe(2);
    expect(results[4][2]).toBe(3);
    expect(results[5][0]).toBe(2);
    expect(results[5][1]).toBe(3);
    expect(results[6][0]).toBe(3);
  });
});