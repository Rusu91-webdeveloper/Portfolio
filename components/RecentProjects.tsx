import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/lib/data";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="lg:py-20 py-10 lg:px-20">
      <h1 className="heading   md:mb-40 lg:mb-48 Lg:mb-48 px-4  s:mb-32 mb-4">
        A small selection of{" "}
        <span className="text-purple font-extrabold ">recent projects</span>
      </h1>

      <div className="flex flex-wrap flex-col  items-center justify-center p-2 md:gap-46  lg:gap-44   lg:mt-10 Lg:gap-48 mdLg:gap-48  lg:grid lg:grid-cols-2 s:gap-52 ">
        {projects.map((item) => (
          <div
            className="lg:min-h-[24.5rem] flex items-center justify-center max-w-full mb-24"
            key={item.id}
          >
            <PinContainer
              className="w-full h-full flex flex-col items-center justify-center "
              title={item.href}
              href={item.href}
            >
              <div className="relative flex items-center justify-center w-full h-10vh  overflow-hidden s:h-[20vh] lg:h-[30vh] mb-8 ">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl "
                  style={{ backgroundColor: "#09090B" }}
                >
                  {/* <img src="/bg.png" alt="bgimg" /> */}
                </div>
                <Image
                  width="350"
                  height="350"
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rotate-[5deg]"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base  ">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm  "
                style={{
                  color: "#BEC1DD",
                  margin: "2vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-2 mb-3 ">
                <div className="flex items-center">
                  {item.iconLists.map((IconComponent, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      {IconComponent}
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
