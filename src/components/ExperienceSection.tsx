import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/Card";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";

interface ExperienceSectionProps {
  index: string;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ index }) => {
  type TechStack = string;
  const techStack: TechStack[] = [
    "React.js",
    "Redux",
    "JavaScript (ES6+)",
    "TailwindCSS",
  ];

  return (
    <section className="h-full md:h-screen flex flex-col md:flex-row justify-between relative bg-transparent px-[4rem] md:px-[6.25rem] my-2.5">
      {/* Left Content */}
      <div className="md:w-1/2 md:max-w-3xl h-full flex flex-col md:pb-[6.25rem] relative">
        {/* Number */}
        <span className="gap-2.5 pt-[2.38rem] pb-6 object-bottom-left">
          <p className="text-[2rem] font-light tracking-[5%] text-[#4F4F4F] align-bottom text-left font-raleway">
            {index}
          </p>
        </span>

        {/* Title */}
        <div className="flex flex-row justify-between border-l-2 border-[#4F4F4F] pl-4">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 text-[1.5rem]">
              My professional journey as a{" "}
              <span className="font-bold">React/Next.js developer</span>,
              building scalable web applications and delivering exceptional user
              experiences.
            </p>

            {/* CTA Buttons */}
            <div className="justify-center lg:justify-start gap-4 grid grid-cols-1">
              <Card className="max-w-full p-5">
                <CardContent className="flex flex-col items-start gap-6">
                  <div className="w-full h-fit flex justify-between items-center gap-4 font-raleway">
                    <div className="flex flex-col gap-0 items-start">
                      <h1 className="font-bold text-[1.5rem]">
                        System Engineer
                      </h1>
                      <h2 className="text-[1.2rem] text-[#2563eb] font-medium">
                        Tata Consultancy Services
                      </h2>
                    </div>
                    <div
                      className="h-fit flex items-center gap-2 px-4 py-2 bg-[#dbeafe] rounded-full shadow-sm text-[1.125rem] 
                      font-medium text-[#1e40af]"
                    >
                      August 2022 - Present
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                    {techStack.map((tech, index) => (
                      <div
                        className="flex items-center gap-2 px-6 py-1.5 bg-[#f3f4f6] rounded-full shadow-sm text-[1.25rem] text-gray-800 font-raleway"
                        key={index}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                  <div>
                    <ul className="list-disc text-start pl-6 text-gray-700 text-[1.25rem] space-y-1">
                      <li>
                        Developed scalable, enterprise-grade web applications
                        for Cardinal Health using <b>React.js</b>, <b>Redux</b>,
                        and <b>REST APIs</b>, improving page performance by ≈
                        30%.
                      </li>
                      <li>
                        Built and optimized reusable UI components, enhancing
                        user experience and ensuring cross-browser
                        compatibility.
                      </li>
                      <li>
                        Implemented <b>React Hooks</b> to simplify logic and
                        improve maintainability of functional components.
                      </li>
                      <li>
                        Collaborated with backend developers to integrate{" "}
                        <b>RESTful APIs</b> using <b>Axios</b>, enabling
                        seamless real-time data handling.
                      </li>
                      <li>
                        Participated in daily Agile stand-ups, sprint planning,
                        and retrospectives to deliver feature updates, debug
                        production issues, and meet tight project deadlines.
                      </li>
                      <li>
                        Participated in code reviews and contributed to UI
                        refactoring for improved maintainability and
                        scalability.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center py-[2.38rem] relative overflow-hidden">
        <Card className="bg-[#f4f6ff]">
          <CardContent className="flex flex-col p-10 gap-4">
            <div>
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/986ab530a2-66b34502e4d491c961d8.png"
                alt="Work Desk"
                width={460}
                height={360}
                className="rounded-2xl object-cover p-2 w-[460px] h-[300px]"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-6">
              <Card className="bg-white">
                <CardContent>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[2.5rem] font-bold text-[#2563eb] font-raleway">
                      2.5+
                    </span>
                    <span className="text-[1.2rem] font-raleway">
                      Years Experience
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[2.5rem] font-bold text-[#16a34a] font-raleway">
                      10+
                    </span>
                    <span className="text-[1.2rem] font-raleway">
                      Technologies Mastered
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="w-full flex justify-center items-center mt-6">
              <Link
                href="https://drive.google.com/uc?export=download&id=1WaZd2FM-QzGqI_CsOA1GyrMbq8BQtB3Z"
                className="group flex flex-row justify-between rounded-lg shadow items-center
                w-fit md:w-auto gap-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600
                cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload className="w-5 h-5 text-white" />
                <span className="text-white text-[1.35rem] font-medium">
                  Download Resume
                </span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;
