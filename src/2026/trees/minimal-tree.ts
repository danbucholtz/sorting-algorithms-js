export interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}

export function minimalTree(sortedValues: number[]): TreeNode | undefined {
  return generateTreeNode(sortedValues, 0, sortedValues.length - 1);
}

function generateTreeNode(
  sortedValues: number[],
  startIndex: number,
  endIndex: number,
): TreeNode | undefined {
  if (startIndex > endIndex) {
    return undefined;
  }
  const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  const node: TreeNode = {
    value: sortedValues[middleIndex],
  };
  node.left = generateTreeNode(sortedValues, startIndex, middleIndex - 1);
  node.right = generateTreeNode(sortedValues, middleIndex + 1, endIndex);

  return node;
}

//     4
//   /
// 2

// const input = [1, 2, 3, 4, 5, 6, 7];
