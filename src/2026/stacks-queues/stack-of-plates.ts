import { Stack } from './stack';

export class SetOfStacks<T> {
  private listOfStacks: Stack<T>[] = [];
  private MAX_STACK_SIZE = 10;

  private getTopStack() {
    if (this.listOfStacks.length === 0) {
      return null;
    }
    return this.listOfStacks[this.listOfStacks.length - 1];
  }

  private getInsertionStack(): Stack<T> {
    if (this.listOfStacks.length === 0) {
      return this.initializeNewStack();
    }
    const topStack = this.getTopStack() as Stack<T>;
    if (this.isFull(topStack!)) {
      // the stack is full, so we need to create a new one
      return this.initializeNewStack();
    }
    // it's not full, so just return the top stoack
    return topStack;
  }

  private getPoppingStack(): Stack<T> | null {
    if (this.listOfStacks.length === 0) {
      return null;
    }
    const topStack = this.getTopStack() as Stack<T>;
    if (topStack.isEmpty()) {
      // we can't pop from an empty stack, so remove it
      this.listOfStacks.pop();
      // okay, try to get the top stack again
      return this.getPoppingStack();
    }
    return topStack;
  }

  private initializeNewStack() {
    const newStack = new Stack<T>();
    this.listOfStacks.push(newStack);
    return newStack;
  }

  push(value: T): void {
    const stackToInsertInto = this.getInsertionStack();
    stackToInsertInto?.push(value);
  }

  pop(): T | undefined {
    const stack = this.getPoppingStack();
    return stack?.pop();
  }

  peek(): T | undefined {
    const topStack = this.getTopStack();
    return topStack?.peek() ?? undefined;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    let totalItems = 0;
    for (let stack of this.listOfStacks) {
      totalItems += stack.size();
    }
    return totalItems;
  }

  private isFull(stack: Stack<T>) {
    return stack.size() === this.MAX_STACK_SIZE;
  }
}
