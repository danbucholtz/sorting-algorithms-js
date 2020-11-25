
export class Node {

  public connectedNodes: Set<Node> = new Set();
  constructor(public id: number, public value: any) {
  }

  connect(node: Node) {
    if (!this.isConnected(node)) {
      this.connectedNodes.add(node);
    }
  }

  isConnected(node: Node) {
    return this.connectedNodes.has(node);
  }

  getNumEdges()

}

export class Graph {

  map: Map<number, Node> = new Map();
  
  connectNodes(nodeOne: Node, nodeTwo: Node) {
    nodeOne.connect(nodeTwo);
    nodeTwo.connect(nodeOne);

    this.map.set(nodeOne.id, nodeOne);
    this.map.set(nodeTwo.id, nodeTwo);
  }

  getNode(id: number) {
    return this.map.get(id);
  }
}
