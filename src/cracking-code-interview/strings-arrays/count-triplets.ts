import { oneAway } from './one-away';

// https://practice.geeksforgeeks.org/problems/count-the-triplets4615/1

// o(n^2), memory complexity of n
export function countTriplets(input: number[]) {

  if (input.length < 3) {
    return 0;
  }
  
  // first, put all of the values in a set o(n)
  const set: Set<number> = new Set();
  for (const value of input ) {
    set.add(value);
  }


  // then, track how occurences there are by
  // doing a selection sort type deal o(n^2)
  let occurences = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      const value = input[i] + input[j];
      if (set.has(value)) {
        occurences++;
      }
    }
  }
  return occurences;
}