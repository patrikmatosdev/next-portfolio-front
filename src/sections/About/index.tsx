import { Grid, Avatar } from "@mui/material";
import Image from "next/image";
import { getImage } from "../../utils/utils";
import CardTechnologie from "../../components/Cards/Technologie";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import { Container, Row } from "./styles";
import { AboutProps } from "./types";

const About = ({ technologies }: AboutProps) => {
  return (
    <Grid style={{ padding: "30px 0px" }}>
      <PageContainer>
        <Grid
          container
          style={{ padding: 30 }}
          alignItems="center"
          justifyContent="center"
        >
          <Title label="Sobre" />
        </Grid>

        <Grid
          style={{ height: "50vh" }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xl={6}>
            <Container
              container
              justifyContent="space-around"
              alignItems={"center"}
              style={{ textAlign: "justify" }}
            >
              <Grid item xl={12}>
                <span style={{ fontSize: 14 }}>
                  {`Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin
                        professor at Hampden-Sydney College in Virginia, looked up one of
                        the more obscure Latin words, consectetur, from a Lorem Ipsum
                        passage, and going through the cites of the word in classical
                        literature, discovered the undoubtable source. Lorem Ipsum comes
                        from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
                        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
                        BC. This book is a treatise on the theory of ethics, very popular
                        during the Renaissance. The first line of Lorem Ipsum, "Lorem
                        ipsum dolor sit amet..", comes from a line in section 1.10.32. The
                        standard chunk of Lorem Ipsum used since the 1500s is reproduced
                        below for those interested. Sections 1.10.32 and 1.10.33 from "de
                        Finibus Bonorum et Malorum" by Cicero are also reproduced in their
                        exact original form, accompanied by English versions from the 1914
                        translation by H. Rackham.`}
                </span>
              </Grid>

              <Grid item xl={12}>
                <h4 style={{ padding: "30px 0px" }}>Habilidades</h4>

                <Grid wrap="wrap" spacing={1} container>
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
              </Grid>
            </Container>
          </Grid>

          <Grid item xl={6}>
            <Grid container alignItems="center" justifyContent="center">
              <div
                style={{
                  borderRadius: "100%",
                  padding: 10,
                  border: "6px dashed #1c0113",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                <Avatar
                  style={{ width: 280, height: 280 }}
                  alt="Patrik Matos Image"
                  src="https://media.licdn.com/dms/image/C4D03AQGAMKCrRB5WMg/profile-displayphoto-shrink_800_800/0/1628013986469?e=1677110400&v=beta&t=MKDJUUCOV6XT9tzyK7T6gaX_C3EFMmH-tqaQjL6ervo"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
    </Grid>
  );
};

export default About;
