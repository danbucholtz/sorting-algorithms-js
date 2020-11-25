import { getRandomInt } from './helpers';
import { TreeNode } from './random-node';

describe('random node', () => {
  it('should return a random node from the tree', () => {
    const tree = new TreeNode(20);
    tree.insertNode(10);
    tree.insertNode(5);
    tree.insertNode(3);
    tree.insertNode(8);
    tree.insertNode(30);
    tree.insertNode(25);
    tree.insertNode(22);
    tree.insertNode(27);
    tree.insertNode(35);
    tree.insertNode(33);
    tree.insertNode(38);
    


    const one = tree.getRandomNode();
    const two = tree.getRandomNode();
    // expect(one.value).not.toBe(two.value);
    
  });
});