import React from "react";

interface SectionTitleProps {
  upperTitle: string;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ upperTitle, title }) => {
  return (
    <div className="h-screen flex flex-col relative bg-white px-[100px] my-4">
      {/* Vertical Line (stick to edge, not affected by padding) */}
      <svg
        width="3"
        height="250"
        viewBox="0 0 3 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="3" height="250" fill="#4F4F4F" />
      </svg>

      {/* Content aligned with 100px padding */}
      <div className="pt-[38px] gap-2.5 object-left-bottom">
        <p className="text-gray-500 tracking-[5%] text-5xl leading-[auto] mb-2 text-left align-bottom font-raleway">
          {upperTitle}
        </p>
      </div>
      <div className="gap-2.5 pr-2.5 pb-12 object-left-top">
        <h1 className="font-bold leading-[auto] text-gray-800 text-left align-top font-helvatica text-9xl">
          {title}
        </h1>
      </div>

      {/* Vertical Line (stick to edge, not affected by padding) */}
      <svg
        width="3"
        height="458"
        viewBox="0 0 3 458"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="3" height="458" fill="#4F4F4F" />
      </svg>
    </div>
  );
};

export default SectionTitle;
