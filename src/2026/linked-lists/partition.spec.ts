import { describe, expect, it } from 'vitest';
import type { SinglelyLinkedList } from './interfaces';
import { partition } from './partition';

function buildLinkedList(values: number[]): SinglelyLinkedList {
  const head: SinglelyLinkedList = { value: values[0] };
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = { value: values[i] };
    current = current.next!;
  }

  return head;
}

function toArray(head: SinglelyLinkedList | null): number[] {
  const result: number[] = [];
  let current: SinglelyLinkedList | null | undefined = head;

  while (current) {
    if (current.value === undefined) {
      throw new Error('Invalid linked list node: value is undefined');
    }

    result.push(current.value);
    current = current.next;
  }

  return result;
}

function assertPartitioned(values: number[], pivot: number) {
  let seenGreaterOrEqual = false;

  for (const value of values) {
    if (value >= pivot) {
      seenGreaterOrEqual = true;
      continue;
    }

    if (seenGreaterOrEqual) {
      throw new Error(`Partition invariant broken at value ${value} for pivot ${pivot}`);
    }
  }
}

describe(partition.name, () => {
  it('should partition the classic CTCI example around 5', () => {
    const inputValues = [3, 5, 8, 5, 10, 2, 1];
    const input = buildLinkedList(inputValues);

    const result = partition(input, 5);
    const resultValues = toArray(result);

    expect(resultValues).toHaveLength(inputValues.length);
    expect([...resultValues].sort((a, b) => a - b)).toEqual([...inputValues].sort((a, b) => a - b));
    expect(() => assertPartitioned(resultValues, 5)).not.toThrow();
  });

  it('should keep all nodes when every value is less than the pivot', () => {
    const inputValues = [1, 2, 3, 4];
    const input = buildLinkedList(inputValues);

    const result = partition(input, 10);
    const resultValues = toArray(result);

    expect(resultValues).toHaveLength(inputValues.length);
    expect([...resultValues].sort((a, b) => a - b)).toEqual([...inputValues].sort((a, b) => a - b));
    expect(() => assertPartitioned(resultValues, 10)).not.toThrow();
  });

  it('should keep all nodes when every value is greater than or equal to the pivot', () => {
    const inputValues = [9, 7, 8, 6];
    const input = buildLinkedList(inputValues);

    const result = partition(input, 5);
    const resultValues = toArray(result);

    expect(resultValues).toHaveLength(inputValues.length);
    expect([...resultValues].sort((a, b) => a - b)).toEqual([...inputValues].sort((a, b) => a - b));
    expect(() => assertPartitioned(resultValues, 5)).not.toThrow();
  });
});
