import PageContainer from "../PageContainer";
import Grid from "@mui/material/Grid";
import Container from "./styles";

const Banner = () => {
  return (
    <Container>
      <PageContainer>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          style={{ height: "100%" }}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <h1 style={{ fontSize: "3vw" }}>Desenvolvedor frontend</h1>
                <h2 style={{ fontSize: "2vw" }}>React & React Native</h2>
              </Grid>

              <Grid item style={{ marginTop: 10 }}>
                <Grid container>
                  <Grid item>
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="banner"
                      width={40}
                      height={40}
                    />
                  </Grid>
                  <Grid item>
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="banner"
                      width={40}
                      height={40}
                      style={{ marginLeft: 10 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <img
              src="https://static.vecteezy.com/system/resources/previews/004/865/921/original/programmer-people-concept-use-laptop-and-programming-code-program-icon-spreading-with-modern-flat-style-free-vector.jpg"
              alt="banner"
              width={300}
              height={200}
            />
          </Grid>
        </Grid>
      </PageContainer>
    </Container>
  );
};

export default Banner;
