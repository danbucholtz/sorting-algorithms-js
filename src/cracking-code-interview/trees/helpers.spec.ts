import { create } from 'domain';
import { compareTrees, createTree } from './helpers';

describe(compareTrees.name, () => {
  it('should return true when the trees are the same', () => {
    const tree = createTree(10);
    const result = compareTrees(tree, tree);
    expect(result).toBe(true);
  });

  it('should return false when the trees are not the same', () => {
    const treeOne = createTree(10);
    const treeTwo = createTree(12);
    const result = compareTrees(treeOne, treeTwo);
    expect(result).toBe(false);

    const resultTwo = compareTrees(treeTwo, treeOne);
    expect(resultTwo).toBe(false);
  });
});