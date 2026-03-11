import type { TreeNode } from './minimal-tree';

enum MaxOrMin {
  MIN = 1,
  MAX = 2,
}

export function validateBst(root: TreeNode): boolean {
  const leftValid = root.left ? isSubtreeValid(root.left, root.value, MaxOrMin.MAX) : true;
  const rightValid = root.right ? isSubtreeValid(root.right, root.value, MaxOrMin.MIN) : true;
  return leftValid && rightValid;
}

function isSubtreeValid(root: TreeNode, boundingValue: number, minOrMax: MaxOrMin): boolean {
  if (minOrMax === MaxOrMin.MIN) {
    if (root.value <= boundingValue) {
      return false;
    }
  } else {
    if (root.value >= boundingValue) {
      return false;
    }
  }

  const leftTreeValid = root.left ? isSubtreeValid(root.left, boundingValue, minOrMax) : true;
  const rightTreeValid = root.right ? isSubtreeValid(root.right, boundingValue, minOrMax) : true;

  // now check if itself is valid
  const leftValid = root.left ? root.value > root.left.value : true;
  const rightValid = root.right ? root.value < root.right.value : true;

  return leftTreeValid && rightTreeValid && leftValid && rightValid;
}
