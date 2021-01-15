import { kthElementMin } from './kth-element';

describe(kthElementMin.name, () => {
  it('should return the kth element one', () => {
    const input = [1, 2, 47, 3, 83, 4, 91, 5, 6];
    const result = kthElementMin(input, 1);
    expect(result).toBe(1);
  });

  it('should return the kth element one', () => {
    const input = [1, 2, 47, 3, 83, 4, 91, 5, 6];
    const result = kthElementMin(input, 3);
    expect(result).toBe(3);
  });
});