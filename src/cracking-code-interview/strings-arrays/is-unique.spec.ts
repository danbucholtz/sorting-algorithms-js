import { isUnique } from './is-unique';

describe(isUnique.name, () => {
  it('should return true for a unique string', () => {
    const resultOne = isUnique('abc');
    expect(resultOne).toBe(true);

    const resultTwo = isUnique('d');
    expect(resultTwo).toBe(true);

    const resultThree = isUnique('defghijk');
    expect(resultThree).toBe(true);
  });

  it('should return false for a unique string', () => {
    const resultOne = isUnique('aa');
    expect(resultOne).toBe(false);

    const resultTwo = isUnique('abca');
    expect(resultTwo).toBe(false);
  });
});