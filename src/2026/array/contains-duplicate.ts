export type ContainsDuplicateInput = number[];

export function containsDuplicate(nums: ContainsDuplicateInput): boolean {
  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (set.has(number)) {
      return true;
    }
    set.add(number);
  }
  return false;
}
