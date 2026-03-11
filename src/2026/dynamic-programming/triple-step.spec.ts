import { describe, expect, it } from 'vitest';
import { tripleStep } from './triple-step';

describe(tripleStep.name, () => {
  it('should return 1 for 0 steps', () => {
    expect(tripleStep(0)).toBe(1);
  });

  it('should return 0 for negative steps', () => {
    expect(tripleStep(-1)).toBe(0);
    expect(tripleStep(-5)).toBe(0);
  });

  it('should match known small values', () => {
    expect(tripleStep(1)).toBe(1);
    expect(tripleStep(2)).toBe(2);
    expect(tripleStep(3)).toBe(4);
    expect(tripleStep(4)).toBe(7);
    expect(tripleStep(5)).toBe(13);
  });

  it('should handle a larger value', () => {
    expect(tripleStep(10)).toBe(274);
  });
});
