// https://practice.geeksforgeeks.org/problems/number-of-pairs-1587115620/1

export function numPairs(one: number[], two: number[]) {
  let numPairs = 0;
  // TODO - if we sorted these arrays ahead of time, we could binary search
  // this biotch for the exact value at which we'd start having valid cases
  // instead of checking them all
  // alas, time and stuff, so let's just do this shit for now
  for (const valueOne of one) {
    for (const valueTwo of two) {
      if (Math.pow(valueOne, valueTwo) > Math.pow(valueTwo, valueOne)) {
        numPairs++;
      }
    }
  }
  return numPairs;
}