import { Stack } from './stack';

export type ParenthesesInput = string;

export function isValidParentheses(input: ParenthesesInput): boolean {
  const stack = new Stack<string>();
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (isOpenParen(char)) {
      stack.push(char);
    } else {
      const topChar = stack.pop()!;
      if (!isValidPair(topChar, char)) {
        return false;
      }
    }
  }
  if (stack.size() > 0) {
    return false;
  }
  return true;
}

function isOpenParen(char: string) {
  return char === '(' || char === '{' || char === '[';
}

function isValidPair(open: string, close: string) {
  if (open === '(' && close === ')') {
    return true;
  } else if (open === '{' && close === '}') {
    return true;
  } else if (open === '[' && close === ']') {
    return true;
  }
  return false;
}
