export type LongestSubstringInput = string;

export function lengthOfLongestSubstring(input: LongestSubstringInput): number {
  let currentSubstringLength = 0;
  let longestSubstringLength = 0;
  let left = 0;
  let runner = 0;
  const set = new Set<string>();
  while (runner < input.length) {
    const char = input[runner];
    while (set.has(char)) {
      // okay, this substring is over, so we need to move
      // the left pointer to the right until we have a unique substring again
      const leftChar = input[left];
      set.delete(leftChar);
      left++;
      currentSubstringLength--;
    }
    set.add(char);
    currentSubstringLength++;
    if (currentSubstringLength > longestSubstringLength) {
      longestSubstringLength = currentSubstringLength;
    }
    runner++;
  }
  return longestSubstringLength;
}
