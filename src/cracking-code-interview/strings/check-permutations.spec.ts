import { checkPermutations } from './check-permutations';

describe(checkPermutations.name, () => {
  it('should return true for strings that are permutations of eachother', () => {
    const resultOne = checkPermutations('a', 'a');
    expect(resultOne).toBe(true);

    const resultTwo = checkPermutations('ab', 'ba');
    expect(resultTwo).toBe(true);

    const resultThree = checkPermutations('abc', 'abc');
    expect(resultThree).toBe(true);

    const resultFour = checkPermutations('abc', 'cab');
    expect(resultFour).toBe(true);

    const resultFive = checkPermutations('ab c', ' cab');
    expect(resultFive).toBe(true);
  });

  it('should return false for strings that arent permutations', () => {
    const resultOne = checkPermutations('a', 'b');
    expect(resultOne).toBe(false);

    const resultTwo = checkPermutations('ab', 'ca');
    expect(resultTwo).toBe(false);

    const resultThree = checkPermutations('abc', 'ab');
    expect(resultThree).toBe(false);

    const resultFour = checkPermutations('abc', 'ccb');
    expect(resultFour).toBe(false);

    const resultFive = checkPermutations('ab c', ' cat');
    expect(resultFive).toBe(false);
    
  });
});