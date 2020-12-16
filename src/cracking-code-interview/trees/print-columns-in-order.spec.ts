import { createTree } from './helpers';
import { getColumnsInOrder } from './print-columns-in-order';

describe(getColumnsInOrder.name, () => {
  it('should return an empty array for an empty tree', () => {
    const result = getColumnsInOrder(null);
    expect(result.length).toBe(0);
  });

  it('should return an array with one entry for a root', () => {
    const result = getColumnsInOrder(createTree(1));
    expect(result.length).toBe(1)
  });

  it('should return an array for tree 1', () => {
    /*
             2
            /  \
           1    3
    */
    const tree = createTree(3);
    const result = getColumnsInOrder(tree);
    expect(result[0][0]).toBe(1);
    expect(result[1][0]).toBe(2);
    expect(result[2][0]).toBe(3);
  });

  it('should return an array for tree 2', () => {
    /*
              3
            /   \
           1     4
            \      \
             2      5
    */
    const tree = createTree(5);
    const result = getColumnsInOrder(tree);
    expect(result[0][0]).toBe(1);
    expect(result[1][0]).toBe(3);
    expect(result[1][1]).toBe(2);
    expect(result[2][0]).toBe(4);
    expect(result[3][0]).toBe(5);
  });

});