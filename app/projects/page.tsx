import { BackgroundBoxesDemo } from "@/components/BackgroundBoxesDemo";
import RecentProjects from "@/components/RecentProjects";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
import React from "react";

function page() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <RecentProjects />
      <BackgroundBeams />
    </div>
  );
}

export default page;
