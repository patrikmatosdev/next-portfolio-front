import styled from "@emotion/styled";
import { Grid, Slider } from "@mui/material";

const Section = styled("section")(() => {
  return {
    background: "#fff",
  };
});

const SliderTec = styled("div")(() => {
  return {
    width: "90%",
    height: "100%",
    padding: 0,
    borderRadius: 0,
    background: "rgba(28,1,19,0.9)",
  };
});

export { Section, SliderTec };
