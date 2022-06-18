import { Queue } from './queue';
import { reverseQueue } from './reverse-queue';

describe('Reverse Queue', () => {
    it('should reverse the queue', () => {
        const queue = new Queue<number>();
        queue.enqueue(2);
        queue.enqueue(4);
        queue.enqueue(6);

        expect(queue.peek()).toBe(2);

        const reversed = reverseQueue(queue);

        expect(reversed.peek()).toBe(6);

        expect(reversed.dequeue()).toBe(6);
        expect(reversed.dequeue()).toBe(4);
        expect(reversed.dequeue()).toBe(2);
    });
});