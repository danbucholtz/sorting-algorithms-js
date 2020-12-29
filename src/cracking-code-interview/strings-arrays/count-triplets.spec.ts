import { countTriplets } from './count-triplets';

describe(countTriplets.name, () => {
  it('should return 0 for basic case', () => {
    const result = countTriplets([1, 3, 10]);
    expect(result).toBe(0);
  });

  it('should work for the basic case', () => {
    const result = countTriplets([1, 3, 4, 5, 7, 11]);
    expect(result).toBe(4);
  });
});