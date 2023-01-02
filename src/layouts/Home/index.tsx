import React, { useContext } from "react";
import About from "../../sections/About";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import { Container } from "./styles";
import Projects from "../../sections/Projects";
import Companys from "../../sections/Companys";
import { Project } from "../../sections/Projects/types";
import { Thechnologie } from "../../sections/About/types";
import { HomeContext } from "../../contexts/ContextProvider";
import Footer from "../../sections/Footer";

const HomePage = () => {
  const ctx = useContext(HomeContext);

  const { technologies, projects, experiences } = JSON.parse(ctx as string);

  return (
    <Container>
      {/* <Menu items={["Início", "Porfólio", "Experiências"]} /> */}
      <Banner />
      <About technologies={technologies} />
      <Companys experiences={experiences} />
      <Projects projects={experiences} />
      <Footer />
    </Container>
  );
};

export default HomePage;
