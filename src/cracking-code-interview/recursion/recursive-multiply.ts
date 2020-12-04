

export function recursiveMultiply(valOne: number, valTwo: number) {
  return recursiveMultiplyImpl(valOne, valTwo, 0);
}

function recursiveMultiplyImpl(valueOne: number, numTimes: number, currentValue: number): number {
  if (numTimes === 0) {
    return currentValue;
  }
  currentValue += valueOne;
  return recursiveMultiplyImpl(valueOne, numTimes - 1, currentValue);
}