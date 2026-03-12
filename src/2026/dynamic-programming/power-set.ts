export function powerSet(input: number[]): number[][] {
  return powerSetImpl(0, input, [[]]);
}

function powerSetImpl(
  index: number,
  input: number[],
  existingPermutations: number[][],
): number[][] {
  if (index >= input.length) {
    return existingPermutations;
  }
  const nextPermutations = [...existingPermutations];
  for (let i = 0; i < existingPermutations.length; i++) {
    const existingPermutation = existingPermutations[i];
    const copy = [...existingPermutation];
    copy.push(input[index]);
    nextPermutations.push(copy);
  }
  // okay, we have updated all the permutations, so call this bitch again
  // this time with the next index
  return powerSetImpl(index + 1, input, nextPermutations);
}
