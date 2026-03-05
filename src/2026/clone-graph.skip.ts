import { describe, expect, it } from 'vitest';
import { cloneGraph, type GraphNode } from './clone-graph';

type AdjacencyList = number[][];

function buildGraph(adjacencyList: AdjacencyList): GraphNode | null {
  if (adjacencyList.length === 0) {
    return null;
  }

  const nodes: GraphNode[] = adjacencyList.map((_, index) => ({
    val: index + 1,
    neighbors: [],
  }));

  for (let i = 0; i < adjacencyList.length; i++) {
    const neighborIndexes = adjacencyList[i];
    nodes[i].neighbors = neighborIndexes.map((neighborVal) => nodes[neighborVal - 1]);
  }

  return nodes[0];
}

function toAdjacencyList(node: GraphNode | null): AdjacencyList {
  if (node === null) {
    return [];
  }

  const seen = new Set<number>();
  const queue: GraphNode[] = [node];
  const nodeMap = new Map<number, GraphNode>();

  while (queue.length) {
    const current = queue.shift() as GraphNode;
    if (seen.has(current.val)) {
      continue;
    }
    seen.add(current.val);
    nodeMap.set(current.val, current);

    for (const neighbor of current.neighbors) {
      if (!seen.has(neighbor.val)) {
        queue.push(neighbor);
      }
    }
  }

  const maxVal = Math.max(...nodeMap.keys());
  const result: AdjacencyList = Array.from({ length: maxVal }, () => []);

  for (let i = 1; i <= maxVal; i++) {
    const current = nodeMap.get(i);
    if (!current) {
      continue;
    }
    result[i - 1] = current.neighbors.map((neighbor) => neighbor.val);
  }

  return result;
}

function flattenByValue(root: GraphNode | null): Map<number, GraphNode> {
  if (root === null) {
    return new Map();
  }

  const seen = new Set<number>();
  const queue: GraphNode[] = [root];
  const result = new Map<number, GraphNode>();

  while (queue.length) {
    const current = queue.shift() as GraphNode;
    if (seen.has(current.val)) {
      continue;
    }
    seen.add(current.val);
    result.set(current.val, current);

    for (const neighbor of current.neighbors) {
      if (!seen.has(neighbor.val)) {
        queue.push(neighbor);
      }
    }
  }

  return result;
}

describe(cloneGraph.name, () => {
  it.only('should clone a basic connected graph from the prompt format', () => {
    const input = buildGraph([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ]);

    const result = cloneGraph(input);

    expect(toAdjacencyList(result)).toEqual([
      [2, 4],
      [1, 3],
      [2, 4],
      [1, 3],
    ]);
  });

  it('should create a deep copy (no shared node references)', () => {
    const input = buildGraph([
      [2, 3],
      [1, 3],
      [1, 2],
    ]);

    const result = cloneGraph(input);
    const originalNodes = flattenByValue(input);
    const clonedNodes = flattenByValue(result);

    expect(result).not.toBe(input);
    expect(clonedNodes.size).toBe(originalNodes.size);

    for (const [val, originalNode] of originalNodes.entries()) {
      const clonedNode = clonedNodes.get(val);
      expect(clonedNode).toBeDefined();
      expect(clonedNode).not.toBe(originalNode);
    }
  });

  it('should return null when the input node is null', () => {
    const result = cloneGraph(null);

    expect(result).toBeNull();
  });

  it('should clone a single node graph with no neighbors', () => {
    const input = buildGraph([[]]);

    const result = cloneGraph(input);

    expect(toAdjacencyList(result)).toEqual([[]]);
    expect(result).not.toBe(input);
  });
});
