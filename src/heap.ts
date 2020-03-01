
export class MinHeap {

  array: any[] = [];
  size: number = 0;

  constructor() {
  }

  getLeftChildIndex(parentIndex: number) {
    return (2 * parentIndex) + 1;
  }

  getRightChildIndex(parentIndex: number) {
    return (2 * parentIndex) + 2;
  }

  getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index: number) {
    const childIndex = this.getLeftChildIndex(index);
    return childIndex <= this.size;
  }

  hasRightChild(index: number) {
    const childIndex = this.getRightChildIndex(index);
    return childIndex <= this.size;
  }

  hasParent(index: number) {
    const parentIndex = this.getParentIndex(index);
    return parentIndex >= 0;
  }

  getLeftChild(index: number) {
    const childIndex = this.getLeftChildIndex(index);
    return this.array[childIndex];
  }

  getRightChild(index: number) {
    const childIndex = this.getRightChildIndex(index);
    return this.array[childIndex];
  }

  getParent(index: number) {
    const parentIndex = this.getParentIndex(index);
    return this.array[parentIndex];
  }

  swap(indexOne: number, indexTwo: number) {
    const indexOneValue = this.array[indexOne];
    const indexTwoValue = this.array[indexTwo];
    this.array[indexOne] = indexTwoValue;
    this.array[indexTwo] = indexOneValue;
  }

  peek() {
    if (this.size > 0) {
      return this.array[0];
    }
    return null;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    const valueOne = this.array[0];
    this.array[0] = this.array[this.size - 1];
    this.size--;
    this.heapifyDown();
    return valueOne;
  }

  insert(newValue: any) {
    this.array[this.size] = newValue;
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size - 1;
    while (this.hasParent(index) && this.getParent(index) > this.array[index]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.array[index] < this.array[smallerChildIndex]) {
        break;
      }
      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
    }
  }
}