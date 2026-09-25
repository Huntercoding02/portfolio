"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  return <header className="sticky top-0 z-10 border-b border-[#e7eaf1] bg-white/85 backdrop-blur"><nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"><Link href="/" className="text-lg font-extrabold tracking-tight text-[#172033]">SH<span className="text-[#635bff]">.</span></Link><div className="flex items-center gap-3 text-sm font-semibold text-[#5f6b85] sm:gap-6"><Link className="transition hover:text-[#635bff]" href="/about">{t("about")}</Link><Link className="transition hover:text-[#635bff]" href="/projects">{t("projects")}</Link><button onClick={toggleLanguage} className="rounded-full border border-[#d6dbe8] px-3 py-2 text-xs font-bold text-[#172033] transition hover:border-[#635bff] hover:text-[#635bff]" aria-label="Change language">{language === "en" ? "ไทย" : "EN"}</button><Link className="rounded-full bg-[#172033] px-4 py-2 text-white transition hover:bg-[#635bff]" href="/contact">{t("contact")}</Link></div></nav></header>;
}
