import { SinglelyLinkedList } from './interfaces';
import { returnNth } from './return-nth';

describe(returnNth.name, () => {
  it('should return the nth element', () => {
    const linkedList: SinglelyLinkedList = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
            }
          }
        }
      }
    };
    const result = returnNth(2, linkedList);
    expect(result.value).toBe(3);

    const resultTwo = returnNth(4, linkedList);
    expect(resultTwo.value).toBe(1);

    const resultThree = returnNth(0, linkedList);
    expect(resultThree.value).toBe(5);
  });
});