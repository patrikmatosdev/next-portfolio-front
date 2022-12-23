import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

const Container = styled(Grid)(() => {
  return {
    width: 50,
    height: 50,
    borderRadius: "100%",
    overflow: "hidden",
    background: "rgba(241, 243, 244, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  };
});

export default Container;
