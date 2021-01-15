// https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

export function sortArrayOfZeroOneTwo(input: number[]) {
  let numZeros = 0;
  let numOnes = 0;
  let numTwos = 0;
  for (const value of input) {
    if (value === 0) {
      numZeros++;
    } else if (value === 1) {
      numOnes++;
    } else {
      numTwos++;
    }
  }
  
  for (let i = 0; i < input.length; i++) {
    if (numZeros > 0) {
      input[i] = 0;
      numZeros--;
    } else if (numOnes > 0) {
      input[i] = 1;
      numOnes--;
    } else if (numTwos > 0) {
      input[i] = 2;
      numTwos--;
    }
  }
}