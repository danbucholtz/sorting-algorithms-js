// https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1

// Given an array arr of N integers. Find the contiguous sub-array with maximum sum.

export function maxSumSubArray(input: number[]) {
  let globalMax = Number.MIN_SAFE_INTEGER;
  let localMax = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < input.length; i++) {
    localMax = Math.max(input[i], localMax + input[i]);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }
  return globalMax;
}