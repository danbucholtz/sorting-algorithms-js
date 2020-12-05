
export function parens(n: number) {
  const results = parensImpl(n, 1, []);
  const set: Set<string> = new Set();
  for (const permutation of results) {
    set.add(permutation);
  }
  return set;
}

function parensImpl(num: number, currentIteration: number, permutations: string[]): string[] {
  if (currentIteration > num) {
    return permutations;
  }

  const updatedPermutations = calculateNextPermutations(permutations);
  return parensImpl(num, currentIteration + 1, updatedPermutations);
}

function calculateNextPermutations(permutations: string[]) {
  if (permutations.length === 0) {
    return ['()']
  }
  let updatedPermutations: string[] = [];
  for (const permutation of permutations) {
    const newPermutations = getAllPermutationsFromString(permutation);
    updatedPermutations = updatedPermutations.concat(newPermutations);
  }
  return updatedPermutations;
}

function getAllPermutationsFromString(input: string) {
  const permutations: string[] = [];
  let currentIndex = 0;
  while (true) {
    const endIndex = input.indexOf('(', currentIndex);
    if (endIndex === -1) {
      break;
    }
    currentIndex = endIndex + 1;
    const prefix = input.substring(0, endIndex + 1);
    const suffix = input.substring(endIndex + 1);
    const permutation = `${prefix}()${suffix}`;
    permutations.push(permutation);
  }
  permutations.push(`${input}()`);
  return permutations;

}