
export function tripleStep(numSteps: number): number {
  if (numSteps < 0) {
    return 0
  } else if (numSteps === 0) {
    return 1
  } 
  return tripleStep(numSteps - 1) + tripleStep(numSteps - 2) + tripleStep(numSteps - 3);
}
