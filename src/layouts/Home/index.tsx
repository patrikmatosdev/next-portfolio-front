import About from "../../components/About";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import { Container } from "./styles";
import mock_thechnologie from "../../../mocks/technologies.json";
import mock_projects from "../../../mocks/projects.json";
import mock_experiences from "../../../mocks/experiences.json";
import Projects from "../../components/Projects";
import Experiences from "../../components/Experiences";

const menuItems = ["Inicio", "Projetos", "Experiências", "Contato"];

const HomePage = () => {
  return (
    <Container>
      <Menu items={menuItems} />
      <Banner />
      <About technologies={mock_thechnologie.thecnologies} />
      <Projects title="Participativos" projects={mock_projects.participative} />
      <Projects title="Pessoais" projects={mock_projects.folks} />
      <Experiences experiences={mock_experiences.experiences} />
    </Container>
  );
};

export default HomePage;
