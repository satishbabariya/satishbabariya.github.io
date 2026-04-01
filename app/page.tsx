import { Navbar } from "@/components/navbar";
import { Intro } from "@/components/sections/intro";
import { Background } from "@/components/sections/background";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Organizations } from "@/components/sections/organizations";
import { Projects } from "@/components/sections/projects";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-14">
        <Intro />
        <Background />
        <Skills />
        <Experience />
        <Organizations />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
