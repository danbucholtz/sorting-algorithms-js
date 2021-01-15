// https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1

import { mergeSort } from '../../merge-sort';

export function inversionOfArray(input: number[]) {
  const numInversions = { count: 0};
  const newArray = inversionViaMergeSort(input, numInversions);
  return numInversions.count;
}

function inversionViaMergeSort(input: number[], state: { count: number}): number[] {
  if (input.length === 1) {
    return input;
  }

  const middle = Math.floor(input.length / 2);
  const left = inversionViaMergeSort(input.slice(0, middle), state);
  const right = inversionViaMergeSort(input.slice(middle), state);

  return merge(left, right, state);
}

function merge(left: number[], right: number[], state: { count: number}) {

  const sorted: number[] = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      // since the left is greater than the right, we had to "sort" it and thus an inversion
      sorted.push(right.shift());
      state.count++;
     
    }
  }
  return [
    ...sorted,
    ...left,
    ...right
  ]
}