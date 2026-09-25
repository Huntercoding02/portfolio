"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "th";
type Copy = Record<string, { en: string; th: string }>;

const copy: Copy = {
  home: { en: "Home", th: "หน้าแรก" }, about: { en: "About", th: "เกี่ยวกับ" }, projects: { en: "Projects", th: "ผลงาน" }, contact: { en: "Contact", th: "ติดต่อ" },
  portfolio: { en: "Portfolio · 2026", th: "แฟ้มผลงาน · 2026" },
  heroTitle: { en: "Building practical, thoughtful web experiences.", th: "สร้างเว็บไซต์ที่ใช้งานได้จริงและใส่ใจในรายละเอียด" },
  heroDescription: { en: "I'm Siwagron, a Full Stack Developer who enjoys turning ideas into useful digital products.", th: "ผมชื่อสีวกร เป็น Full Stack Developer ที่ชอบเปลี่ยนไอเดียให้กลายเป็นผลิตภัณฑ์ดิจิทัลที่ใช้งานได้จริง" },
  viewProjects: { en: "View my projects", th: "ดูผลงาน" }, aboutMe: { en: "About me", th: "เกี่ยวกับผม" },
  fullStack: { en: "Full Stack", th: "Full Stack" }, reactNext: { en: "React & Next.js", th: "React & Next.js" }, problemSolver: { en: "Problem Solver", th: "นักแก้ปัญหา" }, learning: { en: "Always Learning", th: "เรียนรู้อยู่เสมอ" },
  aboutBadge: { en: "About me", th: "เกี่ยวกับผม" }, aboutTitle: { en: "A marketer turned developer.", th: "จากนักการตลาดสู่สายพัฒนาเว็บไซต์" },
  aboutDescription: { en: "I bring a customer-focused perspective to building web products that are clear, useful, and reliable.", th: "ผมนำมุมมองที่เข้าใจผู้ใช้มาสร้างผลิตภัณฑ์เว็บที่ชัดเจน ใช้งานได้ และน่าเชื่อถือ" },
  resume: { en: "Resume", th: "เรซูเม่" }, resumeTitle: { en: "Full Stack Developer", th: "Full Stack Developer" },
  resumeDescription: { en: "1.5 years of production experience with PHP, MySQL, JavaScript, AJAX, and jQuery, plus personal full-stack projects using React, Node.js, Express, MongoDB, PostgreSQL, Supabase, and Stripe.", th: "มีประสบการณ์ทำงานจริง 1.5 ปีด้วย PHP, MySQL, JavaScript, AJAX และ jQuery รวมถึงสร้างโปรเจกต์ Full Stack ด้วย React, Node.js, Express, MongoDB, PostgreSQL, Supabase และ Stripe" },
  viewResume: { en: "View resume ↗", th: "ดูเรซูเม่ ↗" }, downloadResume: { en: "Download PDF ↓", th: "ดาวน์โหลด PDF ↓" }, keySkills: { en: "Key skills", th: "ทักษะสำคัญ" },
  hello: { en: "Hello, I'm", th: "สวัสดี ผมชื่อ" }, callMe: { en: "You can call me", th: "เรียกผมว่า" },
  introDescription: { en: "I enjoy learning, building, and improving useful products.", th: "ผมชอบเรียนรู้ สร้าง และพัฒนาผลิตภัณฑ์ที่มีประโยชน์" },
  education: { en: "Education", th: "การศึกษา" }, educationDescription: { en: "Marketing graduate from {university}, with additional software development training from {bootcamp}.", th: "จบการศึกษาด้านการตลาดจาก {university} และผ่านการอบรมพัฒนาซอฟต์แวร์จาก {bootcamp}" },
  experience: { en: "Experience", th: "ประสบการณ์ทำงาน" }, experienceDescription: { en: "After working in marketing, sales, and guest service, I moved into software development through self-study and bootcamp training.", th: "หลังจากทำงานด้านการตลาด ฝ่ายขาย และบริการลูกค้า ผมเปลี่ยนสายมาพัฒนาซอฟต์แวร์ผ่านการเรียนรู้ด้วยตัวเองและ bootcamp" },
  coreStack: { en: "Core stack:", th: "เทคโนโลยีหลัก:" }, techStack: { en: "Tech stack", th: "เทคโนโลยีที่ใช้" },
  selectedWork: { en: "Selected work", th: "ผลงานที่คัดเลือก" }, built: { en: "Projects I've built", th: "โปรเจกต์ที่ผมสร้าง" }, allProjects: { en: "See all projects →", th: "ดูผลงานทั้งหมด →" }, viewProject: { en: "View project →", th: "ดูรายละเอียด →" },
  projectsBadge: { en: "Projects", th: "ผลงาน" }, projectsTitle: { en: "A few things I've made.", th: "ผลงานบางส่วนที่ผมสร้าง" }, projectsDescription: { en: "A collection of web projects where I practiced building complete, useful experiences.", th: "ผลงานเว็บที่ผมฝึกสร้างประสบการณ์ใช้งานที่ครบถ้วนและมีประโยชน์" },
  caseStudy: { en: "Read case study", th: "ดูรายละเอียด" }, liveSite: { en: "Live site ↗", th: "เว็บไซต์จริง ↗" }, github: { en: "GitHub ↗", th: "GitHub ↗" }, allProjectsBack: { en: "← All projects", th: "← ผลงานทั้งหมด" }, projectCase: { en: "Project case study", th: "รายละเอียดโปรเจกต์" }, technologies: { en: "Technologies", th: "เทคโนโลยี" }, viewGithub: { en: "View on GitHub ↗", th: "ดูบน GitHub ↗" }, visitProject: { en: "Visit live project ↗", th: "ดูเว็บไซต์จริง ↗" },
  features: { en: "Key features", th: "ฟีเจอร์สำคัญ" }, contactBadge: { en: "Contact", th: "ติดต่อ" }, contactTitle: { en: "Let's build something useful.", th: "มาสร้างสิ่งที่มีประโยชน์ด้วยกัน" }, contactDescription: { en: "Have a project, opportunity, or question? I'd be happy to hear from you.", th: "มีโปรเจกต์ โอกาสร่วมงาน หรือคำถาม? ยินดีที่ได้พูดคุยครับ" },
};

type LanguageContextValue = { language: Language; toggleLanguage: () => void; t: (key: keyof typeof copy) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => { const saved = localStorage.getItem("portfolio-language"); if (saved === "th" || saved === "en") setLanguage(saved); }, []);
  const toggleLanguage = () => setLanguage((current) => { const next = current === "en" ? "th" : "en"; localStorage.setItem("portfolio-language", next); return next; });
  const t = (key: keyof typeof copy) => copy[key][language];
  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
