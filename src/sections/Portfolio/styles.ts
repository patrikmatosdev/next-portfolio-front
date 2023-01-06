import { styled, Tab } from "@mui/material";

const Section = styled("section")(() => {
  return {
    background: "rgba(28,1,19,1)",
    paddingBottom: 100,
  };
});

const ProjectTab = styled(Tab)(() => {
  return {
    color: "#f6f6f6",
    textTransform: "none",
  };
});

export { Section, ProjectTab };
