import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { getImage } from "../../../utils/utils";
import { ProjectsProps } from "../../Projects/types";
import { Container } from "./styles";

export default function ProjectsBar({ projects }: ProjectsProps) {
  return projects ? (
    <Container>
      {projects?.map((item, idx) => (
        <ImageListItem key={`${idx}`}>
          <img
            src={getImage(item.company.toLocaleLowerCase()).src}
            alt={item.code}
            loading="lazy"
          />
          <ImageListItemBar
            title={`Projeto: ${item.code}`}
            subtitle={`Cliente: ${item.company}`}
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
    </Container>
  ) : (
    <div>
      <span>Não foi possível buscar os dados.</span>
      <span>Por favor, recarregue a página</span>
    </div>
  );
}
