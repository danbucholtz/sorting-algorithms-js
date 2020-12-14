import { Node } from './list-of-depths';
import { inOrderTraversal } from './traversal';

describe(inOrderTraversal.name, () => {
  it('should visit the node in ascending order', () => {
    const root: Node = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: 2,
          left: {
            value: 1
          },
          right: {
            value: 3
          }
        },
        right: {
          value: 7,
          left: {
            value: 6
          },
          right: {
            value: 8
          }
        }
      },
      right: {
        value: 15,
        left: {
          value: 13,
          left: {
            value: 12
          }
        },
        right: {
          value: 18,
          left: {
            value: 17
          },
          right: {
            value: 20
          }
        }
      }
    };
    const history: number[] = [];
    inOrderTraversal(root, history);
    for (let i = 0; i < history.length; i++) {
      const smallerNumber = history[i];
      const largerNumber = history[i + 1];
      if (smallerNumber && largerNumber) {
        expect(smallerNumber).toBeLessThan(largerNumber);
      }
    }
  });
});