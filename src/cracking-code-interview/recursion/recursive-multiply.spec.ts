import { recursiveMultiply } from './recursive-multiply';

describe(recursiveMultiply.name, () => {
  it('should return 1 when given 1, 1', () => {
    const value = recursiveMultiply(1, 1);
    expect(value).toBe(1);
  });

  it('should return 4 when given 2, 2', () => {
    const value = recursiveMultiply(2, 2);
    expect(value).toBe(4);
  });

  it('should return 200 when given 20, 10', () => {
    const value = recursiveMultiply(20, 10);
    expect(value).toBe(200);
  });

  it('should return 200 when given 10, 20', () => {
    const value = recursiveMultiply(10, 20);
    expect(value).toBe(200);
  });
});