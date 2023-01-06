import { styled } from "@mui/material";
import Banner from "../../components/Banner";

interface PageLoading {
  isLoading?: boolean;
}

const Container = styled("div")(() => {
  return {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
  };
});

const PageLoading = ({ isLoading }: PageLoading) => {
  return (
    <Container>
      <Banner isLoading={isLoading} />
    </Container>
  );
};

export default PageLoading;
