import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProjectsBar from "../../components/Cards/Projects";
import PageContainer from "../../components/PageContainer";
import { Row } from "./styles";
import { Project, ProjectsProps } from "./types";
import AlertDialogSlide from "../../components/Dialog";
import Title from "../../components/Title";

const Projects = ({ projects }: ProjectsProps) => {
  const [modalContent, setModalContent] = useState<Project | null>();
  const [controller, setController] = useState({
    open: false,
    selected: 0,
  });

  useEffect(() => {
    setModalContent(
      projects?.filter((project) => project.index === controller.selected).pop()
    );
  }, [controller.selected, controller.open, projects]);

  const handleClose = () => {
    setController({
      ...controller,
      open: false,
      selected: 0,
    });
    setModalContent(null);
  };

  console.log("modaContent", modalContent);

  return (
    <Grid style={{ background: "#f3f3f3" }}>
      <PageContainer>
        <Grid
          container
          direction={"column"}
          justifyContent="space-around"
          style={{ minHeight: "90vh" }}
        >
          <Row item style={{ textAlign: "center" }}>
            <Title label="Portfólio" />
          </Row>
          <Row item>
            <Grid container>
              {projects && (
                <ProjectsBar
                  projects={projects}
                  onClickButton={(id) =>
                    setController({
                      open: true,
                      selected: id,
                    })
                  }
                />
              )}
            </Grid>
          </Row>
        </Grid>
        {modalContent && (
          <AlertDialogSlide
            content={modalContent}
            open={controller.open}
            handleClose={() => {
              handleClose();
            }}
          />
        )}
      </PageContainer>
    </Grid>
  );
};

export default Projects;
