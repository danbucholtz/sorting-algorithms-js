import { describe, expect, it } from 'vitest';
import { isValidParentheses } from './valid-parentheses';

describe(isValidParentheses.name, () => {
  it('should return true for the first prompt example', () => {
    const result = isValidParentheses('()');

    expect(result).toBe(true);
  });

  it('should return true for the second prompt example', () => {
    const result = isValidParentheses('()[]{}');

    expect(result).toBe(true);
  });

  it('should return false for the third prompt example', () => {
    const result = isValidParentheses('(]');

    expect(result).toBe(false);
  });

  it('should return true for the fourth prompt example', () => {
    const result = isValidParentheses('([])');

    expect(result).toBe(true);
  });

  it('should return false for the fifth prompt example', () => {
    const result = isValidParentheses('([)]');

    expect(result).toBe(false);
  });

  it('should return true for an empty string', () => {
    const result = isValidParentheses('');

    expect(result).toBe(true);
  });

  it('should return false when a closing bracket appears before any opening bracket', () => {
    const result = isValidParentheses(']');

    expect(result).toBe(false);
  });

  it('should return false when there are unmatched opening brackets left over', () => {
    const result = isValidParentheses('(((');

    expect(result).toBe(false);
  });

  it('should return true for deeply nested valid brackets', () => {
    const result = isValidParentheses('{[()()]}');

    expect(result).toBe(true);
  });
});
