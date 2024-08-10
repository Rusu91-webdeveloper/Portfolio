"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// import ContactButton from "@/components/ContactButton";
import { BentoGridThirdDemo } from "./BentoGrid";
import MainSkills from "@/components/MainSkills";

const HeroPage = () => {
  const texts = [
    "I'm a web developer",
    "I'm also a nerd",
    "I'm a lifelong learner",
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      setDisplayedText(
        isDeleting
          ? fullText.substring(0, displayedText.length - 1)
          : fullText.substring(0, displayedText.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div className="flex flex-col max-h[100vh] s:min-h-screen huge:py-20">
      <div className="pt-28 mdLg:flex-row mdLg:flex     mdLg:justify-between mdLg:px-4   mdLg:mb-[1rem]   flex w-full flex-col items-center p-4 ">
        <div className=" mdLg:w-[60%] mdLg:text-left w-[100%] text-center tracking-widest text-slate-300">
          <h1 className="mdLg:text-4xl mb-6 inline-block bg-gradient-to-r from-pink-800 to-violet-900 bg-clip-text text-3xl  font-bold text-transparent lg:text-6xl ">
            Hello,I&apos;m Emanuel
          </h1>

          <h2 className=" mdLg:text-3xl mb-4 font-mono text-2xl">
            {displayedText}
            <span>.</span>
          </h2>
          <p className="mb-4 text-[#b6b6b6] ">
            Welcome to my digital playground, where lines of code transform into
            immersive online experiences. I&apos;m Emanuel, a passionate and
            innovative web developer dedicated to crafting elegant and efficient
            solutions.
          </p>

          {/* <ContactButton /> */}
        </div>
        <div>
          <Image
            className="rounded-full hidden s:block"
            src="/main-avtar.png"
            alt="avatar"
            width={200}
            height={200}
          />
        </div>
      </div>
      <BentoGridThirdDemo />
      <MainSkills />
    </div>
  );
};

export default HeroPage;
