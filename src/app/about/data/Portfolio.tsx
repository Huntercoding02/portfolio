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
    nameTh: string,
    description : string,
    descriptionTh: string,
    technologies : string[],
    id: number,
    image : string,
    url : string,
    githubUrl: string,
    features: string[],
    featuresTh: string[],
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
      nameTh: "Neatly ระบบจัดการโรงแรม",
      description: "A full-stack hotel booking and management platform with authentication, room search and filtering, file uploads, Stripe payments, and an admin dashboard for rooms and bookings.",
      descriptionTh: "แพลตฟอร์มจองและจัดการโรงแรมแบบ Full Stack มีระบบยืนยันตัวตน ค้นหาและกรองห้อง อัปโหลดไฟล์ ชำระเงินผ่าน Stripe และหน้าแอดมินสำหรับจัดการห้องและการจอง",
      technologies: ["React", "Node.js", "Tailwind CSS", "Supabase", "PostgreSQL", "Stripe"],
      image: "",
      url: "",
      githubUrl: "https://github.com/popimi/neatly-hotel-management-system",
      features: ["Secure authentication", "Room search and filtering", "Stripe payment integration", "File uploads", "Admin dashboard for rooms and bookings"],
      featuresTh: ["ระบบยืนยันตัวตน", "ค้นหาและกรองห้องพัก", "ชำระเงินผ่าน Stripe", "อัปโหลดไฟล์", "หน้าแอดมินจัดการห้องและการจอง"],
    },
    {
        id : 1,
      name: "E-Commerce",
      nameTh: "ระบบ E-Commerce",
      description: "A full-stack e-commerce application with product browsing, filtering, sorting, product variants, cart and order flows, Stripe payments, plus an admin area for products and orders.",
      descriptionTh: "แอปพลิเคชัน E-Commerce แบบ Full Stack มีการเลือกดู ค้นหา กรอง และเรียงสินค้าพร้อมตัวเลือกสินค้า ตะกร้า คำสั่งซื้อ ชำระเงินผ่าน Stripe และหน้าแอดมินจัดการสินค้าและคำสั่งซื้อ",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
      image: "/projects/e-commerce-home.png",
      url: "https://forever-frontend-rho.vercel.app/",
      githubUrl: "https://github.com/Huntercoding02/e-commerce",
      features: ["Browse, filter, and sort products", "Product variants and product details", "Cart and order flow", "Stripe payment integration", "Admin tools for products and orders"],
      featuresTh: ["เลือกดู ค้นหา และเรียงสินค้า", "รายละเอียดและตัวเลือกสินค้า", "ตะกร้าและขั้นตอนสั่งซื้อ", "ชำระเงินผ่าน Stripe", "เครื่องมือแอดมินจัดการสินค้าและคำสั่งซื้อ"],
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
