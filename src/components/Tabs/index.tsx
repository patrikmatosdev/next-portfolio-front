import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Panels, TabExperienceProps, TabPanelProps } from "./types";
import { Container, CustomTab, Header } from "./styles";

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Grid container>{children}</Grid>
        </Box>
      )}
    </div>
  );
}

export default function TabsExperiences({ experiences }: TabExperienceProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Header>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <CustomTab label="Desenvolvimento" />
          <CustomTab label="Infraestrutura" />
        </Tabs>
      </Header>

      <TabPanel value={value} index={0}>
        {experiences?.map((panel, idx) => {
          return (
            panel.code === "DEV" && <div key={idx}>{JSON.stringify(panel)}</div>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {experiences?.map((panel, idx) => {
          return (
            panel.code === "INFRA" && (
              <div key={idx}>{JSON.stringify(panel)}</div>
            )
          );
        })}
      </TabPanel>
    </Container>
  );
}
