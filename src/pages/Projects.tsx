import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

/**
 * Projects Page - Cyberpunk Minimalism Design
 * Dedicated page displaying all projects with full details
 */

interface ProjectCard {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  highlights: string[];
  links?: {
    github?: string;
    demo?: string;
    huggingface?: string;
  };
}

const projects: ProjectCard[] = [
  {
    id: "supermarket",
    title: "Super Market Management System",
    description: "A comprehensive GUI-based system for streamlining supermarket operations.",
    longDescription:
      "A full-featured GUI application built with Python and Tkinter that revolutionizes supermarket operations. The system handles product inventory management, customer billing, receipt generation, and provides real-time analytics. Designed with an intuitive interface, it reduces operational overhead and improves checkout efficiency.",
    techStack: ["Python", "Tkinter", "SQLite", "OOP"],
    highlights: [
      "Product inventory management with real-time updates",
      "Automated billing and receipt generation",
      "SQLite database for persistent storage",
      "Intuitive GUI for store operators",
      "Calculator feature integrated into the system",
    ],
    links: {
      github: "https://github.com/farhansyedAli/Super-Market-Management-System",
    },
  },
  {
    id: "tictactoe",
    title: "Tic Tac Toe with AI",
    description: "An interactive game featuring AI opponent powered by Minimax algorithm.",
    longDescription:
      "A modern, interactive Tic-Tac-Toe game that showcases advanced game theory concepts. The AI opponent uses the Minimax algorithm to make optimal moves, providing a challenging gameplay experience. Features smooth screen transitions, an intuitive undo/redo system, and a polished user interface built with Kivy.",
    techStack: ["Python", "Kivy", "Minimax Algorithm", "Game Theory"],
    highlights: [
      "AI opponent using Minimax algorithm",
      "Smooth screen transitions and animations",
      "Undo/Redo functionality for gameplay flexibility",
      "Modern, interactive user interface",
      "Optimal move calculation for challenging gameplay",
    ],
    links: {
      github: "https://github.com/farhansyedAli/Tic-Tac-Toe",
    },
  },
  {
    id: "role-predictor",
    title: "Developer's Role Predictor",
    description: "ML pipeline predicting developer roles based on skills and tech stack.",
    longDescription:
      "An end-to-end machine learning project that predicts a developer's specific role (Frontend, Backend, Full Stack, Data Science, etc.) based on their technical skills and technology stack. The project includes data processing, model training, evaluation, and a fully deployable web application. Live demo available on Hugging Face Spaces for interactive exploration.",
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Hugging Face", "ML Pipeline"],
    highlights: [
      "Complete end-to-end ML pipeline",
      "Data preprocessing and feature engineering",
      "Model training and evaluation",
      "Live demo on Hugging Face Spaces",
      "Accurate role prediction based on tech stack",
      "Deployable web application",
    ],
    links: {
      huggingface: "https://huggingface.co/spaces/syedfarhanali99/Developer-role-predictor",
      github: "https://github.com/farhansyedAli/Developer-Role-Predictor",
    },
  },
];

export default function ProjectsPage() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gradient">All Projects</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/")}
            className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
              <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">My Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive collection of projects demonstrating expertise in data science, machine learning, and software development. Each project represents a unique challenge and learning opportunity.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 glow-cyan-hover flex flex-col"
              >
                {/* Card Content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  {/* Long Description */}
                  <p className="text-sm text-foreground/80 mb-6 flex-grow">
                    {project.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-500/50 text-purple-300 rounded-full hover:bg-purple-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-xs font-mono text-cyan-400 mb-3 uppercase tracking-wider">
                      Key Features
                    </p>
                    <ul className="text-xs text-foreground/70 space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border mt-auto">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.links?.huggingface && (
                      <a
                        href={project.links.huggingface}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                    {project.links?.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          className="w-full bg-cyan-600 hover:bg-cyan-700 text-background"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State Message */}
          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects yet. Check back soon!</p>
            </div>
          )}

          {/* Add More Info */}
          <div className="mt-20 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Want to see more projects?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring emerging technologies in data science and AI/ML. Follow my GitHub for the latest updates and contributions.
            </p>
            <a
              href="https://github.com/farhansyedAli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-background font-semibold">
                <Github className="h-4 w-4 mr-2" />
                Visit My GitHub
              </Button>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
