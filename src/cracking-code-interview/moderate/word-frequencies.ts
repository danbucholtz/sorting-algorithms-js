
let wordCountMap: Map<string, number> = new Map();
export function wordFrequencies(word: string) {
  if (wordCountMap.size === 0) {
    readPassage()
  }

  return wordCountMap.get(word) || 0;
}

function readPassage() {
  const passage = `the dog jumped high and more fun things high high high`;
  const words = passage.split(' ');
  for (const word of words) {
    let count = wordCountMap.get(word) || 0;
    count++;
    wordCountMap.set(word, count);
  }

}

export const resetMap = () => wordCountMap = new Map();