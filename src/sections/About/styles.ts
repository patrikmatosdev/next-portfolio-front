import styled from "@emotion/styled";
import { Grid, Slider } from "@mui/material";
import Image from "next/image";

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

const ImageContainer = styled(Grid)(() => {
  return {
    "@media (max-width: 1196px)": {
      display: "none",
    },
  };
});

const BannerImage = styled(Image)(() => {
  return {
    width: "calc(100% + 10%)",
    bottom: 0,
  };
});

export { Section, SliderTec, BannerImage, ImageContainer };
