import { tmpdir } from 'os';


export function powerSet(values: number[]) {
  const subsets: number[][] = [];
  powerSetImpl(values, 0, subsets);
  return subsets;
}

function powerSetImpl(values: number[], index: number, subsets: number[][]): void {
  if (index >= values.length) {
    return;
  }
  const valueToAdd = values[index];
  // okay cool, so, make a new row for the subsets

  const tmpStorage: number[][] = [];
  for (const tmp of subsets) {
    tmpStorage.push([...tmp]);
  }
  for (const tmp of tmpStorage) {
    tmp.push(valueToAdd);
  }
  tmpStorage.push([valueToAdd]);
  for (const tmp of tmpStorage) {
    subsets.push(tmp);
  }
  return powerSetImpl(values, index + 1, subsets);
}