import { calculateMaxNumberOfEvents, sortEventsInReverseChronologicalOrder } from './max-events';

describe('Max events', () => {

  describe(sortEventsInReverseChronologicalOrder.name, () => {
    it('should return a sorted list of events', () => {
      const input = [ {start: 1, end: 3}, {start: 1, end: 2}, {start: 3, end: 4}, { start: 2, end: 3}];
      const result = sortEventsInReverseChronologicalOrder(input);
      
      expect(result[0].start).toBe(1);
      expect(result[0].end).toBe(2);
      expect(result[1].start).toBe(1);
      expect(result[1].end).toBe(3);
      expect(result[2].start).toBe(2);
      expect(result[2].end).toBe(3);
      expect(result[3].start).toBe(3);
      expect(result[3].end).toBe(4);


    });
  });

  describe(calculateMaxNumberOfEvents.name, () => {
    it('should return 3 for [1,2],[2,3],[3,4]', () => {
      const input = [ {start: 1, end: 2}, { start: 2, end: 3}, {start: 3, end: 4}];
      const result = calculateMaxNumberOfEvents(input);
      expect(result).toBe(3);
    });

    it('should return 4 for [1,4],[4,4],[2,2],[3,4],[1,1]', () => {
      const input = [
        { start: 1, end: 4},
        { start: 4, end: 4},
        { start: 2, end: 2},
        { start: 4, end: 4},
        { start: 1, end: 1},
      ];
      const result = calculateMaxNumberOfEvents(input);
      expect(result).toBe(4);
    });

    it('should return 7 for [1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7]', () => {
      const input = [
        { start: 1, end: 1},
        { start: 1, end: 2},
        { start: 1, end: 3},
        { start: 1, end: 4},
        { start: 1, end: 5},
        { start: 1, end: 6},
        { start: 1, end: 7},
      ];
      const result = calculateMaxNumberOfEvents(input);
      expect(result).toBe(7);
    });
  });
});