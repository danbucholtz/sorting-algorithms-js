
export function twoSum(input: number[], target: number): { indexOne: number, indexTwo: number} {
  // big O - n^2 version
  // for (let i = 0; i < input.length; i++) {
  //   for (let j = i + 1; j < input.length; j++) {
  //     const valueOne = input[i];
  //     const valueTwo = input[j];
  //     if (valueOne + valueTwo === target) {
  //       return {
  //         indexOne: i,
  //         indexTwo: j,
  //       }
  //     }
  //   }
  // }

  // big O - n version
  const map = new Map<number, number[]>();
  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    const indexes = map.get(value) || [];
    indexes.push(i);
    map.set(value, indexes);
  }

  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    const potentialValue = target - value;
    const potentialIndexes = (map.get(potentialValue) || []).filter(potentialIndex => potentialIndex !== i);
    if (potentialIndexes.length) {
      return {
        indexOne: i,
        indexTwo: potentialIndexes[0],
      }
    }
  }

  throw new Error(`Invalid input and target combination - no match found`);
}