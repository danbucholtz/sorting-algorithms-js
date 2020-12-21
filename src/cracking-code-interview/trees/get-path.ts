import { Node } from './list-of-depths';


export function getPath(node: Node, valueOne: number, valueTwo: number) {
  const nodeOnePath: number[] = [];
  const nodeTwoPath: number[] = [];

  if (!getPathImpl(node, valueOne, nodeOnePath)) {
    throw new Error(`${valueOne} is not in the tree`);
  }
  if (!getPathImpl(node, valueTwo, nodeTwoPath)) {
    throw new Error(`${valueTwo} is not in the tree`);
  }

  let intersection = 0;
  const shorter = nodeOnePath.length > nodeTwoPath.length ? nodeTwoPath : nodeOnePath;

  for (let i = 0; i < shorter.length; i++) {
    if (nodeOnePath[i] !== nodeTwoPath[i]) {
      intersection = i - 1;
      break;
    }
  }

  const path: number[] = [];
  for (let i = nodeOnePath.length - 1; i > intersection; i--) {
    nodeOnePath[i] && path.push(nodeOnePath[i]);
  }

  for (let i = intersection; i < nodeTwoPath.length; i++) {
    nodeTwoPath[i] && path.push(nodeTwoPath[i]);
  }

  return path;


 }

function getPathImpl(node: Node, value: number, path: number[]) {
  if (!node) {
    return false;
  }

  path.push(node.value);

  if (node.value == value) {
    return true;
  }
  
  
  if (getPathImpl(node.left, value, path) || getPathImpl(node.right, value, path)) {
    return true;
  }

  // well, snap, remove this home boy
  path.splice(path.length - 1, 1);
  return false;
}
