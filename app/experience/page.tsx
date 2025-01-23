import Experience from "@/components/Experience";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    <div className="max-w-7xl mx-auto pt-20 min-h-[85vh]">
      <Experience />
      <BackgroundBeams />
    </div>
  );
}

export default page;
