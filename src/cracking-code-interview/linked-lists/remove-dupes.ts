
export interface Node {
  value?: number;
  next?: Node;
}

export function removeDupes(head: Node) {
  const set = new Set();
  let node = head;
  let trailer: Node = null;
  while (node) {
    if (set.has(node.value)) {
      trailer.next = node.next;
    } else {
      set.add(node.value);
      trailer = node;
    }
    node = node.next;
  }
  return head;
}