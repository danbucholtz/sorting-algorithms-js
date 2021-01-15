
// https://practice.geeksforgeeks.org/problems/equilibrium-point-1587115620/1
export function equilibrium(input: number[]) {
  if (input.length === 1) {
    return 0;
  }
  // loop over and sum up the array
  let total = 0;
  for (const value of input) {
    total += value;
  }

  let current = 0;
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    current += value;
    if (current === total) {
      return i;
    }
    total -= value;
  }
  return -1;
}