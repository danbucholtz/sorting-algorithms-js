import { Stack } from '../stack/stack';
import { Queue } from './queue';

export function reverseQueue<T>(input: Queue<T>) {
    const queue = new Queue<T>();
    const stack = new Stack<T>();
    while (!input.isEmpty()) {
        stack.push(input.dequeue());
    }
    while (!stack.isEmpty()) {
        queue.enqueue(stack.pop());
    }
    return queue;
}