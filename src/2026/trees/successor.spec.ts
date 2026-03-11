import { describe, expect, it } from 'vitest';
import { successor, type ParentTreeNode } from './successor';

interface ParentLinkedTree {
  root: ParentTreeNode;
  nodesByValue: Map<number, ParentTreeNode>;
}

function buildParentLinkedBst(): ParentLinkedTree {
  //        20
  //      /    \
  //    10      30
  //   /  \    /  \
  //  5   15  25  35
  const root: ParentTreeNode = { value: 20 };
  const node10: ParentTreeNode = { value: 10, parent: root };
  const node30: ParentTreeNode = { value: 30, parent: root };
  const node5: ParentTreeNode = { value: 5, parent: node10 };
  const node15: ParentTreeNode = { value: 15, parent: node10 };
  const node25: ParentTreeNode = { value: 25, parent: node30 };
  const node35: ParentTreeNode = { value: 35, parent: node30 };

  root.left = node10;
  root.right = node30;
  node10.left = node5;
  node10.right = node15;
  node30.left = node25;
  node30.right = node35;

  return {
    root,
    nodesByValue: new Map([
      [5, node5],
      [10, node10],
      [15, node15],
      [20, root],
      [25, node25],
      [30, node30],
      [35, node35],
    ]),
  };
}

describe(successor.name, () => {
  it('should return undefined for undefined input', () => {
    const result = successor(undefined);

    expect(result).toBeUndefined();
  });

  it('should return undefined for a single-node tree', () => {
    const singleNode: ParentTreeNode = { value: 42 };

    const result = successor(singleNode);

    expect(result).toBeUndefined();
  });

  it('should return the left-most node in the right subtree when it exists', () => {
    const { nodesByValue } = buildParentLinkedBst();

    const result = successor(nodesByValue.get(20) as ParentTreeNode);

    expect(result?.value).toBe(25);
  });

  it('should return the first ancestor where current node is in the left subtree', () => {
    const { nodesByValue } = buildParentLinkedBst();

    const result = successor(nodesByValue.get(15) as ParentTreeNode);

    expect(result?.value).toBe(20);
  });

  it('should return parent when node is a left-child leaf', () => {
    const { nodesByValue } = buildParentLinkedBst();

    const result = successor(nodesByValue.get(5) as ParentTreeNode);

    expect(result?.value).toBe(10);
  });

  it('should walk to a deeper left-most node in the right subtree', () => {
    const root: ParentTreeNode = { value: 20 };
    const node10: ParentTreeNode = { value: 10, parent: root };
    const node30: ParentTreeNode = { value: 30, parent: root };
    const node25: ParentTreeNode = { value: 25, parent: node30 };
    const node22: ParentTreeNode = { value: 22, parent: node25 };
    const node24: ParentTreeNode = { value: 24, parent: node22 };

    root.left = node10;
    root.right = node30;
    node30.left = node25;
    node25.left = node22;
    node22.right = node24;

    const result = successor(root);

    expect(result?.value).toBe(22);
  });

  it('should climb multiple ancestors to find the successor', () => {
    //         50
    //       /    \
    //     30      70
    //    /  \    /  \
    //  20   40  60  80
    //        \
    //        45
    const root: ParentTreeNode = { value: 50 };
    const node30: ParentTreeNode = { value: 30, parent: root };
    const node70: ParentTreeNode = { value: 70, parent: root };
    const node20: ParentTreeNode = { value: 20, parent: node30 };
    const node40: ParentTreeNode = { value: 40, parent: node30 };
    const node45: ParentTreeNode = { value: 45, parent: node40 };
    const node60: ParentTreeNode = { value: 60, parent: node70 };
    const node80: ParentTreeNode = { value: 80, parent: node70 };

    root.left = node30;
    root.right = node70;
    node30.left = node20;
    node30.right = node40;
    node40.right = node45;
    node70.left = node60;
    node70.right = node80;

    const result = successor(node45);

    expect(result?.value).toBe(50);
  });

  it('should return undefined for the maximum node', () => {
    const { nodesByValue } = buildParentLinkedBst();

    const result = successor(nodesByValue.get(35) as ParentTreeNode);

    expect(result).toBeUndefined();
  });

  it('should return undefined for root when there is no right subtree', () => {
    const root: ParentTreeNode = { value: 10 };
    root.left = { value: 5, parent: root };

    const result = successor(root);

    expect(result).toBeUndefined();
  });
});
