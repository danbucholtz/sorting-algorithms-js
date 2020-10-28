export class Tower {
  stack: number[] = [];

  constructor(private name: string) {
  }

  add(value: number) {
    if (this.stack.length > 0 && this.stack[this.stack.length - 1] <= value) {
      throw new Error(`Error placing disk - ${value}`);
    }
    // console.log(`Adding ${value} to tower ${this.name}`);
    this.stack.push(value);
  }

  moveToTop(t: Tower) {
    const item = this.stack.pop();
    // console.log(`Removing ${item} from tower ${this.name}`);
    t.add(item);
  }

  moveDisks(quantity: number, destination: Tower, buffer: Tower) {
    if (quantity <= 0) {
      return;
    }
    this.moveDisks(quantity - 1, buffer, destination);
    this.moveToTop(destination);
    buffer.moveDisks(quantity - 1, destination, this);
  }

  height() {
    return this.stack.length;
  }

  printTower() {
    console.log(this.stack);
  }
}