import { Graph, Node } from '../../graph-node';
import { undirectedGraphDetectCycle } from './undirected-graph-detect-cycle';

describe(undirectedGraphDetectCycle.name, () => {
  it('should return false when there is not a cycle', () => {
    const graph = new Graph();
    const one = new Node(1, 1);
    const two = new Node(2, 2);
    const three = new Node(3, 3);
    graph.connectNodes(one, two);
    graph.connectNodes(two, three);
    const result = undirectedGraphDetectCycle(graph);
    expect(result).toBe(false);
  });

  it('should return true when there is a cycle', () => {
    const graph = new Graph();
    const one = new Node(1, 1);
    const two = new Node(2, 2);
    const three = new Node(3, 3);
    graph.connectNodes(one, two);
    graph.connectNodes(two, three);
    graph.connectNodes(three, one);
    const result = undirectedGraphDetectCycle(graph);
    expect(result).toBe(true);
  });
})