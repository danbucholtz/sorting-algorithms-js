import { bottomView } from './bottom-view';
import { Node } from './list-of-depths';


describe(bottomView.name, () => {
  it('should return an empty array for null node', () => {
   const results = bottomView(null);
   expect(results.length).toBe(0);
  });

  it('should do this shit with this here tree 1', () => {
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
    const results = bottomView(node);
   expect(results.length).toBe(3);
   expect(results[0]).toBe(3);
   expect(results[1]).toBe(1);
   expect(results[2]).toBe(2);

  });

  it('should do this shit with this here tree 2', () => {
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
    const results = bottomView(node);
   expect(results.length).toBe(4);
   expect(results[0]).toBe(40);
   expect(results[1]).toBe(20);
   expect(results[2]).toBe(60);
   expect(results[3]).toBe(30);

  });
})