export function endtext(technologies: string[]) {
  if (technologies.length === 0) {
    return "";
  }

  if (technologies.length === 1) {
    return technologies[0];
  }

  const lastTechnology = technologies[technologies.length - 1];

  const otherTechnologies = technologies.slice(0, -1);

  if (technologies.length === 2) {
    return `${otherTechnologies[0]} and ${lastTechnology}`;
  }

  return `${otherTechnologies.join(", ")}, and ${lastTechnology}`;
}