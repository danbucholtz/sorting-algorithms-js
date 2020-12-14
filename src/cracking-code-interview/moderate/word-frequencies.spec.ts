import { wordFrequencies } from './word-frequencies';


describe(wordFrequencies.name, () => {
  it('should return the number of times the word occurs', () => {
    const resultOne = wordFrequencies('dog');
    expect(resultOne).toBe(1);

    const resultTwo = wordFrequencies('high');
    expect(resultTwo).toBe(4);

    const resultThree = wordFrequencies('taco');
    expect(resultThree).toBe(0);
  });
});