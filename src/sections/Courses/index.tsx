import { Grid } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";

const Courses = () => {
  return (
    <section>
      <PageContainer>
        <div>
          <Title label="Formações" />
          <Grid container>
            <Grid item xl={6}>
              1
            </Grid>
            <Grid item xl={6} style={{padding: "0px 20px"}}>
              {Array.from({ length: 6 }).map((_mp, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      borderRadius: 9,
                      overflow: "hidden",
                      width: "100%",
                      height: 330,
                      border: "1px solid #1c0113",
                      marginBottom: 15,
                    }}
                  >
                    t
                  </div>
                );
              })}
            </Grid>
          </Grid>
        </div>
      </PageContainer>
    </section>
  );
};

export default Courses;
