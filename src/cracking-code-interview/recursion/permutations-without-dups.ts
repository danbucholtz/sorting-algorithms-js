
export function permutationsWithoutDupes(input: string) {
  const permutations: string[][] = [];
  return permutationsWithoutDupesImpl(input, permutations, 0);
}

function permutationsWithoutDupesImpl(input: string, permutations: string[][], index: number): string[][] {
  if (index >= input.length) {
    return permutations;
  }
  const char = input.charAt(index);
  const updatedPermutations = buildNewPermutations(permutations, char);
  return permutationsWithoutDupesImpl(input, updatedPermutations, index + 1);
}

function buildNewPermutations(currentPermutations: string[][], char: string) {
  const updatedPermutations: string[][] = [];
  if (currentPermutations.length === 0) {
    updatedPermutations.push([char]);
  } else {
    for (const permutation of currentPermutations) {
      for (let i = 0; i <= permutation.length; i++) {
        if (i === permutation.length) {
          const newPermutation = [...permutation];
          newPermutation.push(char);
          updatedPermutations.push(newPermutation);
        } else {
          const newPermutation = [...permutation];
          const tmp = newPermutation[i];
          newPermutation[i] = char;
          newPermutation.push(tmp);
          updatedPermutations.push(newPermutation);
        }
      }
    }
  }
  return updatedPermutations;
}
