import { Container, Hidden, TextContainer, DonwloadButton } from "./styles";
import Image from "next/image";
import BannerJpg from "../../assets/img/banner.jpg";

const Banner = () => {
  return (
    <Container>
      <Image fill alt={"banner-image"} src={BannerJpg} />
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
          <DonwloadButton onClick={() => window.open("curriculo.pdf")}>
            Baixar currículo
          </DonwloadButton>
        </TextContainer>
      </Hidden>
    </Container>
  );
};

export default Banner;
