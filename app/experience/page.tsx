import Experience from "@/components/Experience";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";

function page() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <Experience />
      <BackgroundBeams />
    </div>
  );
}

export default page;
