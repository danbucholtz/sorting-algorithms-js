import { describe, expect, it } from 'vitest';
import { lengthOfLongestSubstring } from './longest-substring-without-repeating-characters';

describe(lengthOfLongestSubstring.name, () => {
  it('should return 3 for the first prompt example', () => {
    const input = 'abcabcbb';

    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(3);
  });

  it('should return 1 for the second prompt example', () => {
    const input = 'bbbbb';

    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(1);
  });

  it('should return 3 for the third prompt example', () => {
    const input = 'pwwkew';

    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(3);
  });

  it('should return 0 for an empty string', () => {
    const result = lengthOfLongestSubstring('');

    expect(result).toBe(0);
  });

  it('should treat a single space as a valid one-character substring', () => {
    const result = lengthOfLongestSubstring(' ');

    expect(result).toBe(1);
  });

  it('should handle repeated characters after the window has moved', () => {
    const input = 'dvdf';

    const result = lengthOfLongestSubstring(input);

    expect(result).toBe(3);
  });
});
