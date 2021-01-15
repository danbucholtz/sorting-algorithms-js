
// https://practice.geeksforgeeks.org/problems/pythagorean-triplet3018/1
export function pythagoreanTriplet(input: number[]) {
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i] * input[i];
  }
  input.sort((one, two) => one - two);

  for (let i = input.length - 1; i >= 0; i--) {
    const value = input[i];
    // walk the array and try to find two values that add up to 
    let left = 0;
    let right = i - 1;
    while (left < right) {
      const leftValue = input[left];
      const rightValue = input[right];
      if (leftValue + rightValue === value) {
        return true;
      }

      if (leftValue + rightValue < value) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}