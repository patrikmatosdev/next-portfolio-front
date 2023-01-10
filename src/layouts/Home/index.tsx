import React, { useContext } from "react";
import About from "../../sections/About";
import Banner from "../../components/Banner";
import { Container } from "./styles";
import { HomeContext } from "../../contexts/ContextProvider";
import Footer from "../../sections/Footer";
import Portfolio from "../../sections/Portfolio";
import Companys from "../../sections/Companys";
import { Thechnologie } from "../../sections/About/types";
import { Response } from "../../../pages/api/info";

interface HomeProps {
  isLoading?: boolean;
}

const HomePage = ({ isLoading }: HomeProps) => {
  const ctx: Response = useContext(HomeContext);

  return (
    <Container>
      <Banner isLoading={isLoading} />
      {!isLoading && (
        <>
          <About
            technologies={ctx?.technologies?.sort(
              (a: Thechnologie, b: Thechnologie) => {
                if (a.percent < b.percent) {
                  return 1;
                }
                if (a.percent > b.percent) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              }
            )}
          />
          <Portfolio projects={ctx.projects} />
          <Companys companys={ctx.experiences} />
          <Footer />
        </>
      )}
    </Container>
  );
};

export default HomePage;
