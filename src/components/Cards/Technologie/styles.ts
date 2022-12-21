import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

const Container = styled(Grid)(() => {
  return {
    width: 80,
    height: 80,
    borderRadius: "100%",
    overflow: "hidden",
    background: "rgba(241, 243, 244, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

export default Container;
