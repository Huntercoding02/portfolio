"use client";
import { endtext } from "../Utils/endtext";
import { useLanguage } from "@/app/components/LanguageProvider";
type ExperienceProps = { experience: { company: string; position: string; duration: string; technologies: string[] } };
export default function Experience({ experience }: ExperienceProps) { const { t } = useLanguage(); return <section className="rounded-3xl border border-[#e7eaf1] bg-[#172033] p-7 text-white shadow-sm"><p className="text-2xl">💼</p><p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-[#b9eee7]">{t("experience")}</p><h2 className="mt-2 text-2xl font-bold">{experience.position}</h2><p className="mt-1 font-medium text-white/70">{experience.company} · {experience.duration}</p><p className="mt-5 leading-7 text-white/75">{t("experienceDescription")}</p><p className="mt-4 text-sm text-white/60">{t("coreStack")} {endtext(experience.technologies)}</p></section>; }
