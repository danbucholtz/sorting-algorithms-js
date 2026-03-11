import { describe, expect, it } from 'vitest';
import { countPatternMatches } from './string-pattern-matching';

describe(countPatternMatches.name, () => {
  it('should count a single direct match', () => {
    const result = countPatternMatches('01', 'am');

    expect(result).toBe(1);
  });

  it('should count multiple overlapping matches', () => {
    const result = countPatternMatches('01', 'abec');

    // windows of length 2: "ab"(match), "be"(no), "ec"(match)
    expect(result).toBe(2);
  });

  it('should treat y as a vowel', () => {
    const result = countPatternMatches('0', 'yyy');

    expect(result).toBe(3);
  });

  it('should return 0 when pattern is longer than source', () => {
    const result = countPatternMatches('0101', 'abc');

    expect(result).toBe(0);
  });

  it('should return 0 when no substring matches the vowel/consonant pattern', () => {
    const result = countPatternMatches('00', 'bcdfg');

    expect(result).toBe(0);
  });

  it('should handle longer exact-length pattern checks', () => {
    const result = countPatternMatches('010', 'aba');

    expect(result).toBe(1);
  });
});
