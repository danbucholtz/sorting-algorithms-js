export interface Project {
  name: string;
  dependsOn: string[];
  built: boolean
}

export function calculateBuildOrder(projects: Project[]) {
  return calculateBuildOrderImpl(projects, []);
}

function calculateBuildOrderImpl(projects: Project[], builtOrder: Project[]): Project[] {
  // first, find the projects that don't have any remaining dependencies
  if (projects.length === builtOrder.length) {
    // you're done
    return builtOrder;
  }

  const ableToBuild = projects.filter(project => project.dependsOn.length === 0 && !project.built);
  if (ableToBuild.length === 0) {
    throw new Error(`There are no projects able to build right now`);
  }

  // okay, cool, first of all, build those homies and track them in the builtOrder
  for (const project of ableToBuild) {
    project.built = true;
    builtOrder.push(project);

    // loop over each project, and remove it from the deps if it's in there
    for (const tmp of projects) {
      tmp.dependsOn = tmp.dependsOn.filter(dependsOn => dependsOn !== project.name);
    }
  }

  return calculateBuildOrderImpl(projects, builtOrder);

}