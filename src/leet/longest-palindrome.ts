
export function getLongestPalindrome(input: string) {
  let longestPalindrome = '';
  for (let i = 0; i < input.length; i++) {
    const palindrome = findPalindrome(i, input);
    if (palindrome.length > longestPalindrome.length) {
      longestPalindrome = palindrome;
    }
  }
  return longestPalindrome;
}

export function findPalindrome(startIndex: number, input: string) {
  let minusOne = startIndex - 1;
  let plusOne = startIndex + 1;
  while (true) {
    if (minusOne < 0 || plusOne >= input.length || input[minusOne] !== input[plusOne]) {
      return input.slice(minusOne + 1, plusOne);
    }
    minusOne--;
    plusOne++;
  }
}

// Since we do a loop-within-a-loop, the big O is n^2
// Since we aren't persisting anything extra in memory, we are using 0(1) space complexity