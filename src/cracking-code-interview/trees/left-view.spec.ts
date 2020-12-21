import { leftView } from './left-view';
import { Node } from './list-of-depths';

describe(leftView.name, () => {
  it('should an empty array for empty tree', () => {
    const results = leftView(null);
    expect(results.length).toBe(0);
  });

  it('should return just the root for a single node tree', () => {
    const results = leftView({});
    expect(results.length).toBe(1);
  });

  it('test tree 1', () => {
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
    const results = leftView(node);
    expect(results.length).toBe(3);
    expect(results[0].value).toBe(1);
    expect(results[1].value).toBe(2);
    expect(results[2].value).toBe(4);
  });

  it('test tree 2', () => {
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
    const results = leftView(node);
    expect(results.length).toBe(5);
    expect(results[0].value).toBe(1);
    expect(results[1].value).toBe(2);
    expect(results[2].value).toBe(4);
    expect(results[3].value).toBe(5);
    expect(results[4].value).toBe(6);
  });
});