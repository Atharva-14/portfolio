import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import SectionContent from "@/components/SectionContent";
import SectionTitle from "@/components/SectionTitle";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const metadata = {
  title: "Atharva Muratkar – React & Next.js Frontend Developer",
  description:
    "Hi, I'm Atharva Muratkar – a frontend developer specializing in React.js, Next.js, and UI/UX design. I build fast, accessible, and beautiful web applications.",
  keywords: [
    "Atharva Muratkar",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "UI Developer",
    "MERN Stack",
    "Tailwind CSS",
    "Portfolio",
    "Frontend Engineer",
  ],
  creator: "Atharva Muratkar",
  metadataBase: new URL("https://atharva-muratkar-portfolio.vercel.app/"),
  alternates: {
    canonical: "https://atharva-muratkar-portfolio.vercel.app/",
  },
  openGraph: {
    title: "Atharva Muratkar – Frontend Developer Portfolio",
    description:
      "React.js & Next.js developer crafting responsive, fast, and beautiful web apps. View projects, skills, and contact info.",
    url: "https://atharva-muratkar-portfolio.vercel.app/",
    siteName: "Atharva Muratkar Portfolio",
    images: [
      {
        url: "https://atharva-muratkar-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atharva Muratkar Portfolio OpenGraph Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharva Muratkar – React & Next.js Frontend Developer",
    description:
      "Frontend developer building modern, performant UIs with React, Next.js, and Tailwind CSS.",
    images: ["https://atharva-muratkar-portfolio.vercel.app//og-image.png"],
    creator: "@yourTwitterHandle", // Optional: Replace with your handle
  },
};

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  techStack?: string[];
}

async function fetchProjects(): Promise<Project[]> {
  const response = await getDocs(collection(db, "projects"));

  return response.docs.map((doc) => {
    const docData = doc.data();
    return {
      id: doc.id,
      title: docData.title ?? "",
      description: docData.description ?? "",
      url: docData.url ?? "",
      image: docData.image ?? "",
      techStack: docData.techStack ?? [],
    };
  });
}

export default async function Home() {
  const projects = await fetchProjects();
  let sectionIndex = 1;

  const formatter = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <div className="h-full flex flex-col">
      {/* <PortfolioTitle /> */}
      <SectionTitle upperTitle="2025" title="Portfolio" id="hero" />
      <HeroSection index={formatter.format(sectionIndex++)} />
      <SectionTitle upperTitle="Part 1" title="About Me" id="aboutme" />
      <AboutMe index={formatter.format(sectionIndex++)} />
      <SectionTitle upperTitle="Part 2" title="Projects" id="projects" />
      {projects &&
        projects.map((project) => (
          <SectionContent
            key={project.id}
            title={project.title}
            description={project.description}
            url={project.url}
            image={project.image}
            techStack={project.techStack}
            index={formatter.format(sectionIndex++)}
          />
        ))}
      <SectionTitle upperTitle="Part 3" title="Experience" id="experience" />
      {/* <TimelineDemo /> */}
      <ExperienceSection index={formatter.format(sectionIndex++)} />
      <SectionTitle upperTitle="Part 4" title="Contact" id="contact" />
      <ContactSection index={formatter.format(sectionIndex++)} />
    </div>
  );
}
