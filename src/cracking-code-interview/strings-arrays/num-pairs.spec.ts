import { numPairs } from './num-pairs';

describe(numPairs.name, () => {
  it('should handle the basic input', () => {
    const one = [2, 1, 6];
    const two = [1, 5];
    const result = numPairs(one, two);
    expect(result).toBe(3);
  });

  it('should handle basic input two', () => {
    const one = [2, 3, 4, 5];
    const two = [1, 2, 3];
    const result = numPairs(one, two);
    expect(result).toBe(5);
  });
})
