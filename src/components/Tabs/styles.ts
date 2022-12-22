import styled from "@emotion/styled";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Container = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: "100%",
  };
});

const Header = styled(Box)(() => {
  return {
    border: "1px solid #c3c3c3",
  };
});

const CustomTab = styled(Tab)(() => {
  return {
    width: "50%",
    maxWidth: "50%",
  };
});

export { Container, Header, CustomTab };
