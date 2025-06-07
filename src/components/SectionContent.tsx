import Image from "next/image";
import React from "react";

const SectionContent = () => {
  return (
    <section className="h-screen flex flex-row relative bg-white px-[6.25rem] my-4">
      {/* Left Content */}
      <div className="md:w-1/3 h-full flex flex-col pb-[6.25rem] relative">
        {/* Number */}
        <span className="gap-2.5 pt-[2.38rem] pb-6 object-bottom-left">
          <p className="text-[2rem] font-light tracking-[5%] text-[#4F4F4F] align-bottom text-left font-raleway">
            04
          </p>
        </span>
        {/* Title */}
        <span className="gap-2.5 pr-2.5 pb-12 object-top-left">
          <h2 className="font-bold font-helvatica text-[#4F4F4F] text-5xl text-left align-top">
            Chiava
          </h2>
        </span>
        <span className="flex-1 flex flex-row justify-between">
          <p className="text-gray-600 leading-relaxed border-l-2 border-[#4F4F4F] pl-4 mb-6 font-inter font-normal text-2xl">
            An e-commerce website for the Chiava bicycle brand, offering users
            access to detailed product information and a smooth online shopping
            experience. The platform reflects the brand’s innovative identity
            and commitment to quality.
          </p>
        </span>
      </div>

      {/* Right Image */}
      <div className="md:w-2/3 mt-10 md:mt-0 flex justify-center items-center py-[2.38rem]">
        <Image
          src="/chiava-composite.png" // Your uploaded composite image
          alt="Chiava project showcase"
          width={800}
          height={600}
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default SectionContent;
