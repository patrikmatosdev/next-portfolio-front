export type Project = {
  index: number;
  code: string;
  company: string;
  href: string;
  img: string;
  description: string;
};

export interface ProjectsProps {
  projects?: Array<Project>;
  title?: string;
  background?: string;
}
