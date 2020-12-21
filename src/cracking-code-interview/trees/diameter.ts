import { Node } from './list-of-depths';

interface Height { 
  height: number;
}


export function diameter(node: Node) {
  if (!node) {
    return 0;
  }
  return diameterImpl(node, { height: 0});
}


function diameterImpl(node: Node, state: Height): number {
  if (!node) {
    state.height = 0;
    return 0;
  }

  const leftHeight = {
    height: 0
  };
  const rightHeight = {
    height: 0
  };

  const leftDiameter = diameterImpl(node.left, leftHeight);
  const rightDiameter = diameterImpl(node.right, rightHeight);

  state.height = Math.max(leftHeight.height, rightHeight.height) + 1;

  return Math.max(leftHeight.height + rightHeight.height + 1, Math.max(leftDiameter, rightDiameter));
}
