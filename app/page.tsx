import HeroPage from "@/components/HeroPage";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className=" relative bg-[#020202] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-4 ">
      <TracingBeam>
        <div className="max-w-7xl w-full bg-[black] pr-2 border-r border-r-white/[0.1]">
          <HeroPage />
          <Experience />
          <RecentProjects />
        </div>
      </TracingBeam>
    </main>
  );
}
