

import { Comparator, defaultComparator } from './util';

export function bubbleSort<T>(array: T[], comparator: Comparator<T> = defaultComparator): T[]{
  const newArray = array.concat();

  for (const _element of newArray) {
    let swapped = false;
    for (let j = 0; j < newArray.length - 1; j++) {
      const current = newArray[j];
      const next = newArray[j + 1];
      const result = comparator(current, next);
      if (result > 0) {
        swapped = true;
        newArray[j + 1] = current;
        newArray[j] = next;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return newArray;
}