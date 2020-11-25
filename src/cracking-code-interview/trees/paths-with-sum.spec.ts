import { createTree } from './helpers';
import { Node } from './list-of-depths';
import { pathsWithSum } from './paths-with-sum';

describe(pathsWithSum.name, () => {
  it('should return 0 when there is no sums', () => {
    const tree = createTree(5);
    const result = pathsWithSum(tree, 10);
    expect(result).toBe(0);
  });

  it('should return n sums when they exist', () => {
    const tree: Node = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: 2
        }
      },
      right: {
        value: 50,
        left: {
          value: 20,
        }
      }
    }
    const result = pathsWithSum(tree, 17);
    expect(result).toBe(1);
    const resultTwo = pathsWithSum(tree, 80);
    expect(resultTwo).toBe(1);
  });

  it('should handle duplicates where there are multiple trees adding up to the same value', () => {
    const tree: Node = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: 1,
        },
        right: {
          value: 1
        }
      },
      right: {
        value: 6
      }
    };
    const result = pathsWithSum(tree, 16);
    expect(result).toBe(3);
  });

  it('should handle negative numbers adding up to the same value', () => {
    const tree: Node = {
      value: 10,
      left: {
        value: 5,
        left: {
          value: -1,
        },
        right: {
          value: -1
        }
      },
      right: {
        value: 6,
        left: {
          value: -2
        }
      }
    };
    const result = pathsWithSum(tree, 14);
    expect(result).toBe(3);
  });
});


