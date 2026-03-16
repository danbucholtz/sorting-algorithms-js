import { describe, expect, it } from 'vitest';
import { containsDuplicate } from './contains-duplicate';

describe(containsDuplicate.name, () => {
  it('should return true for the first prompt example', () => {
    const nums = [1, 2, 3, 1];

    const result = containsDuplicate(nums);

    expect(result).toBe(true);
  });

  it('should return false for the second prompt example', () => {
    const nums = [1, 2, 3, 4];

    const result = containsDuplicate(nums);

    expect(result).toBe(false);
  });

  it('should return true for the third prompt example', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

    const result = containsDuplicate(nums);

    expect(result).toBe(true);
  });

  it('should return false for an empty array', () => {
    const result = containsDuplicate([]);

    expect(result).toBe(false);
  });

  it('should return false for a single-value array', () => {
    const result = containsDuplicate([42]);

    expect(result).toBe(false);
  });

  it('should return true when a duplicate appears later in the array', () => {
    const nums = [5, 8, 13, 21, 34, 8];

    const result = containsDuplicate(nums);

    expect(result).toBe(true);
  });
});
