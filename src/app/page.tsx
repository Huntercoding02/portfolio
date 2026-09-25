"use client";

import Link from "next/link";
import { useLanguage } from "./components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  return <main className="relative isolate flex flex-1 overflow-hidden"><div className="absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-[#dcd9ff] blur-3xl" /><div className="absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#b9eee7] blur-3xl" /><section className="mx-auto flex w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8 lg:py-28"><p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#635bff]">{t("portfolio")}</p><h1 className="max-w-4xl text-5xl font-black leading-[1.04] tracking-[-0.055em] sm:text-7xl">{t("heroTitle")}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f6b85] sm:text-xl">{t("heroDescription")}</p><div className="mt-10 flex flex-wrap gap-4"><Link href="/projects" className="rounded-full bg-[#635bff] px-6 py-3 font-bold text-white shadow-lg shadow-[#635bff]/25 transition hover:-translate-y-0.5 hover:bg-[#5048e5]">{t("viewProjects")}</Link><Link href="/about" className="rounded-full border border-[#d6dbe8] bg-white px-6 py-3 font-bold transition hover:border-[#635bff] hover:text-[#635bff]">{t("aboutMe")}</Link></div><div className="mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">{["fullStack", "reactNext", "problemSolver", "learning"].map((item) => <div key={item} className="rounded-2xl border border-white/70 bg-white/65 px-4 py-5 text-sm font-bold shadow-sm backdrop-blur">{t(item as "fullStack" | "reactNext" | "problemSolver" | "learning")}</div>)}</div></section></main>;
}
