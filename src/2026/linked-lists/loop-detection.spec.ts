import { describe, expect, it } from 'vitest';
import type { SinglelyLinkedList } from './interfaces';
import { detectLoopStart } from './loop-detection';

interface CyclicListBuildResult {
  head: SinglelyLinkedList;
  nodes: SinglelyLinkedList[];
}

function buildLinkedList(values: number[]): CyclicListBuildResult {
  const nodes = values.map((value) => ({ value })) as SinglelyLinkedList[];
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  return { head: nodes[0], nodes };
}

function connectTailToIndex(nodes: SinglelyLinkedList[], index: number): void {
  if (!nodes.length || index < 0 || index >= nodes.length) {
    return;
  }

  const tail = nodes[nodes.length - 1];
  tail.next = nodes[index];
}

describe(detectLoopStart.name, () => {
  it('should return null when there is no loop', () => {
    const { head } = buildLinkedList([1, 2, 3, 4, 5]);

    const result = detectLoopStart(head);

    expect(result).toBeNull();
  });

  it('should return the node where the loop begins', () => {
    const { head, nodes } = buildLinkedList([1, 2, 3]);
    connectTailToIndex(nodes, 0);

    const result = detectLoopStart(head);

    expect(result).toBe(nodes[0]);
    expect(result?.value).toBe(1);
  });

  it('should handle a self-loop single-node list', () => {
    const { head, nodes } = buildLinkedList([42]);
    connectTailToIndex(nodes, 0);

    const result = detectLoopStart(head);

    expect(result).toBe(nodes[0]);
    expect(result?.value).toBe(42);
  });
});
