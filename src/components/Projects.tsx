import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Github } from "lucide-react";
import { projects, getAllTechTags } from "@/data/projects";
import { Project, ProjectFilters } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { useState, useMemo } from "react";

const Projects = () => {
  const [filters, setFilters] = useState<ProjectFilters>({
    search: "",
    selectedTags: []
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allTags = getAllTechTags();

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Search filter
      const matchesSearch = filters.search === "" || 
        project.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.summary.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.tech.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));

      // Tag filter
      const matchesTags = filters.selectedTags.length === 0 ||
        filters.selectedTags.some(tag => project.tech.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [filters]);

  const handleTagToggle = (tag: string) => {
    setFilters(prev => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter(t => t !== tag)
        : [...prev.selectedTags, tag]
    }));
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const currentProjectIndex = selectedProject 
    ? filteredProjects.findIndex(p => p.slug === selectedProject.slug)
    : -1;

  const handlePreviousProject = () => {
    if (currentProjectIndex > 0) {
      const prevProject = filteredProjects[currentProjectIndex - 1];
      setSelectedProject(prevProject);
    }
  };

  const handleNextProject = () => {
    if (currentProjectIndex < filteredProjects.length - 1) {
      const nextProject = filteredProjects[currentProjectIndex + 1];
      setSelectedProject(nextProject);
    }
  };

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

          {/* Search and Filters */}
          <div className="space-y-6 fade-up delay-100">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search projects..."
                value={filters.search}
                onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                className="pl-10"
              />
            </div>

            {/* Filter Tags */}
            <div className="text-center space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Filter by technology:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={filters.selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground"
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="text-center fade-up delay-200">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.slug}
                  className="fade-up"
                  style={{ animationDelay: `${(index * 100) + 300}ms` }}
                >
                  <ProjectCard
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 fade-up delay-300">
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => setFilters({ search: "", selectedTags: [] })}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}

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

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onPrevious={handlePreviousProject}
          onNext={handleNextProject}
          hasPrevious={currentProjectIndex > 0}
          hasNext={currentProjectIndex < filteredProjects.length - 1}
        />
      </div>
    </section>
  );
};

export default Projects;