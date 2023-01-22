import { Box, Tabs, Tab, Container } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import { useState } from "react";
import ProjectsBar from "../../components/ProjectsBar";
import { PortfolioProps } from "./types";
import { ProjectTab, Section } from "./styles";

const Portfolio = ({ projects }: PortfolioProps) => {
  return (
    <Section>
      <PageContainer>
        <Title label="Portfólio" color="#fff" />
        <ProjectsBar experiences={projects} />
      </PageContainer>
    </Section>
  );
};

export default Portfolio;
