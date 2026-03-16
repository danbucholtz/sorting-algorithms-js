import { describe, expect, it } from 'vitest';
import { isPalindrome } from './valid-palindrome';

describe(isPalindrome.name, () => {
  it('should return true for the first prompt example', () => {
    const input = 'A man, a plan, a canal: Panama';

    const result = isPalindrome(input);

    expect(result).toBe(true);
  });

  it('should return false for the second prompt example', () => {
    const input = 'race a car';

    const result = isPalindrome(input);

    expect(result).toBe(false);
  });

  it('should return true for the empty normalization prompt example', () => {
    const input = ' ';

    const result = isPalindrome(input);

    expect(result).toBe(true);
  });

  it('should ignore punctuation and casing', () => {
    const input = "No 'x' in Nixon";

    const result = isPalindrome(input);

    expect(result).toBe(true);
  });

  it('should return false for a non-palindrome with matching outer characters', () => {
    const input = 'abca';

    const result = isPalindrome(input);

    expect(result).toBe(false);
  });

  it('should return true for a numeric alphanumeric palindrome', () => {
    const input = '12321';

    const result = isPalindrome(input);

    expect(result).toBe(true);
  });
});
