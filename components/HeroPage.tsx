"use client";

import Image from "next/image";
import Link from "next/link";

// import { BentoGridThirdDemo } from "./BentoGrid";

const HeroPage = () => {
  return (
    <div className="flex flex-col max-h[100vh]  huge:py-10">
      <div className="pt-28 mdLg:flex-row mdLg:flex     mdLg:justify-between mdLg:px-4   mdLg:mb-[1rem]   flex w-full flex-col items-center p-4 ">
        <div className=" mdLg:w-[60%] mdLg:text-left w-[100%] text-center tracking-widest text-slate-300">
          <h1 className="mdLg:text-4xl mb-6 inline-block bg-gradient-to-r from-pink-800 to-violet-900 bg-clip-text text-3xl  font-bold text-transparent lg:text-7xl ">
            Hello,I&apos;m Emanuel
          </h1>

          <h2 className=" mdLg:text-3xl mb-4 font-mono text-2xl">
            I&apos;m a full-stack developer, AI enthusiast, and lifelong learner
          </h2>
          <p className="mb-4 text-[#b6b6b6] ">
            Welcome to my digital playground, where lines of code transform into
            immersive and engaging online experiences. I&apos;m Emanuel, a
            passionate web developer and AI enthusiast dedicated to crafting
            elegant, efficient, and intelligent solutions. Let&apos;s create the
            future, one innovative idea at a time.
          </p>

          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <Link href="https://drive.google.com/file/d/1SaidrabRncpX5LQKGhzM5jL266OFLK0c/view?usp=sharing">
              Download Resume
            </Link>
          </button>
        </div>
        <div>
          <Image
            className="rounded-full"
            src="/resume-photo.jpg"
            alt="avatar"
            width={200}
            height={200}
          />
        </div>
      </div>
      {/* <BentoGridThirdDemo /> */}
      {/* <MainSkills /> */}
    </div>
  );
};

export default HeroPage;
