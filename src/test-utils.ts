
export function getShortList() {
  return [5, 1, 2];
}

export function validateShortList(results: number[]) {
  expect(results.length).toBe(3);
  expect(results[0]).toBe(1);
  expect(results[1]).toBe(2);
  expect(results[2]).toBe(5);
}

export function getLongList() {
  return [1, 5, 3, 4, 2, 7, 9, 115]
}

export function validateLongList(results: number[]) {
  expect(results.length).toBe(8);
  expect(results[0]).toBe(1);
  expect(results[1]).toBe(2);
  expect(results[2]).toBe(3);
  expect(results[3]).toBe(4);
  expect(results[4]).toBe(5);
  expect(results[5]).toBe(7);
  expect(results[6]).toBe(9);
  expect(results[7]).toBe(115);
}

export function getStringList() {
  return ['taco', 'Apple', 'banana', 'milk', 'Dinosaur'];
}

export function validateStringList(results: string[]) {
  expect(results.length).toBe(5);
  expect(results[0]).toBe('Apple');
  expect(results[1]).toBe('banana');
  expect(results[2]).toBe('Dinosaur');
  expect(results[3]).toBe('milk');
  expect(results[4]).toBe('taco');
}