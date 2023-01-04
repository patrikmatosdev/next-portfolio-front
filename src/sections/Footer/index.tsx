import { Grid, IconButton } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import { Section } from "./styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Section style={{ background: "rgba(28,1,19,1)" }}>
      <PageContainer>
        <div>
          <Title label="Contato" color="#fff" />
          <Grid container justifyContent="center">
            <IconButton style={{ margin: 15 }}>
              <LinkedInIcon style={{ fontSize: "38px" }} htmlColor="#fff" />
            </IconButton>
            <IconButton style={{ margin: 15 }}>
              <AlternateEmailIcon style={{ fontSize: "38px" }} htmlColor="#fff" />
            </IconButton>
            <IconButton style={{ margin: 15 }}>
              <WhatsAppIcon style={{ fontSize: "38px" }} htmlColor="#fff" />
            </IconButton>
          </Grid>
        </div>
      </PageContainer>
    </Section>
  );
};

export default Footer;
