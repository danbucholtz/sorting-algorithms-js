import { quickSort } from './quick-sort';
describe('Quick Sort', () => {
  it('should not blow up a single entry list', () => {
    const input = [5];
    const output = quickSort(input);
    expect(output.length).toBe(1);
    expect(output[0]).toBe(input[0]);
  });

  it('should sort the list', () => {
    const input = [5, 1, 4, 91, 42, 24, 87, 31, 3, 19, 55, 67, 72, 105];
    const output = quickSort(input);
    expect(output[0]).toBe(1);
    expect(output[1]).toBe(3);
    expect(output[2]).toBe(4);
    expect(output[3]).toBe(5);
    expect(output[4]).toBe(19);
    expect(output[5]).toBe(24);
    expect(output[6]).toBe(31);
    expect(output[7]).toBe(42);
    expect(output[8]).toBe(55);
    expect(output[9]).toBe(67);
    expect(output[10]).toBe(72);
    expect(output[11]).toBe(87);
    expect(output[12]).toBe(91);
    expect(output[13]).toBe(105);
  });
});