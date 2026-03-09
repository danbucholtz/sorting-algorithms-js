import { describe, expect, it } from 'vitest';
import { Stack } from './stack';
import { sortStack } from './sorted-stack';

function buildStack(values: number[]): Stack<number> {
  const stack = new Stack<number>();
  for (const value of values) {
    stack.push(value);
  }
  return stack;
}

function popAll(stack: Stack<number>): number[] {
  const values: number[] = [];
  while (!stack.isEmpty()) {
    values.push(stack.pop()!);
  }
  return values;
}

describe(sortStack.name, () => {
  it('should sort an unsorted stack so smallest values are popped first', () => {
    const input = buildStack([3, 1, 4, 2]);

    const result = sortStack(input);
    console.log('result: ', result);

    expect(popAll(result)).toEqual([1, 2, 3, 4]);
  });

  it('should handle duplicates and negative values', () => {
    const input = buildStack([5, -1, 3, -1, 2, 2]);

    const result = sortStack(input);

    expect(popAll(result)).toEqual([-1, -1, 2, 2, 3, 5]);
  });

  it('should handle a stack with one element', () => {
    const input = buildStack([42]);

    const result = sortStack(input);

    expect(popAll(result)).toEqual([42]);
  });

  it('should handle an empty stack', () => {
    const input = buildStack([]);

    const result = sortStack(input);

    expect(result.isEmpty()).toBe(true);
    expect(result.size()).toBe(0);
  });
});
