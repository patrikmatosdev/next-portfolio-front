export type Location = {
  city: string;
  state: string;
  country: string;
};

export type Dates = {
  start: string;
  end: string;
};

export interface Experience {
  code: string;
  title: string;
  level: string;
  company: string;
  href: string;
  project: string;
  dates: Dates;
  location: Location;
  technologies: Array<string>;
  text: string;
}

export interface ExperiencesProps {
  experiences?: Array<Experience>;
}
