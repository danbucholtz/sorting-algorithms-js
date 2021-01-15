
// https://practice.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1

export function arrayLeaders(input: number[]) {
  const leaders: number[] = [];
  let currentSum = 0;
  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] >= currentSum) {
      leaders.push(input[i]);
    }
    currentSum += input[i];
  }
  return leaders;
}