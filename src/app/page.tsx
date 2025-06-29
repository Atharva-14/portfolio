import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import SectionContent from "@/components/SectionContent";
import SectionTitle from "@/components/SectionTitle";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const metadata = {
  title: "Atharva Muratkar | Portfolio 2025",
  description:
    "Explore the portfolio of Atharva Muratkar — React.js developer showcasing projects, skills, and experience.",
  keywords: [
    "Atharva Muratkar",
    "Portfolio",
    "React Developer",
    "Frontend Developer",
    "Next.js",
  ],
  authors: [
    {
      name: "Atharva Muratkar",
      url: "https://portfolio-kappa-seven-51.vercel.app/",
    },
  ],
  openGraph: {
    title: "Atharva Muratkar | Portfolio 2025",
    description: "Explore projects and experience by Atharva Muratkar.",
    url: "https://portfolio-kappa-seven-51.vercel.app/",
    siteName: "Atharva Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.png", // use your actual image URL
        width: 1200,
        height: 630,
        alt: "Atharva Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharva Muratkar | Portfolio 2025",
    description:
      "Explore the portfolio of Atharva Muratkar, a skilled React.js developer.",
    images: ["https://your-portfolio-url.com/og-image.png"],
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
