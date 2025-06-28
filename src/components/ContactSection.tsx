import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaDownload, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Label } from "./ui/label";

interface ContactProps {
  index: string;
}

const ContactSection: React.FC<ContactProps> = ({ index }) => {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      href: "https://github.com/yourusername",
      bgColor: "bg-gray-900",
    },
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      bgColor: "bg-blue-600",
    },
    {
      icon: <FaXTwitter size={24} />,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      bgColor: "bg-sky-500",
    },
  ];
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
              I&apos;m always excited to discuss new opportunities, collaborate
              on interesting projects, or simply connect with fellow developers.
              Let&apos;s build something amazing together!
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-between items-center">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-[2.5rem]">
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="fullname" className="text-xl">
                          Full Name
                        </Label>
                        <input
                          id="fullname"
                          type="text"
                          placeholder="John Doe"
                          className="text-[1.25rem] border border-gray-500 rounded-md p-2 focus:outline-none 
                          focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-xl">
                          Email
                        </Label>
                        <input
                          id="email"
                          type="email"
                          placeholder="john.doe@example.com"
                          className="text-[1.25rem] border border-gray-500 rounded-md p-2 focus:outline-none 
                          focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message" className="text-xl">
                          Message
                        </Label>
                        <textarea
                          className="text-[1.25rem] border border-gray-500 rounded-md p-2 focus:outline-none
                          focus:ring-2 focus:ring-blue-500"
                          id="message"
                          placeholder="Tell me about your project or just say hello..."
                          rows={5}
                          required
                        />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white rounded-md p-3 text-[1.25rem] font-semibold
                    hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </CardFooter>
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
      <div
        className="md:w-1/2 mt-10 md:mt-0 flex flex-col justify-center items-center py-[2.38rem] relative overflow-hidden
                gap-6"
      >
        <Card className="bg-white p-8">
          <CardHeader>
            <CardTitle className="text-[2.5rem] font-helvatica">
              Let&apos;s Connect
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6 font-raleway">
            <p className="text-gray-600 text-[1.25rem]">
              Whether you have a project in mind, want to discuss opportunities,
              or just want to say hi, I&apos;d love to hear from you. I
              typically respond within 24 hours.
            </p>
            <div className="w-full flex items-start gap-4 ">
              <span className="bg-[#dbeafe] rounded-lg p-3">
                <IoIosMail className="w-10 h-10 text-blue-600" />
              </span>
              <div className="font-raleway">
                <Label className="text-[1.25rem]">Email</Label>
                <p className="text-gray-700 text-[1.25rem]">
                  atharva.muratkar1@gmail.com
                </p>
              </div>
            </div>
            <div className="w-full flex items-start gap-4 ">
              <span className="bg-[#dcfce7] rounded-lg p-3">
                <IoIosCall className="w-10 h-10 text-green-600" />
              </span>
              <div className="font-raleway">
                <Label className="text-[1.25rem]">Phone</Label>
                <p className="text-gray-700 text-[1.25rem]">+91-8421997962</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full bg-white p-8">
          <CardHeader>
            <CardTitle className="text-[2.5rem] font-helvatica">
              Find me online
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6 justify-around items-center flex-wrap">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
                >
                  <div className={`p-3 rounded-lg ${link.bgColor} text-white`}>
                    {link.icon}
                  </div>
                  <span className="text-lg font-medium text-gray-600 group-hover:text-black transition-colors">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-10">
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-semibold">
              <span className="h-4 w-4 bg-green-200 rounded-full animate-pulse" />
              <span className="text-[1.5rem]">Available for work</span>
            </div>
            <p className="text-[1.5rem] mt-2 text-white/90">
              I&apos;m currently available for freelance projects and full-time
              opportunities. Let&apos;s discuss how we can work together!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
