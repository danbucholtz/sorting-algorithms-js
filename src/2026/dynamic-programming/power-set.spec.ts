import { describe, expect, it } from 'vitest';
import { powerSet } from './power-set';

function normalize(subsets: number[][]): string[] {
  return subsets.map((subset) => [...subset].sort((a, b) => a - b).join(',')).sort();
}

function expectSameSubsetSet(actual: number[][], expected: number[][]) {
  expect(normalize(actual)).toEqual(normalize(expected));
}

describe(powerSet.name, () => {
  it('should return only the empty subset for empty input', () => {
    const result = powerSet([]);

    expectSameSubsetSet(result, [[]]);
  });

  it('should return all subsets for one element', () => {
    const result = powerSet([1]);
    console.log('result: ', result);

    expectSameSubsetSet(result, [[], [1]]);
  });

  it('should return all subsets for two elements', () => {
    const result = powerSet([1, 2]);

    expectSameSubsetSet(result, [[], [1], [2], [1, 2]]);
  });

  it('should return all subsets for three elements', () => {
    const result = powerSet([1, 2, 3]);

    expectSameSubsetSet(result, [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]);
  });
});
