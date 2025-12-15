import Hero from "@/components/hero/Hero";
import Experience from "@/components/experience/Experience";
import Skill from "@/components/skill/Skill";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Skill />
      <Experience />
    </main>
  );
}
