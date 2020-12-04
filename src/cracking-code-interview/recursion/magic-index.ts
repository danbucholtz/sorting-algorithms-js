

export function magicIndex(array: number[]) {
  return magicIndexImpl(array, 0, array.length - 1);
}

function magicIndexImpl(array: number[], start: number, end: number): number {
  if (start > end || end < start) {
    return -1;
  }

  const midpoint = start + Math.floor((end-start)/2);
  if (array[midpoint] === midpoint) {
    return midpoint;
  }
  if (midpoint < array[midpoint]) {
    return magicIndexImpl(array, start, midpoint - 1);
  }
  return magicIndexImpl(array, midpoint + 1, end);
}