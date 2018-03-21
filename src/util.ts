
export type Comparator<T> = (previous: T, next: T) => number;

export function defaultComparator<T>(a: T, b: T): number {
  return (a as any as number) - (b as any as number);
}

export function caseInsensitiveString<T>(a: string, b: string): number {
  return stringComparator(a.toLowerCase(), b.toLowerCase());
}

export function stringComparator<T>(a: string, b: string): number {
  if (a < b) {
    return -1;
  }
  return 1;
}