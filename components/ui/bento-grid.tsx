import { cn } from "@/utils/cn";
import { BackgroundGradient } from "./background-gradient";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid   grid-cols-3 md:grid-cols-5 gap-4  lg:grid-cols-10 max-w-7xl mx-auto huge:mb-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  uniqueText?: string;
}) => {
  return (
    <div
      className={cn(
        " rounded-xl  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-2 bg-[#09090B]  border border-transparent justify-between flex flex-col max-h-[12rem]",
        className
      )}
    >
      <BackgroundGradient>
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};
