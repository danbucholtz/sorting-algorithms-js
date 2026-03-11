import { describe, expect, it } from 'vitest';
import { solution } from './array-manipulation';

describe(solution.name, () => {
  it('should match the provided example', () => {
    const a = [4, 0, 1, -2, 3];

    const result = solution(a);

    expect(result).toEqual([4, 5, -1, 2, 1]);
  });

  it('should handle an empty array', () => {
    const result = solution([]);

    expect(result).toEqual([]);
  });

  it('should handle a single-element array', () => {
    const result = solution([7]);

    expect(result).toEqual([7]);
  });

  it('should handle two elements', () => {
    const result = solution([1, 2]);

    expect(result).toEqual([3, 3]);
  });

  it('should handle negative values and zeros', () => {
    const result = solution([-5, 0, 5, 0, -5]);

    expect(result).toEqual([-5, 0, 5, 0, -5]);
  });

  it('should not mutate the original input array', () => {
    const a = [3, 1, 2];
    const copy = [...a];

    solution(a);

    expect(a).toEqual(copy);
  });
});
