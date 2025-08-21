import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Two-Wheeled Self-Balancing Robot",
    slug: "self-balancing-robot",
    summary: "Real-time control loop for balance using IMU fusion & PID on STM32 with custom sensor filtering and motor control algorithms.",
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400", 
      "/api/placeholder/600/400"
    ],
    tech: ["C", "STM32", "PID", "IMU", "I2C"],
    role: "Embedded Engineer",
    year: "2025",
    links: {
      code: "https://github.com/placeholder/self-balancing-robot",
      demo: "https://placeholder.demo/robot"
    },
    details: [
      "Designed complete control loop architecture: sensor read → filter → error calculation → PID → motor PWM output",
      "Implemented IMU sensor fusion combining accelerometer and gyroscope data for accurate tilt measurement",
      "Tuned PID controller gains through iterative testing and validated system response with logic analyzer",
      "Achieved stable balancing within ±2° with 100Hz control loop frequency",
      "Documented complete bring-up procedure, test plan, and lessons learned for future iterations"
    ],
    featured: true
  },
  {
    title: "4-bit ALU in Verilog",
    slug: "4bit-alu-verilog",
    summary: "Complete arithmetic logic unit implementation with comprehensive testbench suite and FPGA synthesis targeting.",
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ],
    tech: ["Verilog", "FPGA", "Testbenches", "Digital Design"],
    role: "Digital Design Engineer",
    year: "2024",
    links: {
      code: "https://github.com/placeholder/4bit-alu",
      writeup: "https://placeholder.writeup/alu-design"
    },
    details: [
      "Designed 4-bit ALU supporting 8 operations: ADD, SUB, AND, OR, XOR, NOT, shift left, shift right",
      "Implemented comprehensive testbench with directed and random test vectors",
      "Synthesized design for Xilinx FPGA with timing analysis and resource utilization optimization",
      "Achieved 100MHz operation frequency with minimal logic resource usage",
      "Documented design methodology and verification strategy for educational use"
    ],
    featured: true
  },
  {
    title: "Stepper Motor Driver & Control",
    slug: "stepper-motor-driver",
    summary: "Precision stepper motor control system with H-bridge driver circuit and microstepping capability for CNC applications.",
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400"
    ],
    tech: ["C", "PWM", "Timers", "H-Bridge", "Motor Control"],
    role: "Control Systems Engineer",
    year: "2024",
    links: {
      code: "https://github.com/placeholder/stepper-driver"
    },
    details: [
      "Designed H-bridge driver circuit with current limiting and thermal protection",
      "Implemented microstepping algorithm for smooth motor operation and reduced vibration",
      "Developed precision timing control using hardware timers for consistent step intervals",
      "Created motion profile generator supporting acceleration and deceleration curves",
      "Achieved 1/16 microstepping resolution with position accuracy of ±0.1°"
    ],
    featured: true
  }
];

export const getAllTechTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach(project => {
    project.tech.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};