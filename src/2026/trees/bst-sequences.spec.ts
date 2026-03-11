import { describe, expect, it } from 'vitest';
import type { TreeNode } from './minimal-tree';
import { bstSequences } from './bst-sequences';

function normalize(sequences: number[][]): string[] {
  return sequences.map((sequence) => sequence.join(',')).sort();
}

function expectSameSequenceSet(actual: number[][], expected: number[][]) {
  expect(normalize(actual)).toEqual(normalize(expected));
}

describe(bstSequences.name, () => {
  it('should return one sequence for a single-node tree', () => {
    const root: TreeNode = { value: 2 };

    const result = bstSequences(root);

    expectSameSequenceSet(result, [[2]]);
  });

  it('should return all valid sequences for a root with two children', () => {
    const root: TreeNode = {
      value: 2,
      left: { value: 1 },
      right: { value: 3 },
    };

    const result = bstSequences(root);

    expectSameSequenceSet(result, [
      [2, 1, 3],
      [2, 3, 1],
    ]);
  });

  it('should preserve relative ordering from each subtree while weaving', () => {
    const root: TreeNode = {
      value: 2,
      left: {
        value: 1,
        left: { value: 0 },
      },
      right: { value: 3 },
    };

    const result = bstSequences(root);

    expectSameSequenceSet(result, [
      [2, 1, 0, 3],
      [2, 1, 3, 0],
      [2, 3, 1, 0],
    ]);
  });
});
