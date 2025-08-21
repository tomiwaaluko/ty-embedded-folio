import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-width">
        
        {/* Main Footer Content */}
        <div className="py-12 px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xl font-heading font-bold text-foreground">
                Tyler Anderson
              </h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Computer Engineering Student specializing in embedded systems, IoT development, 
                and hardware-software integration. Class of 2026.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="p-3" asChild>
                  <a 
                    href="https://linkedin.com/in/tyler-anderson" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button variant="ghost" size="sm" className="p-3" asChild>
                  <a 
                    href="https://github.com/tyler-anderson" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                
                <Button variant="ghost" size="sm" className="p-3" asChild>
                  <a 
                    href="mailto:tyler.anderson@university.edu"
                    aria-label="Email Contact"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Contact</h4>
              <div className="space-y-2 text-sm">
                <a 
                  href="mailto:tyler.anderson@university.edu" 
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  tyler.anderson@university.edu
                </a>
                {/* [PLACEHOLDER: Replace with actual email] */}
                <p className="text-muted-foreground">
                  Austin, Texas
                  {/* [PLACEHOLDER: Replace with actual location] */}
                </p>
                <p className="text-muted-foreground">
                  Available for internships & collaboration
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6 px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Tyler Anderson. All rights reserved.
            </p>

            {/* Back to Top */}
            <Button 
              variant="ghost" 
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;