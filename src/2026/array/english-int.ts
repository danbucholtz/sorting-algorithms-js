const scaleMap = new Map<number, string>();
scaleMap.set(0, '');
scaleMap.set(1, 'thousand');
scaleMap.set(2, 'million');
scaleMap.set(3, 'billion');

const stringValueMap = new Map<number, string>();
stringValueMap.set(1, 'One');
stringValueMap.set(2, 'Two');
stringValueMap.set(3, 'Three');
stringValueMap.set(4, 'Four');
stringValueMap.set(5, 'Five');
stringValueMap.set(6, 'Six');
stringValueMap.set(7, 'Seven');
stringValueMap.set(8, 'Eight');
stringValueMap.set(9, 'Nine');
stringValueMap.set(10, 'Ten');
stringValueMap.set(11, 'Eleven');
stringValueMap.set(12, 'Twelve');
stringValueMap.set(13, 'Thirteen');
stringValueMap.set(14, 'Fourteen');
stringValueMap.set(15, 'Fifteen');
stringValueMap.set(16, 'Sixteen');
stringValueMap.set(17, 'Seventeen');
stringValueMap.set(18, 'Eighteen');
stringValueMap.set(19, 'Nineteen');

stringValueMap.set(20, 'Twenty');
stringValueMap.set(30, 'Thirty');
stringValueMap.set(40, 'Forty');
stringValueMap.set(50, 'Fifty');
stringValueMap.set(60, 'Sixty');
stringValueMap.set(70, 'Seventy');
stringValueMap.set(80, 'Eighty');
stringValueMap.set(90, 'Ninety');

export function englishInt(value: number): string {
  if (value === 0) {
    return 'zero';
  }
  let negative = value < 0;
  value = Math.abs(value);
  let stringValue = '';
  let scale = 0;
  while (value > 0) {
    const chunk = value % 1000;
    if (chunk > 0) {
      const rawNumberString = processChunk(chunk);
      const scaleString = getScaleString(scale);
      const stringForm = rawNumberString + ' ' + scaleString;
      stringValue = stringForm + ' ' + stringValue;
    }
    scale++;
    value = Math.floor(value / 1000);
  }
  const prefix = negative ? 'negative ' : '';
  return `${prefix}${stringValue}`.trim().toLowerCase();
}

export function processChunk(input: number): string {
  let words = '';
  if (input >= 100) {
    const oneHundredValue = Math.floor(input / 100); // 9
    words += stringValueMap.get(oneHundredValue) + ' Hundred ';
    input = input % 100; // 37
  }
  if (input >= 20) {
    words += stringValueMap.get(Math.floor(input / 10) * 10) + ' ';
    input = input % 10;
  }
  if (input > 0) {
    words += stringValueMap.get(input);
  }
  return words.trim();
}

function getScaleString(input: number): string | undefined {
  if (!scaleMap.has(input)) {
    throw new Error('unsupported scale bruh');
  }
  return scaleMap.get(input);
}
