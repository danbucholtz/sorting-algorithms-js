import { describe, expect, it } from 'vitest';
import { threeSum } from './3sum';

function normalizeTriplets(triplets: number[][]): number[][] {
  return triplets
    .map((triplet) => [...triplet].sort((a, b) => a - b))
    .sort((tripletOne, tripletTwo) => {
      for (let i = 0; i < tripletOne.length; i++) {
        const difference = tripletOne[i] - tripletTwo[i];
        if (difference !== 0) {
          return difference;
        }
      }

      return 0;
    });
}

describe(threeSum.name, () => {
  it('should return the first prompt example triplets', () => {
    const nums = [-1, 0, 1, 2, -1, -4];

    const result = threeSum(nums);

    expect(normalizeTriplets(result)).toEqual(
      normalizeTriplets([
        [-1, -1, 2],
        [-1, 0, 1],
      ]),
    );
  });

  it('should return an empty array for the second prompt example', () => {
    const nums = [0, 1, 1];

    const result = threeSum(nums);

    expect(result).toEqual([]);
  });

  it('should return a single all-zero triplet for the third prompt example', () => {
    const nums = [0, 0, 0];

    const result = threeSum(nums);

    expect(normalizeTriplets(result)).toEqual(normalizeTriplets([[0, 0, 0]]));
  });

  it('should return an empty array when the input has fewer than three values', () => {
    expect(threeSum([])).toEqual([]);
    expect(threeSum([1])).toEqual([]);
    expect(threeSum([1, -1])).toEqual([]);
  });

  it('should not return duplicate triplets when repeated values exist', () => {
    const nums = [-2, 0, 0, 2, 2];

    const result = threeSum(nums);

    expect(normalizeTriplets(result)).toEqual(normalizeTriplets([[-2, 0, 2]]));
  });

  it('should find multiple valid triplets in a larger input', () => {
    const nums = [-4, -2, -1, 0, 1, 2, 3, 5];

    const result = threeSum(nums);

    expect(normalizeTriplets(result)).toEqual(
      normalizeTriplets([
        [-4, -1, 5],
        [-4, 1, 3],
        [-2, -1, 3],
        [-2, 0, 2],
        [-1, 0, 1],
      ]),
    );
  });
});
