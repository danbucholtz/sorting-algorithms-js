import { Node } from './list-of-depths';



export function inOrderTraversal(node: Node, visitHistory: number[]) {
  if (node) {
    inOrderTraversal(node.left, visitHistory);
    visitHistory.push(node.value);
    inOrderTraversal(node.right, visitHistory);
  }
}