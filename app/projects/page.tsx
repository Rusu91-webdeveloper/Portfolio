import RecentProjects from "@/components/RecentProjects";
import { BackgroundBeams } from "@/components/ui/background-beams";

import React from "react";

function page() {
  return (
    <div className="max-w-7xl  max-h-screen flex justify-center items-center mx-auto">
      <RecentProjects />
      <BackgroundBeams />
    </div>
  );
}

export default page;
