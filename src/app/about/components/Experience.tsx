import { endtext } from "../Utils/endtext";

type ExperienceProps = { experience: { company: string; position: string; duration: string; technologies: string[] } };

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="rounded-3xl border border-[#e7eaf1] bg-[#172033] p-7 text-white shadow-sm">
      <p className="text-2xl">💼</p><p className="mt-4 text-sm font-bold uppercase tracking-[0.15em] text-[#b9eee7]">Experience</p>
      <h2 className="mt-2 text-2xl font-bold">{experience.position}</h2>
      <p className="mt-1 font-medium text-white/70">{experience.company} · {experience.duration}</p>
      <p className="mt-5 leading-7 text-white/75">After working in marketing, sales, and guest service, I moved into software development through self-study and bootcamp training.</p>
      <p className="mt-4 text-sm text-white/60">Core stack: {endtext(experience.technologies)}</p>
    </section>
  );
}
