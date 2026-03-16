export type GroupAnagramsInput = string[];
export type AnagramGroups = string[][];

export function groupAnagrams(strings: GroupAnagramsInput): AnagramGroups {
  const map = new Map<string, string[]>();
  for (const string of strings) {
    const normalized = new Array<number>(26).fill(0);
    for (let i = 0; i < string.length; i++) {
      const index = string.charCodeAt(i) - 97;
      let existingValue = normalized[index] ?? 0;
      existingValue++;
      normalized[index] = existingValue;
    }

    const stringForm = normalized.join('');
    const list = map.get(stringForm) ?? [];
    list.push(string);
    map.set(stringForm, list);
  }
  return Array.from(map.values());
}
