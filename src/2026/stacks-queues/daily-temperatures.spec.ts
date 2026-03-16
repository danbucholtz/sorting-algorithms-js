import { describe, expect, it } from 'vitest';
import { dailyTemperatures } from './daily-temperatures';

describe(dailyTemperatures.name, () => {
  it('should return the first prompt example result', () => {
    const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

    const result = dailyTemperatures(temperatures);
    console.log('result: ', result);

    expect(result).toEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it('should return the second prompt example result', () => {
    const temperatures = [30, 40, 50, 60];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([1, 1, 1, 0]);
  });

  it('should return the third prompt example result', () => {
    const temperatures = [30, 60, 90];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([1, 1, 0]);
  });

  it('should return all zeros for a strictly decreasing temperature list', () => {
    const temperatures = [90, 80, 70, 60];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should handle repeated equal temperatures before a warmer day appears', () => {
    const temperatures = [70, 70, 71];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([2, 1, 0]);
  });

  it('should return zeros when all temperatures are the same', () => {
    const temperatures = [65, 65, 65, 65];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should handle a single temperature', () => {
    const result = dailyTemperatures([88]);

    expect(result).toEqual([0]);
  });

  it('should handle an empty input array', () => {
    const result = dailyTemperatures([]);

    expect(result).toEqual([]);
  });

  it('should find warmer days after several dips and recoveries', () => {
    const temperatures = [60, 62, 61, 59, 58, 63, 57, 64];

    const result = dailyTemperatures(temperatures);

    expect(result).toEqual([1, 4, 3, 2, 1, 2, 1, 0]);
  });
});
