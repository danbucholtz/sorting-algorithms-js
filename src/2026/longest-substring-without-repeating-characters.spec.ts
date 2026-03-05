import { describe, expect, it } from 'vitest';
import { longestSubstringWithoutRepeatingCharacters } from './longest-substring-without-repeating-characters';

describe(longestSubstringWithoutRepeatingCharacters.name, () => {
  it('should return 3 for the first prompt example', () => {
    const input = 'abcabcbb';

    const result = longestSubstringWithoutRepeatingCharacters(input);

    expect(result).toBe(3);
  });

  it('should return 1 for the second prompt example', () => {
    const input = 'bbbbb';

    const result = longestSubstringWithoutRepeatingCharacters(input);

    expect(result).toBe(1);
  });

  it('should return 3 for the third prompt example', () => {
    const input = 'pwwkew';

    const result = longestSubstringWithoutRepeatingCharacters(input);

    expect(result).toBe(3);
  });

  it('should return 0 for an empty string', () => {
    const result = longestSubstringWithoutRepeatingCharacters('');

    expect(result).toBe(0);
  });

  it('should handle spaces as valid characters', () => {
    const input = 'a b c a';

    const result = longestSubstringWithoutRepeatingCharacters(input);

    expect(result).toBe(3);
  });

  it('should handle symbols and digits', () => {
    const input = 'a1!a2@';

    const result = longestSubstringWithoutRepeatingCharacters(input);

    expect(result).toBe(5);
  });
});
