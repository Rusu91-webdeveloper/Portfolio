import {
  Code2,
  Database,
  Globe,
  Github,
  Smartphone,
  Server,
  Braces,
  Binary,
  Cpu,
} from "lucide-react";

const skills = [
  {
    name: "Frontend Development (HTML, CSS, JavaScript)",
    icon: <Globe className="h-6 w-6 text-pink-300" />,
  },
  {
    name: "React.js, Next.js",
    icon: <Braces className="h-6 w-6 text-pink-300" />,
  },
  {
    name: "Backend Development (Node.js, Express)",
    icon: <Server className="h-6 w-6 text-pink-300" />,
  },
  {
    name: "Database Management (MongoDB, SQL)",
    icon: <Database className="h-6 w-6 text-pink-300" />,
  },
  {
    name: "Responsive Web Design",
    icon: <Smartphone className="h-6 w-6 text-pink-300" />,
  },
  {
    name: "Version Control (Git, GitHub)",
    icon: <Github className="h-6 w-6 text-pink-300" />,
  },
  {
    name: "Python Development (Flask, Django)",
    icon: <Code2 className="h-6 w-6 text-pink-300" />,
  },
  {
    name: "Machine Learning (Pandas, NumPy, Scikit-learn)",
    icon: <Binary className="h-6 w-6 text-pink-300" />,
  },
  {
    name: "Generative AI (Transformers, GPT-based models)",
    icon: <Cpu className="h-6 w-6 text-pink-300" />,
  },
];

const Experience = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 text-left bg-[#09090B] text-white">
      <h2 className="text-slate-200 text-5xl sm:text-5xl font-bold mb-12 text-center">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-gradient-to-r from-pink-800 to-violet-900 rounded-2xl p-6 shadow-lg">
          <h3 className="font-extrabold text-2xl sm:text-3xl mb-4 text-black">
            Education and Training
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-xl mb-2 text-pink-100">
                2023-2024 DIGITAL CAREER INSTITUTE
              </h4>
              <p className="text-gray-300">
                Enrolled in a{" "}
                <span className="text-pink-200 font-semibold">
                  comprehensive WEB Development
                </span>{" "}
                course at{" "}
                <span className="text-pink-200 font-semibold">DCI</span>,
                gaining a strong foundation in both front-end and back-end
                technologies. This program included{" "}
                <span className="text-pink-200 font-semibold">
                  hands-on projects
                </span>{" "}
                that honed my skills in building dynamic and responsive web
                applications.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-pink-100">
                Advanced Certifications
              </h4>
              <p className="text-gray-300">
                Completed several{" "}
                <span className="text-pink-200 font-semibold">
                  advanced certifications
                </span>{" "}
                on Udemy, focusing on modern JavaScript frameworks, database
                management, and cloud deployment, ensuring I stay current with
                industry trends.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-pink-100">
                Portfolio Highlights
              </h4>
              <p className="text-gray-300">
                My{" "}
                <span className="text-pink-200 font-semibold">portfolio</span>{" "}
                showcases projects that demonstrate my ability to create
                scalable, user-friendly websites and applications, reflecting my
                dedication to quality and attention to detail.
              </p>
            </div>
          </div>
        </section>

        <section
          className=" bg-[linear-gradient(110deg,#000103,10%,#1e2631,60%,#ffffff,70%,#000103)] 
      bg-[length:200%_100%] 
      animate-gradient rounded-2xl p-6 shadow-lg">
          <h3 className="font-extrabold text-2xl sm:text-3xl mb-4 text-slate-200">
            Key Skills
          </h3>
          <ul className="space-y-3 mb-6">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-[#09090B] bg-opacity-50 rounded-lg p-3 transition-all hover:bg-opacity-70">
                <span className="text-sm md:text-base font-medium text-gray-200">
                  {skill.name}
                </span>
                <div className="ml-4 flex-shrink-0">{skill.icon}</div>
              </li>
            ))}
          </ul>
          <p className="text-gray-300">
            My skill set spans a wide range of technologies, enabling me to
            tackle both the front-end and back-end of web development. In
            addition to creating responsive, high-performance web applications,
            I am delving into Python-driven Machine Learning and Generative AI
            solutions. These tools allow me to build intelligent applications
            that push the boundaries of modern development.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Experience;
