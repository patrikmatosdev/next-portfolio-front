import About from "../../components/About";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import { Container } from "./styles";
import mock_thechnologie from "../../../mocks/technologies.json";

const menuItems = ["Inicio", "Projetos", "Experiências", "Contato"];

const HomePage = () => {
  return (
    <Container>
      <Menu items={menuItems} />
      <Banner />
      <About technologies={mock_thechnologie.thecnologies} />
    </Container>
  );
};

export default HomePage;
