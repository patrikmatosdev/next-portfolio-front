import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Container,
  Image,
  ImageBackdrop,
  ImageButton,
  ImageMarked,
  ImageSrc,
} from "./styles";
import { CardExperienceProps } from "./types";

export default function ProjectsBar({
  experiences,
  onClickItem,
}: CardExperienceProps) {
  return (
    <Container>
      {experiences?.map((experience) => (
        <ImageButton
          disabled={experience.disabled}
          onClick={() => window.open(experience?.href)}
          focusRipple
          key={experience.code}
        >
          <ImageSrc style={{ backgroundImage: `url(${experience.img})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image aria-label={`image-${experience.code}`}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {experience.code}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Container>
  );
}
