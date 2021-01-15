import { pythagoreanTriplet } from './pythagorean-triple';

describe(pythagoreanTriplet.name, () => {
  it('should return false when there isnt one', () => {
    const result = pythagoreanTriplet([3, 8, 5]);
    expect(result).toBe(false);
  })

  it('should return true when there is one', () => {
    const result = pythagoreanTriplet([3, 2, 4, 6, 5]);
    expect(result).toBe(true);
  });
});