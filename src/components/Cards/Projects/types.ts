import { Projects } from "../../../sections/Projects/types";

export interface ProjectsBarProps {
  projects: Array<Projects>;
  onClickButton?: (id: number) => void;
}
