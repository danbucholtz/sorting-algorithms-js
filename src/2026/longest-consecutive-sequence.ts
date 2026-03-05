

export function longestConsequtiveSequence(input: number[]): number {
  const set = new Set();
  input.forEach(value => set.add(value));
  const deduped = Array.from(set) as number[];
  const sorted = deduped.sort((a, b) => a - b);
  const consecutiveSequences: number[][] = [];
  let currentSequence: number[] = [];
  for (let i = 0; i < sorted.length; i++) {
    if (!currentSequence.length) {
      currentSequence.push(sorted[i]);
      continue;
    }
    const lastNumber = currentSequence[currentSequence.length - 1];
    if ((lastNumber + 1) === sorted[i]) {
      // it's in the seqeuence, push it on to the sequence
      currentSequence.push(lastNumber + 1);
    }
    else {
      // it's not in the sequence
      consecutiveSequences.push(currentSequence);
      currentSequence = [sorted[i]];
    }
  }
  // okay, we need to push the last sequence,
  consecutiveSequences.push(currentSequence);
  console.log('consecutiveSequences: ', consecutiveSequences);
  // okay, we've got the list of sequences, let's find the longest one
  let longestSequence = 0;
  for (const sequence of consecutiveSequences) {
    if (sequence.length > longestSequence) {
      longestSequence = sequence.length;
    }
  }
  return longestSequence;
}