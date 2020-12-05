import { parens } from './parens';

describe(parens.name, () => {
  it('should return a single pair for input 1', () => {
    const result = parens(1);
    expect(result.size).toBe(1);
    const array = Array.from(result);
    expect(array[0]).toBe('()');
  });

  it('should return two pair for input 2', () => {
    const result = parens(2);
    const array = Array.from(result);
    expect(array[0]).toBe('(())');
    expect(array[1]).toBe('()()');
  });
  

  it('should return something for 3', () => {
    const result = parens(3);
    const array = Array.from(result);
    expect(result.size).toBe(5);
    expect(array[0]).toBe('(()())');
    expect(array[1]).toBe('((()))');
    expect(array[2]).toBe('(())()');
    expect(array[3]).toBe('()(())');
    expect(array[4]).toBe('()()()');
  });
  
});