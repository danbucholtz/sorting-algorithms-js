import { getRandomInt } from './helpers';


export class TreeNode {


  public size = 0;
  private left: TreeNode = null;
  private right: TreeNode = null;

  constructor(public value: number) {
    this.size = 1;
  }

  insertNode(value: number) {
    if (this.value < value) {
      if (this.right) {
        this.right.insertNode(value);
      } else {
        this.right = new TreeNode(value);
      }
    } else {
      if (this.left) {
        this.left.insertNode(value);
      } else {
        this.left = new TreeNode(value);
      }
    }
    this.size++;
  }

  getNode(value: number): TreeNode {
    if (this.value == value) {
      return this;
    }
    if (this.value > value) {
      if (this.left) {
        return this.left.getNode(value);
      }
      return null;
    } else {
      if (this.right) {
        return this.right.getNode(value);
      }
      return null;
    }
  }

  getRandomNode(): TreeNode {
    const random = getRandomInt(1, this.size);
    if (this.size === random) {
      return this;
    }
    if (this.left && this.left.size >= random) {
      return this.left.getRandomNode();
    } else {
      return this.right.getRandomNode();
    }
  }
}