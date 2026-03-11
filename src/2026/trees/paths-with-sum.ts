import type { TreeNode } from './minimal-tree';

export function pathsWithSum(root: TreeNode, targetSum: number): number {
  const map = new Map<number, number>();
  return walkTree(root, targetSum, 0, map);
}

function walkTree(
  root: TreeNode,
  targetValue: number,
  runningSum: number,
  sumsMap: Map<number, number>,
): number {
  if (!root) {
    return 0;
  }

  runningSum = runningSum + root.value;
  const subpathSum = runningSum - targetValue;

  let totalPaths = sumsMap.get(subpathSum) || 0;

  if (runningSum === targetValue) {
    totalPaths++;
  }

  let runningSumsValue = sumsMap.get(runningSum) || 0;
  runningSumsValue++;
  sumsMap.set(runningSum, runningSumsValue);

  const leftValue = root.left ? walkTree(root.left, targetValue, runningSum, sumsMap) : 0;
  const rightValue = root.right ? walkTree(root.right, targetValue, runningSum, sumsMap) : 0;

  runningSumsValue = sumsMap.get(runningSum)!;
  runningSumsValue--;
  sumsMap.set(runningSum, runningSumsValue);

  return totalPaths + leftValue + rightValue;
}
