import { checkSubtree } from './check-subtree';
import { createTree, getChildNode } from './helpers';

describe(checkSubtree.name, () => {
  it('should return true when the subtree is the root', () => {
    const tree = createTree(1);
    const result = checkSubtree(tree, tree);
    expect(result).toBe(true);
  });

  it('should return true when the subtree is the root extended', () => {
    const tree = createTree(3);
    const result = checkSubtree(tree, tree);
    expect(result).toBe(true);
  });

  it('should return true when the left is the same on a non-leaf node', () => {
    const tree = createTree(10);
    const leftChild = getChildNode(tree, 2);
    tree.right.right.right.right = {
      value: 20
    }
    const result = checkSubtree(tree, leftChild);
    expect(result).toBe(true);
  });

  it('should return true when the right is the same on a non-leaf node', () => {
    const tree = createTree(10);
    tree.left.left.left = {
      value: 0
    }
    
    const rightChild = getChildNode(tree, 8);
    const result = checkSubtree(tree, rightChild);
    expect(result).toBe(true);
  });
});