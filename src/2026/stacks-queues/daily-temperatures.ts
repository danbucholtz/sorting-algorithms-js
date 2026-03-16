import { Stack } from './stack';

export type DailyTemperaturesInput = number[];
export type DailyTemperaturesResult = number[];

export function dailyTemperatures(temperatures: DailyTemperaturesInput): DailyTemperaturesResult {
  const results: number[] = new Array<number>(temperatures.length).fill(0);
  const stack = new Stack<number>();
  for (let i = 0; i < temperatures.length; i++) {
    while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()!]) {
      const indexToUpdate = stack.pop()!;
      results[indexToUpdate] = i - indexToUpdate;
    }
    stack.push(i);
  }
  return results;
}

// 72, 73, 69, 70, 75

// i 4
// stack 1
// results 1, 3, 1, 1
