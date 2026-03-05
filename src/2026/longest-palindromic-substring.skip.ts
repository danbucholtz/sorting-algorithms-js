import { describe, expect, it } from 'vitest';
import { longestPalindromicSubstring } from './longest-palindromic-substring';

describe(longestPalindromicSubstring.name, () => {
  it('should return bab or aba for the first prompt example', () => {
    const input = 'babad';

    const result = longestPalindromicSubstring(input);

    expect(['bab', 'aba']).toContain(result);
  });

  it('should return bb for the second prompt example', () => {
    const input = 'cbbd';

    const result = longestPalindromicSubstring(input);

    expect(result).toBe('bb');
  });

  it('should return the full string when input is already a palindrome', () => {
    const input = 'racecar';

    const result = longestPalindromicSubstring(input);

    expect(result).toBe('racecar');
  });

  it('should return one character when no longer palindrome exists', () => {
    const input = 'abcd';

    const result = longestPalindromicSubstring(input);

    expect(input).toContain(result);
    expect(result.length).toBe(1);
  });

  it('should handle an even length palindrome', () => {
    const input = 'abccba';

    const result = longestPalindromicSubstring(input);

    expect(result).toBe('abccba');
  });

  it('should handle digits and letters', () => {
    const input = 'a123454321z';

    const result = longestPalindromicSubstring(input);

    expect(result).toBe('123454321');
  });
});
