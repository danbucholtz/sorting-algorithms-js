import { describe, expect, it } from 'vitest';
import { hasRouteBetweenNodes, type DirectedGraph } from './route-between-nodes';

function buildGraph(edges: Array<[string, string[]]>): DirectedGraph {
  return new Map(edges);
}

describe(hasRouteBetweenNodes.name, () => {
  it('should return true when a directed route exists', () => {
    const graph = buildGraph([
      ['A', ['B', 'C']],
      ['B', ['D']],
      ['C', []],
      ['D', []],
    ]);

    const result = hasRouteBetweenNodes(graph, 'A', 'D');

    expect(result).toBe(true);
  });

  it('should return false when no directed route exists', () => {
    const graph = buildGraph([
      ['A', ['B']],
      ['B', []],
      ['C', ['A']],
    ]);

    const result = hasRouteBetweenNodes(graph, 'B', 'C');

    expect(result).toBe(false);
  });

  it('should handle cycles without infinite loops', () => {
    const graph = buildGraph([
      ['A', ['B']],
      ['B', ['C']],
      ['C', ['A', 'D']],
      ['D', []],
    ]);

    const result = hasRouteBetweenNodes(graph, 'A', 'D');

    expect(result).toBe(true);
  });

  it('should return true when start and target are the same node', () => {
    const graph = buildGraph([
      ['A', ['B']],
      ['B', []],
    ]);

    const result = hasRouteBetweenNodes(graph, 'A', 'A');

    expect(result).toBe(true);
  });

  it('should return false when the start node does not exist', () => {
    const graph = buildGraph([
      ['A', ['B']],
      ['B', []],
    ]);

    const result = hasRouteBetweenNodes(graph, 'Z', 'A');

    expect(result).toBe(false);
  });
});
