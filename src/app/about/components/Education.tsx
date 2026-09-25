"use client";
import { useLanguage } from "@/app/components/LanguageProvider";
type UniversityProps = { university: string; bootcamp: string; major: string };
export default function Education({ university, bootcamp, major }: UniversityProps) { const { t } = useLanguage(); return <section className="rounded-3xl border border-[#e7eaf1] bg-white p-7 shadow-sm"><p className="text-2xl">🎓</p><h2 className="mt-4 text-xl font-bold">{t("education")}</h2><p className="mt-3 leading-7 text-[#5f6b85]">{t("educationDescription").replace("{university}", university).replace("{bootcamp}", bootcamp)}</p><span className="mt-5 inline-block rounded-full bg-[#f0efff] px-3 py-1 text-sm font-bold text-[#5048e5]">{major}</span></section>; }
