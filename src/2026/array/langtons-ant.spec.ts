import { describe, expect, it } from 'vitest';
import { runLangtonsAnt } from './langtons-ant';

function expectBlackCells(actual: string[], expected: string[]) {
  expect([...actual].sort()).toEqual([...expected].sort());
}

describe(runLangtonsAnt.name, () => {
  it('should return initial state for 0 steps', () => {
    const result = runLangtonsAnt(0);

    expect(result.ant).toEqual({ x: 0, y: 0, direction: 'E' });
    expectBlackCells(result.blackCells, []);
  });

  it('should produce the expected state after 1 step', () => {
    const result = runLangtonsAnt(1);

    expect(result.ant).toEqual({ x: 0, y: 1, direction: 'S' });
    expectBlackCells(result.blackCells, ['0,0']);
  });

  it('should produce the expected state after 2 steps', () => {
    const result = runLangtonsAnt(2);

    expect(result.ant).toEqual({ x: -1, y: 1, direction: 'W' });
    expectBlackCells(result.blackCells, ['0,0', '0,1']);
  });

  it('should produce the expected state after 4 steps', () => {
    const result = runLangtonsAnt(4);

    expect(result.ant).toEqual({ x: 0, y: 0, direction: 'E' });
    expectBlackCells(result.blackCells, ['0,0', '0,1', '-1,1', '-1,0']);
  });

  it('should correctly revisit and flip a black cell back to white', () => {
    const result = runLangtonsAnt(5);

    expect(result.ant).toEqual({ x: 0, y: -1, direction: 'N' });
    expectBlackCells(result.blackCells, ['0,1', '-1,1', '-1,0']);
  });
});
