import { createTree } from './helpers';
import { Node } from './list-of-depths';
import { largestSubtree } from './longest-subtree';

describe(largestSubtree.name, () => {
  it('should return 0 when the tree is just the root', () => {
    const result = largestSubtree({});
    expect(result).toBe(0);
  });

  it('should return 2 for a tree like the pic 1', () => {
    /*
           5
         /  \
        3    8
    */
    const result = largestSubtree(createTree(3));
    expect(result).toBe(2);
  });

  it('should return 3 for a tree like the pic 2', () => {
    /*
           5
         /  \
        3    8
       /
      1
    */
    const tree = createTree(3);
    tree.left.left = {
      value: 1
    }
    const result = largestSubtree(tree);
    expect(result).toBe(3);
  });

  it('should return 4 for a tree like the pic 3', () => {
    /*
           5
         /  \
        3    8
       /      \ 
      1        10
    */
    const tree = createTree(5);
    
    const result = largestSubtree(tree);
    expect(result).toBe(4);
  });

  it('should return 4 for a tree like the pic 4', () => {
    /*
               12
             /  
           5
         /  \
        3    8
       /      \ 
      1        10
    */
    
    const tree = createTree(5);
    const node: Node = {
      left: tree
    }
    
    const result = largestSubtree(node);
    expect(result).toBe(4);
  });

  it('should return 5 for a tree like the pic 5', () => {
    /*
               12
             /  
           5
         /  \
        3    8
       /      \ 
      1        10
                \
                  11
    */
    
    const tree = createTree(5);
    tree.right.right.right = {
      value: 11
    }
    const node: Node = {
      left: tree
    }
    
    const result = largestSubtree(node);
    expect(result).toBe(5);
  });
})