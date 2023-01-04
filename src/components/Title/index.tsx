import styled from "@emotion/styled";
import Divider from "@mui/material/Divider";

interface TitleProps {
  label: string;
  color?: string;
}

const Container = styled("div")(() => {
  return {
    padding: "90px 0px 130px 0px",
    width: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
});

const Label = styled("h2")(({ color }) => {
  return {
    fontSize: "30pt",
    fontWeight: "lighter",
    color: color || "#1c0113",
  };
});

const Bottom = styled(Divider)(({ color }) => {
  return {
    background: color || "#1c0113",
    height: 2,
    width: 70,
  };
});

const Title = ({ label, color }: TitleProps) => {
  return (
    <Container>
      <Label color={color}>{label}</Label>
      <Bottom color={color} />
    </Container>
  );
};

export default Title;
