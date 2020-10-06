import { oneAway } from './one-away';

describe(oneAway.name, () => {
  it('should return true when one away', () => {
    const resultOne = oneAway('pale', 'ple');
    expect(resultOne).toBe(true);

    const resultTwo = oneAway('pales', 'pale');
    expect(resultTwo).toBe(true);

    const resultThree = oneAway('taco', 'tacos');
    expect(resultThree).toBe(true);

    const resultFour = oneAway('taco', 'baco');
    expect(resultFour).toBe(true);
  });

  it('shpuld return false when more thna one away', () => {
    const resultOne = oneAway('pale', 'piles');
    expect(resultOne).toBe(false);

    const resultTwo = oneAway('a', 'piles');
    expect(resultTwo).toBe(false);

    const resultThree = oneAway('pale', 'bake');
    expect(resultThree).toBe(false);
    
  });
});