/**
 * Footer Component - Cyberpunk Minimalism Design
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-2">Syed Farhan Ali</h3>
            <p className="text-sm text-muted-foreground">
              Data Scientist & AI/ML Engineer crafting intelligent solutions through data-driven innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              
              <li>
                <a
                  href="#skills"
                  className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Follow
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/farhansyedAli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="www.linkedin.com/in/syed-farhan-ali-shah-ab2309287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/syedfarhanali99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                >
                  Hugging Face
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Syed Farhan Ali. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
