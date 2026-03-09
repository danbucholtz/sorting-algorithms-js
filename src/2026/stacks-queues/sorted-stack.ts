import { Stack } from './stack';

export function sortStack(stack: Stack<number>): Stack<number> {
  const temp = new Stack<number>();
  while (!stack.isEmpty()) {
    const value = stack.pop();
    while (!temp.isEmpty() && temp.peek()! > value!) {
      const tempTop = temp.pop();
      stack.push(tempTop!);
    }
    temp.push(value!);
  }
  // okay, now loop over and reverse the order of it
  while (!temp.isEmpty()) {
    stack.push(temp.pop()!);
  }
  return stack;
}
