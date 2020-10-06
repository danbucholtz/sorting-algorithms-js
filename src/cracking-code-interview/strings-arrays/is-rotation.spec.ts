import { isRotation } from './is-rotation';

describe(isRotation.name, () => {
  it('should return false when it is not a rotation', () => {
    const resultOne = isRotation('banana', 'spaghetti');
    expect(resultOne).toBe(false);

    const resultTwo = isRotation('llwaterfall', 'waterfall');
    expect(resultTwo).toBe(false);
  });

  it('should return true when it is a rotation', () => {
    const resultOne = isRotation('waterfall', 'waterfall');
    expect(resultOne).toBe(true);

    const resultTwo = isRotation('llwaterfa', 'waterfall');
    expect(resultTwo).toBe(true);
  });
});