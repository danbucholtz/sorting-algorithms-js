export function longestPalindromicSubstring(input: string): string {
  let longestSubstring = '';

  for (let i = 0; i < input.length; i++) {
    const oddExpansion = expand(i, i, input);
    const evenExpansion = expand(i, i + 1, input);
    const expansionToUse =
      oddExpansion.length > evenExpansion.length ? oddExpansion : evenExpansion;
    if (expansionToUse.length > longestSubstring.length) {
      longestSubstring = expansionToUse;
    }
  }
  return longestSubstring;
}

function expand(leftIndex: number, rightIndex: number, input: string): string {
  while (leftIndex >= 0 && rightIndex < input.length && input[leftIndex] === input[rightIndex]) {
    leftIndex = leftIndex - 1;
    rightIndex = rightIndex + 1;
  }

  return input.substring(leftIndex, rightIndex);
}

('aba');
