import { skillsDetails } from "@/lib/data";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const SkillsText = () => {
  return (
    <div className="mb-8 lg:pt-[1rem]   flex flex-col place-items-center  mt-4 px-4">
      <div className="flex place-items-center flex-col">
        <h2 className="text-gray-200 text-2xl lg:text-5xl mb-8 font-extrabold md:text-4xl text-center md:mt-14">
          MAIN <span className="text-purple">SKILLS</span>
        </h2>

        <InfiniteMovingCards
          items={skillsDetails}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default SkillsText;
