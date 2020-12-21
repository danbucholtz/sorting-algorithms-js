import { Node } from './list-of-depths';


export function leftView(node: Node) {
  if (!node) {
    return [];
  }
  const leftNodes: Node[] = [];
  leftViewImpl(node, 1, { maxLevel: 0}, leftNodes);
  return leftNodes;
}

function leftViewImpl(node: Node, currentLevel: number, state: { maxLevel: number }, leftNodes: Node[]) {
  if (!node) {
    return;
  }
  if (currentLevel > state.maxLevel) {
    leftNodes.push(node);
    state.maxLevel = currentLevel;
  }

  leftViewImpl(node.left, currentLevel + 1, state, leftNodes);
  leftViewImpl(node.right, currentLevel + 1, state, leftNodes);

}