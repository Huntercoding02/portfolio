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
    id: number,
    image : string,
    url : string,
    githubUrl: string,
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
      name: "Neatly Hotel Management",
      description: "A full-stack hotel booking and management platform with authentication, room search and filtering, file uploads, Stripe payments, and an admin dashboard for rooms and bookings.",
      technologies: ["React", "Node.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe"],
      image: "/projects/forever.png",
      url: "",
      githubUrl: "https://github.com/popimi/neatly-hotel-management-system",
    },
    {
        id : 1,
      name: "E-Commerce",
      description: "A full-stack e-commerce application with product browsing, filtering, sorting, product variants, cart and order flows, Stripe payments, plus an admin area for products and orders.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
      image: "/projects/forever.png",
      url: "https://forever-frontend-rho.vercel.app/",
      githubUrl: "https://github.com/Huntercoding02/e-commerce",
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
