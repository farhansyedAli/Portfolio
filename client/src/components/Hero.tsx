import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

/**
 * Hero Section - Cyberpunk Minimalism Design
 * Features: Neon accents, gradient text, asymmetric layout with hero background image
 */
export default function Hero() {
  const [, navigate] = useLocation();
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663479043960/RDckQC4vgthdYmtohH9ueQ/hero-bg-1-iXfF6SsWeYmVHhWtW85UX2.webp')",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="mb-6 flex items-center gap-2">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Data Science & AI/ML
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Intelligent Solutions</span>
            <br />
            <span className="text-foreground">Through Data & AI</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            I'm Syed Farhan Ali, a passionate data scientist and AI/ML engineer. I build intelligent systems that transform raw data into actionable insights, leveraging machine learning and deep learning to solve complex real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-background font-semibold glow-cyan-hover"
              onClick={() => navigate("/projects")}
            >
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-cyan-400">3+</div>
              <p className="text-sm text-muted-foreground mt-2">Key Projects</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">AI/ML</div>
              <p className="text-sm text-muted-foreground mt-2">Specialization</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400">Python</div>
              <p className="text-sm text-muted-foreground mt-2">Primary Stack</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
