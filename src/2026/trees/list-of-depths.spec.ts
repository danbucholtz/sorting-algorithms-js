import { describe, expect, it } from 'vitest';
import { minimalTree, type TreeNode } from './minimal-tree';
import { listOfDepths, type DepthListNode } from './list-of-depths';

function depthListToArray(head: DepthListNode | undefined): number[] {
  const values: number[] = [];
  let current = head;

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  return values;
}

function allDepthListsToArrays(lists: Array<DepthListNode | undefined>): number[][] {
  return lists.map((head) => depthListToArray(head));
}

describe(listOfDepths.name, () => {
  it('should return one linked list for a single-node tree', () => {
    const root: TreeNode = { value: 10 };

    const result = listOfDepths(root);

    expect(allDepthListsToArrays(result)).toEqual([[10]]);
  });

  it('should create one linked list per depth for a balanced tree', () => {
    const root = minimalTree([1, 2, 3, 4, 5, 6, 7]) as TreeNode;

    const result = listOfDepths(root);

    expect(allDepthListsToArrays(result)).toEqual([[4], [6, 2], [7, 5, 3, 1]]);
  });

  it('should preserve left-to-right ordering at each depth for sparse trees', () => {
    const root: TreeNode = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
        },
      },
      right: {
        value: 3,
        right: {
          value: 5,
        },
      },
    };

    const result = listOfDepths(root);

    expect(allDepthListsToArrays(result)).toEqual([[1], [3, 2], [5, 4]]);
  });
});
