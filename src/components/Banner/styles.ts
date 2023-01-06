import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled("div")(() => {
  return {
    maxWidth: "100%",
    width: "100%",
    height: "100vh",
    position: "relative",

    "& span": {
      fontFamily: "Raleway",
      color: "#fff",
      fontSize: "32pt",
      lineHeight: "36pt",
    },

    "& strong": {
      fontFamily: "Raleway",
      color: "#fff",
      fontSize: "32pt",
      lineHeight: "36pt",
    },

    "@media(max-width: 680px)": {
      "& strong": {
        fontSize: "24pt",
        lineHeight: "20pt",
      },

      "& span": {
        fontSize: "24pt",
        lineHeight: "16pt",
      },
    },

    "@media(max-width: 499px)": {
      "& strong": {
        fontSize: "16pt",
        lineHeight: "20pt",
      },

      "& span": {
        fontSize: "16pt",
        lineHeight: "16pt",
      },
    },
  };
});

const Hidden = styled(Grid)(() => {
  return {
    position: "absolute",
  };
});

const TextContainer = styled(Grid)(() => {
  return {
    height: "100vh",
    background: "rgba(28,1,19,0.9)",
    padding: 15,
  };
});

const DonwloadButton = styled(Button)(() => {
  return {
    textTransform: "capitalize",
    marginTop: 40,
    background: "transparent",
    color: "white",
    border: "3px solid #fff",
    padding: "15px 70px",
    fontSize: "14pt",
    height: "auto",

    "@media(max-width: 680px)": {
      fontSize: "13pt",
      lineHeight: "16pt",
      width: "100%",
      padding: "15px"
    },

    "@media(max-width: 499px)": {
      fontSize: "12pt",
    },
  };
});

export { Container, DonwloadButton, Hidden, TextContainer };
