import { minimizeChocolateDiff } from './chocolate-distribution';

describe(minimizeChocolateDiff.name, () => {
  it('should handle basic input one', () => {
    const input = [3, 4, 1, 9, 56, 7, 9, 12];
    const result = minimizeChocolateDiff(input, 5);
    expect(result).toBe(6);
  });

  it('should handle basic input two', () => {
    const input = [7, 3, 2, 4, 9, 12, 56];
    const result = minimizeChocolateDiff(input, 3);
    expect(result).toBe(2);
  });
});