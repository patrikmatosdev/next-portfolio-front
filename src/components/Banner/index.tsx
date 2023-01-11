import { CircularProgress, Grid } from "@mui/material";
import {
  Container,
  Hidden,
  TextContainer,
  DonwloadButton,
  Video,
} from "./styles";

interface BannerProps {
  isLoading?: boolean;
}

const Banner = ({ isLoading = false }: BannerProps) => {
  return (
    <Container>
      <Grid
        container
        position={isLoading ? "fixed" : "absolute"}
        style={{ height: "100%" }}
      >
        <Video src="banner.mp4" loop autoPlay muted />
      </Grid>

      <Hidden container>
        <TextContainer
          direction="column"
          justifyContent="center"
          alignItems="center"
          container
        >
          <span>
            Olá, me chamo <strong>Patrik Matos</strong>.
          </span>
          <span>Sou um desenvolvedor front-end</span>
          {!isLoading ? (
            <DonwloadButton onClick={() => window.open("curriculo.pdf")}>
              Baixar currículo
            </DonwloadButton>
          ) : (
            <CircularProgress style={{ color: "#fff", marginTop: 30 }} />
          )}
        </TextContainer>
      </Hidden>
    </Container>
  );
};

export default Banner;
