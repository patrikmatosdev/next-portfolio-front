import { Grid } from "@mui/material";
import Image from "next/image";
import { getImage } from "../../utils/utils";
import PageContainer from "../PageContainer";
import { Highlight, Row } from "./styles";
import { ProjectsProps } from "./types";

const Projects = ({ projects }: ProjectsProps) => {
  const getProjectWithCode = (code: string) => {
    return projects?.filter((p) => p.code.toLocaleLowerCase() === code);
  };

  const iupp = getProjectWithCode("iupp")?.pop();
  const multipartners = getProjectWithCode("multiparceiros")?.pop();

  console.log("==", multipartners);

  return (
    <Grid>
      <PageContainer>
        <Grid container direction={"column"}>
          <Row item>
            <h1>Projetos Participativos</h1>
          </Row>
          <Row>
            <Grid container>
              <Highlight>
                {iupp?.company && (
                  <div
                    style={{
                      background: "red",
                      width: "100%",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={getImage(iupp.company.toLocaleLowerCase())}
                      alt={iupp.code}
                      fill
                    />
                  </div>
                )}

                {multipartners && (
                  <div
                    style={{
                      background: "red",
                      width: "100%",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={getImage(multipartners.company.toLocaleLowerCase())}
                      alt={multipartners.code}
                      fill
                    />
                  </div>
                )}
              </Highlight>
            </Grid>
          </Row>
        </Grid>
      </PageContainer>
    </Grid>
  );
};

export default Projects;
