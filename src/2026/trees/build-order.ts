export type ProjectName = string;

export interface Dependency {
  projectName: ProjectName;
  dependsOn: ProjectName;
}

type DependencyGraphEntry = {
  projectName: ProjectName;
  dependsOn: ProjectName[];
};

type ProjectGraph = {
  entries: DependencyGraphEntry[];
};

export function buildOrder(projects: ProjectName[], dependencies: Dependency[]): ProjectName[] {
  // okay, first convert the data into a projectgraph
  const graph = convertToGraph(projects, dependencies);
  const builtProjects: ProjectName[] = [];

  while (graph.entries.length > 0) {
    const projectsThatCanBeBuilt = new Set<ProjectName>();
    for (const project of graph.entries) {
      if (project.dependsOn.length === 0) {
        projectsThatCanBeBuilt.add(project.projectName);
      }
    }
    if (projectsThatCanBeBuilt.size === 0) {
      // shoot, we've reached a point in the graph where we cannot build any further, so bail
      throw new Error('Cannot build project - invalid dependency graph');
    }

    // okay, we built some new projects, so those dependencies are removed
    const updatedEntries = graph.entries
      .map((graphEntry) => {
        const dependencies = graphEntry.dependsOn.filter(
          (projectName) => !projectsThatCanBeBuilt.has(projectName),
        );

        return {
          ...graphEntry,
          dependsOn: dependencies,
        };
      })
      .filter((graphEntry) => !projectsThatCanBeBuilt.has(graphEntry.projectName));
    graph.entries = updatedEntries;

    for (const project of projectsThatCanBeBuilt) {
      builtProjects.push(project);
    }
  }
  return builtProjects;
}

function convertToGraph(projects: ProjectName[], dependencies: Dependency[]): ProjectGraph {
  const map = new Map<ProjectName, ProjectName[]>();
  for (const dependency of dependencies) {
    const dependsOn = map.get(dependency.projectName) || [];
    dependsOn.push(dependency.dependsOn);
    map.set(dependency.projectName, dependsOn);
  }

  const graph: ProjectGraph = {
    entries: [],
  };
  for (const project of projects) {
    const entry: DependencyGraphEntry = {
      projectName: project,
      dependsOn: map.get(project) || [],
    };
    graph.entries.push(entry);
  }
  return graph;
}
