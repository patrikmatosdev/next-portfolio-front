import { TimelineContent } from "@mui/lab";
import { styled } from "@mui/material";

const Content = styled(TimelineContent)(() => {
  return {};
});

const Dates = styled("strong")(() => {
  return {
    fontSize: "14pt",
  };
});

const Span = styled("span")(() => {
  return {
    fontSize: "12pt",
  };
});

export { Content, Dates, Span};
