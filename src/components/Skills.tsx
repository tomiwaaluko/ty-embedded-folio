import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Cpu, 
  Zap,
  Wrench,
  Lightbulb,
  Star
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "C/C++", proficiency: 95, description: "Embedded development, real-time systems" },
        { name: "Verilog", proficiency: 75, description: "FPGA design, digital circuits" },
        { name: "Assembly", proficiency: 70, description: "ARM Cortex-M, optimization" },
        { name: "MATLAB", proficiency: 80, description: "Signal processing, control systems" }
        // [PLACEHOLDER: Update with actual skills and proficiencies]
      ]
    },
    {
      title: "Hardware & MCUs",
      icon: Cpu,
      skills: [
        { name: "Arduino", proficiency: 90, description: "Rapid prototyping, sensors" },
        { name: "Raspberry Pi", proficiency: 75, description: "Linux embedded, computer vision" },
        { name: "FPGA", proficiency: 65, description: "Digital design, high-speed processing" }
        // [PLACEHOLDER: Update with actual hardware experience]
      ]
    },
    {
      title: "Digital Design & Protocols",
      icon: Zap,
      skills: [
        { name: "UART/SPI/I2C", proficiency: 90, description: "Serial communication protocols" },
        { name: "PWM Control", proficiency: 85, description: "Motor control, power management" },
        { name: "ADC/DAC", proficiency: 80, description: "Analog signal processing" },
        { name: "USB Protocol", proficiency: 65, description: "Device communication" }
        // [PLACEHOLDER: Update with actual protocol experience]
      ]
    },
    {
      title: "Development Tools",
      icon: Wrench,
      skills: [
        { name: "Git/GitHub", proficiency: 90, description: "Version control, collaboration" },
        { name: "Oscilloscope", proficiency: 85, description: "Signal analysis, debugging" },
        { name: "Logic Analyzer", proficiency: 80, description: "Digital signal debugging" },
        { name: "Multimeter", proficiency: 90, description: "Circuit testing, measurements" }
        // [PLACEHOLDER: Update with actual tools used]
      ]
    },
    {
      title: "Core Concepts",
      icon: Lightbulb,
      skills: [
        { name: "RTOS Basics", proficiency: 75, description: "Real-time task scheduling" },
        { name: "PID Control", proficiency: 80, description: "Feedback control systems" },
        { name: "Low-Power Design", proficiency: 70, description: "Battery-efficient systems" },
        { name: "Signal Processing", proficiency: 75, description: "Filtering, FFT, DSP" },
        { name: "Bootloaders", proficiency: 65, description: "System initialization, updates" }
        // [PLACEHOLDER: Update with actual concept knowledge]
      ]
    }
  ];

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "text-green-600 dark:text-green-400";
    if (proficiency >= 80) return "text-blue-600 dark:text-blue-400";
    if (proficiency >= 70) return "text-yellow-600 dark:text-yellow-400";
    return "text-gray-600 dark:text-gray-400";
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="bg-hero section-padding">
      <div className="container-width">
        <div className="space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4 fade-up">
            <h2 className="text-section font-heading text-foreground">Technical Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive expertise in embedded systems development, from low-level hardware control to high-level system design.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={categoryIndex} className="card-hover fade-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-lg">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground text-sm">
                              {skill.name}
                            </span>
                            <Badge 
                              variant="secondary" 
                              className={`text-xs ${getProficiencyColor(skill.proficiency)}`}
                            >
                              {getProficiencyLabel(skill.proficiency)}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < skill.proficiency / 20
                                    ? "text-primary fill-primary"
                                    : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <Progress value={skill.proficiency} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4 fade-up delay-400">
            <p className="text-muted-foreground">
              Want to see these skills in action? Check out my projects below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;