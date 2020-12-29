import { maxSumSubArray } from './kadane';

describe(maxSumSubArray.name, () => {
  it('should pass test case one', () => {
    const array = [1, 2, 3, -2, 5];
    const result = maxSumSubArray(array);
    expect(result).toBe(9);
  });

  it('should pass test case two', () => {
    const array = [5, -3];
    const result = maxSumSubArray(array);
    expect(result).toBe(5);
  });

  it('should pass test case 3', () => {
    const array = [-1, -2, -3, -4];
    const result = maxSumSubArray(array);
    expect(result).toBe(-1);
  })
});