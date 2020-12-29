


// https://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form-set-2-o1-extra-space/
export function rearrangeNumbersAlternating(input: number[]) {
  const newArray: number[] = [];
  let maxIndex = input.length - 1;
  let minIndex = 0;
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      newArray.push(input[maxIndex]);
      maxIndex--;
    } else {
      newArray.push(input[minIndex]);
      minIndex++;
    }
  }
  return newArray;
}
