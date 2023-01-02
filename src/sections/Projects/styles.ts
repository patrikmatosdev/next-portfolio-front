import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Section = styled("section")(() => {
  return {
    background: "#fff",
  };
});

const Row = styled(Grid)(() => {
  return {};
});

const Highlight = styled("div")(() => {
  return {
    width: "100%",
    height: 375,
    background: "#e3e3e3",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
  };
});

export { Row, Highlight, Section };
