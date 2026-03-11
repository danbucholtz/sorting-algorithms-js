import type { TreeNode } from './minimal-tree';

export function bstSequences(root: TreeNode): number[][] {
  if (!root) {
    return [[]];
  }
  const leftSequence = root.left ? bstSequences(root.left) : [[]];
  const rightSequence = root.right ? bstSequences(root.right) : [[]];

  const results: number[][] = [];
  for (let i = 0; i < leftSequence.length; i++) {
    const left = leftSequence[i];
    for (let j = 0; j < rightSequence.length; j++) {
      const right = rightSequence[j];
      const weaved = weave(left, right);
      for (let w = 0; w < weaved.length; w++) {
        const weave = weaved[w];
        const withRootAppended = [root.value, ...weave];
        results.push(withRootAppended);
      }
    }
  }

  return results;
}

function weave(arrayOne: number[], arrayTwo: number[]): number[][] {
  const results: number[][] = [];
  weaveImpl(arrayOne, arrayTwo, [], results);
  return results;
}

function weaveImpl(arrayOne: number[], arrayTwo: number[], prefix: number[], results: number[][]) {
  if (arrayOne.length === 0 || arrayTwo.length === 0) {
    const newArray = [...prefix, ...arrayOne, ...arrayTwo];
    results.push(newArray);
    return;
  }

  const tmpOne = [...arrayOne];
  const firstArrayOne = tmpOne.shift()!;
  const prefixPlusFirstOne = [...prefix, firstArrayOne];
  weaveImpl(tmpOne, arrayTwo, prefixPlusFirstOne, results);

  const tmpTwo = [...arrayTwo];
  const firstArrayTwo = tmpTwo.shift()!;
  const prefixPlusFirstTwo = [...prefix, firstArrayTwo];
  weaveImpl(arrayOne, tmpTwo, prefixPlusFirstTwo, results);
}
