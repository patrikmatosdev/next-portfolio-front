import { Grid } from "@mui/material";
import Image from "next/image";
import { getImage } from "../../utils/utils";
import ProjectsBar from "../Cards/Projects";
import PageContainer from "../PageContainer";
import { Highlight, Row } from "./styles";
import { ProjectsProps } from "./types";

const Projects = ({ projects, title, background }: ProjectsProps) => {
  console.log("projects", projects);

  return (
    <Grid style={{ background: background }}>
      <PageContainer>
        <Grid
          container
          direction={"column"}
          justifyContent="space-around"
          style={{ minHeight: "90vh", alignItems: "center" }}
        >
          <Row item>
            <h2>{title}</h2>
          </Row>
          <Row item>
            <Grid container>
              {projects && <ProjectsBar projects={projects} />}
            </Grid>
          </Row>
        </Grid>
      </PageContainer>
    </Grid>
  );
};

export default Projects;
