export class StackMin {
  private list: { value: number; currentMin: number }[] = [];

  pop() {
    if (!this.list.length) {
      throw new Error('cant pop empty stack');
    }

    const entry = this.list.pop();
    return entry?.value;
  }

  peek() {
    const entry = this.peekInternal();
    return entry.value;
  }

  private peekInternal() {
    if (!this.list.length) {
      throw new Error('cant peek empty stack');
    }
    return this.list[this.list.length - 1];
  }

  push(value: number) {
    if (this.list.length > 0) {
      const currentTop = this.peekInternal();
      const currentMin = Math.min(currentTop.currentMin, value);
      this.list[this.list.length] = {
        currentMin: currentMin,
        value,
      };
    } else {
      this.list[this.list.length] = {
        currentMin: value,
        value,
      };
    }
  }

  min() {
    const entry = this.peekInternal();
    return entry.currentMin;
  }
}
