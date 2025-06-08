import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <div className="h-full flex flex-col">
      <SectionTitle upperTitle="2025" title="Portfolio" />
      <HeroSection />
      <SectionTitle upperTitle="Part 1" title="About Me" />
      <AboutMe />
    </div>
  );
}
