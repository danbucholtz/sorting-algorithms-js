import { minimalTree } from './minimal-tree';

describe(minimalTree.name, () => {
  it('should create the minimal tree with odd number elements', () => {
    const array = [1, 2, 3, 4, 5, 6, 7];
    const node = minimalTree(array);
    expect(node.value).toBe(4);
    expect(node.left.value).toBe(2);
    expect(node.left.left.value).toBe(1);
    expect(node.left.right.value).toBe(3);

    expect(node.right.value).toBe(6);
    expect(node.right.left.value).toBe(5);
    expect(node.right.right.value).toBe(7);
  });

  it('should create the minimal tree with even number elements', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const node = minimalTree(array);
    expect(node.value).toBe(4);
    expect(node.left.value).toBe(2);
    expect(node.left.left.value).toBe(1);
    expect(node.left.right.value).toBe(3);

    expect(node.right.value).toBe(6);
    expect(node.right.left.value).toBe(5);
    expect(node.right.right.value).toBe(7);
    expect(node.right.right.right.value).toBe(8);
    expect(node.right.right.left).toBe(null);
  });
});