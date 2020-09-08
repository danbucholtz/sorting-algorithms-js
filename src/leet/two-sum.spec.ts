import { twoSum } from './two-sum';

describe(twoSum.name, () => {
  it('should return 2 and 3', () => {
    const input = [1, 2, 3, 5];
    const target = 5;
    const result = twoSum(input, target);
    expect(result[0]).toBe(2);
    expect(result[1]).toBe(3); 
  });

  it('should return null', () => {
    const input = [1, 2, 3, 5, 11];
    const target = 71;
    const result = twoSum(input, target);
    expect(result).toBe(null); 
  });
});