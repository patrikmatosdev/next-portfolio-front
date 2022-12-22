import { Grid } from "@mui/material";
import Image from "next/image";
import { getImage } from "../../utils/utils";
import ProjectsBar from "../Cards/Projects";
import PageContainer from "../PageContainer";
import { Highlight, Row } from "./styles";
import { ProjectsProps } from "./types";

const Projects = ({ projects, title }: ProjectsProps) => {
  console.log("projects", projects);

  return (
    <Grid>
      <PageContainer>
        <Grid container direction={"column"}>
          <Row item>
            <h2>{`Projetos ${title}`}</h2>
          </Row>
          <Row>
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
