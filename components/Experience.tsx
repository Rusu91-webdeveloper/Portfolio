const Experience = () => {
  return (
    <div className="flex flex-col w-full mx-auto px-4 text-left">
      <div className="text-slate-300 text-sm md:text-lg mb-8 flex flex-col items-center md:items-start md:flex-row md:justify-between mt-10">
        <div>
          <h2 className="text-purple text-3xl sm:text-4xl font-bold mt-4 sm:mt-6 mb-6 sm:mb-8">
            Experience
          </h2>
        </div>
        <div className="flex w-full md:w-[80%] tracking-tight leading-5 sm:leading-6 md:leading-7 flex-col">
          <section className="mb-6 p-4 sm:p-6 text-slate-300 rounded-lg sm:rounded-xl text-sm sm:text-base bg-gradient-to-r from-[#72369A] to-purple-800">
            <h2 className="font-extrabold text-lg sm:text-xl mb-3 text-purple-200">
              Education and Training
            </h2>
            <div className="font-bold mb-2 text-sm sm:text-md text-black">
              2023-2024 DIGITAL CAREER INSTITUTE
            </div>
            <p className="mb-2">
              Enrolled in a{" "}
              <span className="text-purple-200 font-bold">
                comprehensive WEB Development
              </span>{" "}
              course at <span className="text-purple-200 font-bold">DCI</span>,
              gaining a strong foundation in both front-end and back-end
              technologies. This program included{" "}
              <span className="text-purple-200 font-bold">
                hands-on projects
              </span>{" "}
              that honed my skills in building dynamic and responsive web
              applications.
            </p>
            <p className="mb-2">
              Additionally, I completed several{" "}
              <span className="text-purple-200 font-bold">
                advanced certifications
              </span>{" "}
              on Udemy, focusing on modern JavaScript frameworks, database
              management, and cloud deployment, ensuring I stay current with
              industry trends.
            </p>
            <p className="mb-2">
              My <span className="text-purple-200 font-bold">portfolio</span>{" "}
              highlights projects that demonstrate my ability to create
              scalable, user-friendly websites and applications, reflecting my
              dedication to quality and attention to detail.
            </p>
          </section>

          <section className="mb-4 p-4 sm:p-5 text-slate-300 rounded-xl sm:rounded-2xl text-sm sm:text-base bg-gradient-to-r from-[rgb(114,54,154)] to-purple-800">
            <h2 className="font-extrabold text-xl sm:text-2xl mb-3 text-purple">
              Key Skills
            </h2>
            <ul className="list-disc pl-5 mb-2 space-y-1">
              <li>Frontend Development (HTML, CSS, JavaScript)</li>
              <li>React.js, Next.js</li>
              <li>Backend Development (Node.js, Express)</li>
              <li>Database Management (MongoDB, SQL)</li>
              <li>Responsive Web Design</li>
              <li>Version Control (Git, GitHub)</li>
            </ul>
            <p className="mb-2">
              My skill set covers a broad spectrum of technologies, ensuring I
              can handle both the front-end and back-end of web development. I
              specialize in creating responsive, high-performance web
              applications that meet modern standards.
            </p>
          </section>
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Experience;
