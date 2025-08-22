import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import headshotImage from "@/assets/tyler-headshot.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-hero flex items-center">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-up">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight">
                <span className="text-gradient">
                  Applications of Embedded Systems
                </span>{" "}
                • <span className="text-gradient">IoT</span> •{" "}
                <span className="text-gradient">Artificial Intelligence</span> •{" "}
                <span className="text-gradient">C/C++</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                I innovate, integrate, and optimize hardware-aware software.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="btn-glow group"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="/Resume.pdf" download="Tyler_Anderson_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="sm" className="p-3" asChild>
                <a
                  href="https://www.linkedin.com/in/tyler-jordan-anderson/"
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

          {/* Headshot */}
          <div className="flex justify-center lg:justify-end fade-up delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl scale-110"></div>
              <div className="relative card-hover bg-card rounded-full p-2">
                <img
                  src={headshotImage}
                  alt="Tyler Anderson - Embedded Systems Engineer"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover object-top rounded-full"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
