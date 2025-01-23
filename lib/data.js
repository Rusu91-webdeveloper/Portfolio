import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandNextjs,
  IconDatabase,
  IconApi,
  IconBrandTailwind,
  IconBrandBootstrap,
} from "@tabler/icons-react";
// The links
const html =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg";
const scss =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg";
const react =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg";
const tailwind =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg";
const figma =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg";
const next =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg";
const css =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg";
const javascript =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg";
const bootstrap =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg";
const nodejs =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg";
const express =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg";
const mongoDb =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg";

export const skills = [
  {
    className: "frontend",
    title: "HTML CSS",
    description: "Building responsive UIs",
    header: "Frontend Development",
    icon: <IconBrandHtml5 className="h-4 w-4 text-neutral-500" />,

    images: html,
  },
  {
    className: "frontend",
    title: "JavaScript",
    description: "Interactive web experiences",
    header: "Frontend Development",
    icon: <IconBrandJavascript className="h-4 w-4 text-neutral-500" />,

    images: javascript,
  },
  {
    className: "frontend",
    title: "React",
    description: "Modern web apps",
    header: "Frontend Development",
    icon: <IconBrandReact className="h-4 w-4 text-neutral-500" />,

    images: react,
  },
  {
    className: "backend",
    title: "Node.js",
    description: "Server-side logic",
    header: "Backend Development",
    icon: <IconBrandNodejs className="h-4 w-4 text-neutral-500" />,

    images: nodejs,
  },
  {
    className: "backend",
    title: "Express.js",
    description: "API development",
    header: "Backend Development",
    icon: <IconApi className="h-4 w-4 text-white" />,

    images: express,
  },
  {
    className: "backend",
    title: "MongoDB",
    description: "NoSQL database",
    header: "Database Management",
    icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,

    images: mongoDb,
  },
  {
    className: "framework",
    title: "Next.js",
    description: "Modern web apps",
    header: "Full Stack Development",
    icon: <IconBrandNextjs className="h-4 w-4 text-white" />,

    images: next,
  },
  {
    className: "framework",
    title: "Tailwind",
    description: "Utility-first CSS framework",
    header: "Frontend Development",
    icon: <IconBrandTailwind className="h-4 w-4 text-neutral-500" />,
    images: tailwind,
  },
  {
    className: "framework",
    title: "Figma",
    description: "Design tool",
    header: "UI/UX Design",
    images: figma,
  },
  {
    className: "framework",
    title: "Bootstrap",
    description: "Front-end framework",
    header: "Responsive Web Design",
    images: bootstrap,
  },
];

export const imgData = [
  {
    src: javascript,
    width: "56",
    height: "56",
    alt: "JavaScript",
  },

  {
    src: html,
    width: "56",
    height: "56",
    alt: "HTML5",
  },
  {
    src: react,
    width: "56",
    height: "56",
    alt: "React",
  },
  {
    src: next,
    width: "56",
    height: "56",
    alt: "NextJs",
  },
  {
    src: css,
    width: "56",
    height: "56",
    alt: "CSS3",
  },
  {
    src: scss,
    width: "56",
    height: "56",
    alt: "Sass",
  },
  {
    src: tailwind,
    width: "56",
    height: "56",
    alt: "TailwindCSS",
  },
  {
    src: bootstrap,
    width: "56",
    height: "56",
    alt: "Bootstrap",
  },
  {
    src: nodejs,
    width: "56",
    height: "56",
    alt: "NodeJS",
  },
  {
    src: express,
    width: "56",
    height: "56",
    alt: "Express",
  },
  {
    src: mongoDb,
    width: "56",
    height: "56",
    alt: "MongoDB",
  },
  {
    src: figma,
    width: "56",
    height: "56",
    alt: "Figma",
  },
];

// export const skills = [
//   {
//     className: "frontend",
//     title: "HTML & CSS",
//     description: "Building responsive UIs",
//     header: "Frontend Development",
//     icon: html,
//   },
//   {
//     className: "frontend",
//     title: "JavaScript",
//     description: "Interactive web experiences",
//     header: "Frontend Development",
//     icon: javascript,
//   },
//   {
//     className: "frontend",
//     title: "React",
//     description: "Modern web apps",
//     header: "Frontend Development",
//     icon: react,
//   },
//   {
//     className: "backend",
//     title: "Node.js",
//     description: "Server-side logic",
//     header: "Backend Development",
//     icon: nodejs,
//   },
//   {
//     className: "backend",
//     title: "Express.js",
//     description: "API development",
//     header: "Backend Development",
//     icon: express,
//   },
//   {
//     className: "backend",
//     title: "MongoDB",
//     description: "NoSQL database",
//     header: "Database Management",
//     icon: mongoDb,
//   },

//   {
//     className: "Framework",
//     title: "Next.js",
//     description: "Modern web apps",
//     header: "Full Stack Development",
//     icon: next,
//   },
// ];

export const projects = [
  {
    id: 1,
    title: "Gym-1-One",
    des: "This is my first project created only with Html and Scss. The main focus was to write clean code and get used with Scss",
    img: "/project1.png",
    iconLists: [
      <IconBrandHtml5
        key="html5"
        size={24}
        color="#E34F26"
      />,
      <IconBrandCss3
        key="css3"
        size={24}
        color="#1572B6"
      />,
    ],
    href: "https://rusu91-webdeveloper.github.io/Gym-1-One/",
    gitHub: "https://github.com/Rusu91-webdeveloper/Gym-1-One",
  },
  {
    id: 2,
    title: "Serenity-Furnish",
    des: "Serenity-Furnish is a React web app built with React Query, Redux Toolkit, and Daisy UI. This project showcases my skills in modern SPA development, integrating efficient data handling and responsive design.",
    img: "/project2.png",
    iconLists: [
      <IconBrandReact
        key="react"
        size={24}
        color="#61DAFB"
      />,
      <IconApi
        key="api"
        size={24}
        color="#FF5733"
      />,
    ],
    href: "https://serenity-furnish.vercel.app/",
    gitHub: "https://github.com/Rusu91-webdeveloper/serenity-furnish",
  },
  {
    id: 3,
    title: "MyProperty",
    des: "This is my first full-stack application built with Next.js and MongoDB. It's a dynamic platform where users can easily browse or promote rental properties, from cozy apartments to luxurious houses.",
    img: "/project3.png",
    iconLists: [
      <IconBrandNextjs
        key="nextjs"
        size={24}
        color="#fff"
      />,
      <IconDatabase
        key="mongodb"
        size={24}
        color="#4DB33D"
      />,
      <IconBrandNodejs
        key="nodejs"
        size={24}
        color="#339933"
      />,
    ],
    href: "https://my-property-eight.vercel.app/",
    gitHub: "https://github.com/Rusu91-webdeveloper/my-property",
  },
  {
    id: 4,
    title: "Golden-Era-Anime",
    des: "This is a simple single page application built with  Next.js and TypeScript, the site features fast server-side rendering and interactive animations",
    img: "/project4.png",
    iconLists: [
      <IconBrandNextjs
        key="nextjs"
        size={24}
        color="#fff"
      />,
    ],
    href: "https://golden-era-anime-git-main-rusu91-webdevelopers-projects.vercel.app/",
    gitHub: "https://github.com/Rusu91-webdeveloper/Golden_Era_-Anime",
  },
  {
    id: 5,
    title: "Finance-Falcon",
    des: "Welcome to Finance Falcon, a full-stack finance tracker app ,build with React for front end,MERN for the BackEnd and Clerk for authentication! 💰📊",
    img: "/project5.png",
    iconLists: [
      <IconBrandNodejs
        key="nodeJs"
        size={24}
        color="#fff"
      />,
      <IconBrandReact
        key="react"
        size={24}
        color="#61DAFB"
      />,
    ],
    href: "https://finance-falcon-1.onrender.com",
    gitHub: "https://github.com/Rusu91-webdeveloper/finance-falcon",
  },
  {
    id: 6,
    title: "Nexus Guest",
    des: `🔹 Nexus Guest Webpage – This platform offers real-time booking and personalized dashboards, making it simple for guests to find what they need and book with confidence. Our goal is to create a smooth, enjoyable experience that meets each guest's expectations.

    While this is the guest-facing side of our system, it's deeply connected to our next project: the Nexus Management System. This companion platform empowers our staff to manage bookings, edit room details, upload photos, and handle every aspect related to guest services. Together, these systems ensure a seamless and efficient experience for both guests and staff, keeping everything in perfect sync.
    
    This description highlights the guest platform's features while hinting at the complementary functionality of the management system. Let me know if you’d like any tweaks!`,
    img: "/project6.png",
    iconLists: [
      <IconBrandNodejs
        key="nodeJs"
        size={24}
        color="#fff"
      />,
      <IconBrandReact
        key="react"
        size={24}
        color="#61DAFB"
      />,
    ],
    href: "https://nexus-guest.vercel.app/",
    gitHub: "https://github.com/Rusu91-webdeveloper/Nexus-Guest",
  },
  {
    id: 7,
    title: "Nexus Management System",
    des: `The Hotel Management System – a powerful tool designed for our staff, helping them streamline tasks and work efficiently. This system enables staff members to manage bookings, edit room details, upload photos, and handle guest-related services, ensuring everything stays in sync with the guest-facing platform. 
  
  To let you experience this project firsthand, we’ve created a special account for anyone interested. 
  ---- User: guest 
 ---- Pass: Guest!234 ----
  
  While this demo account provides access to the staff view, admin functionalities are restricted to protect sensitive data and maintain data integrity. This means that certain features, such as high-level data management and system configurations, are not accessible for demo users. However, the staff view still offers a comprehensive look into the system’s core functionality.
  
  This platform works seamlessly with the Nexus Guest Webpage to provide a connected experience, empowering our team to deliver an exceptional guest experience.`,
    img: "/project7.png",
    iconLists: [
      <IconBrandNextjs
        key="nextjs"
        size={24}
        color="#fff"
      />,
      <IconBrandReact
        key="react"
        size={24}
        color="#61DAFB"
      />,
    ],
    href: "https://nexus-management-frontend.onrender.com",
    gitHub: "https://github.com/Rusu91-webdeveloper/Nexus-Management",
  },
];

export const skillsData = [
  " HTML",
  " CSS",
  " JavScript",
  "React",
  "Tailwind CSS",
  "Sass",
  " Node JS",
  " MongoDB",
  "Figma",
  " Next.js",
  " Bootstrap.js",
];

export const skillsDetails = [
  {
    quote:
      "HTML is the standard markup language for creating web pages and web applications.",
    name: "HTML",
    title: "HyperText Markup Language",
  },
  {
    quote:
      "CSS is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed.",
    name: "CSS",
    title: "Cascading Style Sheets",
  },
  {
    quote:
      "JavaScript is a versatile programming language commonly used in web development for creating interactive effects within web browsers.",
    name: "JavaScript",
    title: "Scripting Language",
  },
  {
    quote:
      "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.",
    name: "React",
    title: "JavaScript Library",
  },
  {
    quote:
      "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without writing CSS.",
    name: "Tailwind CSS",
    title: "CSS Framework",
  },
  {
    quote:
      "Sass is a preprocessor scripting language that is interpreted or compiled into CSS. It allows you to use features that do not exist in CSS yet, like variables, nested rules, and mixins.",
    name: "Sass",
    title: "Syntactically Awesome Stylesheets",
  },
  {
    quote:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to use JavaScript to write server-side code and build scalable network applications.",
    name: "Node.js",
    title: "JavaScript Runtime",
  },
  {
    quote:
      "MongoDB is a NoSQL database that uses a document-oriented data model, which allows data to be stored in flexible, JSON-like documents.",
    name: "MongoDB",
    title: "NoSQL Database",
  },
  {
    quote:
      "Figma is a web-based interface design tool that allows teams to collaborate in real-time on the same file, making it ideal for UI/UX design.",
    name: "Figma",
    title: "Interface Design Tool",
  },
  {
    quote:
      "Next.js is a React framework that provides infrastructure and simple development experience for server-side rendered (SSR) and static site generation (SSG) for React applications.",
    name: "Next.js",
    title: "React Framework",
  },
  {
    quote:
      "Bootstrap is a popular front-end open source toolkit that helps in designing responsive web pages quickly and easily using pre-designed components and CSS.",
    name: "Bootstrap",
    title: "Front-End Framework",
  },
];

// {
//   id: 2,
//   title: "Yoom - Video Conferencing App",
//   des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
//   img: "/p2.svg",
//   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
//   href: "/ui.yoom.com",
// },
// {
//   id: 3,
//   title: "AI Image SaaS - Canva Application",
//   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
//   img: "/p3.svg",
//   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
//   href: "/ui.aiimg.com",
// },
// {
//   id: 4,
//   title: "Animated Apple Iphone 3D Website",
//   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
//   img: "/p4.svg",
//   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/"],
//   href: "/ui.apple.com",
// },
