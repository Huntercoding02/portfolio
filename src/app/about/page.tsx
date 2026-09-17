import Introduction from "./components/introduction";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import portfolio from "./data/Portfolio";
import Link from "next/link";
export default function AboutPage() {
  
  return (
    <main>
      <h1>About Me</h1>

      <Introduction name={portfolio.name} nickName={portfolio.nickName} />

      <Education university={portfolio.education.university} major={portfolio.education.major} bootcamp={portfolio.education.bootcamp} />

      <Projects projects = {portfolio.projects}/>
      <Experience experience={portfolio.experience} />
      <TechStack techStack={portfolio.techStack} />
      <Link href = "/">Back Home</Link>
      {/* <p>I graduated from Assumption University in major Marketing after I had some experienced on marketing online , sales and guest service excutive.I really interested in coding.Learning programming by myself and found bootscamp named Tech Up that really helped me to understand coding and algorithm. When I finished bootcampt I got opportunity from win win interactive co,td to work as Full-stack devloper 1.5 years. My tech stack PHP codeignter jQuery javascripts and use mysQl as database</p> */}
    </main>
  );
}
