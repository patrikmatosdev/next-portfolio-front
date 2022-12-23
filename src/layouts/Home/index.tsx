import React, { useContext } from "react";
import About from "../../sections/About";
import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import { Container } from "./styles";
import Projects from "../../sections/Projects";
import Experiences from "../../sections/Experiences";
import { Project } from "../../sections/Projects/types";
import { Thechnologie } from "../../sections/About/types";
import { HomeContext } from "../../contexts/ContextProvider";

const HomePage = () => {
  const ctx = useContext(HomeContext);

  const { technologies, projects, experiences } = JSON.parse(ctx);

  return (
    <Container>
      <Menu items={["Início", "Porfólio", "Experiências"]} />
      <Banner />
      <About technologies={technologies} />
      <Projects projects={projects} />
      <Experiences experiences={experiences} />
    </Container>
  );
};

export default HomePage;
