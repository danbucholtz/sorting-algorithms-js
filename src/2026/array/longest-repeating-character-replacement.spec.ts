import { describe, expect, it } from 'vitest';
import { characterReplacement } from './longest-repeating-character-replacement';

describe(characterReplacement.name, () => {
  it('should return 4 for the first prompt example', () => {
    const result = characterReplacement('ABAB', 2);

    expect(result).toBe(4);
  });

  it('should return 4 for the second prompt example', () => {
    const result = characterReplacement('AABABBA', 1);

    expect(result).toBe(4);
  });

  it('should return 0 for an empty string', () => {
    const result = characterReplacement('', 3);

    expect(result).toBe(0);
  });

  it('should return the full string length when no replacements are needed', () => {
    const result = characterReplacement('AAAA', 0);

    expect(result).toBe(4);
  });

  it('should respect k equals 0 for mixed characters', () => {
    const result = characterReplacement('ABAA', 0);

    expect(result).toBe(2);
  });

  it('should allow replacing enough characters to use the full string', () => {
    const result = characterReplacement('ABBB', 2);

    expect(result).toBe(4);
  });

  it('should handle alternating characters with a limited replacement budget', () => {
    const result = characterReplacement('ABABBA', 2);

    expect(result).toBe(5);
  });

  it('should find the best window in the middle of the string', () => {
    const result = characterReplacement('BAAAB', 2);

    expect(result).toBe(5);
  });
});
