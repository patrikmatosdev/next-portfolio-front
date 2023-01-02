import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Section = styled("section")(() => {
  return {
    background: "rgba(28,1,19,1)",
  };
});

const Container = styled(Grid)(() => {
  return {
    minHeight: "50vh",
    padding: "100px 0px",
  };
});

export { Section, Container };
