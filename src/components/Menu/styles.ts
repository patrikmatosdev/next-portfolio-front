import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

const Container = styled("div")(() => {
  return {
    background: "#1c0113",
    color:"white"
  };
});

const ContainerMenu = styled(Grid)(() => {
  return {
    height: 70,
  };
});

const Item = styled("div")(() => {
  return {
    margin: "0px 20px",
  };
});

const Link = styled("a")(() => {
    return {
        cursor: 'pointer',
        textDecoration: "none"
    }
})

export { Container, ContainerMenu, Item, Link };
