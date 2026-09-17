type TechStackProps = {
  techStack: string[];
};

export default function TechStack({
  techStack,
}: TechStackProps) {
  return (
    <section>
      <h2>Tech Stack</h2>

      <ul>
        {techStack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}

// export default function TechStack({techStack}) {
//         return(
//            <section>
//   <h2>Tech Stack</h2>
//   <ul>
//     {techStack.map(tech =>  <li key={tech}>{tech}</li>)}
// </ul>
// </section>
           
//         )
//     }