import { Node, Graph } from './graph-node';
import { depthFirstSearch } from './depth-first-search';
import { breadthFirstSearch } from './breadth-first-search';

describe('Graphs', () => {
  describe('Depth First', () => {
    it('should find a path from 1 to 9', () => {
      const graph = generateGraph();
      const nodeOne = graph.getNode(1);
      const nodeTwo = graph.getNode(9);
      const result = depthFirstSearch(nodeOne, nodeTwo);
      expect(result).toBe(true);
    });

    it('should find a path from 1 to 4', () => {
      const graph = generateGraph();
      const nodeOne = graph.getNode(1);
      const nodeTwo = graph.getNode(4);
      const result = depthFirstSearch(nodeOne, nodeTwo);
      expect(result).toBe(true);
    });

    it('should find a path from 3 to 7', () => {
      const graph = generateGraph();
      const nodeOne = graph.getNode(3);
      const nodeTwo = graph.getNode(7);
      const result = depthFirstSearch(nodeOne, nodeTwo);
      expect(result).toBe(true);
    });

    it('should never find a path to ten', () => {
      const graph = generateGraph();
      const nodeOne = graph.getNode(1);
      const result = depthFirstSearch(nodeOne, new Node(10, {}));
      expect(result).toBe(false);
    });
    
  });

  describe('Breadth First', () => {
    it('should find a path from 1 to 9', () => {
      const graph = generateGraph();
      const nodeOne = graph.getNode(1);
      const nodeTwo = graph.getNode(9);
      const result = breadthFirstSearch(nodeOne, nodeTwo);
      expect(result).toBe(true);
    });

    it('should find a path from 1 to 4', () => {
      const graph = generateGraph();
      const nodeOne = graph.getNode(1);
      const nodeTwo = graph.getNode(4);
      const result = breadthFirstSearch(nodeOne, nodeTwo);
      expect(result).toBe(true);
    });

    it('should find a path from 3 to 7', () => {
      const graph = generateGraph();
      const nodeOne = graph.getNode(3);
      const nodeTwo = graph.getNode(7);
      const result = breadthFirstSearch(nodeOne, nodeTwo);
      expect(result).toBe(true);
    });

    it('should never find a path to ten', () => {
      const graph = generateGraph();
      const nodeOne = graph.getNode(1);
      const result = breadthFirstSearch(nodeOne, new Node(10, {}));
      expect(result).toBe(false);
    });
  });
});

export function generateGraph() {
  const one = new Node(1, {});
  const two = new Node(2, {});
  const three = new Node(3, {});
  const four = new Node(4, {});
  const five = new Node(5, {});
  const six = new Node(6, {});
  const seven = new Node(7, {});
  const eight = new Node(8, {});
  const nine = new Node(9, {});

  const graph = new Graph();

  graph.connectNodes(one, two);
  graph.connectNodes(one, eight);

  graph.connectNodes(two, three);

  graph.connectNodes(three, two);
  graph.connectNodes(three, four);
  graph.connectNodes(three, five);

  graph.connectNodes(five, three);
  graph.connectNodes(five, six);

  graph.connectNodes(six, five);
  graph.connectNodes(six, seven);
  graph.connectNodes(six, eight);

  graph.connectNodes(seven, six);
  graph.connectNodes(seven, eight);
  graph.connectNodes(seven, nine);

  graph.connectNodes(eight, six);
  graph.connectNodes(eight, seven);
  graph.connectNodes(eight, nine);

  graph.connectNodes(nine, seven);
  graph.connectNodes(nine, eight);

  return graph;
}