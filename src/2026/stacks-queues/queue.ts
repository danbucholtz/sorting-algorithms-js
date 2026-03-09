export interface LinkedList<T> {
  value: T;
  next?: LinkedList<T>;
}

export class Queue<T> {
  private first: LinkedList<T> | undefined;
  private last: LinkedList<T> | undefined;

  enqueue(value: T): void {
    if (!this.first) {
      this.first = {
        value,
      };
      this.last = this.first;
    } else {
      const newNode: LinkedList<T> = {
        value,
      };
      if (this.last) {
        this.last.next = newNode;
      }
      this.last = newNode;
    }
  }

  dequeue(): T | undefined {
    if (!this.first) {
      return undefined;
    }
    const value = this.first.value;
    this.first = this.first.next;
    if (!this.first) {
      // the list is now empty, so let's update
      this.last = undefined;
    }
    return value;
  }

  peek(): T | undefined {
    return this.first?.value;
  }

  isEmpty(): boolean {
    return this.first === undefined;
  }

  size(): number {
    let count = 0;
    let runner = this.first;
    while (runner) {
      count++;
      runner = runner.next;
    }
    return count;
  }
}
