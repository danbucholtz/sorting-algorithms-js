import { numberSwapper } from './number-swapper';


describe(numberSwapper.name, () => {
  it('should swap the two values', () => {
    const result = numberSwapper({ one: 10, two: 5});
    expect(result.one).toBe(5);
    expect(result.two).toBe(10);
  });
});