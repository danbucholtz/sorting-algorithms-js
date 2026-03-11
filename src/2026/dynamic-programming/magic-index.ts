export function magicIndex(array: number[]): number {
  // the array is sorted, so we can binary search this bitch and hopefully find it faster
  return binarySearch(0, array.length - 1, array);
}

function binarySearch(startIndex: number, endIndex: number, array: number[]): number {
  if (startIndex > endIndex) {
    return -1;
  }
  const midpoint = startIndex + Math.floor((endIndex - startIndex) / 2);
  if (array[midpoint] === midpoint) {
    return midpoint;
  } else if (array[midpoint] > midpoint) {
    return binarySearch(startIndex, midpoint - 1, array);
  }
  {
    return binarySearch(midpoint + 1, endIndex, array);
  }
}
