import { Node } from './list-of-depths';
import { lowestAncestor } from './lowest-ancestor';

describe(lowestAncestor.name, () => {
  it('should return null if one or more nodes is not found', () => {
    const result = lowestAncestor(null, { value: 4}, { value: 6});
    expect(result).toBe(null);
  });

  it('should work with tree 1', () => {
    /*
          
                 10
               /   \
              5     15
             / \     \
            4   6     18
    
    */
    const node: Node = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: 4
        },
        right: {
          value: 6
        }
      },
      right: {
        value: 15,
        right: {
          value: 18
        }
      }
    };
    const result = lowestAncestor(node, { value: 4}, { value: 6});
    expect(result.value).toBe(5);
  });

  it('should work with tree 2', () => {
    /*
          
                 10
               /   \
              5     15
             / \     \
            4   6     18
    
    */
    const node: Node = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: 4
        },
        right: {
          value: 6
        }
      },
      right: {
        value: 15,
        right: {
          value: 18
        }
      }
    };
    const result = lowestAncestor(node, { value: 18}, { value: 6});
    expect(result.value).toBe(10);

    const resultTwo = lowestAncestor(node, { value: 4}, { value: 15});
    expect(resultTwo.value).toBe(10);
  });
});