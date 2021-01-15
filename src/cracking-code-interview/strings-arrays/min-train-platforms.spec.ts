import { minTrainPlatforms } from './min-train-platforms';

describe(minTrainPlatforms.name, () => {
  it('should return 0 when there are no overlapping trains', () => {
    const result = minTrainPlatforms([{arrival: 900, departure: 1000}, { arrival: 1100, departure: 1200}]);
    expect(result).toBe(1);
  })

  it('should handle input 1', () => {
    const result = minTrainPlatforms([
      {arrival: 900, departure: 910},
      { arrival: 940, departure: 1200},
      { arrival: 950, departure: 1120},
      { arrival: 1100, departure: 1130},
      { arrival: 1500, departure: 1900},
      { arrival: 1800, departure: 2000},
    ]);
    expect(result).toBe(3);
  });

  it('should handle input 2', () => {
    const result = minTrainPlatforms([
      {arrival: 900, departure: 1000},
      { arrival: 1100, departure: 1200},
      { arrival: 1235, departure: 1240},
    ]);
    expect(result).toBe(1);
  });
});
