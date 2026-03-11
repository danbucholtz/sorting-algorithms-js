import { describe, expect, it } from 'vitest';
import { magicIndex } from './magic-index';

describe(magicIndex.name, () => {
  it('should return -1 for an empty array', () => {
    const result = magicIndex([]);

    expect(result).toBe(-1);
  });

  it('should return -1 when no magic index exists', () => {
    const input = [-1, 0, 1, 2, 6];

    const result = magicIndex(input);

    expect(result).toBe(-1);
  });

  it('should return the magic index for a distinct sorted array', () => {
    const input = [-1, 0, 2, 4, 7];

    const result = magicIndex(input);

    expect(result).toBe(2);
  });

  it.skip('should handle arrays with duplicate values', () => {
    const input = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13];

    const result = magicIndex(input);

    expect(result).toBe(2);
  });

  it('should handle a magic index at position 0', () => {
    const input = [0, 2, 3, 4];

    const result = magicIndex(input);

    expect(result).toBe(0);
  });
});
