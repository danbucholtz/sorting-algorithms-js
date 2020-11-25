import { checkBalanced } from './check-balanced';
import { arrayToTree, createTree, getChildNode } from './helpers';

describe(checkBalanced.name, () => {
  it('should return true when there is a single node', () => {
    const values = [5];
    const node = arrayToTree(values);
    const balanced = checkBalanced(node);
    expect(balanced).toBe(true);
  });

  it('should return true when generating a simple tree', () => {
    const tree = createTree(10);
    const balanced = checkBalanced(tree);
    expect(balanced).toBe(true);
  });

  it('should return true when having a depth differece of one', () => {
    const tree = createTree(10);
    const node = getChildNode(tree, 10);
    node.right = {
      value: 11
    }
    const balanced = checkBalanced(tree);
    expect(balanced).toBe(true);
  });

  it('should return false when having a depth difference of two', () => {
    const tree = createTree(10);
    const node = getChildNode(tree, 10);
    node.right = {
      value: 11,
      right: {
        value: 12
      }
    }
    const balanced = checkBalanced(tree);
    expect(balanced).toBe(false);
  });
});