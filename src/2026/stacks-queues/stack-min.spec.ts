import { describe, expect, it } from 'vitest';
import { StackMin } from './stack-min';

describe(StackMin.name, () => {
  it('should return the minimum value in O(1)-style usage as values are pushed', () => {
    const stack = new StackMin();

    stack.push(5);
    expect(stack.min()).toBe(5);

    stack.push(6);
    expect(stack.min()).toBe(5);

    stack.push(3);
    expect(stack.min()).toBe(3);

    stack.push(7);
    expect(stack.min()).toBe(3);
  });

  it('should update min correctly when popping values, including duplicate minimums', () => {
    const stack = new StackMin();

    stack.push(5);
    stack.push(3);
    stack.push(3);
    stack.push(4);
    expect(stack.min()).toBe(3);

    expect(stack.pop()).toBe(4);
    expect(stack.min()).toBe(3);

    expect(stack.pop()).toBe(3);
    expect(stack.min()).toBe(3);

    expect(stack.pop()).toBe(3);
    expect(stack.min()).toBe(5);
  });

  it('should support normal stack behavior for peek and pop', () => {
    const stack = new StackMin();

    stack.push(10);
    stack.push(20);

    expect(stack.peek()).toBe(20);
    expect(stack.peek()).toBe(20);
    expect(stack.pop()).toBe(20);
    expect(stack.peek()).toBe(10);
    expect(stack.pop()).toBe(10);
  });

  it('should throw for peek on an empty stack', () => {
    const stack = new StackMin();

    expect(() => stack.peek()).toThrowError('cant peek empty stack');
  });

  it('should throw for pop on an empty stack', () => {
    const stack = new StackMin();

    expect(() => stack.pop()).toThrowError('cant pop empty stack');
  });

  it('should throw for min on an empty stack', () => {
    const stack = new StackMin();

    expect(() => stack.min()).toThrowError('cant peek empty stack');
  });
});
