import { BinaryTree } from './binary-tree';

describe('Binary Tree', () => {
  describe('search', () => {
    it('should handle simple cases', () => {
      const tree = new BinaryTree();
      tree.insert(10);
      tree.insert(5);

      const result = tree.search(5);
      expect(result).toBe(true);
      const resultTwo = tree.search(10);
      expect(resultTwo).toBe(true);

      const resultThree = tree.search(14);
      expect(resultThree).toBe(false);
    });
  });

  describe('sort', () => {
    it('should return 1, 2, 3', () => {
      const tree = new BinaryTree();
      tree.insert(1);
      tree.insert(3);
      tree.insert(2);
      const result = tree.sort();
      expect(result[0]).toBe(1);
      expect(result[1]).toBe(2);
      expect(result[2]).toBe(3);
    });

    it('should return 1, 2, 3', () => {
      const tree = new BinaryTree();
      tree.insert(10);
      tree.insert(5);
      tree.insert(25);
      tree.insert(100);
      tree.insert(30);
      tree.insert(4);
      tree.insert(75);
      const result = tree.sort();
      
      expect(result[0]).toBe(4);
      expect(result[1]).toBe(5);
      expect(result[2]).toBe(10);
      expect(result[3]).toBe(25);
      expect(result[4]).toBe(30);
      expect(result[5]).toBe(75);
      expect(result[6]).toBe(100);
    });
  });

  describe('reverse', () => {
    it('should reverse the tree', () => {
      const tree = new BinaryTree();
      tree.insert(10);
      tree.insert(5);
      tree.insert(25);
      tree.insert(100);
      tree.insert(30);
      tree.insert(4);
      tree.insert(75);
      const reversedTree = tree.reverse();
      const result = reversedTree.sort();
      expect(result[6]).toBe(4);
      expect(result[5]).toBe(5);
      expect(result[4]).toBe(10);
      expect(result[3]).toBe(25);
      expect(result[2]).toBe(30);
      expect(result[1]).toBe(75);
      expect(result[0]).toBe(100);
    });
  });

  describe('isEqual', () => {
    it('should handle the empty case', () => {
      const treeOne = new BinaryTree();
      const treeTwo = new BinaryTree();
      const result = treeOne.isEqual(treeTwo);
      expect(result).toBe(true);
    });

    it('should handle a single entry being the same', () => {
      const treeOne = new BinaryTree();
      treeOne.value = 5;
      const treeTwo = new BinaryTree();
      treeTwo.value = 5;
      const result = treeOne.isEqual(treeTwo);
      expect(result).toBe(true);
    });

    it('should handle a single entry being different', () => {
      const treeOne = new BinaryTree();
      treeOne.value = 5;
      const treeTwo = new BinaryTree();
      treeTwo.value = 7;
      const result = treeOne.isEqual(treeTwo);
      expect(result).toBe(false);
    });

    it('should handle a complex tree being the same', () => {
      const treeOne = new BinaryTree();
      treeOne.insert(10);
      treeOne.insert(5);
      treeOne.insert(25);
      treeOne.insert(100);
      treeOne.insert(30);
      treeOne.insert(4);
      treeOne.insert(75);

      const treeTwo = new BinaryTree();
      treeTwo.insert(10);
      treeTwo.insert(5);
      treeTwo.insert(25);
      treeTwo.insert(100);
      treeTwo.insert(30);
      treeTwo.insert(4);
      treeTwo.insert(75);

      const result = treeOne.isEqual(treeTwo);
      expect(result).toBe(true);
    });
    
    it('should handle a complex tree being differnet', () => {
      const treeOne = new BinaryTree();
      treeOne.insert(10);
      treeOne.insert(5);
      treeOne.insert(25);
      treeOne.insert(100);
      treeOne.insert(30);
      treeOne.insert(4);
      treeOne.insert(75);

      const treeTwo = new BinaryTree();
      treeTwo.insert(11);
      treeTwo.insert(6);
      treeTwo.insert(26);
      treeTwo.insert(101);
      treeTwo.insert(31);
      treeTwo.insert(5);
      treeTwo.insert(76);

      const result = treeOne.isEqual(treeTwo);
      expect(result).toBe(false);
    });
  });
});