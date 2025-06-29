"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed h-20 top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out 
        bg-white/60 backdrop-blur-md shadow-lg ${
          scrolled
            ? "w-[95%] rounded-xl top-4 py-1"
            : "w-full rounded-none py-1.5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        <ul className="flex space-x-14 font-medium text-black text-[1.25rem]">
          <li>
            <Link
              href="#hero"
              className="transition-all duration-300 hover:text-[1.5rem]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#aboutme"
              className="transition-all duration-300 hover:text-[1.5rem]"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="transition-all duration-300 hover:text-[1.5rem]"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="transition-all duration-300 hover:text-[1.5rem]"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="transition-all duration-300 hover:text-[1.5rem]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
