import { Stack } from './stack';
export type ReversePolishNotationTokens = string[];

export function evalRPN(tokens: ReversePolishNotationTokens): number {
  let i = 0;
  const stack = new Stack<number>();
  while (i < tokens.length) {
    const value = tokens[i];
    if (isOperator(value)) {
      const second = stack.pop()!;
      if (second === undefined) {
        throw new Error('Unexpected format');
      }
      const first = stack.pop()!;
      if (first === undefined) {
        throw new Error('Unexpected format');
      }
      const calculated = applyOperator(value, first, second);
      stack.push(calculated);
    } else {
      stack.push(parseInt(value));
    }
    i++;
  }
  const value = stack.pop();
  return value!;
}

// const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];

// stack 17 5

function applyOperator(operator: string, first: number, second: number): number {
  if (operator === '+') {
    return first + second;
  } else if (operator === '-') {
    return first - second;
  } else if (operator === '*') {
    return first * second;
  } else {
    const value = first / second;
    if (value > 0) {
      return Math.floor(value);
    } else {
      return Math.ceil(value) || 0;
    }
  }
}

function isOperator(char: string) {
  if (char === '+' || char === '-' || char === '*' || char === '/') {
    return true;
  }
  return false;
}
