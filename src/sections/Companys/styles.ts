import { TimelineContent } from "@mui/lab";
import { styled } from "@mui/material";

const Content = styled(TimelineContent)(() => {
  return {};
});

const Dates = styled("strong")(() => {
  return {
    fontSize: "13pt",
    textTransform: "capitalize",
    color: "rgba(28,1,19,1)"
  };
});

const Span = styled("span")(() => {
  return {
    fontSize: "10pt",
    textTransform: "capitalize",
    color: "rgba(28,1,19,1)"
  };
});

const Text = styled("p")(() => {
  return {
    fontSize: "10pt",
    color: "rgba(28,1,19,1)"
  };
});


export { Content, Dates, Span, Text};
