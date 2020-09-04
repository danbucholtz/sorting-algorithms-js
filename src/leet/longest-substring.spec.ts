import { calculateLongestSubstring } from './longest-substring';

describe('Calculate Longest Substring', () => {
  it('should return 1 for a', () => {
    const result = calculateLongestSubstring('a');
    expect(result).toBe(1);
  });

  it('should return 1 for multiple letters in a row', () => {
    const resultTwo = calculateLongestSubstring('aa');
    expect(resultTwo).toBe(1);

    const resultThree = calculateLongestSubstring('aaaa');
    expect(resultThree).toBe(1);
  });

  it('should return the length of string when no duplicates', () => {
    const resultFour = calculateLongestSubstring('abc');
    expect(resultFour).toBe(3);
  });

  it('should return the length of string before duplicates', () => {
    const resultFour = calculateLongestSubstring('abca');
    expect(resultFour).toBe(3);

    const resultFive = calculateLongestSubstring('abcb');
    expect(resultFive).toBe(3);
  });

  it('should return three for pwwkew', () => {
    const resultFour = calculateLongestSubstring('pwwkew');
    expect(resultFour).toBe(3);
  });
    
});
