import { arrayLeaders } from './array-leaders';

describe(arrayLeaders.name, () => {
  it('should handle input one', () => {
    const results = arrayLeaders([16,17,4,3,5,2]);
    expect(results[0]).toBe(2);
    expect(results[1]).toBe(5);
    expect(results[2]).toBe(17);
    expect(results.length).toBe(3);
  });

  it('should handle input two', () => {
    const results = arrayLeaders([1,2,3,4,0]);
    expect(results[0]).toBe(0);
    expect(results[1]).toBe(4);
    expect(results.length).toBe(2);
  });
});