import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";
import { Experience } from "@/components/portfolio/experience";
import { Certificates } from "@/components/portfolio/certificates";
import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Navigation } from "@/components/portfolio/navigation";
import { Projects } from "@/components/portfolio/projects";
import { StarField } from "@/components/portfolio/star-field";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Multi-layer animated star field + nebula */}
      <StarField />

      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
