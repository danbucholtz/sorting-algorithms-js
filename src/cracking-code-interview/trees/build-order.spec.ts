import { calculateBuildOrder, Project } from './build-order';

describe(calculateBuildOrder.name, () => {
  it('should work with no deps', () => {
    const projects: Project[] = [
      { name: 'one', dependsOn: [], built: false},
      { name: 'two', dependsOn: [], built: false},
      { name: 'three', dependsOn: [], built: false},
    ];
    const results = calculateBuildOrder(projects);
    expect(results[0].name).toBe(projects[0].name);
    expect(results[0].built).toBe(true);
    expect(results[1].name).toBe(projects[1].name);
    expect(results[1].built).toBe(true);
    expect(results[2].name).toBe(projects[2].name);
    expect(results[2].built).toBe(true);
  });

  it('should work with some deps', () => {
    const projects: Project[] = [
      { name: 'one', dependsOn: [], built: false},
      { name: 'two', dependsOn: ['three', 'four'], built: false},
      { name: 'three', dependsOn: ['one', 'four'], built: false},
      { name: 'four', dependsOn: ['one'], built: false},
    ];
    const results = calculateBuildOrder(projects);
    expect(results[0].name).toBe(projects[0].name);
    expect(results[0].built).toBe(true);

    expect(results[1].name).toBe(projects[3].name);
    expect(results[1].built).toBe(true);

    expect(results[2].name).toBe(projects[2].name);
    expect(results[2].built).toBe(true);

    expect(results[3].name).toBe(projects[1].name);
    expect(results[3].built).toBe(true);
  });
});