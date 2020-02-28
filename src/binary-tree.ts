
export class BinaryTree {

  leftNode: BinaryTree = null;
  rightNode: BinaryTree = null;
  value: number = null;
  constructor() {
  }

  insert(value: number): void {
    if (!this.value) {
      this.value = value;
    }

    // the future value is less than this node's value, so it's to the left
    if (this.value > value) {
      if (!this.leftNode) {
        this.leftNode = new BinaryTree();
        this.leftNode.value = value;
      } else {
        return this.leftNode.insert(value);
      }
    }

    // the future value is greater than or equal to this node's value, so it goes to the right
    if (this.value < value) {
      if (!this.rightNode) {
        this.rightNode = new BinaryTree();
        this.rightNode.value = value;
      } else {
        return this.rightNode.insert(value);
      }
    }
  }

  search(val: Number): boolean {
    if (val === this.value) {
      return true;
    }
    if (this.value > val) {
      if (!this.leftNode) {
        return false;
      }
      return this.leftNode.search(val);
    } else {
      if (!this.rightNode) {
        return false;
      }
      return this.rightNode.search(val);
    }
  }

  sort(): number[] {
    let values: number[] = [];
    if (this.leftNode) {
      values = values.concat(this.leftNode.sort());
    }
    values.push(this.value);
    if (this.rightNode) {
      values = values.concat(this.rightNode.sort());
    }
    return values;
  }

  reverse(): BinaryTree {
    const newTree = new BinaryTree();
    newTree.value = this.value;

    newTree.leftNode = this.rightNode;
    newTree.rightNode = this.leftNode;

    if (this.rightNode) {
      newTree.leftNode = this.rightNode.reverse();
    }
    if (this.leftNode) {
      newTree.rightNode = this.leftNode.reverse();
    }

    return newTree;
  }

  isEqual(otherTree: BinaryTree): boolean {
    if (!otherTree || this.value !== otherTree.value) {
      return false;
    }
    if (this.leftNode) {
      const result = this.leftNode.isEqual(otherTree.leftNode);
      if (!result) {
        return false; 
      }
    }
    if (this.rightNode) {
      const result = this.rightNode.isEqual(otherTree.rightNode);
      if (!result) {
        return false;
      }
    }
    return true;
  }
}