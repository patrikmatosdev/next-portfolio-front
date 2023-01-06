import React from "react";
import { Grid } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import {
  BannerImage,
  Bar,
  Label,
  Container,
  Graphic,
  ImageContainer,
  PercentContainer,
  Section,
  Subtitle,
  Text,
  TextContainer,
} from "./styles";
import { AboutProps } from "./types";
import AboutImage from "../../assets/img/about.svg";

const About = ({ technologies }: AboutProps) => {
  return (
    <Section>
      <PageContainer>
        <div>
          <Grid container justifyContent="center">
            <Title label="<Sobre>" />
          </Grid>
          <Container container>
            <ImageContainer item xl={6} sm={12} lg={6} xs={12} md={12}>
              <BannerImage src={AboutImage} alt="sobre" />
            </ImageContainer>
            <Grid item xl={6} sm={12} lg={6} xs={12} md={12}>
              <Subtitle>Quem sou eu?</Subtitle>
              <Text>
                Desenvolvedor Front-end com experiência de 3 anos em React.js,
                Next.js, Redux, JavaScript, TypeScript, Styled Components,
                Material UI e consumo de APIs REST. Apaixonado pelo
                desenvolvimento de componentes reutilizáveis. Também possuo
                experiência em projetos gerenciados por Metodologias Ágeis.
                Formado em técnico em informática para internet.
              </Text>
              <Grid container>
                {technologies?.map((tec, key) => {
                  return (
                    <Graphic key={key}>
                      <TextContainer>
                        <Label>
                          {tec.code.replace("_", " ").toLocaleLowerCase()}
                        </Label>
                      </TextContainer>
                      <Bar percent={tec.percent} />
                      <PercentContainer>
                        <Label>{tec.percent}%</Label>
                      </PercentContainer>
                    </Graphic>
                  );
                })}
              </Grid>
            </Grid>
          </Container>
        </div>
      </PageContainer>
    </Section>
  );
};

export default About;
