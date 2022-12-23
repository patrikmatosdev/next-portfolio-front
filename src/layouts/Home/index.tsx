import About from "../../sections/About";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import { Container } from "./styles";
import mock_thechnologie from "../../../mocks/technologies.json";
import mock_projects from "../../../mocks/projects.json";
import mock_experiences from "../../../mocks/experiences.json";
import Projects from "../../sections/Projects";
import Experiences from "../../sections/Experiences";
import { Project } from "../../sections/Projects/types";
import { Thechnologie } from "../../sections/About/types";

export interface HomePageProps {
  projects?: Array<Project>;
  experiences?: Array<Project>;
  thecnologies?: Array<Thechnologie>;
}

const HomePage = ({ projects, experiences, thecnologies }: HomePageProps) => {
  return (
    <Container>
      <Menu items={["Início", "Porfólio", "Experiências"]} />
      <Banner />
      <About technologies={thecnologies} />
      <Projects projects={experiences} />
      <Experiences experiences={projects} />
    </Container>
  );
};

export default HomePage;
