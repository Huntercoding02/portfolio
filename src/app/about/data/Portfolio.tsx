export type Education = {
    university : string,
    major : string,
    bootcamp : string
}
export type Experience = {
    company : string,
    position : string,
    duration : string,
    description : string,
    technologies : string[],
}
export type Project = {
    name : string,
    description : string,
    technologies : string[],
    id: number;
}
type portfolioprop = {
    name : string,
    nickName : string,
    education : Education,
    experience : Experience,
    projects : Project[],
    techStack : string[],
}
const portfolio : portfolioprop = {
  name: "Siwagron",
  nickName: "Hunter",

  education: {
    university: "Assumption University",
    major: "Marketing",
    bootcamp: "TechUp",
  },

  experience: {
    company: "Win Win Interactive",
    position: "Full Stack Developer",
    duration: "1.5 years",
    description: "...",
    technologies: [
      "PHP",
      "CodeIgniter",
      "JavaScript",
      "MySQL",
    ],
  },

  projects: [
    {
        id : 0,
      name: "Hotel Management System",
      description: "...",
      technologies: ["Node.js", "React", "PostgreSQL"],
    },
    {
        id : 1,
      name: "E-Commerce",
      description: "...",
      technologies: ["Next.js", "Node.js", "MySQL"],
    },
  ],

  techStack: [
    "PHP",
    "CodeIgniter",
    "JavaScript",
    "React",
    "jQuery",
    "MySQL",
    "Next.js",
    "TypeScript",
  ],
};

export default portfolio;