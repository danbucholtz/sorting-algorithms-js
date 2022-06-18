
export class Stack<T> {
    private list: T[] = [];

    push(item: T) {
        this.list.push(item);
    }

    pop() {
        return this.list.pop();
    }

    peek() {
        return this.list[this.list.length - 1];
    }

    isEmpty() {
        return this.list.length === 0;
    }
}