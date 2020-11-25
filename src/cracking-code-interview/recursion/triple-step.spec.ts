import { tripleStep } from './triple-step';

describe(tripleStep.name, () => {
  it('should return the total number of permutations of steps (order doesnt matter)', () => {
    const result = tripleStep(1); // (1)
    expect(result).toBe(1);

    const resultTwo = tripleStep(2); // (1, 1), (2)
    expect(resultTwo).toBe(2);

    const resultThree = tripleStep(3); // (1, 1, 1), (1, 2), (3)
    expect(resultThree).toBe(4);

    const resultFour = tripleStep(4); // (1,1,1,1), (1, 1, 2), (1, 2, 1), (2, 1, 1), (2, 2), (1, 3), (3, 1)
    expect(resultFour).toBe(7);
    
  });
});

