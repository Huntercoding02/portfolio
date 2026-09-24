import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-[#e7eaf1] bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-[#172033]">Portfolio's Siwagron<span className="text-[#635bff]"></span></Link>
        <div className="flex items-center gap-4 text-sm font-semibold text-[#5f6b85] sm:gap-7">
          <Link className="transition hover:text-[#635bff]" href="/about">About</Link>
          <Link className="transition hover:text-[#635bff]" href="/projects">Projects</Link>
          <Link className="rounded-full bg-[#172033] px-4 py-2 text-white transition hover:bg-[#635bff]" href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
