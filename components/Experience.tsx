const Experience = () => {
  return (
    <div className="flex flex-col   w-full  mx-auto  px2- text-left">
      <div className="text-slate-300 text-sm md:text-lg mb-8 flex flex-col place-items-center mdLg:place-items-start mdLg:flex-row mdLg:justify-between md:mt-[5rem] font-regular mt-10 flex-grow">
        <div>
          <h2 className=" text-purple mb-8 text-4xl md:mb-16 font-bold mt-6">
            Experience
          </h2>
        </div>
        <div className="flex w-full mdLg:w-[80%] tracking-tight leading-6 lg:leading-10 lg:tracking-wider flex-col huge:w-[75%] ">
          <section className="mb-8  hover:bg-gradient-to-r from-pink-800 to-violet-900 p-3 text-base text-slate-200 hover:from-pink-700 hover:to-violet-800 hover:cursor-pointer p-8 rounded-3xl">
            <h2 className="font-extrabold text-2xl mb-4">
              Education and Training
            </h2>
            <div className="font-bold mb-2 text-sm">2023-2024 DCI COURSE</div>
            <p className="mb-2">
              During this period, I have been enrolled in the comprehensive{" "}
              <span className="text-xl">WEB Development</span> course offered by{" "}
              <span className="text-xl">DCI</span>. This rigorous program has
              provided me with a strong foundation in both front-end and
              back-end development, covering essential technologies. In addition
              to my formal education, I have pursued numerous certifications on
              Udemy. These courses have allowed me to delve deeper into specific
              areas of interest, further enhancing my skills and keeping me
              abreast of the latest trends and tools in web development.
            </p>
            <p className="mb-2">
              My portfolio is a testament to my growth and capabilities as a web
              developer. It showcases a variety of projects that highlight my
              ability to build responsive, user-friendly websites and
              applications. Each project reflects the practical application of
              the skills I have acquired and demonstrates my commitment to
              creating high-quality digital experiences.
            </p>
          </section>
          <section className="mb-8  hover:bg-gradient-to-r from-pink-800 to-violet-900 p-3 text-base text-slate-200 hover:from-pink-700 hover:to-violet-800 hover:cursor-pointer p-8 rounded-3xl">
            <h2 className="font-extrabold text-2xl mb-4">
              Skills and Proficiencies
            </h2>
            <ul className="list-disc pl-6 mb-2">
              <li>Frontend Development (HTML, CSS, JavaScript)</li>
              <li>React.js, Vue.js, Angular</li>
              <li>Backend Development (Node.js, Express)</li>
              <li>Database Management (MongoDB, MySQL)</li>
              <li>Responsive Web Design</li>
              <li>Version Control (Git, GitHub)</li>
            </ul>
            <p className="mb-2">
              I am proficient in a wide array of technologies and frameworks,
              enabling me to develop robust and scalable web applications. My
              continuous learning and adaptation to new technologies allow me to
              stay ahead in the rapidly evolving field of web development.
            </p>
          </section>
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Experience;
