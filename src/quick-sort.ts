
export function quickSort(array: number[]) {
  const newArray = array.concat([]);
  quickSortImpl(newArray, 0, array.length - 1);
  return newArray;
}

function quickSortImpl(array: number[], startIndex: number, endIndex: number) {
  if (startIndex >= endIndex) {
    return;
  }

  const pivotIndex = Math.floor((startIndex + endIndex) / 2);
  const pivotValue = array[pivotIndex];
  const partitionIndex = partitionArray(array, startIndex, endIndex, pivotValue);
  quickSortImpl(array, startIndex, partitionIndex - 1);
  quickSortImpl(array, partitionIndex, endIndex);
}

function partitionArray(array: number[], startIndex: number, endIndex: number, pivotValue: number) {
  while (startIndex <= endIndex) {
    while(array[startIndex] < pivotValue) {
      startIndex++;
    }

    while(array[endIndex] > pivotValue) {
      endIndex--;
    }

    if (startIndex <= endIndex) {
      // swap 'em
      const startValue = array[startIndex];
      const endValue = array[endIndex];
      array[endIndex] = startValue;
      array[startIndex] = endValue;

      startIndex++;
      endIndex--;
    }
  }
  return startIndex;
}