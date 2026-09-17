import { endtext } from "../utils/endtext";
type experienceProp = {
  experience: {
    company: string;
    position: string;
    description: string;
    duration: string;
    technologies: string[];
  };
};
export default function Experience({experience}: experienceProp) {
  return (
    <section>
      <h2>Experience</h2>
      <p>I have experience in online marketing, sales, and guest service.</p>

      <p>
        Later, I became interested in programming and started learning coding by
        myself.
      </p>
      
         <p> I had some experienced on marketing online , sales and guest service excutive.I really interested in coding.
            Learning programming by myself and found bootscamp named Tech Up that really helped me to understand coding
             and algorithm. When I finished bootcampt 
             I got opportunity from {experience.company} to work as Full-stack devloper {experience.duration} 
             My tech stack {endtext( experience.technologies )}</p>
    
      
    </section>
  );
}

// function endtext({experience}:experienceProp){
//     const text = experience.technologies.slice(experience.technologies.length-1).join(",");
//     const lastTechnology = experience.technologies[experience.technologies.length - 1];
//     // const lastTechnology1 = technologies[technologies.length - 1];
//     const otherTechnologies = technologies.slice(0, -1);
//     if(experience.technologies.length ===0){
//         return ""        
//     }
//     if(experience.technologies.length ===1){
//         return technologies[0]
//     }
//     if(experience.technologies.length ===2){
//         return ""        
//     }
//     if(experience.technologies.length >=2){
//         return ""        
//     }
//     text.split(",").push(lastTechnology)
// }

// function endtext({ experience }: experienceProp) {
//   const technologies = experience.technologies;

//   if (technologies.length === 0) {
//     return "";
//   }

//   if (technologies.length === 1) {
//     return technologies[0];
//   }

//   const lastTechnology = technologies[technologies.length - 1];
  
//   const otherTechnologies = technologies.slice(0, -1);
// //   console.log(otherTechnologies);
  
//   if (technologies.length === 2) {
//     return `${otherTechnologies[0]} and ${lastTechnology}`;
//   }

//   return `${otherTechnologies.join(", ")}, and ${lastTechnology}`;
// }
// function nexttext({experience}: experienceProp){
//     const mylogy = experience.technologies

//     if(mylogy.length ===0){
//         return ""
//     }

//     if(mylogy.length ===1){
//         return mylogy[0]
//     }

//     const alltext = mylogy.slice(0,-1)
//     const lasttext = mylogy[mylogy.length -1]

//     if(mylogy.length ===2){
//         return `${alltext[0]} and ${lasttext}`
//     }
//     return `${alltext.join(" , ")} and ${lasttext}` 

// }
