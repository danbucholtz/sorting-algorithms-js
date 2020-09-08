// https://leetcode.com/problems/two-sum/

export function twoSum(numbersArray: number[], sum: number) {
  const set: Set<number> = new Set();
  for (const num of numbersArray) {
    const compliment = sum - num
    if (set.has(compliment)) {
      return num > compliment ? [compliment, num] : [num, compliment];
    }
    set.add(num);
  }
  return null;
}