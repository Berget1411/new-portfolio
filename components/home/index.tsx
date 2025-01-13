import { Hero } from "@/components/hero";
import { TimelineSection } from "@/components/timeline-section";
import Projects from "@/components/projects";
import { Separator } from "@/components/ui/separator";
import About from "@/components/about";
import Technologies from "@/components/technologies";
export default function Home() {
  return (
    <div className='flex flex-col gap-16 md:gap-24 lg:gap-32'>
      <Hero />
      <div className='pt-16 md:pt-24 lg:pt-32'>
        <About />
        <Separator className='main-width opacity-50' gradient />
        <TimelineSection />
      </div>
      <Separator className='main-width opacity-50' gradient />
      <Projects />
      <Technologies />
    </div>
  );
}
