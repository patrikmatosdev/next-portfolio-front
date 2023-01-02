import React, { useContext } from "react";
import { Grid, Avatar } from "@mui/material";
import Image from "next/image";
import { getImage } from "../../utils/utils";
import CardTechnologie from "../../components/Cards/Technologie";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import { Container, Row, Section } from "./styles";
import { AboutProps } from "./types";

const About = ({ technologies }: AboutProps) => {
  return (
    <Section>
      <PageContainer>
        <Container>
          <Grid container justifyContent="center">
            <Title label="Sobre" />
          </Grid>

          <Grid container alignItems="center">
            <Grid item xl={6}>
              <Grid container>
                <span style={{ fontSize: "1.4rem" }}>
                  {`Contrary to popular belief, Lorem Ipsum is not simply random text.
                     It has roots in a piece of classical Latin literature from 45 BC,
                     making it over 2000 years old. Richard McClintock, a Latin
                     professor at Hampden-Sydney College in Virginia, looked up one of
                     the more obscure Latin words, consectetur, from a Lorem Ipsum
                     passage, and going through the cites of the word in classical
                     literature, discovered the undoubtable source.
                   `}

                  <h4 style={{ margin: "20px 0px" }}>Tecnologias:</h4>

                  <Grid wrap="wrap" spacing={3} container>
                    {technologies?.map((tech) => {
                      return (
                        <Grid item key={tech.id}>
                          <CardTechnologie>
                            <Image
                              src={getImage(tech.code)}
                              alt={tech.code}
                              width={30}
                              height={30}
                            />
                          </CardTechnologie>
                        </Grid>
                      );
                    })}
                  </Grid>
                </span>
              </Grid>
            </Grid>

            <Grid item xl={6}>
              <Grid container justifyContent="center">
                <div
                  style={{
                    borderRadius: "10%",
                    width: 280,
                    height: 320,
                    padding: 7,
                    border: "6px dashed #1c0113",
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  }}
                >
                  <Avatar
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "10%",
                    }}
                    alt="Patrik Matos Image"
                    src="https://media.licdn.com/dms/image/C4D03AQGAMKCrRB5WMg/profile-displayphoto-shrink_800_800/0/1628013986469?e=1677110400&v=beta&t=MKDJUUCOV6XT9tzyK7T6gaX_C3EFMmH-tqaQjL6ervo"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </PageContainer>
    </Section>
  );
};

export default About;
