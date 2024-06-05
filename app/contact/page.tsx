"use client";

import Contact from "@/components/Contact";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    <div className="max-w-7xl mx-auto mt-32">
      <BackgroundBeams className="z-0" />
      <Contact />
    </div>
  );
}

export default page;
