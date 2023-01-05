import * as React from "react";
import { Grid } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";

export default function Companys({ companys }) {
  return (
    <section>
      <PageContainer>
        <div>
          <Title label="< Experiências />" />
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {companys.map((company, key) => {
              return (
                <TimelineItem key={key}>
                  <TimelineSeparator>
                    <TimelineDot style={{ background: "rgba(28,1,19,0.9)" }} />
                    {key !== companys.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent
                    display="flex"
                    flexDirection="column"
                    style={{ paddingBottom: 24 }}
                  >
                    <strong>
                      {company.dateStart} - {company.dateEnd}
                    </strong>
                    <span>{company.code}</span>
                    <span>{company.company}</span>
                    <span>
                      {company.location.city} - {company.location.state}
                    </span>
                  </TimelineContent>
                  <TimelineContent
                    style={{ marginBottom: 100, textAlign: "justify" }}
                  >
                    <p>{company.description}</p>
                    <Grid style={{ marginTop: 10 }} container wrap="wrap">
                      <strong style={{ marginRight: 10 }}>Tecnologias: </strong>
                      {company.technologies.map((tec, idx) => {
                        return (
                          <Grid item key={idx}>
                            <span>{tec}</span>
                            {idx !== company.technologies.length - 1 && (
                              <span style={{ marginRight: 10 }}>-</span>
                            )}
                          </Grid>
                        );
                      })}
                    </Grid>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </PageContainer>
    </section>
  );
}
