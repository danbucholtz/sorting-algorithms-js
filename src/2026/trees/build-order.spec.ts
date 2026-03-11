import { describe, expect, it } from 'vitest';
import { buildOrder, type Dependency, type ProjectName } from './build-order';

function assertValidBuildOrder(
  order: ProjectName[],
  projects: ProjectName[],
  dependencies: Dependency[],
) {
  expect(order).toHaveLength(projects.length);
  expect(new Set(order)).toEqual(new Set(projects));

  const orderIndex = new Map<ProjectName, number>();
  order.forEach((project, index) => orderIndex.set(project, index));

  for (const dependency of dependencies) {
    const dependsOnIndex = orderIndex.get(dependency.dependsOn);
    const projectIndex = orderIndex.get(dependency.projectName);

    expect(dependsOnIndex).toBeDefined();
    expect(projectIndex).toBeDefined();
    expect(dependsOnIndex!).toBeLessThan(projectIndex!);
  }
}

describe(buildOrder.name, () => {
  it('should return all projects when there are no dependencies', () => {
    const projects = ['a', 'b', 'c'];
    const dependencies: Dependency[] = [];

    const result = buildOrder(projects, dependencies);

    assertValidBuildOrder(result, projects, dependencies);
  });

  it('should produce a valid topological order for a typical dependency graph', () => {
    const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
    const dependencies: Dependency[] = [
      { projectName: 'd', dependsOn: 'a' },
      { projectName: 'b', dependsOn: 'f' },
      { projectName: 'd', dependsOn: 'b' },
      { projectName: 'a', dependsOn: 'f' },
      { projectName: 'c', dependsOn: 'd' },
    ];

    const result = buildOrder(projects, dependencies);

    assertValidBuildOrder(result, projects, dependencies);
  });

  it('should handle a project that appears only as a dependency target', () => {
    const projects = ['core', 'api', 'web'];
    const dependencies: Dependency[] = [
      { projectName: 'api', dependsOn: 'core' },
      { projectName: 'web', dependsOn: 'api' },
    ];

    const result = buildOrder(projects, dependencies);

    assertValidBuildOrder(result, projects, dependencies);
  });

  it('should throw when dependencies contain a cycle', () => {
    const projects = ['a', 'b', 'c'];
    const dependencies: Dependency[] = [
      { projectName: 'b', dependsOn: 'a' },
      { projectName: 'c', dependsOn: 'b' },
      { projectName: 'a', dependsOn: 'c' },
    ];

    expect(() => buildOrder(projects, dependencies)).toThrow();
  });
});
