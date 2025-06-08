import HeroSection from "@/components/HeroSection";

import SectionTitle from "@/components/SectionTitle";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

export default function Home() {
  const techStack = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];
  return (
    <div className="h-full flex flex-col">
      <SectionTitle upperTitle="2025" title="Portfolio" />
      <HeroSection />
      <SectionTitle upperTitle="Part 1" title="About Me" />
      {/* <SectionTitle upperTitle="Part 1" title="Website" /> */}
      {/* <SectionContent /> */}

      {/* <section className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-16 bg-gradient-to-b from-blue-50 to-purple-50 relative">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-600">Atharva</span>
            <br />
            <span className="text-purple-600">Muratkar</span>
          </h1>

          <h2 className="text-xl font-medium text-gray-700">
            Frontend Developer & UI Enthusiast
          </h2>

          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0">
            I craft fast, accessible, and visually polished websites using React
            and Next.js.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md font-medium"
            >
              🚀 View Projects
            </a>
            <a
              href="#contact"
              className="bg-white border px-6 py-3 rounded-lg shadow-md font-medium flex items-center gap-2"
            >
              <FaEnvelope className="text-black" /> Get in Touch
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-gray-800"
              >
                {tech.icon} {tech.name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative mb-10 lg:mb-0">
          <div className="relative w-[280px] h-[300px] md:w-[360px] md:h-[380px] rounded-[2rem] shadow-2xl overflow-hidden bg-white">
            <Image
              src="/profile.png"
              alt="Atharva Muratkar"
              fill
              className="object-cover"
            />

            <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow">
              <FaCode className="text-sm text-blue-600" />
            </div>

            <div className="absolute bottom-2 left-2 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow">
              🎨
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
