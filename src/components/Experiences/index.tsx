import Grid from "@mui/material/Grid";
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
            <Grid container style={{ margin: "30px 0px" }}>
              <TabsExperiences experiences={experiences} />
            </Grid>
          </Grid>
        </Grid>
      </PageContainer>
    </Grid>
  );
};

export default Experiences;
