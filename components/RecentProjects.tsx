// import { FaLocationArrow } from "react-icons/fa6";
// import { projects } from "@/lib/data";
// import { PinContainer } from "@/components/ui/3d-pin";
// import Image from "next/image";

// const RecentProjects = () => {
//   return (
//     <div className="lg:py-20 py-10 lg:px-20 overflow-hidden">
//       <h1 className="heading md:mb-40 lg:mb-48 px-4 s:mb-32 mb-10 text-center lg:text-left">
//         A small selection of{" "}
//         <span className="text-purple font-extrabold">recent projects</span>
//       </h1>

//       <div className="flex flex-col items-center justify-center p-2 lg:gap-44 lg:mt-10 lg:grid lg:grid-cols-2 gap-y-20">
//         {projects.map((item) => (
//           <div
//             className="flex items-center justify-center max-w-full mb-24 w-full"
//             key={item.id}
//           >
//             <PinContainer
//               className="w-full h-full flex flex-col items-center justify-center"
//               title={item.href}
//               href={item.href}
//             >
//               <div className="relative flex items-center justify-center w-full h-auto overflow-hidden lg:h-[25vh] rounded-lg lg:rounded-3xl mb-8">
//                 <Image
//                   width={350}
//                   height={350}
//                   src={item.img}
//                   alt="cover"
//                   className="w-full h-full object-contain"
//                 />
//               </div>

//               <h1 className="font-bold text-lg lg:text-2xl text-center lg:text-left">
//                 {item.title}
//               </h1>

//               <p
//                 className="text-sm lg:text-xl text-center lg:text-left"
//                 style={{
//                   color: "#BEC1DD",
//                   margin: "2vh 0",
//                 }}
//               >
//                 {item.des}
//               </p>

//               <div className="flex flex-col lg:flex-row items-center justify-between mt-2 mb-3 w-full px-4 lg:px-0">
//                 <div className="flex items-center justify-center lg:justify-start">
//                   {item.iconLists.map((IconComponent, index) => (
//                     <div
//                       key={index}
//                       className="border border-white/[.2] rounded-full bg-black w-8 h-8 lg:w-10 lg:h-10 flex justify-center items-center"
//                       style={{
//                         transform: `translateX(-${5 * index + 2}px)`,
//                       }}
//                     >
//                       {IconComponent}
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex justify-center items-center mt-4 lg:mt-0">
//                   <p className="flex lg:text-xl text-sm text-purple">
//                     Check Live Site
//                   </p>
//                   <FaLocationArrow className="ml-3" color="#CBACF9" />
//                 </div>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RecentProjects;

"use client";
import { projects } from "@/lib/data";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

function RecentProjects() {
  const cards = projects.map((project, index) => (
    <Card
      key={project.id}
      card={{
        src: project.img,
        title: project.title,
        category: "Project", // Assuming 'category' is missing in some cases
        content: (
          <>
            <p className="text-neutral-600 text-slate-200 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-4 ">
              {project.des}
            </p>
            <div className="flex space-x-2 mt-6">
              {project.iconLists.map((icon, idx) => (
                <div
                  key={idx}
                  className="transform hover:scale-110 transition-transform duration-200 ease-in-out"
                >
                  {icon}
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link href={project.href} target="_blank" passHref>
                <button className="px-8 py-3 bg-gradient-to-r from-white to-[#6B3390] text-black font-semibold rounded-full shadow-lg hover:from-[#6B3390] hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  Visit
                </button>
              </Link>
            </div>
          </>
        ),
      }}
      index={index}
      layout={true}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

export default RecentProjects;
