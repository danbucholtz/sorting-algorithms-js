import { Node } from './list-of-depths';
import { topView } from './top-view';

describe(topView.name, () => {
  it('should return an empty array for no node', () => {
    const results = topView(null);
    expect(results.length).toBe(0);
  });

  it('should return a simple tree top view left to right', () => {
    /*
             1
           /   \
          3     2
    */

    const node: Node = {
      value: 1,
      left: {
        value: 3
      },
      right: {
        value: 2
      }
    };
    const results = topView(node);
    expect(results.length).toBe(3);
    expect(results[0]).toBe(3);
    expect(results[1]).toBe(1);
    expect(results[2]).toBe(2);
  });

  it('should build out a tree 1', () => {
    /*
              10
            /   \
           20    30
          /  \
         40   60
    */

    const node: Node = {
      value: 10,
      left: {
        value: 20,
        left: {
          value: 40
        },
        right: {
          value: 60
        }
      },
      right: {
        value: 30
      }
    };
    const results = topView(node);
    expect(results.length).toBe(4);
    expect(results[0]).toBe(40);
    expect(results[1]).toBe(20);
    expect(results[2]).toBe(10);
    expect(results[3]).toBe(30);
  });
});