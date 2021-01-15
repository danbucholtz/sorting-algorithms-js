import { leftSmallerRightBigger } from './left-smaller-right-bigger';

describe(leftSmallerRightBigger.name, () => {
  it('should handle the basic case one', () => {
    const input = [2, 5, 7];
    const result = leftSmallerRightBigger(input);
    expect(result).toBe(1); // index 1
  });

  it('should handle the basic case two', () => {
    const input = [4, 2, 5, 7];
    const result = leftSmallerRightBigger(input);
    expect(result).toBe(2); // index 2
  });
});