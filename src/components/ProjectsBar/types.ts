export type ExperienceType = {
  img: string;
  code: string;
  id: number | string;
};

export interface CardExperienceProps {
  experiences?: Array<ExperienceType>;
  onClickItem?: (id: string | number) => void
}
