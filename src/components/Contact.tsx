import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { toast } from "sonner";

/**
 * Contact Section - Cyberpunk Minimalism Design
 * Features: Contact form, social links, email integration
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In a real application, you would send this data to a backend service
      console.log("Form submitted:", formData);

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 bg-background">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663479043960/RDckQC4vgthdYmtohH9ueQ/hero-bg-2-NsKs2ta8EeSiZDZBK4Vs9u.webp')",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-500" />
            <span className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Get In Touch
            </span>
            <div className="h-1 w-12 bg-gradient-to-l from-cyan-400 to-purple-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to chat about data science and AI, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 glow-cyan-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Collaboration"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-background font-semibold glow-cyan-hover disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="flex flex-col justify-between">
            {/* Direct Contact */}
            <div className="space-y-8">
              {/* Email */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-purple-400/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=syedfarhanali2005@gmail.com"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Click Here to Contact Me
                      </a>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      I typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-purple-400/50 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Pakistan, Lahore</h3>
                    <p className="text-muted-foreground">Open to remote opportunities worldwide</p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Available for freelance, contract, and full-time roles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/farhansyedAli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
                >
                  <Github className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">GitHub</span>
                </a>
                <a
                  href="www.linkedin.com/in/syed-farhan-ali-shah-ab2309287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
                >
                  <Linkedin className="h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-foreground">LinkedIn</span>
                </a>
                <a
                  href="https://huggingface.co/syedfarhanali99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">🤗</span>
                  <span className="text-sm font-medium text-foreground">Hugging Face</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
