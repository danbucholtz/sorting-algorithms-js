export function recursiveMultiply(valueOne: number, valueTwo: number): number {
  return recursiveMultiplyImpl(0, valueOne, 0, valueTwo);
}

function recursiveMultiplyImpl(
  runningTotal: number,
  input: number,
  counter: number,
  maxIterations: number,
): number {
  if (counter === maxIterations) {
    return runningTotal;
  }
  runningTotal += input;
  counter++;
  return recursiveMultiplyImpl(runningTotal, input, counter, maxIterations);
}
