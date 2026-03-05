import { describe, expect, it } from 'vitest';
import { longestConsequtiveSequence } from './longest-consecutive-sequence';

describe(longestConsequtiveSequence.name, () => {
  it('should return 4 for the first prompt example', () => {
    const nums = [100, 4, 200, 1, 3, 2];

    const result = longestConsequtiveSequence(nums);

    expect(result).toBe(4);
  });

  it('should return 9 for the second prompt example', () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

    const result = longestConsequtiveSequence(nums);

    expect(result).toBe(9);
  });

  it('should return 3 for the third prompt example', () => {
    const nums = [1, 0, 1, 2];

    const result = longestConsequtiveSequence(nums);

    expect(result).toBe(3);
  });

  it('should return 0 for an empty array', () => {
    const result = longestConsequtiveSequence([]);

    expect(result).toBe(0);
  });

  it('should return 1 when there are no consecutive neighbors', () => {
    const nums = [10, 30, 50];

    const result = longestConsequtiveSequence(nums);

    expect(result).toBe(1);
  });

  it('should handle negative values in the sequence', () => {
    const nums = [-2, -1, 7, 8, 9, 0, 1];

    const result = longestConsequtiveSequence(nums);

    expect(result).toBe(4);
  });
});
