export type MinimumWindowSource = string;
export type MinimumWindowTarget = string;

export function minWindow(source: MinimumWindowSource, target: MinimumWindowTarget): string {
  let minWindowString = '';
  const targetMap = new Map<string, number>();
  for (let i = 0; i < target.length; i++) {
    const char = target[i];
    let count = targetMap.get(char) || 0;
    count++;
    targetMap.set(char, count);
  }
  let left = 0;
  let right = 0;
  while (left < source.length && right < source.length) {
    const tempTargetMap = new Map(targetMap);
    if (isRangeValid(left, right, source, tempTargetMap)) {
      const substring = source.substring(left, right + 1);
      if (minWindowString === '' || minWindowString.length > substring.length) {
        minWindowString = substring;
      }
      console.log('current min window string: ', minWindowString);
      // okay, it's valid, so let's try to go even smaller by moving the left pointer
      left++;
    } else {
      // schnikes, it's not valid anymore, so move the right pointer out
      if (right < source.length) {
        // we've got room to go
        right++;
      } else {
        // just move left idk
        left++;
      }
    }
  }
  return minWindowString;
}

function isRangeValid(
  startIndex: number,
  endIndex: number,
  input: string,
  mutableMap: Map<string, number>,
) {
  console.log('processing substring: ', input.substring(startIndex, endIndex + 1));
  for (let i = startIndex; i <= endIndex; i++) {
    const char = input[i];
    if (mutableMap.has(char)) {
      let value = mutableMap.get(char)!;
      if (value === 1) {
        mutableMap.delete(char);
      } else {
        value--;
        mutableMap.set(char, value);
      }
    }
  }
  const valid = mutableMap.size === 0;
  if (valid) {
    console.log('valid!');
  } else {
    console.log('invalid');
  }
  return valid;
}
