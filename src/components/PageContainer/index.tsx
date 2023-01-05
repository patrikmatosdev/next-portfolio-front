import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";

interface PageProps {
  children?: React.ReactNode;
}

const Container = styled(Grid)(() => {
  return {
    width: 1300,
    maxWidth: 1300,
    margin: "auto",
    height: "100% !important",
    background: "transpartent",
    padding: 30,


    "@media (max-width: 1299px)": {
      maxWidth: "100%",
      width: "100%",
      padding: 15,
    }

  };
});

const PageContainer = ({ children }: PageProps) => {
  return (
    <Container xl={12} sm={12} lg={12} xs={12} md={12}>
      {children}
    </Container>
  );
};

export default PageContainer;
