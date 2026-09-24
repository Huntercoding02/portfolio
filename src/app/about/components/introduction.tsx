type IntroductionProps = { name: string; nickName: string };

export default function Introduction({ name, nickName }: IntroductionProps) {
  return <section className="rounded-3xl border border-[#e7eaf1] bg-white p-7 shadow-sm"><p className="text-2xl">👋</p><h2 className="mt-4 text-xl font-bold">Hello, I&apos;m {name}.</h2><p className="mt-3 leading-7 text-[#5f6b85]">You can call me {nickName}. I enjoy learning, building, and improving useful products.</p></section>;
}
