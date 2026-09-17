import Link from "next/link";
export default function Navbar(){
    return(
        <section>
            <Link href="/">
   Home
</Link>
        <Link href="/about">
  About me
</Link>
        <Link href="/contact">
  contact
</Link>
        <Link href="/projects">
  Projects
</Link>

        </section>
        
    )
}