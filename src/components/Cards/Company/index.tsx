import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OpenInBrowserOutlinedIcon from "@mui/icons-material/OpenInBrowserOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import Grid from "@mui/material/Grid";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardCompany({
  img,
  company,
  subheader,
  technologies,
}: any) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={3} sx={{ maxWidth: 345, width: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="redirecionar">
            <OpenInBrowserOutlinedIcon />
          </IconButton>
        }
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], textTransform: "uppercase" }}
            aria-label="recipe"
          >
            {`${company[0] + company[1]}`}
          </Avatar>
        }
        title={company}
        subheader={subheader}
      />
      <CardMedia component="img" height="430" image={img} alt="Paella dish" />

      <CardActions disableSpacing>
        <strong>Gostaria de saber mais?</strong>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
          <Typography variant="h6" paragraph>
            <strong>Competências</strong>
          </Typography>

          {technologies?.map((tec, idx) => {
            return (
              <Grid container height={30} alignItems="center" key={idx}>
                <ClassOutlinedIcon />
                <span style={{ lineHeight: "21px" }}>{tec}</span>
              </Grid>
            );
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}
