"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { Label } from "./ui/label";

interface ContactProps {
  index: string;
}

interface FormValues {
  fullname: string;
  email: string;
  message: string;
}

const ContactSection: React.FC<ContactProps> = ({ index }) => {
  const [formData, setFormData] = useState<FormValues>({
    fullname: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      label: "GitHub",
      href: "https://github.com/Atharva-14",
      bgColor: "bg-gray-900",
    },
    {
      icon: <FaLinkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/atharva-muratkar/",
      bgColor: "bg-blue-600",
    },
    {
      icon: <FaXTwitter size={24} />,
      label: "Twitter",
      href: "https://x.com/Atharva_142",
      bgColor: "bg-black",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to an API
    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_SUBMISSION_ID}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: new FormData(
            document.querySelector("#contact-form") as HTMLFormElement
          ),
        }
      );

      if (response.ok) {
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ fullname: "", email: "", message: "" });
      } else {
        alert("There was a problem sending your message.");
      }
    } catch (error) {
      console.error("Form error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

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

        {/* Contact Form */}
        <div className="flex flex-row justify-between border-l-2 border-[#4F4F4F] pl-4">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 text-[1.5rem]">
              I&apos;m always excited to discuss new opportunities, collaborate
              on interesting projects, or simply connect with fellow developers.
              Let&apos;s build something amazing together!
            </p>

            <div className="flex justify-between items-center">
              <Card className="w-full p-8">
                <CardHeader>
                  <CardTitle className="text-[2.5rem]">
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form id="contact-form">
                    <div className="flex flex-col gap-6">
                      <div className="grid gap-2">
                        <Label htmlFor="fullname" className="text-xl">
                          Full Name
                        </Label>
                        <input
                          id="fullname"
                          name="fullname"
                          type="text"
                          placeholder="John Doe"
                          className="text-[1.25rem] border border-gray-500 rounded-md p-2 focus:outline-none 
                          focus:ring-2 focus:ring-blue-500"
                          onChange={handleChange}
                          value={formData.fullname}
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
                          name="email"
                          placeholder="john.doe@example.com"
                          className="text-[1.25rem] border border-gray-500 rounded-md p-2 focus:outline-none 
                          focus:ring-2 focus:ring-blue-500"
                          onChange={handleChange}
                          value={formData.email}
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
                          name="message"
                          onChange={handleChange}
                          value={formData.message}
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
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white rounded-md p-3 text-[1.25rem] font-semibold cursor-pointer
                    hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Let's Connect */}
      <div
        className="md:w-1/2 flex flex-col justify-center items-center py-[2.38rem] relative overflow-hidden
                gap-6 border-l-2 border-[#4F4F4F] pl-4 md:border-l-0 md:pl-0"
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
              <span className="bg-[#dbeafe] rounded-lg p-3 hover:bg-blue-200 transition-colors">
                <IoIosMail className="w-10 h-10 text-blue-600" />
              </span>
              <div className="font-raleway">
                <Label className="text-[1.25rem]">Email</Label>
                <p className="text-gray-700 text-[1.25rem] hover:text-blue-600 hover:font-medium transition-colors">
                  atharva.muratkar1@gmail.com
                </p>
              </div>
            </div>
            <div className="w-full flex items-start gap-4 ">
              <span className="bg-[#dcfce7] rounded-lg p-3 hover:bg-green-200 transition-colors">
                <IoIosCall className="w-10 h-10 text-green-600" />
              </span>
              <div className="font-raleway">
                <Label className="text-[1.25rem]">Phone</Label>
                <p className="text-gray-700 text-[1.25rem] hover:text-green-600 hover:font-medium transition-colors">
                  +91-8421997962
                </p>
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
            <div className="flex items-center gap-4 font-semibold">
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
