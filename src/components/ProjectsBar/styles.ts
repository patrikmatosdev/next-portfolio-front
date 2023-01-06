import { Box, ButtonBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Container = styled(Box)(() => {
  return {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "center",
  };
});

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 480,
  width: "33%",

  "@media(max-width: 1200px)": {
    width: "50%",
    height: 380,
  },

  "@media (max-width: 960px)": {
    width: "100%",
  },

  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

const Text = styled(Typography)(({ theme }) => {
  return {
    position: "relative",
    p: 4,
    pt: 2,
    pb: `calc(${theme.spacing(1)} + 6px)`,
  };
});

export { Container, ImageButton, ImageBackdrop, ImageMarked, Image, ImageSrc, Text };
