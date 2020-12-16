import { createTree } from './helpers';
import { maxDepth } from './max-depth';


describe(maxDepth.name, () => {
  it('should return 0 from root', () => {
    const result = maxDepth({});
    expect(result).toBe(0);
  });

  it('should return 1 for a basic balanced tree', () => {
    const tree = createTree(3);
    const result = maxDepth(tree);
    expect(result).toBe(1);
  });

  it('should return 3 for a balanced tree with 10 times', () => {
    const tree = createTree(10);
    /*
    {
        value: 5,
        left: {
          value: 2,
          left: { value: 1, left: null, right: null },
          right: { value: 3, left: null, right: [Object] }
        },
        right: {
          value: 8,
          left: { value: 6, left: null, right: [Object] },
          right: { value: 9, left: null, right: [Object] }
        }
      }
    */
    const result = maxDepth(tree);
    expect(result).toBe(3);
  });

  it('should return 5 when appending 2 extra nodes to a (previously) balanced tree with 10 times', () => {
    const tree = createTree(10);
    tree.left.right.right.right = {
      right: {
      }
    }
    /*
    {
        value: 5,
        left: {
          value: 2,
          left: { value: 1, left: null, right: null },
          right: { value: 3, left: null, right: {
                right: {
                  right: {

                  }
                }
             } 
          }
        },
        right: {
          value: 8,
          left: { value: 6, left: null, right: [Object] },
          right: { value: 9, left: null, right: [Object] }
        }
      }
    */
    const result = maxDepth(tree);
    expect(result).toBe(5);
  });
});