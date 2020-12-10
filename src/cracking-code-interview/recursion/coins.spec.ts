import { makeChangePermutations } from './coins';

describe(makeChangePermutations.name, () => {
  it('should return a single permutation for 3 cents', () => {
    const result = makeChangePermutations(3);
    expect(result).toBe(1);
  });

  it('should return two permutations for 5 cents', () => {
    const result = makeChangePermutations(5);
    expect(result).toBe(2);
  });

  it('should return two permutations for 10 cents', () => {
    const result = makeChangePermutations(10);
    expect(result).toBe(4); // (10), (5, 5), (5, 11111), (1111111111)
  });
});