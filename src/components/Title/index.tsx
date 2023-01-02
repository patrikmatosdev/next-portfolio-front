import styled from "@emotion/styled";

interface TitleProps {
  label: string;
  color?: string;
}

const Label = styled("h2")(({ color }) => {
  return {
    fontSize: "2rem",
    fontWeight: 700,
    padding: "90px 0px 130px 0px",
    color: color || "#1c0113",
  };
});

const Title = ({ label, color }: TitleProps) => {
  return <Label color={color}>{label}</Label>;
};

export default Title;
