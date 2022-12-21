import About from "../../components/About";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import { Container } from "./styles";

const menuItems = ["Inicio", "Projetos", "Experiências", "Contato"];

const HomePage = () => {
  return (
    <Container>
      <Menu items={menuItems} />
      <Banner />
      <About />
    </Container>
  );
};

export default HomePage;
