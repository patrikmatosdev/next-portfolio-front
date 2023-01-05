import React, { useContext } from "react";
import { Grid, Slider } from "@mui/material";
import Image from "next/image";
import { getImage } from "../../utils/utils";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import { Section, SliderTec } from "./styles";
import { AboutProps } from "./types";
import AboutImage from "../../assets/img/about.svg";
import Stack from "@mui/material/Stack";

const About = ({ technologies }: AboutProps) => {
  return (
    <Section>
      <PageContainer>
        <div>
          <Grid container justifyContent="center">
            <Title label="<Sobre>" />
          </Grid>
          <Grid container style={{ position: "relative" }}>
            <Grid item xl={6} sm={6} lg={6} xs={6} md={6}>
              <Image
                src={AboutImage}
                style={{ width: "calc(100% + 10%)", bottom: 0 }}
                alt="sobre"
              />
            </Grid>
            <Grid
              style={{ padding: "0px", zIndex: 99 }}
              item
              xl={6}
              sm={6}
              lg={6}
              xs={6}
              md={6}
            >
              <strong
                style={{
                  fontSize: "18pt",
                  fontWeight: "lighter",
                }}
              >
                Quem sou eu?
              </strong>
              <p
                style={{
                  margin: "20px 0px",
                  fontSize: "14pt",
                  fontWeight: "lighter",
                  textAlign: "justify",
                }}
              >
                Desenvolvedor Front-end com experiência de 3 anos em React.js,
                Next.js, Redux, JavaScript, TypeScript, Styled Components,
                Material UI e consumo de APIs REST. Apaixonado pelo
                desenvolvimento de componentes reutilizáveis. Também possuo
                experiência em projetos gerenciados por Metodologias Ágeis.
                Formado em técnico em informática para internet.
              </p>
              <Grid container paddingTop={10}>
                {technologies?.map((tec, key) => {
                  return (
                    <div
                      key={key}
                      style={{
                        width: "100%",
                        height: 28,
                        position: "relative",
                        background: "#e3c262",
                        marginBottom: 15,
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          width: 200,
                          background: "#2b1724",
                          opacity: 6,
                          color: "white",
                          paddingLeft: 10,
                          position: "absolute",
                          textTransform: "capitalize",
                          top: 0,
                          bottom: 0,
                          left: 0,
                          zIndex: 99,
                        }}
                      >
                        {tec.code.replace("_", " ").toLocaleLowerCase()}
                      </div>
                      <div
                        style={{
                          width: `calc(${tec.percent}%)`,
                          background: "#1c0113",
                          textAlign: "center",
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                        }}
                      />

                      <div
                        style={{
                          width: "10%",

                          fontWeight: "500",
                          textAlign: "center",
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          right: 0,
                        }}
                      >
                        <span style={{ color: "#fff" }}>
                          {tec.percent}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </PageContainer>
    </Section>
  );
};

export default About;
