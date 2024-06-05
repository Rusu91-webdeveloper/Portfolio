import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { skills } from "@/lib/data";

export function BentoGridThirdDemo() {
  return (
    <div className="flex flex-col justify-center items-center mt-4 mb-4 lg:mt-40 px-4">
      <BentoGrid className="max-w-7xl mx-auto">
        {skills.map((skill, i) => (
          <BentoGridItem
            key={i}
            title={skill.title}
            description={skill.description}
            header={
              <img
                className="rounded-2xl"
                alt={skill.title}
                src={skill.images}
                width={90}
                height={90}
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
