import React, { useContext } from "react";
import About from "../../sections/About";
import Banner from "../../components/Banner";
import { Container } from "./styles";

import { HomeContext } from "../../contexts/ContextProvider";
import Footer from "../../sections/Footer";
import Portfolio from "../../sections/Portfolio";
import Companys from "../../sections/Companys";
import Courses from "../../sections/Courses";

const HomePage = () => {
  const ctx = useContext(HomeContext);

  const { technologies, projects, experiences } = JSON.parse(ctx as string);
  console.log("projects", projects)
  return (
    <Container>
      <Banner />
      <About technologies={technologies} />
      <Portfolio projects={projects} />
      <Companys companys={experiences} />
      <Footer />
    </Container>
  );
};

export default HomePage;
