import { TimelineContent } from "@mui/lab";
import { styled } from "@mui/material";

const Content = styled(TimelineContent)(() => {
  return {};
});

const Dates = styled("strong")(() => {
  return {
    fontSize: "12pt",
  };
});

const Span = styled("span")(() => {
  return {
    fontSize: "11pt",
  };
});

export { Content, Dates, Span};
