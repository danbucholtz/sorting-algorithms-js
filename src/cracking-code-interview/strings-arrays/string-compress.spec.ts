import { stringCompress } from './string-compress';

describe(stringCompress.name, () => {
  it('should return the original string if shorter than the compress string', () => {
    const input = 'aab';
    const result = stringCompress(input);
    expect(result).toBe('aab');
  });

  it('should return the compressed string', () => {
    const input = 'aabcccccaaa';
    const result = stringCompress(input);
    expect(result).toBe('a2b1c5a3');
  });
});