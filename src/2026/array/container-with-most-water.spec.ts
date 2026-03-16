import { describe, expect, it } from 'vitest';
import { maxArea } from './container-with-most-water';

describe(maxArea.name, () => {
  it('should return 49 for the prompt example', () => {
    const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    const result = maxArea(heights);

    expect(result).toBe(49);
  });

  it('should return 1 for the second prompt example', () => {
    const heights = [1, 1];

    const result = maxArea(heights);

    expect(result).toBe(1);
  });

  it('should handle taller lines near the middle', () => {
    const heights = [2, 3, 10, 5, 7, 8, 9];

    const result = maxArea(heights);

    expect(result).toBe(36);
  });

  it('should handle strictly increasing heights', () => {
    const heights = [1, 2, 3, 4, 5];

    const result = maxArea(heights);

    expect(result).toBe(6);
  });

  it('should handle strictly decreasing heights', () => {
    const heights = [5, 4, 3, 2, 1];

    const result = maxArea(heights);

    expect(result).toBe(6);
  });

  it('should handle zeros in the input', () => {
    const heights = [0, 2, 0, 4, 0, 3, 0];

    const result = maxArea(heights);

    expect(result).toBe(8);
  });
});
