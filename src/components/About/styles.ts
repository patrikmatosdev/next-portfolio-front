import styled from "@emotion/styled";
import { Grid } from "@mui/material";

const Container = styled(Grid)(() => {
  return {
    padding: "30px 0px",
    height: "80vh",
  };
});

const Row = styled(Grid)(() => {
  return {
    margin: "30px 0px",
  };
});

export { Container, Row };
