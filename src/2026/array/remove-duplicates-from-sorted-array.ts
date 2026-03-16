export type SortedArrayInput = number[];

export function removeDuplicates(nums: SortedArrayInput): number {
  // let currentValue = undefined;
  // const uniqueValues = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (!currentValue || nums[i] !== currentValue) {
  //     currentValue = nums[i];
  //     uniqueValues.push(nums[i]);
  //   }
  // }
  // return uniqueValues.length;
  let left = 0;
  let runner = 0;
  while (runner < nums.length) {
    // if (nums[runner] < nums[left]) {
    //   continue;
    // }
    if (nums[runner] !== nums[left]) {
      // we have a new value, we need to increment left and put it in there
      left++;
      nums[left] = nums[runner];
    }
    runner++;
  }
  let previous = undefined;
  let biggerThanPrevious = 0;
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (previous === undefined || value > previous) {
      previous = value;
      biggerThanPrevious++;
    }
  }
  return biggerThanPrevious;
}

// [1, 2, 3, 4, 5, 4, 5, 5]
