import { listOfDepths } from './list-of-depths';
import { arrayToTree } from './helpers';

describe(listOfDepths.name, () => {
  it('should return a map with depth 1', () => {
    const values = [5];
    const node = arrayToTree(values);
    const map = listOfDepths(node);
    expect(map.size).toBe(1);
    expect(map.get(1).value).toBe(5);
  });

  it('should return a map with depth 2', () => {
    const values = [2, 5];
    const node = arrayToTree(values);
    const map = listOfDepths(node);
    expect(map.size).toBe(2);
    expect(map.get(1).value).toBe(2);
    expect(map.get(2).value).toBe(5);
  });

  it('should return a map with depth 2', () => {
    const values = [2, 3, 5];
    const node = arrayToTree(values);
    const map = listOfDepths(node);
    expect(map.size).toBe(2);
    expect(map.get(1).value).toBe(3);
    expect(map.get(2).value).toBe(5);
    expect(map.get(2).next.value).toBe(2);
  });

  it('should return a map with depth 3', () => {
    const values = [1, 2, 3, 4, 5];
    const node = arrayToTree(values);
    const map = listOfDepths(node);
    expect(map.size).toBe(3);
    expect(map.get(1).value).toBe(3);
    expect(map.get(2).value).toBe(4);
    expect(map.get(2).next.value).toBe(1);
    expect(map.get(3).value).toBe(5);
    expect(map.get(3).next.value).toBe(2);
  });
});