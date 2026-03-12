import { describe, expect, it } from 'vitest';
import { recursiveMultiply } from './recursive-multiply';

describe(recursiveMultiply.name, () => {
  it('should handle zero values', () => {
    expect(recursiveMultiply(0, 0)).toBe(0);
    expect(recursiveMultiply(7, 0)).toBe(0);
    expect(recursiveMultiply(0, 9)).toBe(0);
  });

  it('should handle identity multiplication', () => {
    expect(recursiveMultiply(1, 1)).toBe(1);
    expect(recursiveMultiply(1, 8)).toBe(8);
    expect(recursiveMultiply(9, 1)).toBe(9);
  });

  it('should multiply small numbers', () => {
    expect(recursiveMultiply(2, 3)).toBe(6);
    expect(recursiveMultiply(4, 5)).toBe(20);
  });

  it('should be commutative', () => {
    expect(recursiveMultiply(20, 10)).toBe(200);
    expect(recursiveMultiply(10, 20)).toBe(200);
  });

  it('should handle larger numbers', () => {
    expect(recursiveMultiply(123, 45)).toBe(5535);
  });
});
