import { getSuccessor } from './get-successor';
import { arrayToTree, getChildNode } from './helpers';

describe(getSuccessor.name, () => {
  it('should return null when tree has one node', () => {
    const values = [5];
    const node = arrayToTree(values);
    const result = getSuccessor(node, 5);
    expect(result).toBe(null);
  });

  it('should return 7 as the successor to five', () => {
    const values = [5, 10, 12, 7];
    const node = arrayToTree(values, true);
    const result = getSuccessor(node, 5);
    expect(result.value).toBe(7);
  });

  it('should return 10 as the successor to 7', () => {
    const values = [5, 10, 12, 7];
    const node = arrayToTree(values, true);
    const seven = getChildNode(node, 7);
    seven.left = {
      value: 6
    }
    const result = getSuccessor(node, 7);
    expect(result.value).toBe(10);
  });

  it('should return 8 as the successor to 7', () => {
    const values = [5, 10, 12, 7];
    const node = arrayToTree(values, true);
    const seven = getChildNode(node, 7);
    seven.left = {
      value: 6
    };
    seven.right = {
      value: 9,
      left: {
        value: 8,
      }
    }
    const result = getSuccessor(node, 7);
    expect(result.value).toBe(8);
  });

});