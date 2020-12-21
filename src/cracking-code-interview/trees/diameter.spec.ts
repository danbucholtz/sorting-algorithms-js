import { diameter } from './diameter';
import { Node } from './list-of-depths';

describe(diameter.name, () => {
  it('should return 0 for an empty tree', () => {
    const result = diameter(null);
    expect(result).toBe(0);
  });

  it('should return 1 for a root only', () => {
    const result = diameter({});
    expect(result).toBe(1);
  });

  it('should handle basic tree 1', () => {
    /*
          
                 1
               /   \
              2     3
             / \     \
            4   5     6 
    
    */
    const node: Node = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4
        },
        right: {
          value: 5
        }
      },
      right: {
        value: 3,
        right: {
          value: 6
        }
      }
    };
    const result = diameter(node);
    expect(result).toBe(5);
  });

  it('should handle basic tree 2', () => {
    /*
          
        1
      /   \
    2       3
      \   
        4  
          \
            5
             \
               6
    */

    const node: Node = {
      value: 1,
      left: {
        value: 2,
        right: {
          value: 4,
          right: {
            value: 5,
            right: {
              value: 6
            }
          }
        }
      },
      right: {
        value: 3,
      }
    };
    const result = diameter(node);
    expect(result).toBe(6);
  });
})