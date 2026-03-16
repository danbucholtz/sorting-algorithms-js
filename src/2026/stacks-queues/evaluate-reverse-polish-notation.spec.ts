import { describe, expect, it } from 'vitest';
import { evalRPN } from './evaluate-reverse-polish-notation';

describe(evalRPN.name, () => {
  it('should return 9 for the first prompt example', () => {
    const tokens = ['2', '1', '+', '3', '*'];

    const result = evalRPN(tokens);

    expect(result).toBe(9);
  });

  it('should return 6 for the second prompt example', () => {
    const tokens = ['4', '13', '5', '/', '+'];

    const result = evalRPN(tokens);

    expect(result).toBe(6);
  });

  it('should return 22 for the third prompt example', () => {
    const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];

    const result = evalRPN(tokens);

    expect(result).toBe(22);
  });

  it('should handle a single operand', () => {
    const result = evalRPN(['42']);

    expect(result).toBe(42);
  });

  it('should preserve operand order for subtraction', () => {
    const result = evalRPN(['5', '3', '-']);

    expect(result).toBe(2);
  });

  it('should preserve operand order for division', () => {
    const result = evalRPN(['20', '4', '/']);

    expect(result).toBe(5);
  });

  it('should truncate division toward zero for negative values', () => {
    const result = evalRPN(['-7', '2', '/']);

    expect(result).toBe(-3);
  });

  it('should handle nested operations with negative numbers', () => {
    const tokens = ['3', '-4', '+', '2', '*'];

    const result = evalRPN(tokens);

    expect(result).toBe(-2);
  });
});
