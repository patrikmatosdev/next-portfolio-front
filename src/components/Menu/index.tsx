import PageContainer from "../PageContainer";
import { MenuProps } from "./types";
import Grid from "@mui/material/Grid";
import { Container, ContainerMenu, Item, Link } from "./styles";

const Menu = ({ items }: MenuProps) => {
  return (
    <Container>
      <PageContainer>
        <ContainerMenu
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            <span>{"<Patrik Matos />"}</span>
          </Grid>
          <Grid item>
            <Grid container>
              {items?.map((label, idx) => {
                return (
                  <Item key={idx}>
                    <Link href={`#${label}`}>{label}</Link>
                  </Item>
                );
              })}
            </Grid>
          </Grid>
        </ContainerMenu>
      </PageContainer>
    </Container>
  );
};

export default Menu;
