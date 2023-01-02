import React, { useState, useEffect } from "react";
import { Grid, Button, ZIndex, Card } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { Row } from "./styles";
import { Project, ProjectsProps } from "./types";
import AlertDialogSlide from "../../components/Dialog";
import Title from "../../components/Title";
import CardCompany from "../../components/Cards/Company";

const Projects = ({ projects }: ProjectsProps) => {
  const [cards, setCards] = useState<Array<Project>>([]);
  const [modalContent, setModalContent] = useState<Project | null>();
  const [controller, setController] = useState({
    open: false,
    selected: 0,
    length: 3,
    more: false,
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

  useEffect(() => {
    if (projects) setCards(projects);
  }, [projects]);

  return (
    <Grid style={{ background: "#f6f6f6" }}>
      <PageContainer>
        <Grid
          container
          direction={"column"}
          justifyContent="space-around"
          style={{ minHeight: "100vh" }}
        >
          <Row item style={{ textAlign: "center" }}>
            <Title label="Experiências" />
          </Row>
          <Row item>
            <Grid container justifyContent="center">
              {cards &&
                cards.map((card, key) => {
                  console.log("card", card);
                  return (
                    <Grid style={{ margin: 10 }} key={key}>
                      <CardCompany
                        img={card.img}
                        company={card.code}
                        subheader={card.company}
                        technologies={card.technologies}
                      />
                    </Grid>
                  );
                })}
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
