import Link from "next/link";
import portfolio from "@/app/about/data/Portfolio";
import { endtext } from "@/app/about/Utils/endtext";
export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>

      {portfolio.projects.map((project) => (
        <article key={project.id}>
          <h2>
            <Link href={`/projects/${project.id}`}>
              {project.name}
            </Link>
          </h2>

          <p>{project.description}</p>
          <p>{endtext(project.technologies)}</p>
        </article>
      ))}
    </main>
  );
}