import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Home IoT Controller",
      description: "ESP32-based central hub managing multiple sensors and actuators with real-time data visualization. Features custom communication protocol and low-power mesh networking.",
      image: "/api/placeholder/400/250", // [PLACEHOLDER: Replace with actual project image]
      tags: ["ESP32", "C++", "WiFi", "MQTT", "Sensors"],
      githubUrl: "https://github.com/tyler-anderson/smart-home-iot", // [PLACEHOLDER: Replace with actual URL]
      liveUrl: "", // [PLACEHOLDER: Add if demo available]
      detailsUrl: "", // [PLACEHOLDER: Add project details page]
      featured: true
    },
    {
      title: "PID Motor Control System",
      description: "STM32-based precision motor controller implementing custom PID algorithms with encoder feedback. Achieves <0.1° positioning accuracy with real-time tuning interface.",
      image: "/api/placeholder/400/250", // [PLACEHOLDER: Replace with actual project image]
      tags: ["STM32", "C", "PID Control", "PWM", "Encoders"],
      githubUrl: "https://github.com/tyler-anderson/pid-motor-control", // [PLACEHOLDER: Replace with actual URL]
      liveUrl: "",
      detailsUrl: "",
      featured: true
    },
    {
      title: "FPGA Audio Processor",
      description: "Verilog-based real-time audio effects processor implementing multiple digital filters, echo, and reverb effects with configurable parameters via UART interface.",
      image: "/api/placeholder/400/250", // [PLACEHOLDER: Replace with actual project image]  
      tags: ["FPGA", "Verilog", "Audio DSP", "UART", "Filters"],
      githubUrl: "https://github.com/tyler-anderson/fpga-audio-processor", // [PLACEHOLDER: Replace with actual URL]
      liveUrl: "",
      detailsUrl: "",
      featured: false
    },
    {
      title: "Wireless Sensor Network",
      description: "Multi-node Arduino-based sensor network with custom RF protocol. Features automatic mesh routing, data aggregation, and battery level monitoring with 6-month battery life.",
      image: "/api/placeholder/400/250", // [PLACEHOLDER: Replace with actual project image]
      tags: ["Arduino", "C++", "RF Communication", "Mesh Network", "Low Power"],
      githubUrl: "https://github.com/tyler-anderson/wireless-sensor-net", // [PLACEHOLDER: Replace with actual URL]
      liveUrl: "",
      detailsUrl: "",
      featured: false
    },
    {
      title: "Custom Bootloader Implementation",
      description: "ARM Cortex-M4 bootloader with OTA update capabilities, encrypted firmware validation, and rollback protection. Supports multiple communication interfaces (UART, SPI, USB).",
      image: "/api/placeholder/400/250", // [PLACEHOLDER: Replace with actual project image]
      tags: ["ARM", "Assembly", "Bootloader", "OTA Updates", "Security"],
      githubUrl: "https://github.com/tyler-anderson/custom-bootloader", // [PLACEHOLDER: Replace with actual URL]
      liveUrl: "",
      detailsUrl: "",
      featured: false
    },
    {
      title: "Real-Time Data Logger",
      description: "High-speed data acquisition system using STM32 with custom PCB design. Captures and logs sensor data at 1kHz with SD card storage and USB streaming interface.",
      image: "/api/placeholder/400/250", // [PLACEHOLDER: Replace with actual project image]
      tags: ["STM32", "PCB Design", "ADC", "SD Card", "USB"],
      githubUrl: "https://github.com/tyler-anderson/realtime-data-logger", // [PLACEHOLDER: Replace with actual URL]
      liveUrl: "",
      detailsUrl: "",
      featured: false
    }
  ];

  return (
    <section id="projects" className="bg-section section-padding">
      <div className="container-width">
        <div className="space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 fade-up">
            <h2 className="text-section font-heading text-foreground">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of embedded systems projects demonstrating practical application of hardware-software integration, 
              real-time programming, and system optimization.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`card-hover fade-up ${project.featured ? 'ring-2 ring-primary/20' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-lg bg-muted">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-primary text-primary-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    {project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        asChild
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    
                    {project.liveUrl && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        asChild
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    
                    {project.detailsUrl && (
                      <Button 
                        size="sm" 
                        className="flex-1"
                        asChild
                      >
                        <a href={project.detailsUrl}>
                          <Eye className="mr-2 h-4 w-4" />
                          Details
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 fade-up delay-400">
            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-foreground">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm always looking for opportunities to work on challenging embedded systems projects. 
                Whether it's internships, research opportunities, or collaborative development, I'd love to connect.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-glow" asChild>
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://github.com/tyler-anderson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View All Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;