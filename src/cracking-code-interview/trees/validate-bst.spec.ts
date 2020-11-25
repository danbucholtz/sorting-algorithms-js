import { arrayToTree, getChildNode } from './helpers';
import { isBst } from './validate-bst';

describe(isBst.name, () => {
  it('should return false if given a null node', () => {
    const result = isBst(null);
    expect(result).toBe(false);
  });

  it('should return true scenario one', () => {
    const values = [5];
    const node = arrayToTree(values);
    const result = isBst(node);
    expect(result).toBe(true);
  });

  it('should return true scenario two', () => {
    const values = [1, 3, 5];
    const node = arrayToTree(values);
    const result = isBst(node);
    expect(result).toBe(true);
  });

  it('should return true scenario three', () => {
    const values = [1, 3, 5, 6];
    const node = arrayToTree(values);
    const result = isBst(node);
    expect(result).toBe(true);
  });

  it('should return false if not a binary search tree one', () => {
    const values = [1, 3, 5, 6];
    const node = arrayToTree(values);
    const nodeSix = getChildNode(node, 6);
    nodeSix.right = {
      value: 1,
    }

    const result = isBst(node);
    expect(result).toBe(false);
  });

  it('should return false if not a binary search tree two', () => {
    const values = [1, 3, 5, 6];
    const node = arrayToTree(values);
    const nodeSix = getChildNode(node, 3);
    nodeSix.right = {
      value: 2,
    }

    const result = isBst(node);
    expect(result).toBe(false);
  });

  it('should return false if not a binary search tree three', () => {
    const values = [1, 3, 5, 6];
    const node = arrayToTree(values);
    const nodeSix = getChildNode(node, 3);
    nodeSix.left = {
      value: 10,
    }

    const result = isBst(node);
    expect(result).toBe(false);
  });
});