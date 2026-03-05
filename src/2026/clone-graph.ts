export type GraphNodeValue = number;

export interface GraphNode {
  val: GraphNodeValue;
  neighbors: GraphNode[];
}

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  console.log('node: ', node);
  if (!node) {
    return null;
  }
  // const cloned = cloneNode(node, { val: node.val, neighbors: [] });
  // console.log('cloned: ', cloned);
}

function cloneNode(sourceNode: GraphNode, destNode: GraphNode): GraphNode {
  destNode.val = sourceNode.val;
  for (const neighbor of sourceNode.neighbors) {
    const clonedNeighbor: GraphNode = {
      val: neighbor.val,
      neighbors: [],
    };
    destNode.neighbors.push(cloneNode(neighbor, clonedNeighbor));
  }
  return destNode;
}
