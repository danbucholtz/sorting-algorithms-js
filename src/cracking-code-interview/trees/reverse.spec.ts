import { Node } from './list-of-depths';
import { reverse } from './reverse';
import { inOrderTraversal } from './traversal';

describe(reverse.name, () => {
  it('should reverse a basic binary tree', () => {
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

    const originalOrder: number[] = [];
    const reverseOrder: number[] = [];

    inOrderTraversal(root, originalOrder);
    const newTree = reverse(root);
    inOrderTraversal(newTree, reverseOrder);

    const lastIndex = reverseOrder.length - 1;
    for (let i = 0; i < originalOrder.length; i++) {
      expect(originalOrder[i]).toBe(reverseOrder[lastIndex - i]);
    }
    
  });
});