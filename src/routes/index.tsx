import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/about-section";
import { CertsSection } from "@/components/certs-section";
import { ContactSection } from "@/components/contact-section";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsSection } from "@/components/skills-section";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <SiteHeader />
      <main>
        <Hero />
        <ProjectGrid />
        <AboutSection />
        <SkillsSection />
        <CertsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
