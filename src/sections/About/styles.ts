import styled from "@emotion/styled";
import { Grid, Slider } from "@mui/material";
import Image from "next/image";
import { BarProp } from "./types";

const Section = styled("section")(() => {
  return {
    background: "#fff",
  };
});

const Container = styled(Grid)(() => {
  return {
    position: "relative",
  };
});

const ImageCol = styled(Grid)(() => {
  return {
    zIndex: 99,
  };
});

const Subtitle = styled("strong")(() => {
  return {
    fontSize: "15pt",
    color: "#1c0113",
  };
});

const Text = styled("p")(() => {
  return {
    margin: "20px 0px",
    fontSize: "12pt",
    textAlign: "justify",
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

const Graphic = styled("div")(() => {
  return {
    width: "100%",
    height: 28,
    position: "relative",
    background: "#e3c262",
    marginBottom: 15,
    display: "flex",
  };
});

const TextContainer = styled("div")(() => {
  return {
    width: 200,
    background: "#2b1724",
    opacity: 6,
    paddingLeft: 10,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 99,
  };
});

const Label = styled("span")(() => {
  return {
    textTransform: "capitalize",
    color: "#fff",
    fontSize: "12pt",
  };
});

const Bar = styled("div")(({ percent }: BarProp) => {
  return {
    width: `calc(${percent}%)`,
    background: "#1c0113",
    textAlign: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
  };
});

const PercentContainer = styled("div")(() => {
  return {
    width: "10%",
    fontWeight: "500",
    textAlign: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
  };
});

export {
  Container,
  Section,
  ImageCol,
  Subtitle,
  Text,
  BannerImage,
  ImageContainer,
  Graphic,
  TextContainer,
  Label,
  Bar,
  PercentContainer,
};
