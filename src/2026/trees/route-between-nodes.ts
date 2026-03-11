import { Queue } from '../stacks-queues/queue';
export type GraphNodeId = string;

export type DirectedGraph = Map<GraphNodeId, GraphNodeId[]>;

export function hasRouteBetweenNodes(
  graph: DirectedGraph,
  startNodeId: GraphNodeId,
  targetNodeId: GraphNodeId,
): boolean {
  const visited = new Set<GraphNodeId>();
  const queued = new Queue<GraphNodeId>();
  queued.enqueue(startNodeId);
  visited.add(startNodeId);
  while (!queued.isEmpty()) {
    const edge = queued.dequeue() as GraphNodeId;
    if (edge === targetNodeId) {
      return true;
    }
    const node = graph.get(edge);
    if (!node) {
      break;
    }
    visited.add(edge);
    for (const connection of node) {
      if (!visited.has(connection)) {
        queued.enqueue(connection);
      }
    }
  }
  return false;
}
