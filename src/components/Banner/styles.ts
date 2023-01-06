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
  };
});

const Video = styled("video")(() => {
  return {
    width: "100%",
    height: "100%",
    minWidth: "100%",
    minHeight: "100%",
    objectFit: "fill",
  };
});

export { Container, Video };
