import { Graph } from '../../graph-node';


export function undirectedGraphDetectCycle(graph: Graph) {
  const visited: boolean[] = [];
  for (let i = 0; i < graph.getSize(); i++) {
    if (!visited[i] && hasCycle(graph, i, visited, -1)) {
      return true;
    }
  }
  return false;
}

function hasCycle(graph: Graph, currentNode: number, visited: boolean[], parent: number) {
  visited[currentNode] = true;
  const node = graph.getNode(currentNode);
  const connectedNodes = node?.connectedNodes ? Array.from(node.connectedNodes) : [];
  for (const connectedNode of connectedNodes) {
    if (!visited[connectedNode.id]) {
      if (hasCycle(graph, connectedNode.id, visited, currentNode)) {
        return true;
      }
    }
    else if (parent !== connectedNode.id) {
      return true;
    }
  }
  return false;
}