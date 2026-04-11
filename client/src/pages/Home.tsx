import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home Page - Portfolio Website.
 * Cyberpunk Minimalism Design with Hero, Skills, Contact, and Footer sections
 * Projects are now displayed on a separate dedicated page
 */
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
