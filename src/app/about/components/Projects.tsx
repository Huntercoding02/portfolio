// import { endtext } from "../utils/endtext";
import { endtext } from "../Utils/endtext";
import type {Project} from "../data/Portfolio"

//         type Projects = {
//   name: string;
//   description: string;
//   technologies: string[];
// };

type ProjectsProps = {
  projects: Project[];
};

export default function Projects({projects}:ProjectsProps) {
        return(
            <section>
                 <h2>Projects</h2>
      <p>my project </p>
     
            {/* {projects.map((project) => (
  <article key={project.name}>
    <h3>{project.name}</h3>

    <p>{project.description}</p>

    <p>
      Technologies: {endtext(project.technologies)}
    </p>
  </article>
))} */}
     
            </section>
           
           
        )
    }