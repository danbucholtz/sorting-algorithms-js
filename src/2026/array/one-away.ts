export function oneAway(one: string, two: string) {
  // okay, if the length delta > 1, they're not one apart
  if (Math.abs(one.length - two.length) > 1) {
    return false;
  }

  // we want to loop over the shorter string
  const shorter = one.length < two.length ? one : two;
  const longer = shorter === one ? two : one;

  let numChanges = longer.length - shorter.length;

  for (let i = 0; i < shorter.length; i++) {
    if (shorter[i] !== longer[i] && shorter[i] !== longer[i + 1]) {
      numChanges++;
    }
  }
  return numChanges === 1;
}
