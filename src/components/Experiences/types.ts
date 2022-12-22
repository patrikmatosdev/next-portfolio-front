export type DatesType = {
  start: string;
  end: string;
};

export type LocationType = {
  city: string;
  state: string;
  country: string;
};

export type ExperienceType = {
  code: string;
  title: string;
  level: string;
  project: string;
  dates: DatesType;
  location: LocationType;
};

export interface ExperiencesProps {
  experiences: Array<ExperienceType>;
}
