import { Button, Grid } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import { useState } from "react";
import ProjectsBar from "../../components/ProjectsBar";
import { PortfolioProps } from "./types";
import { Section } from "./styles";

const Portfolio = ({ projects }: PortfolioProps) => {
  const [views, setViews] = useState(8);

  return (
    <Section>
      <PageContainer>
        <Title label="Portfólio" color="#fff" />
        <ProjectsBar experiences={projects?.slice(0, views)} />
        <Grid marginTop={15} container justifyContent="center">
          {views !== projects?.length && (
            <Button
              style={{
                fontSize: "11pt",
                fontFamily: "Open Sans",
                textTransform: "capitalize",
                color: "#ffff",
                borderColor: "#fff",
                width: 200,
              }}
              variant="outlined"
              onClick={() => setViews(views + 4)}
            >
              Buscar mais
            </Button>
          )}
        </Grid>
      </PageContainer>
    </Section>
  );
};

export default Portfolio;
