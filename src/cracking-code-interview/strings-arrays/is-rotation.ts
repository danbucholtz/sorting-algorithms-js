
export function isRotation(rotatedString: string, originalString: string) {
  if (rotatedString.length !== originalString.length) {
    return false;
  }
  const rotatedStringTwoTimes = rotatedString + rotatedString;
  return rotatedStringTwoTimes.includes(originalString);
}