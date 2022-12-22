import Grid from "@mui/material/Grid";
import Card from "../Cards/Card";
import PageContainer from "../PageContainer";
import TabsExperiences from "../Tabs";
import { TabExperienceProps } from "../Tabs/types";

const Experiences = ({ experiences }: TabExperienceProps) => {
  return (
    <Grid>
      <PageContainer>
        <Grid container direction={"column"}>
          <Grid>
            <h2>Experiências</h2>
          </Grid>
          <Grid>
            <Grid container spacing={3} style={{ margin: "30px 0px" }}>
              {experiences?.map((e, idx) => {
                return (
                  <Grid item key={idx}>
                    <Card />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
    </Grid>
  );
};

export default Experiences;
