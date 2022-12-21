import Menu from "../../components/Menu";
import { Container } from "./styles";

const menuItems = ["Inicio", "Projetos", "Experiências", "Contato"];

const HomePage = () => {
  return (
    <Container>
      <Menu items={menuItems} />
    </Container>
  );
};

export default HomePage;
