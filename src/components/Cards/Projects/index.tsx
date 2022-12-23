import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { getImage } from "../../../utils/utils";
import { ProjectsProps } from "../../../sections/Projects/types";
import { Container } from "./styles";
import { ProjectsBarProps } from "./types";
import { Alert } from "@mui/material";
import Image from "next/image";

export default function ProjectsBar({
  projects,
  onClickButton,
}: ProjectsBarProps) {
  return (
    <Container cols={3}>
      {projects?.map((item, idx) => (
        <ImageListItem
          style={{
            width: 330,
            height: 452,
            margin: 10,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          }}
          key={`${idx}`}
        >
          <img
            src={item.img}
            alt={item.code}
            style={{ width: "100", height: "100%" }}
          />
          <ImageListItemBar
            title={item.code}
            subtitle={item.company}
            actionIcon={
              <IconButton
                onClick={() => onClickButton?.(item?.index)}
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info ${item.code}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </Container>
  );
}
