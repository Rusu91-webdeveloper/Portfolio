import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { skills } from "@/lib/data";
import Image from "next/image";

export function BentoGridThirdDemo() {
  return (
    <div className="hidden s:flex flex-col justify-center items-center mt-4 mb-4 lg:mt-40 px-4">
      <h2 className="text-gray-200 text-2xl lg:text-3xl mb-8 font-extrabold md:text-4xl text-center md:mt-14">
        MAIN <span className="text-purple">SKILLS</span>
      </h2>
      <BentoGrid className="max-w-7xl mx-auto">
        {skills.map((skill, i) => (
          <BentoGridItem
            key={i}
            title={skill.title}
            description={skill.description}
            header={
              <Image
                className="rounded-3xl"
                alt={skill.title}
                src={skill.images}
                width={80}
                height={80}
              />
            }
            className={cn("[&>p:text-lg]", skill.className)}
            icon={skill.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
