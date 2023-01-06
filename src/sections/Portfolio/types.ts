export type Project = {
  index?: number;
  code?: string;
  company?: string;
  href?: string;
  img?: string;
  description?: string;
  id?: number | string;
};

export interface PortfolioProps {
  projects?: Array<Project>;
}
