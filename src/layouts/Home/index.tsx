import React, { useContext } from "react";
import About from "../../sections/About";
import Banner from "../../components/Banner";
import { Container } from "./styles";

import { HomeContext } from "../../contexts/ContextProvider";
import Footer from "../../sections/Footer";
import Portfolio from "../../sections/Portfolio";
import Companys from "../../sections/Companys";
import Courses from "../../sections/Courses";
import { Thechnologie } from "../../sections/About/types";

const HomePage = () => {
  const ctx = useContext(HomeContext);

  const { technologies, projects, experiences } = JSON.parse(ctx as string);

  return (
    <Container>
      <Banner />
      <About
        technologies={technologies?.sort((a: Thechnologie, b: Thechnologie) => {
          if (a.percent < b.percent) {
            return 1;
          }
          if (a.percent > b.percent) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })}
      />
      <Portfolio projects={projects} />
      <Companys companys={experiences} />
      <Footer />
    </Container>
  );
};

export default HomePage;
