import Link from "next/link";
import { notFound } from "next/navigation";
import portfolio from "@/app/about/data/Portfolio";

export default async function ProjectDetailPage({ params }: { params: Promise<{ ProjectId: string }> }) {
  const { ProjectId } = await params;
  const project = portfolio.projects.find((item) => item.id === Number(ProjectId));
  if (!project) notFound();
  return <main className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-8 sm:py-20"><Link href="/projects" className="text-sm font-bold text-[#635bff] hover:underline">← All projects</Link><div className="mt-10 overflow-hidden rounded-[2rem] border border-[#e7eaf1] bg-white shadow-sm"><div className="bg-[#dcd9ff] p-10 sm:p-16"><span className="text-7xl">✦</span></div><article className="p-7 sm:p-12"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#635bff]">Project case study</p><h1 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{project.name}</h1><p className="mt-6 text-lg leading-8 text-[#5f6b85]">{project.description}</p><h2 className="mt-10 text-lg font-bold">Technologies</h2><div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-[#f0efff] px-3 py-1.5 text-sm font-bold text-[#5048e5]">{tech}</span>)}</div><div className="mt-10 flex flex-wrap gap-3"><a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[#172033] px-6 py-3 font-bold text-white transition hover:bg-[#635bff]">View on GitHub ↗</a>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[#635bff] px-6 py-3 font-bold text-white transition hover:bg-[#5048e5]">Visit live project ↗</a>}</div></article></div></main>;
}
