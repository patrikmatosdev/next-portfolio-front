import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Section = styled("section")(() => {
  return {
    background: "#fff",
  };
});

const Container = styled(Grid)(() => {
  return {
    height: "100vh",
    maxHeight: "100vh",
  };
});

const Row = styled(Grid)(() => {
  return {};
});

export { Section, Container, Row };
