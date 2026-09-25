"use client";
import { useLanguage } from "@/app/components/LanguageProvider";
type IntroductionProps = { name: string; nickName: string };
export default function Introduction({ name, nickName }: IntroductionProps) { const { t } = useLanguage(); return <section className="rounded-3xl border border-[#e7eaf1] bg-white p-7 shadow-sm"><p className="text-2xl">👋</p><h2 className="mt-4 text-xl font-bold">{t("hello")} {name}.</h2><p className="mt-3 leading-7 text-[#5f6b85]">{t("callMe")} {nickName}. {t("introDescription")}</p></section>; }
