import SectionContent from "@/components/SectionContent";
import SectionTitle from "@/components/SectionTitle";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <SectionTitle upperTitle="2025" title="Portfolio" />
      <SectionTitle upperTitle="Part 1" title="Website" />
      <SectionContent />
    </div>
  );
}
