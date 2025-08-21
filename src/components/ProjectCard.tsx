import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, FileText, Eye } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  return (
    <Card className={`card-hover fade-up ${project.featured ? 'ring-2 ring-primary/20' : ''}`}>
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-lg bg-muted aspect-[4/3]">
        <img
          src={project.images[0]}
          alt={`${project.title} preview`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary text-primary-foreground">
              Featured
            </Badge>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="text-xs">
            {project.year}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-foreground line-clamp-2">
          {project.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground font-medium">
          {project.role}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 4).map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs"
            >
              {tag}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            size="sm" 
            className="flex-1"
            onClick={() => onViewDetails(project)}
          >
            <Eye className="mr-2 h-4 w-4" />
            Details
          </Button>
          
          {project.links.code && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
            >
              <a 
                href={project.links.code} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          
          {project.links.demo && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
            >
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}

          {project.links.writeup && (
            <Button 
              variant="outline" 
              size="sm" 
              asChild
            >
              <a 
                href={project.links.writeup} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;