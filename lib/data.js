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
    des: "Gym-1-One is a gym website where you can see the gym's services, trainers, and contact information.",
    img: "/project1.png",
    iconLists: [],
    href: "https://emanueldci2023.github.io/Project-Gym-Webpage/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg"],
    href: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    href: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/"],
    href: "/ui.apple.com",
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
