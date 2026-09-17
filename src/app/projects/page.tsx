import Link from "next/link";
export default function ProjectPage() {
  return (
    <main>
      <h1>Projects</h1>
      <p>my projects</p><br/>
        <Link href="https://forever-frontend-rho.vercel.app/">project1</Link><br/>
      <Link href="/projects/1">project2</Link><br/>
    <Link href="/">
  Back Home
</Link>
    </main>
  );
}