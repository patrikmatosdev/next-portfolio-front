import About from "../../components/About";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import { Container } from "./styles";
import mock_thechnologie from "../../../mocks/technologies.json";
import mock_projects from "../../../mocks/projects.json";
import mock_experiences from "../../../mocks/experiences.json";
import Projects from "../../components/Projects";

const menuItems = ["Início", "Projetos", "Experiências"];

const HomePage = () => {
  return (
    <Container>
      <Menu items={menuItems} />
      <Banner />
      <About technologies={mock_thechnologie.thecnologies} />
      <Projects
        title=" Projetos Participativos"
        projects={mock_projects.participative}
      />
      <Projects title="Projetos Pessoais" projects={mock_projects.folks} />
      <Projects title="Experiências" projects={mock_projects.folks} />
    </Container>
  );
};

export default HomePage;
