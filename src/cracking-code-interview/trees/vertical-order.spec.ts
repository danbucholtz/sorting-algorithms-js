
import { Node } from './list-of-depths';
import { verticalOrder } from './vertical-order';

describe(verticalOrder.name, () => {
  it('should handle pic 1', () => {
    /*
            2
             \
              3
             /
            4
    */

    const node: Node = {
      value: 2,
      right: {
        value: 3,
        left: {
          value: 4
        }
      }
    };
    const results = verticalOrder(node);
    expect(results[0]).toBe(2);
    expect(results[1]).toBe(4);
    expect(results[2]).toBe(3);
  });

  it('should handle pic 2', () => {
    /*

      1
    /    \
   2      3
 /   \      \
4     5      6

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
    }
    const results = verticalOrder(node);
    expect(results[0]).toBe(4);
    expect(results[1]).toBe(2);
    expect(results[2]).toBe(1);
    expect(results[3]).toBe(5);
    expect(results[4]).toBe(3);
    expect(results[5]).toBe(6);
  });

  
});