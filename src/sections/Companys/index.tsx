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
import { Content } from "./styles";
import { Experience, Location } from "../../../pages/api/info";

interface Company {
  index: string;
  code: string;
  company: string;
  href: string;
  location: Location;
  description: string;
  dateStart: string;
  dateEnd: string;
  technologies: Array<string>;
}

interface CompanyProps {
  companys?: Array<Company>;
}

export default function Companys({ companys }: CompanyProps) {
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
            {companys?.map((company, key) => {
              return (
                <TimelineItem key={key}>
                  <TimelineSeparator>
                    <TimelineDot style={{ background: "rgba(28,1,19,0.9)" }} />
                    {key !== companys?.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <Content display="flex" flexDirection="column">
                    <strong style={{ fontSize: "12pt" }}>
                      {company.dateStart} - {company.dateEnd}
                    </strong>
                    <span style={{ fontSize: "11pt", fontWeight: "lighter" }}>
                      {company.code}
                    </span>
                    <span style={{ fontSize: "11pt", fontWeight: "lighter" }}>
                      {company.company}
                    </span>
                    <span style={{ fontSize: "11pt", fontWeight: "lighter" }}>
                      {company?.location?.city} - {company?.location?.state}
                    </span>
                  </Content>

                  <Content style={{ marginBottom: 100, textAlign: "justify" }}>
                    <span style={{ fontSize: "12pt", fontWeight: "lighter" }}>
                      {company?.description}
                    </span>
                    <Grid container wrap="wrap">
                      <span
                        style={{
                          fontSize: "12pt",
                          fontWeight: "lighter",
                          color: "#000",
                        }}
                      >
                        Tecnologias:
                      </span>

                      {company?.technologies?.map((tec, idx) => {
                        return (
                          <>
                            <span
                              style={{
                                fontSize: "12pt",
                                fontWeight: "lighter",
                              }}
                            >
                              {tec}
                            </span>
                            {idx !== company?.technologies?.length - 1 && (
                              <span
                                style={{ margin: "0px 2px", fontSize: "12pt" }}
                              >
                                -
                              </span>
                            )}
                          </>
                        );
                      })}
                    </Grid>
                  </Content>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </PageContainer>
    </section>
  );
}
