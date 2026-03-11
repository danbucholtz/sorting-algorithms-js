export function contiguousSequence(input: number[]): number {
  if (!input.length) {
    return 0;
  }
  let largestSubsequenceValue = input[0];
  let currentSubsequenceValue = input[0];
  for (let i = 1; i < input.length; i++) {
    const value = input[i];
    currentSubsequenceValue = Math.max(currentSubsequenceValue + value, value);
    largestSubsequenceValue = Math.max(largestSubsequenceValue, currentSubsequenceValue);
  }
  return largestSubsequenceValue;
}
