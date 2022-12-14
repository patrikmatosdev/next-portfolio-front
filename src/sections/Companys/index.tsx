import * as React from "react";
import { Grid } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import PageContainer from "../../components/PageContainer";
import Title from "../../components/Title";
import { Span, Content, Dates } from "./styles";
import { Experience } from "../../../pages/api/info";

interface CompanyProps {
  companys?: Array<Experience>;
}

export default function Companys({ companys }: CompanyProps) {
  return (
    <section>
      <PageContainer>
        <div>
          <Title label="Experiências" />
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
                    <Dates>
                      {company.dateStart} - {company.dateEnd}
                    </Dates>
                    <Span>{company.code}</Span>
                    <Span>{company.company}</Span>
                    <Span>
                      {company?.location?.city} - {company?.location?.state}
                    </Span>
                  </Content>

                  <Content style={{ marginBottom: 100, textAlign: "justify" }}>
                    <Span>{company?.description}</Span>
                    <Grid container wrap="wrap">
                      <Span>Tecnologias:&nbsp;</Span>

                      {company?.technologies?.length &&
                        company?.technologies?.map((tec, idx) => {
                          return (
                            <>
                              <Span>{tec}</Span>
                              {idx !== company.technologies?.length - 1 && (
                                <Span>&nbsp;-&nbsp;</Span>
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
