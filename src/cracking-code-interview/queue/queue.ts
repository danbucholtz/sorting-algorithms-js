
export class Queue<T> {
    private list: T[] = [];

    enqueue(item: T) {
        this.list.unshift(item);
    }

    dequeue() {
        return this.list.pop();
    }

    peek() {
        return this.list[this.list.length - 1];
    }

    isEmpty() {
        return this.list.length === 0;
    }
}