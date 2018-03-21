

import { Comparator, defaultComparator } from './util';

export function selectionSort<T>(array: T[], comparator: Comparator<T> = defaultComparator): T[]{
  const newArray = array.concat();

  for (let i = 0; i < newArray.length; i++) {
    let minimumIndex = i;
    let swapped = false;
    for (let j = i; j < newArray.length - 1; j++) {
      const current = newArray[minimumIndex];
      const next = newArray[j + 1];
      const result = comparator(current, next);
      if (result > 0) {
        minimumIndex = j + 1;
        swapped = true;
      }
    }
    if (swapped) {
      const original = newArray[i];
      newArray[i] = newArray[minimumIndex];
      newArray[minimumIndex] = original;
    }
  }
  return newArray;
}