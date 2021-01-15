import { equilibrium } from './equilibrium';

describe(equilibrium.name, () => {
  it('shoudl handle an array with one element', () => {
    const index = equilibrium([10]);
    expect(index).toBe(0);
  });

  it('should return negative 1 if no equilibirum', () => {
    const input = [1, 17, 5, 2, 2];
    const index = equilibrium(input);
    expect(index).toBe(-1);
  });
  

  it('should handle input 1', () => {
    const input = [1, 3, 5, 2, 2];
    const index = equilibrium(input);
    expect(index).toBe(2);
  })

  it('should handle input 2', () => {
    const input = [1, 3, 8, 1000, 6, 4, 2];
    const index = equilibrium(input);
    expect(index).toBe(3);
  })
});