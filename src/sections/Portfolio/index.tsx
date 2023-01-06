import { Box, Tabs, Tab } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import { useState } from "react";
import ProjectsBar from "../../components/ProjectsBar";

const Portfolio = ({ projects }) => {
  const [tabContent, setTabContent] = useState(0);

  const personals = projects.filter(
    (p) =>
      p.company.toLowerCase() === "pessoal" && {
        id: p.id,
        img: p.img,
        code: p.company,
      }
  );

  const participatives = projects.filter(
    (p) =>
      p.company.toLowerCase() !== "pessoal" && {
        id: p.id,
        img: p.img,
        code: p.company,
      }
  );

  console.log("tabCon", personals);

  return (
    <section style={{ background: "rgba(28,1,19,1)", paddingBottom: 100 }}>
      <PageContainer>
        <div>
          <Title label="< Portfolio >" color="#fff" />
          <Box sx={{ width: "100%", marginBottom: 3 }}>
            <Box>
              <Tabs value={tabContent} onChange={(_e, n) => setTabContent(n)}>
                <Tab
                  value={1}
                  style={{
                    color: "#f6f6f6",
                    textTransform: "none",
                  }}
                  label="Projetos participativos"
                />
                <Tab
                  value={0}
                  style={{
                    color: "#f6f6f6",
                    textTransform: "none",
                  }}
                  label="Projetos pessoais"
                />
              </Tabs>
            </Box>
          </Box>
          <ProjectsBar
            experiences={tabContent === 0 ? personals : participatives}
          />
        </div>
      </PageContainer>
    </section>
  );
};

export default Portfolio;
