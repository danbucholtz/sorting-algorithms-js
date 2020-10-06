
export function checkPermutations(one: string, two: string) {
  if (one.length !== two.length) {
    return false;
  }
  
  const mapOne: Map<string, number> = new Map();
  const mapTwo: Map<string, number> = new Map();

  for (let i = 0; i < one.length; i++ ) {
    let value = mapOne.get(one[i]) || 0;
    value++;
    mapOne.set(one[i], value);

    let valueTwo = mapTwo.get(two[i]) || 0;
    valueTwo++;
    mapTwo.set(two[i], value);
  }

  for (let i = 0; i < one.length; i++) {
    const valueOne = mapOne.get(one[i]);
    const valueTwo = mapTwo.get(one[i]);
    if (valueOne !== valueTwo) {
      return false;
    }
  }
  return true;
}