import { Box, styled, Tab } from "@mui/material";

const Section = styled("section")(() => {
  return {
    background: "rgba(28,1,19,1)",
    paddingBottom: 100,
  };
});

const Container = styled(Box)(() => {
  return {
    width: "100%",
    marginBottom: 3,
    background: "red",
  };
});

const ProjectTab = styled(Tab)(() => {
  return {
    color: "#f6f6f6",
    textTransform: "none",
  };
});

export { Section, ProjectTab, Container };
