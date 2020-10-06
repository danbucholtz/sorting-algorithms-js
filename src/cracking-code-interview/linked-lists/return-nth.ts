
export interface Node {
  value?: number;
  next?: Node;
}

export function returnNth(numFromEnd: number, head: Node) {
  let node = head;
  let trailer = head;
  let numIterations = 0;
  while (node) {
    if (numIterations >= numFromEnd) {
      trailer = trailer.next;
    }
    node = node.next;
    numIterations++;
  }
  return trailer;
}