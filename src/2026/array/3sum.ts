export type ThreeSumInput = number[];
export type ThreeSumResult = number[][];

export function threeSum(nums: ThreeSumInput): ThreeSumResult {
  nums.sort((a, b) => a - b);
  const results: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // we always want to skip dupes bruh
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const value = nums[i] + nums[left] + nums[right];
      if (value > 0) {
        // the value is too big, we means we need the right pointer to be smaller
        right--;
      } else if (left < right && value < 0) {
        // the value is too small, which means we need the left pointer to be bigger
        left++;
      } else {
        // it equals 0
        results.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        right--;
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return results;
}

// -4, -1, -1, 0, 1, 2
