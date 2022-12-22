import React from "react";
import { Grid } from "@mui/material";
import PageContainer from "../PageContainer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Chip from "@mui/material/Chip";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const Experiences = ({ experiences }: any) => {
  return (
    <Grid>
      <PageContainer>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          style={{ height: "70vh" }}
          spacing={2}
        >
          <Grid item xl={12} style={{ textAlign: "center" }}>
            <h2>Experiências</h2>
          </Grid>
          <Grid item xl={10}>
            {experiences.map((e, idx) => {
              return (
                <Accordion
                  key={idx}
                  style={{
                    marginBottom: 10,
                    width: "100% !important",
                    minWidth: "100% !important",
                    padding: 0,
                    background: "#740cdc",
                    color: "white",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<AddOutlinedIcon htmlColor="#fff" />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h4>
                      {e.title} @ {e.company}
                    </h4>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{ background: "#241d41", padding: "30px 16px" }}
                  >
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Grid container alignItems="center">
                          <Grid item>
                            <LocationOnOutlinedIcon />
                          </Grid>
                          <Grid item style={{ height: 22 }}>
                            <span>{`${e.location.city}, ${e.location.state} - ${e.location.country}`}</span>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item>
                        <Grid item>
                          <Grid container alignItems="center">
                            <Grid item>
                              <OpenInNewOutlinedIcon />
                            </Grid>
                            <Grid item style={{ height: 26, marginLeft: 8 }}>
                              <a href={e.href}>
                                {e.href.replace("https://www.", " ")}
                              </a>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item>
                        <Grid item>
                          <Grid container alignItems="center">
                            <Grid item>
                              <CalendarMonthOutlinedIcon />
                            </Grid>
                            <Grid item style={{ height: 22 }}>
                              <span>{`${e.dates.start} - ${e.dates.end}`}</span>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid container style={{ marginTop: 18, paddingLeft: 10 }}>
                      <Grid item>
                        <span>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </span>
                      </Grid>
                    </Grid>
                    <Grid container spacing={1} style={{ marginTop: 18 }}>
                      {Array.from({ length: 10 }).map((a, idx) => {
                        return (
                          <Grid item key={idx}>
                            <Chip
                              style={{ background: "#000", color: "#fff" }}
                              label="ReactJS"
                            />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Grid>
        </Grid>
      </PageContainer>
    </Grid>
  );
};

export default Experiences;
