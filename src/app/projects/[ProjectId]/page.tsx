"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import portfolio from "@/app/about/data/Portfolio";
import { useLanguage } from "../../components/LanguageProvider";
export default function ProjectDetailPage() {
  const { ProjectId } = useParams<{ ProjectId: string }>();
  const project = portfolio.projects.find((item) => item.id === Number(ProjectId));
  const { language, t } = useLanguage();
  if (!project) return null;
  const name = language === "th" ? project.nameTh : project.name;
  const description = language === "th" ? project.descriptionTh : project.description;
  const features = language === "th" ? project.featuresTh : project.features;
  return <main className="mx-auto w-full max-w-4xl px-5 py-14 sm:px-8 sm:py-20"><Link href="/projects" className="text-sm font-bold text-[#635bff] hover:underline">{t("allProjectsBack")}</Link><div className="mt-10 overflow-hidden rounded-[2rem] border border-[#e7eaf1] bg-white shadow-sm"><div className="flex min-h-48 items-center justify-center bg-[#dcd9ff] p-5 sm:p-10">{project.image ? <img src={project.image} alt={`${name} preview`} className="w-full rounded-xl border border-black/10 shadow-lg" /> : <span className="text-7xl">✦</span>}</div><article className="p-7 sm:p-12"><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#635bff]">{t("projectCase")}</p><h1 className="mt-4 text-4xl font-black tracking-[-0.045em] sm:text-5xl">{name}</h1><p className="mt-6 text-lg leading-8 text-[#5f6b85]">{description}</p><h2 className="mt-10 text-lg font-bold">{t("features")}</h2><ul className="mt-4 grid gap-3 sm:grid-cols-2">{features.map((feature) => <li key={feature} className="rounded-xl bg-[#f7f8fc] px-4 py-3 text-[#48536a]">✓ {feature}</li>)}</ul><h2 className="mt-10 text-lg font-bold">{t("technologies")}</h2><div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full bg-[#f0efff] px-3 py-1.5 text-sm font-bold text-[#5048e5]">{tech}</span>)}</div><div className="mt-10 flex flex-wrap gap-3"><a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[#172033] px-6 py-3 font-bold text-white transition hover:bg-[#635bff]">{t("viewGithub")}</a>{project.url && <a href={project.url} target="_blank" rel="noreferrer" className="inline-block rounded-full bg-[#635bff] px-6 py-3 font-bold text-white transition hover:bg-[#5048e5]">{t("visitProject")}</a>}</div></article></div></main>;
}
