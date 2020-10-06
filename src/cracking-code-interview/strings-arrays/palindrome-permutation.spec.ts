import { palindromePermutation } from './palindrome-permutation';

describe(palindromePermutation.name, () => {
  it('should return true for palindromes permutations', () => {
    const resultOne = palindromePermutation('tacocat');
    expect(resultOne).toBe(true);

    const resultTwo = palindromePermutation('asdffdsa');
    expect(resultTwo).toBe(true);

    const resultThree = palindromePermutation('a');
    expect(resultThree).toBe(true);

    const resultFour = palindromePermutation('aa');
    expect(resultFour).toBe(true);

    const resultFive = palindromePermutation('aaa');
    expect(resultFive).toBe(true);
  });

  it('should return false for non-palindromes', () => {
    const resultOne = palindromePermutation('tacocata');
    expect(resultOne).toBe(false);

    const resultTwo = palindromePermutation('asdfgdsa');
    expect(resultTwo).toBe(false);

    const resultThree = palindromePermutation('ab');
    expect(resultThree).toBe(false);
  });
});