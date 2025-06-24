import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import SectionContent from "@/components/SectionContent";
import SectionTitle from "@/components/SectionTitle";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
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
      <SectionTitle upperTitle="2025" title="Portfolio" />
      <HeroSection index={formatter.format(sectionIndex++)} />
      <SectionTitle upperTitle="Part 1" title="About Me" />
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
            index={formatter.format(sectionIndex++)}
          />
        ))}
    </div>
  );
}
