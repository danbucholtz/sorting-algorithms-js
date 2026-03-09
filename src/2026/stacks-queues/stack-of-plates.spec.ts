import { describe, expect, it } from 'vitest';
import { SetOfStacks } from './stack-of-plates';

describe(SetOfStacks.name, () => {
  it('should start empty', () => {
    const stack = new SetOfStacks<number>();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });

  it('should support basic push/peek/pop behavior', () => {
    const stack = new SetOfStacks<number>();

    stack.push(10);
    stack.push(20);

    expect(stack.size()).toBe(2);
    expect(stack.peek()).toBe(20);
    expect(stack.pop()).toBe(20);
    expect(stack.peek()).toBe(10);
    expect(stack.pop()).toBe(10);
    expect(stack.isEmpty()).toBe(true);
  });

  it.only('should behave like one logical stack across internal stack boundaries', () => {
    const stack = new SetOfStacks<number>();
    const totalValues = 25; // exceeds default MAX_STACK_SIZE (10)

    for (let i = 1; i <= totalValues; i++) {
      stack.push(i);
    }

    expect(stack.size()).toBe(totalValues);
    expect(stack.peek()).toBe(totalValues);

    for (let expected = totalValues; expected >= 1; expected--) {
      expect(stack.pop()).toBe(expected);
    }

    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.pop()).toBeUndefined();
  });

  it('should work with non-number generic types', () => {
    const stack = new SetOfStacks<string>();

    stack.push('a');
    stack.push('b');
    stack.push('c');

    expect(stack.peek()).toBe('c');
    expect(stack.pop()).toBe('c');
    expect(stack.pop()).toBe('b');
    expect(stack.pop()).toBe('a');
  });
});
