import { getPath } from './get-path';
import { createTree } from './helpers';
import { Node } from './list-of-depths';

describe(getPath.name, () => {
  it('should return the path', () => {
    const tree = createTree(5);
    const path = getPath(tree, 1, 5);
    expect(path[0]).toBe(1);
    expect(path[1]).toBe(3);
    expect(path[2]).toBe(4);
    expect(path[3]).toBe(5);
    
  });

  it('should return the path for a root only tree', () => {
    const tree = createTree(1);
    const path = getPath(tree, 1, 1);
    expect(path[0]).toBe(1);
    expect(path.length).toBe(1);
  });

  it('should return the path for the pic 1', () => {
    /*
          
                 10
               /   \
              5     3
             / \     
            3   6      
           /     \
          2       7
         /
        1
    */
    const node: Node = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: 3,
          left: {
            value: 2,
            left: {
              value: 1
            }
          }
        },
        right: {
          value: 6,
          right: {
            value: 7
          }
        }
      },
      right: {
        value: 3
      }
    };
    const path = getPath(node, 1, 7);
    expect(path[0]).toBe(1);
    expect(path[1]).toBe(2);
    expect(path[2]).toBe(3);
    expect(path[3]).toBe(5);
    expect(path[4]).toBe(6);
    expect(path[5]).toBe(7);
  });

});