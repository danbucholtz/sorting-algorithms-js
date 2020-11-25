

export function magicIndex(array: number[]) {
  return magicIndexImpl(array, 0, array.length - 1);
}

function magicIndexImpl(array: number[], start: number, end: number): number {
  console.log(`calling impl with ${start} and ${end}`);
  if (start > end || end < start) {
    return -1;
  }

  const midpoint = start + Math.floor((end-start)/2);
  console.log(`midpoint is ${midpoint}`);
  if (array[midpoint] === midpoint) {
    return midpoint;
  }
  if (midpoint < array[midpoint]) {
    return magicIndexImpl(array, start, midpoint - 1);
  }
  return magicIndexImpl(array, midpoint + 1, end);
}