export type Projects = {
  code: string;
  company: string;
};

export interface ProjectsProps {
  projects?: Array<Projects>;
  title?: string;
  background?: string;
}
