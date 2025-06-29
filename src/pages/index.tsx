import Head from "next/head";
import { HomeSection } from "@/components/sections/HomeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Portafolio - Desarrollador Frontend</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 space-y-24 py-16">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <BlogSection />
      </main>
    </>
  );
}
