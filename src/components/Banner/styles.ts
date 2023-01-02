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

export default Container;
