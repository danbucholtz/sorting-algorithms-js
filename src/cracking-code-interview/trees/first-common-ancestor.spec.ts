import { firstCommonAncestor } from './first-common-ancestor';
import { createTree } from './helpers';

describe(firstCommonAncestor.name, () => {
  it('should return null if there isnt one', () => {
    const tree = createTree(5);
    const result = firstCommonAncestor(tree, { value: 15}, { value: 4});
    expect(result).toBe(null);

    const treeTwo = createTree(10);
    const resultTwo = firstCommonAncestor(tree, { value: 5}, { value: 11});
    expect(resultTwo).toBe(null);
  });

  it('should return the root when its the first ancestor', () => {
    const tree = createTree(5);
    const result = firstCommonAncestor(tree, { value: 2}, { value: 5});
    expect(result).toBe(tree);
  });

  it('should return the right child when its the ancestor', () => {
    const tree = createTree(10);
    const result = firstCommonAncestor(tree, { value: 10}, { value: 7});
    expect(result.value).toBe(8);
  });

  it('should return the left child when its the ancestor', () => {
    const tree = createTree(10);
    const result = firstCommonAncestor(tree, { value: 4}, { value: 1});
    expect(result.value).toBe(2);
  });

  it('should work with children at different depths', () => {
    const tree = createTree(10);
    const result = firstCommonAncestor(tree, { value: 4}, { value: 2});
    expect(result.value).toBe(5);
  });
});