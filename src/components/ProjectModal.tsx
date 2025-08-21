import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Github, ExternalLink, FileText, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/types/project";
import { useState, useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

const ProjectModal = ({ 
  project, 
  isOpen, 
  onClose, 
  onPrevious, 
  onNext, 
  hasPrevious, 
  hasNext 
}: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, project]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen || !project) return;
      
      switch (event.key) {
        case 'ArrowLeft':
          if (hasPrevious && onPrevious) {
            onPrevious();
          }
          break;
        case 'ArrowRight':
          if (hasNext && onNext) {
            onNext();
          }
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, hasPrevious, hasNext, onPrevious, onNext, onClose]);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-heading pr-8">
              {project.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium">{project.role}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image Carousel */}
          {project.images.length > 0 && (
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {project.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </>
                )}
              </Carousel>
              
              {project.images.length > 1 && (
                <div className="flex justify-center mt-4 gap-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex 
                          ? 'bg-primary' 
                          : 'bg-muted-foreground/30'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Summary */}
          <p className="text-muted-foreground leading-relaxed">
            {project.summary}
          </p>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Project Details</h3>
            <ul className="space-y-2">
              {project.details.map((detail, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-2 text-xs">•</span>
                  <span className="leading-relaxed">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {project.links.code && (
              <Button asChild>
                <a 
                  href={project.links.code} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
            
            {project.links.demo && (
              <Button variant="outline" asChild>
                <a 
                  href={project.links.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}

            {project.links.writeup && (
              <Button variant="outline" asChild>
                <a 
                  href={project.links.writeup} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Technical Write-up
                </a>
              </Button>
            )}
          </div>

          {/* Project Navigation */}
          {(hasPrevious || hasNext) && (
            <div className="flex justify-between items-center pt-4 border-t">
              <Button
                variant="outline"
                onClick={onPrevious}
                disabled={!hasPrevious}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous Project
              </Button>
              
              <Button
                variant="outline"
                onClick={onNext}
                disabled={!hasNext}
                className="flex items-center gap-2"
              >
                Next Project
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;