import { MinHeap } from './heap';
import { getHeapCodeStatistics } from 'v8';

describe('heap', () => {
  it('should have 2 as the top', () => {
    const heap = new MinHeap();
    heap.insert(10);
    heap.insert(20);
    heap.insert(40);
    heap.insert(5);
    heap.insert(2);
    heap.insert(3);
    heap.insert(46);
    const result = heap.peek();
    expect(result).toBe(2);
  });

  it('should have 3 as the top after I pop, and then 5 after I pop again', () => {
    const heap = new MinHeap();
    heap.insert(10);
    heap.insert(20);
    heap.insert(40);
    heap.insert(5);
    heap.insert(2);
    heap.insert(3);
    heap.insert(46);
    const result = heap.peek();
    expect(result).toBe(2);
    const resultTwo = heap.pop();
    expect(resultTwo).toBe(2);
    const resultThree = heap.peek();
    expect(resultThree).toBe(3);
    const resultFour = heap.pop();
    expect(resultThree).toBe(resultFour);
    const resultFive = heap.peek();
    expect(resultFive).toBe(5);
  });
});