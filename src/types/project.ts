export interface Project {
  title: string;
  slug: string;
  summary: string;
  images: string[];
  tech: string[];
  role: string;
  year: string;
  links: {
    code?: string;
    demo?: string;
    writeup?: string;
  };
  details: string[];
  featured?: boolean;
}

export interface ProjectFilters {
  search: string;
  selectedTags: string[];
}