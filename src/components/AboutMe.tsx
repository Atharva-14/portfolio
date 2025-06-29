import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/Card";
import { FaDownload } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

interface AboutMeProps {
  index: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ index }) => {
  return (
    <section className="h-full flex flex-row justify-between relative bg-transparent px-[6.25rem] my-2.5">
      {/* Left Content */}
      <div className="md:w-1/2 md:max-w-3xl h-full flex flex-col pb-[6.25rem] relative">
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
              Hi, I&apos;m{" "}
              <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Atharva Muratkar
              </span>{" "}
              — a passionate{" "}
              <span className="font-bold">Frontend Developer</span> with around{" "}
              <span className="font-bold">3 years of experience</span>{" "}
              crafting fast, responsive, and accessible web applications.
              <br /> <br />I specialize in{" "}
              <span className="font-bold">React.js</span> and{" "}
              <span className="font-bold">Next.js</span>, and I&apos;m deeply
              enthusiastic about <span className="font-bold">UI/UX</span>{" "}
              design, clean code, and building products that not only work
              efficiently but also look great. Whether it&apos;s developing
              landing pages, dashboards, or full-stack applications, I enjoy
              turning complex ideas into elegant and intuitive user experiences.{" "}
              <br /> <br /> I focus on writing maintainable code, optimizing
              performance, and staying up to date with the latest front-end
              trends. I also enjoy collaborating with cross-functional teams,
              designers, and back-end developers to bring products to life.
            </p>

            {/* CTA Buttons */}
            <div className="justify-center lg:justify-start gap-4 grid grid-cols-1 md:grid-cols-2">
              <Card className="max-w-full">
                <CardContent className="flex flex-col items-start gap-2">
                  <p className="font-bold text-[1.5rem]">🚀 Experience</p>
                  <p className="text-[1.2rem]">2.5+ years in development</p>
                </CardContent>
              </Card>
              <Card className="max-w-full">
                <CardContent className="flex flex-col items-start gap-2">
                  <p className="font-bold text-[1.5rem]">🧩 Specialization</p>
                  <p className="text-[1.2rem]">React.js & Next.js focused</p>
                </CardContent>
              </Card>
              <Card className="max-w-full">
                <CardContent className="flex flex-col items-start gap-2">
                  <p className="font-bold text-[1.5rem]">🛠 Passion</p>
                  <p className="text-[1.2rem]">Solving real-world problems</p>
                </CardContent>
              </Card>
              <Card className="max-w-full">
                <CardContent className="flex flex-col items-start gap-2">
                  <p className="font-bold text-[1.5rem]">🤝 Availability</p>
                  <p className="text-[1.2rem]">Open to opportunities</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center gap-4">
              <Link
                href="https://drive.google.com/uc?export=download&id=1WaZd2FM-QzGqI_CsOA1GyrMbq8BQtB3Z"
                className="group flex flex-row justify-between rounded-lg shadow items-center
                w-full md:w-auto gap-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600
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
          </div>
        </div>
      </div>

      {/* Right Image Container - Blobs will be inside this */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center items-center py-[2.38rem] relative overflow-hidden">
        <div className="relative w-fit mx-auto mt-10">
          {/* Background tilt shape */}
          <div className="absolute top-0 left-0 w-[480px] h-[360px] bg-purple-200 rounded-[20px] rotate-[10deg] z-0" />

          {/* Main card with white border */}
          <div className="relative z-10 rounded-[20px] bg-white p-2 shadow-lg">
            <Image
              src="/profile-landscape.webp" // Replace with your actual image path
              alt="Profile"
              width={460}
              height={360}
              className="rounded-[15px] object-cover p-2"
            />
          </div>

          {/* Floating icon */}
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 z-20 bg-purple-600 p-2 rounded-full shadow-md text-white">
            <FaCode className="w-16 h-16 p-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
