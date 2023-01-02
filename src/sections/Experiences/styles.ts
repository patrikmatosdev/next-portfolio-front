import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Section = styled("section")(() => {
  return {
    background:
      "linear-gradient(0deg, rgba(28,1,19,1) 0%, rgba(28,1,19,0.9612219887955182) 98%, rgba(255,255,255,1) 100%)",
  };
});

const Container = styled(Grid)(() => {
  return {
    minHeight: "50vh",
    padding: "100px 0px",
  };
});

export { Section, Container };
