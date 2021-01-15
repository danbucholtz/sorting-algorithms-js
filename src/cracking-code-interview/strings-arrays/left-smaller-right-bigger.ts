// https://practice.geeksforgeeks.org/problems/unsorted-array/0


export function leftSmallerRightBigger(input: number[]) {
  const leftMax: number[] = [];
  leftMax[0] = input[0];
  for (let i = 1; i < input.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], input[i]);
  }

  const rightMin: number[] = [];
  rightMin[input.length - 1] = input[input.length - 1];
  for (let i = input.length - 2; i >= 0; i--) {
    const value = typeof rightMin[i + 1] === 'number' ? rightMin[i + 1] : Number.MAX_SAFE_INTEGER;
    rightMin[i] = Math.min(value, input[i]);
  }


  for (let i = 1; i < leftMax.length; i++) {
    if (leftMax[i] === rightMin[i]) {
      return i;
    }
  }

  return -1;
}