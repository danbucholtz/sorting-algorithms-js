

/* assumption is all numbers are included in order
so 1, 2, 3, 4, 5 not 1, 3, 5, 7 (2 and 6 are missing and break this logic)
*/
// https://www.geeksforgeeks.org/rearrange-array-maximum-minimum-form-set-2-o1-extra-space/
export function rearrangeNumbersAlternatingNoSpace(input: number[]) {
  let minValue = input[0];
  let maxValue = input[input.length - 1];
  
  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      input[i] = maxValue;
      maxValue--;
    } else {
      input[i] = minValue;
      minValue++;
    }
  }
}
