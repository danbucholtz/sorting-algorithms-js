

import { Comparator, defaultComparator } from './util';

export function insertionSort<T>(array: T[], comparator: Comparator<T> = defaultComparator): T[]{
  const newArray: T[] = [];

  for (const current of array) {
    if (!newArray.length) {
      newArray.push(current);
    } else {
      let appended = false;
      for (let i = 0; i < newArray.length; i++) {
        const next = newArray[i];
        const result = comparator(current, next);
        if (result <= 0) {
          newArray.splice(i, 0, current);
          appended = true;
          break;
        }
      }
      if (!appended) {
        newArray.push(current);
      }
    }
  }

  return newArray;
}