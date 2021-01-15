import { kMaxLength } from 'buffer';


export function reverseArrayInGroups(input: number[], groupSize: number) {
  for (let i = 0; i < input.length; i = i + groupSize) {
    let left = i;
    let right = Math.min(left + groupSize - 1, input.length - 1);
    while (left < right) {
      const tmp = input[left];
      input[left] = input[right];
      input[right] = tmp;
      left++;
      right--;
    }
  }
  return input;
}