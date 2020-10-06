
export function oneAway(one: string, two: string) {
  const shorter = one.length < two.length ? one : two;
  const longer = one === shorter ? two : one;
  const offset = longer.length - shorter.length;
  let numChanges = offset;
  if (numChanges > 1) {
    return false;
  }
  for (let i = 0; i < shorter.length; i++) {
    if (shorter[i] != longer[i] && shorter[i] != longer[i + offset]) {
      numChanges++;
    }
  }
  return numChanges === 1;
}