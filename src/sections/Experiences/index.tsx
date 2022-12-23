import React from "react";
import { Grid } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { ExperiencesProps } from "./types";
import ProjectsBar from "../../components/Cards/Projects";
import mock from "../../../mocks/experiences.json";
import Title from "../../components/Title";

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <Grid>
      <PageContainer>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "70vh", padding: "30px 0px" }}
          spacing={2}
        >
          <Grid item xl={12} style={{ textAlign: "center" }}>
            <Title label="Experiências" />
          </Grid>
          <Grid item xl={12}>
            <Grid container>
              {experiences && <ProjectsBar projects={experiences} />}
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
    </Grid>
  );
};

export default Experiences;
