import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Heart } from "lucide-react";

const About = () => {
  const quickFacts = [
    {
      icon: MapPin,
      label: "Location",
      value: "Tallahassee, FL", // [PLACEHOLDER: Update with actual location]
    },
    {
      icon: GraduationCap,
      label: "Graduation",
      value: "May 2026",
    },
    {
      icon: Heart,
      label: "Interests",
      value:
        "AI at the Edge, Robotics, Quantum Computing, Gym, Traveling, Reading", // [PLACEHOLDER: Update with actual interests]
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Advanced Embedded Systems Coursework",
      description:
        "Deep dive into RTOS implementation, low-power design, and real-time signal processing. Built custom bootloader for ARM Cortex-M4.",
      // [PLACEHOLDER: Replace with actual coursework/achievements]
    },
    {
      year: "2023",
      title: "Hardware Engineering Internship",
      description:
        "Developed firmware for IoT sensors using C/C++ on ESP32 platform. Optimized power consumption by 40% through intelligent sleep modes.",
      // [PLACEHOLDER: Replace with actual internship details]
    },
    {
      year: "2022",
      title: "Control Systems & Digital Design",
      description:
        "Implemented PID controllers in FPGA using Verilog. Designed and simulated multi-stage filters for embedded audio applications.",
      // [PLACEHOLDER: Replace with actual coursework]
    },
    {
      year: "2021",
      title: "Started Computer Engineering",
      description:
        "Began studies with focus on embedded systems and hardware-software integration. First project: LED matrix controller with custom protocol.",
      // [PLACEHOLDER: Replace with actual start details]
    },
  ];

  return (
    <section id="about" className="bg-section section-padding">
      <div className="container-width">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 fade-up">
            <h2 className="text-section font-heading text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio & Quick Facts */}
            <div className="space-y-8 fade-up delay-200">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm a 5th-year Computer Engineering student passionate about
                  bridging the gap between hardware and software. My focus lies
                  in embedded systems development, where I combine low-level
                  programming expertise with hardware design principles to
                  create efficient, real-world solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  From microcontroller programming in C/C++ to FPGA design in
                  Verilog, I thrive on optimizing system performance while
                  managing constraints like power consumption, real-time
                  requirements, and resource limitations. I'm particularly
                  interested in AI at the edge and how machine learning can be
                  deployed on resource-constrained devices.
                </p>
                {/* [PLACEHOLDER: Replace with actual bio content] */}
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickFacts.map((fact, index) => {
                  const IconComponent = fact.icon;
                  return (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-6 text-center">
                        <IconComponent className="h-8 w-8 text-primary mx-auto mb-3" />
                        <p className="font-medium text-foreground">
                          {fact.label}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {fact.value}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6 fade-up delay-400">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-8">
                Academic & Professional Journey
              </h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-border"></div>

                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-6 pb-8"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {item.year.slice(-2)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pb-4">
                      <Card className="card-hover">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-foreground text-lg mb-2">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
