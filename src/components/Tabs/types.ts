export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export type Dates = {
  start: string;
  end: string;
};

export type Location = {
  city: string;
  state: string;
  country: string;
};

export type Experience = {
  code: string;
  title: string;
  level: string | number;
  project: string;
  dates: Dates;
  location: Location;
};

export type Panels = {
  dev?: Array<Experience>;
  infra?: Array<Experience>;
};

export interface TabExperienceProps {
  experiences?: Array<Experience>;
}
