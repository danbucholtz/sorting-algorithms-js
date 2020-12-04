import { magicIndex } from './magic-index';

describe(magicIndex.name, () => {
  it('should return -1 if there is not a magic index', () => {
    const array = [100, 101, 102];
    const result = magicIndex(array);
    expect(result).toBe(-1);
  });
  

  it('should return true if there is a magic index in distinct array', () => {
    const array = [0, 1, 2];
    const result = magicIndex(array);
    expect(result).toBe(1);
  });

  it('should return true if there is a magic index in array', () => {
    const array = [0, 0, 2];
    const result = magicIndex(array);
    expect(result).toBe(2);
  });

  it('should return -1 if there is a magic index in array', () => {
    const array = [0, 0, 1];
    const result = magicIndex(array);
    expect(result).toBe(-1);
  });
});