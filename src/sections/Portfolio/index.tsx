import { Box, Tabs, Tab } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import { useState } from "react";
import ProjectsBar from "../../components/ProjectsBar";
import { PortfolioProps } from "./types";
import { ProjectTab, Section } from "./styles";

const Portfolio = ({ projects }: PortfolioProps) => {
  const [tabContent, setTabContent] = useState(0);

  const personals = projects?.filter(
    (p) =>
      p.company.toLowerCase() === "pessoal" && {
        id: p.index,
        img: p.img,
        code: p.company,
      }
  );

  const participatives = projects?.filter(
    (p) =>
      p.company.toLowerCase() !== "pessoal" && {
        id: p.index,
        img: p.img,
        code: p.company,
      }
  );

  console.log("tabCon", projects);

  return (
    <Section>
      <PageContainer>
        <div>
          <Title label="< Portfolio >" color="#fff" />
          <Box sx={{ width: "100%", marginBottom: 3 }}>
            <Box>
              <Tabs
                TabIndicatorProps={{ style: { backgroundColor: "#fff" } }}
                value={tabContent}
                onChange={(_e, n) => setTabContent(n)}
              >
                <ProjectTab value={1} label="Projetos participativos" />
                <ProjectTab value={0} label="Projetos pessoais" />
              </Tabs>
            </Box>
          </Box>
          <ProjectsBar
            experiences={tabContent === 0 ? personals : participatives}
          />
        </div>
      </PageContainer>
    </Section>
  );
};

export default Portfolio;
