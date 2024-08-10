import { FollowingPointerDemo } from "@/components/ProjectCard";
import RecentProjects from "@/components/RecentProjects";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FollowPointer } from "@/components/ui/following-pointer";

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
