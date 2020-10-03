import { getLongestPalindrome, findPalindrome } from './longest-palindrome';

describe('longest palindrome', () => {
  describe(getLongestPalindrome.name, () => {
    it('should return racecar when input is racecar', () => {
      const input = `racecar`;
      const result = getLongestPalindrome(input);
      expect(result).toBe('racecar');
    });

    it('should return racecar when input is aracecarz', () => {
      const input = `aracecarz`;
      const result = getLongestPalindrome(input);
      expect(result).toBe('racecar');
    });

    it('should return aba when input is abacc', () => {
      const input = `abacc`;
      const result = getLongestPalindrome(input);
      expect(result).toBe('aba');
    });
  })
  describe(findPalindrome.name, () => {
    it('should return a when given index 0', () => {
      const output = findPalindrome(0, 'aba');
      expect(output).toBe('a');
    });

    it('should return aba when given index 1', () => {
      const output = findPalindrome(1, 'aba');
      expect(output).toBe('aba');
    });

    it('should return bab when given index 1', () => {
      const output = findPalindrome(1, 'babad');
      expect(output).toBe('bab');
    });
    it('should return bab when given index 2', () => {
      const output = findPalindrome(2, 'babad');
      expect(output).toBe('aba');
    });
    
  });
});