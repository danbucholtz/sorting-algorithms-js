
export function palindromePermutation(input: string) {
  const map: Map<string, number> = new Map();
  for (let i = 0; i < input.length; i++) {
    let value = map.get(input[i]) || 0;
    value++;
    map.set(input[i], value);
  }

  let numOdds = 0;
  let isOddString = input.length % 2 === 1;
  for (let i = 0; i < input.length; i++) {
    let value = map.get(input[i]) || 0;
    map.delete(input[i]);
    if (value % 2 === 1) {
      numOdds++;
    }
    
    if (!isOddString && numOdds > 0) {
      return false;
    }
    if (isOddString && numOdds > 1) {
      return false;
    }
  }
  return true;
}