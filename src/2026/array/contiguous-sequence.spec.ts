import { describe, expect, it } from 'vitest';
import { contiguousSequence } from './contiguous-sequence';

describe(contiguousSequence.name, () => {
  it('should return the CTCI example result', () => {
    const input = [2, -8, 3, -2, 4, -10];

    const result = contiguousSequence(input);

    expect(result).toBe(5);
  });

  it('should return the full sum when all values are positive', () => {
    const input = [1, 2, 3, 4];

    const result = contiguousSequence(input);

    expect(result).toBe(10);
  });

  it('should return 0 when all values are negative', () => {
    const input = [-5, -1, -8];

    const result = contiguousSequence(input);

    expect(result).toBe(-1);
  });

  it('should return 0 for an empty input array', () => {
    const result = contiguousSequence([]);

    expect(result).toBe(0);
  });

  it('should handle mixed values with the best subarray in the middle', () => {
    const input = [-4, 1, 2, 3, -2, 1, -5];

    const result = contiguousSequence(input);

    expect(result).toBe(6);
  });
});
