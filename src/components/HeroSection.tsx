import Image from "next/image";
import { FaCode, FaPalette, FaEnvelope } from "react-icons/fa"; // Assuming you have react-icons installed
import { FaFolderOpen } from "react-icons/fa6";

interface TechStack {
  name: string;
  src: string;
}

const techStack: TechStack[] = [
  {
    name: "React",
    src: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/reactjs.svg",
  },
  {
    name: "Next.js",
    src: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/nextjs.svg",
  },
  {
    name: "Redux",
    src: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/redux.svg",
  },
  {
    name: "JavaScript",
    src: "https://d26c7l40gvbbg2.cloudfront.net/tool_icons/javascript.svg",
  },
];

const HeroSection = () => {
  return (
    <section className="h-screen flex flex-row relative bg-transparent px-[6.25rem] my-2.5">
      {/* Left Content */}
      <div className="md:w-1/2 h-full flex flex-col pb-[6.25rem] relative">
        {/* Number */}
        <span className="gap-2.5 pt-[2.38rem] pb-6 object-bottom-left">
          <p className="text-[2rem] font-light tracking-[5%] text-[#4F4F4F] align-bottom text-left font-raleway">
            01
          </p>
        </span>
        {/* Title */}
        <div className="h-full flex flex-row justify-between border-l-[1px] border-[#4F4F4F] pl-4">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-5xl md:text-[4.5rem] font-bold leading-tight">
              Hi, I&apos;m{" "}
              {/* Apply gradient to this single span encompassing both names */}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Atharva
                <br />
                Muratkar
              </span>
            </h1>

            <h2 className="text-[2rem] font-medium text-gray-700">
              Frontend Developer & UI Enthusiast
            </h2>

            <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 text-[1.4rem]">
              I craft fast, accessible, and visually polished websites using
              React and Next.js.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="flex flex-row justify-center items-center gap-2 text-white px-6 py-3 rounded-lg shadow-md
                text-[1.25rem] font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:-translate-y-1
                transition-all duration-300 ease-in-out"
              >
                <FaFolderOpen /> View Projects
              </a>
              <a
                href="#contact"
                className="bg-white px-6 py-3 rounded-lg shadow-md font-medium flex items-center text-[1.25rem] gap-2
             border border-transparent hover:border-blue-500 hover:text-blue-500 hover:-translate-y-1
             transition-all duration-300 ease-in-out"
              >
                <FaEnvelope /> Get in Touch
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6 flex-wrap">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-[1.25rem] font-medium text-gray-800"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={14}
                    height={14}
                    className="object-cover w-[14px] h-[14px]"
                  />{" "}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Container - Blobs will be inside this */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center py-[2.38rem] relative overflow-hidden">
        {/* Background Blobs for the Image Container */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob -z-10"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 -z-10"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 -z-10"></div>

        {/* Your Image Card (ensure it has a z-index if needed to be above blobs) */}
        <div className="flex-1 flex justify-center items-center relative mb-10 lg:mb-0 z-10">
          {/* Added z-10 here */}
          <div className="relative w-[220px] h-[240px] md:w-[300px] md:h-[320px] rounded-[2rem] shadow-2xl overflow-hidden bg-white rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
            <Image
              src="/profile.webp"
              alt="Atharva Muratkar"
              fill
              className="object-cover border-[2.5rem] rounded-[4rem]"
            />

            <div className="absolute top-2 right-2 w-13 h-13 rounded-full bg-white flex items-center justify-center shadow-lg">
              <FaCode className="text-3xl text-blue-600" />
            </div>

            <div className="absolute bottom-2 left-2 w-13 h-13 rounded-full bg-white flex items-center justify-center shadow-lg">
              <FaPalette className="text-3xl text-pink-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
