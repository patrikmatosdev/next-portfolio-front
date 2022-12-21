import About from "../../components/About";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import { Container } from "./styles";
import mock_thechnologie from "../../../mocks/technologies.json";
import mock_projects from "../../../mocks/projects.json";
import Projects from "../../components/Projects";

const menuItems = ["Inicio", "Projetos", "Experiências", "Contato"];

const HomePage = () => {
  return (
    <Container>
      <Menu items={menuItems} />
      <Banner />
      <About technologies={mock_thechnologie.thecnologies} />
      <Projects projects={mock_projects.projects} />
    </Container>
  );
};

export default HomePage;
