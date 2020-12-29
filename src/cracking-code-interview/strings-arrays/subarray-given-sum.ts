// https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0


export function subarrayGivenSum(input: number[], sum: number) {
  let currentSum = 0;
  const subArray: number[] = [];
  for (let i = 0; i < input.length; i++) {
    currentSum += input[i];
    subArray.push(input[i]);
    if (currentSum > sum) {
      const toRemove = input[0];
      currentSum -= toRemove;
      subArray.splice(0, 1);
    }

    if (currentSum === sum) {
      return subArray;
    }
  }
  return [];
}