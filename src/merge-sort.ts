

export function mergeSort(input: number[]): number[] {
  if (input.length === 1) {
    return input;
  }  
  const middle = Math.floor(input.length / 2);
  const left = mergeSort(input.slice(0, middle));
  const right = mergeSort(input.slice(middle));

  return merge(left, right);
}

function merge(left: number[], right: number[]) {
  const sorted: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    }
    else {
      sorted.push(right.shift());
    }
  };
  return [
    ...sorted,
    ...left,
    ...right
  ];
}
