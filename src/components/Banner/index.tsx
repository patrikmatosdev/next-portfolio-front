import PageContainer from "../PageContainer";
import Grid from "@mui/material/Grid";
import { Container, Video } from "./styles";
import Image from "next/image";
import BannerJpg from "../../assets/img/banner.jpg";

const Banner = () => {
  return (
    <Container>
      {/* <Image fill alt={"banner-image"} src={BannerJpg} /> */}
      <Grid
        container
        position="absolute"
        top={0}
        bottom={0}
        width={"100%"}
        height={"100%"}
      >
        <Video src="banner.mp4" loop autoPlay muted />
      </Grid>
      <Grid container style={{ position: "absolute" }}>
        <Grid
          direction="column"
          justifyContent="center"
          alignItems="center"
          container
          style={{
            height: "100vh",
            background: "rgba(28,1,19,0.7)",
          }}
        >
          <span>
            Olá, me chamo <strong>Patrik Matos</strong>.
          </span>
          <span>Sou um desenvolvedor front-end</span>
          <button
            style={{
              marginTop: 40,
              background: "transparent",
              color: "white",
              border: "3px solid #fff",
              padding: "15px 70px",
              fontSize: "14pt",
              height: "auto",
            }}
          >
            Baixar currículo
          </button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
