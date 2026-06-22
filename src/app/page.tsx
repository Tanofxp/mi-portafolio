import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        
        <div className="section-divider-glow" />
        <div className="section-bg-subtle">
          <AboutSection />
        </div>
        
        <div className="section-divider" />
        <div className="section-bg-accent">
          <SkillsSection />
        </div>
        
        <div className="section-divider-glow" />
        <div className="gradient-bg-3">
          <ProjectsSection />
        </div>
        
        <div className="section-divider" />
        <div className="section-bg-subtle">
          <ExperienceSection />
        </div>
        
        <div className="section-divider-glow" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

