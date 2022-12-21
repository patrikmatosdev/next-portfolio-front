import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { getImage } from "../../../utils/utils";
import { ProjectsProps } from "../../Projects/types";

export default function ProjectsBar({ projects }: ProjectsProps) {
  return (
    <ImageList style={{ width: "100%" }}>
      {projects?.map((item, idx) => (
        <ImageListItem key={`${idx}`}>
          <img
            src={getImage(item.company).src}
            alt={item.code}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.code}
            subtitle={item.company}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info ${item.code}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
