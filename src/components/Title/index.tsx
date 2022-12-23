import styled from "@emotion/styled";

interface TitleProps {
  label: string;
}

const Label = styled("h2")(() => {
  return {
    fontSize: 28,
    margin: 30,
    fontWeight: 700,
    color: "#1c0113",
  };
});

const Title = ({ label }: TitleProps) => {
  return <Label>{label}</Label>;
};

export default Title;
