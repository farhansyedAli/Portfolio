/**
 * Skills Section - Cyberpunk Minimalism Design
 * Features: Categorized skills with visual indicators
 */

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Data Science & ML",
    icon: "🧠",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Data Analysis",
      "Statistical Modeling",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    name: "Programming Languages",
    icon: "💻",
    skills: ["Python", "SQL", "JavaScript", "Java", "C++"],
  },
  {
    name: "ML Libraries & Frameworks",
    icon: "⚙️",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    name: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Jupyter Notebook", "Git/GitHub", "Hugging Face", "Google Colab", "VS Code"],
  },
  {
    name: "Databases",
    icon: "🗄️",
    skills: ["SQLite", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "GUI Development",
    icon: "🎨",
    skills: ["Tkinter", "Kivy", "PyQt", "UI/UX Design"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full py-20 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive toolkit spanning data science, machine learning, software development, and modern technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-background border border-border rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300 glow-cyan-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-foreground group-hover:text-purple-400 transition-colors">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 text-xs bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 rounded-full hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-foreground">
            Continuous Learning & Growth
          </h3>
          <p className="text-muted-foreground mb-4">
            I'm committed to staying at the forefront of data science and AI/ML technologies. I regularly explore emerging frameworks, participate in competitions, and contribute to open-source projects to expand my expertise and tackle increasingly complex challenges.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">100+</div>
              <p className="text-xs text-muted-foreground mt-1">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">5+</div>
              <p className="text-xs text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">20+</div>
              <p className="text-xs text-muted-foreground mt-1">Technologies</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">∞</div>
              <p className="text-xs text-muted-foreground mt-1">Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
