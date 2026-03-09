import { describe, expect, it } from 'vitest';
import { Queue } from './queue';

describe(Queue.name, () => {
  it('should start empty', () => {
    const queue = new Queue<number>();

    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
    expect(queue.peek()).toBeUndefined();
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should dequeue in FIFO order', () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should maintain correct size during mixed operations', () => {
    const queue = new Queue<number>();

    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.size()).toBe(2);

    expect(queue.dequeue()).toBe(10);
    expect(queue.size()).toBe(1);

    queue.enqueue(30);
    queue.enqueue(40);
    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe(20);

    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBe(40);
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it('should support non-number generic types', () => {
    const queue = new Queue<string>();

    queue.enqueue('alpha');
    queue.enqueue('beta');

    expect(queue.peek()).toBe('alpha');
    expect(queue.dequeue()).toBe('alpha');
    expect(queue.dequeue()).toBe('beta');
    expect(queue.isEmpty()).toBe(true);
  });
});
