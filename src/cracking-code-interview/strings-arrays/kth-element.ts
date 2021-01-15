// https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/

import { MinHeap } from '../../heap';

// 1. Loop over items, add to min/max heap
// 2. Loop K times, popping off of the heap
export function kthElementMin(input: number[], k: number) {
  const heap = new MinHeap();
  for (const value of input) {
    heap.insert(value);
  }
  let toReturn: number = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < k; i++) {
    toReturn = heap.pop();
  }
  return toReturn;
}