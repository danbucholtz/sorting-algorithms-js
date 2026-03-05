import { describe, expect, it } from 'vitest';
import { twoSum } from './two-sum';

describe(twoSum.name, () => {
  it('should handle a basic case (Example 1)', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);

    // We check for both possibilities since the problem allows any order
    const possibleAnswers = [
      { indexOne: 0, indexTwo: 1 },
      { indexOne: 1, indexTwo: 0 }
    ];
    expect(possibleAnswers).toContainEqual(result);
  });

  it('should handle elements that are not adjacent (Example 2)', () => {
    const nums = [3, 2, 4];
    const target = 6;
    const result = twoSum(nums, target);

    const possibleAnswers = [
      { indexOne: 1, indexTwo: 2 },
      { indexOne: 2, indexTwo: 1 }
    ];
    expect(possibleAnswers).toContainEqual(result);
  });

  it('should handle duplicate values (Example 3)', () => {
    const nums = [3, 3];
    const target = 6;
    const result = twoSum(nums, target);

    const possibleAnswers = [
      { indexOne: 0, indexTwo: 1 },
      { indexOne: 1, indexTwo: 0 }
    ];
    expect(possibleAnswers).toContainEqual(result);
  });

  it('should handle negative numbers', () => {
    const nums = [-1, -2, -3, -4, -5];
    const target = -8;
    const result = twoSum(nums, target);

    // -3 + -5 = -8 (indices 2 and 4)
    const possibleAnswers = [
      { indexOne: 2, indexTwo: 4 },
      { indexOne: 4, indexTwo: 2 }
    ];
    expect(possibleAnswers).toContainEqual(result);
  });

  it('should work with large constraints', () => {
    const nums = [1000000000, 500, -1000000000];
    const target = 0;
    const result = twoSum(nums, target);

    const possibleAnswers = [
      { indexOne: 0, indexTwo: 2 },
      { indexOne: 2, indexTwo: 0 }
    ];
    expect(possibleAnswers).toContainEqual(result);
  });
});