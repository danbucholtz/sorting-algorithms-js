// https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem/0

export function minimizeChocolateDiff(input: number[], numStudents: number) {
  input.sort((one, two) => one - two);
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = numStudents - 1; i < input.length; i++) {
    const startIndex = i - numStudents + 1;
    const endIndex = i;
    const diff = input[endIndex] - input[startIndex];
    if (diff <= minDiff) {
      minDiff = diff;
    }
  }
  return minDiff;
}