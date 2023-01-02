import React from "react";
import { Grid } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { ExperiencesProps } from "./types";
import mock from "../../../mocks/experiences.json";
import Title from "../../components/Title";
import { Container, Section } from "./styles";
import CardExperiences from "../../components/Cards/Experiences";
import projects from "../../../mocks/projects.json";

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <Section>
      <PageContainer>
        <Container alignItems="center" justifyContent="center">
          <Grid item xl={12} style={{ textAlign: "center" }}>
            <Title color={"#fff"} label="Portfólio" />
          </Grid>
          <Grid item xl={12}>
            <Grid container justifyContent="space-between">
              <CardExperiences
                experiences={projects.projects?.map((e) => {
                  return {
                    id: e.index,
                    img: e.img,
                    code: e.company,
                  };
                })}
              />
              ;
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
    </Section>
  );
};

export default Experiences;
