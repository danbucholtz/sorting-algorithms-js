import { describe, expect, it } from 'vitest';
import { removeDuplicates } from './remove-duplicates-from-sorted-array';

describe(removeDuplicates.name, () => {
  it('should return 2 and compact the first prompt example', () => {
    const nums = [1, 1, 2];

    const result = removeDuplicates(nums);
    console.log('result: ', result);

    expect(result).toBe(2);
    expect(nums.slice(0, result)).toEqual([1, 2]);
  });

  it('should return 5 and compact the second prompt example', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    const result = removeDuplicates(nums);

    expect(result).toBe(5);
    expect(nums.slice(0, result)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should return 0 for an empty array', () => {
    const nums: number[] = [];

    const result = removeDuplicates(nums);

    expect(result).toBe(0);
    expect(nums).toEqual([]);
  });

  it('should return the full length for an already unique sorted array', () => {
    const nums = [1, 2, 3, 4];

    const result = removeDuplicates(nums);

    expect(result).toBe(4);
    expect(nums.slice(0, result)).toEqual([1, 2, 3, 4]);
  });

  it('should collapse an array where every value is the same', () => {
    const nums = [7, 7, 7, 7];

    const result = removeDuplicates(nums);

    expect(result).toBe(1);
    expect(nums.slice(0, result)).toEqual([7]);
  });

  it('should handle negative values in sorted order', () => {
    const nums = [-3, -3, -1, -1, 0, 2, 2];

    const result = removeDuplicates(nums);

    expect(result).toBe(4);
    expect(nums.slice(0, result)).toEqual([-3, -1, 0, 2]);
  });
});
