import Link from "next/link";
import { endtext } from "../Utils/endtext";
import type { Project } from "../data/Portfolio";

type ProjectsProps = { projects: Project[] };

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#635bff]">Selected work</p><h2 className="mt-2 text-3xl font-black tracking-[-0.04em]">Projects I&apos;ve built</h2></div><Link href="/projects" className="text-sm font-bold text-[#635bff] hover:underline">See all projects →</Link></div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => <article key={project.id} className="group overflow-hidden rounded-3xl border border-[#e7eaf1] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#172033]/10">
          <div className={`h-40 p-6 ${index % 2 === 0 ? "bg-[#dcd9ff]" : "bg-[#b9eee7]"}`}><span className="text-5xl">{index % 2 === 0 ? "✦" : "↗"}</span></div>
          <div className="p-6"><p className="text-sm font-bold text-[#635bff]">{endtext(project.technologies)}</p><h3 className="mt-2 text-2xl font-bold">{project.name}</h3><p className="mt-3 leading-7 text-[#5f6b85]">{project.description}</p><div className="mt-5 flex flex-wrap gap-3"><Link href={`/projects/${project.id}`} className="font-bold text-[#172033] transition group-hover:text-[#635bff]">View project →</Link><a href={project.githubUrl} target="_blank" rel="noreferrer" className="font-bold text-[#635bff] hover:underline">GitHub ↗</a></div></div>
        </article>)}
      </div>
    </section>
  );
}
