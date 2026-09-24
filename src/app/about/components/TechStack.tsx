type TechStackProps = { techStack: string[] };

export default function TechStack({ techStack }: TechStackProps) {
  return <section className="rounded-3xl border border-[#e7eaf1] bg-white p-7 shadow-sm"><p className="text-2xl">⚡</p><h2 className="mt-4 text-xl font-bold">Tech stack</h2><div className="mt-5 flex flex-wrap gap-2">{techStack.map((tech) => <span key={tech} className="rounded-full border border-[#e1e4ee] bg-[#fafbff] px-3 py-1.5 text-sm font-semibold text-[#48536a]">{tech}</span>)}</div></section>;
}
